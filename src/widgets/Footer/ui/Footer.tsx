import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Footer.module.scss";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={"mt-14 w-full border pt-12 bg-footer-bg text-white"}>
      <div className="max-w-7xl mx-auto flex justify-between gap-12">
        <div className="w-1/4">
          <div className="text-3xl font-semibold mb-3">WorkKing</div>
          <div className="text-gray text-sm">
            Мы создаем удобный сервис для поиска работы и подбора лучших специалистов в разных сферах. Надежность и качество — наш приоритет!
          </div>
        </div>
        <div className="w-1/4">
          <div className="text-xl font-medium mb-3">Навигация</div>
          <div>
            <div className={cls.link}>
              <span className={cls.strelka}>{">"}</span>
              Главная
            </div>
            <div className={cls.link}>
              <span className={cls.strelka}>{">"}</span>
              Вакансии
            </div>
            <div className={cls.link}>
              <span className={cls.strelka}>{">"}</span>
              Компании
            </div>
            <div className={cls.link}>
              <span className={cls.strelka}>{">"}</span>
              Контакты
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="text-lg font-medium mb-3">Документы</div>
          <div>
            <div className={cls.link}>
              <span className={cls.strelka}>{">"}</span>
              Политика конфиденциальности
            </div>
            <div className={cls.link}>
              <span className={cls.strelka}>{">"}</span>
              Пользовательское соглашение
            </div>
            <div className={cls.link}>
              <span className={cls.strelka}>{">"}</span>
              Оферта для работодателей
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="text-lg font-medium mb-3">Контакты</div>
          <div className={cls.link}>
            г. Алматы, ул. Достык, 210, БЦ "Platinum Tower", офис 12
          </div>
          <div className={cls.link}>
            Телефон: <span className="text-gray">+7 (777) 123-45-67</span>
          </div>
          <div className={cls.link}>
            Email: <span className="text-gray">support@workking.kz</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mt-6 mx-auto border-t-2 py-10">
        <div className="text-grey text-sm">
          &copy; 2025 WorkKing | Все права защищены
        </div>
      </div>
    </footer>
  );
};
