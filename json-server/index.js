const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Имитация задержки
server.use(async (req, res, next) => {
    await new Promise((res) => setTimeout(res, 800));
    next();
});

// Эндпоинт для логина
server.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
        const { users = [] } = db;

        const userFromBd = users.find(
            (user) => user.username === username && user.password === password,
        );

        if (userFromBd) {
            return res.json(userFromBd);
        }

        return res.status(403).json({ message: 'User not found' });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: e.message });
    }
});

// Эндпоинт для регистрации
server.post('/register', (req, res) => {
    try {
        const { username, password, role } = req.body;
        console.log('📌 Регистрация:', { username, role });

        if (!username || !password || !role) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const dbPath = path.resolve(__dirname, 'db.json');
        const db = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'));
        const { users = [], profile = [] } = db; // Используем "profile" вместо "profiles"

        if (users.some((user) => user.username === username)) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = {
            id: String(users.length + 1),
            username,
            password, // В реальном проекте хешировать!
            role, // executor | customer
        };

        users.push(newUser);

        if (role === 'executor') {
            const newProfile = {
                id: String(profile.length + 1),
                userId: newUser.id,
                first: newUser.username,
                lastname: '',
                age: null,
                city: '',
                avatar: '',
                specialty: '',
                experience: 0,
                portfolio: [],
                bio: '',
                role: newUser.role
            };

            profile.push(newProfile); // Записываем в "profile"
            console.log('✅ Профиль создан:', newProfile);
        }

        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
        console.log('✅ Данные записаны в db.json');

        return res.status(201).json(newUser);
    } catch (e) {
        console.error('❌ Ошибка регистрации:', e);
        return res.status(500).json({ message: e.message });
    }
});

server.get('/profile/:userId', (req, res) => {
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const profile = db.profile.find(p => p.userId === req.params.userId);
    
    if (!profile) {
        return res.status(404).json({ message: 'Profile not found' });
    }
    
    return res.json(profile);
});

server.put('/profile/:userId', (req, res) => {
    try {
        const dbPath = path.resolve(__dirname, 'db.json');
        const db = JSON.parse(fs.readFileSync(dbPath, 'UTF-8'));
        const { profile = [] } = db;
        const { userId } = req.params;
        const updatedData = req.body;

        const profileIndex = profile.findIndex((p) => String(p.userId) === String(userId));

        if (profileIndex === -1) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        // Обновляем профиль
        const updatedProfile = {
            ...profile[profileIndex],
            ...updatedData,
        };

        profile[profileIndex] = updatedProfile;
        db.profile = profile;

        fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
        console.log(`✅ Профиль пользователя ${userId} обновлен`);

        return res.json(updatedProfile);
    } catch (e) {
        console.error('❌ Ошибка при редактировании профиля:', e);
        return res.status(500).json({ message: e.message });
    }
});


// Проверяем авторизацию
server.use((req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).json({ message: 'AUTH ERROR' });
    }
    next();
});

server.use(router);

// Запуск сервера
server.listen(8000, () => {
    console.log('server is running on 8000 port');
});
