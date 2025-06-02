"use client"

import Link from 'next/link';
import cls from './Header.module.scss'
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Dropdown, DropItem } from 'shared/ui/Dropdown/Dropdown';
import { usePathname } from 'next/navigation';
import { HStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';
import { useRouter } from 'next/navigation';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const user = useSelector(getUserAuthData)
    const pathname = usePathname()
    const dispatch = useAppDispatch()
    const router = useRouter()
    const isExecutor = user?.role === 'executor'

    console.log(user?.id)

    useEffect(() => {
        if (pathname !== '/') {
            setScrolled(true)
            return
        }

        const handleScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [pathname])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [dispatch])

    const onGiveTask = useCallback(() => {
        if (isExecutor) {
            alert('Вы не можете создать задачу, для этого поменяйте роль на "Заказчик"')
            return router.push('/profile')
        }

        router.push('/my-tasks/create')
    }, [router, isExecutor])

    const profileContent = (
        <div className='flex gap-2'>
            <Image 
                src='/icons/profile-icon.png'
                alt='hello'
                width={24}
                height={24}
            />
            <span>Профиль</span>
        </div>
    )

    const logoutContent = (
        <div className='flex gap-2'>
            <Image 
                src='/icons/logout-icon.png'
                alt='hello'
                width={24}
                height={24}
            />
            <Button theme={ButtonTheme.CLEAR} onClick={onLogout}>Выйти</Button>
        </div>
    )

    const dropdownItems = useMemo<DropItem[]>(() => {
        return [
            {
                content: profileContent,
                link: `/profile/${user?.id}`
            },
            {
                content: logoutContent,
            },
            {
                content: (<Text smallText={`${isExecutor ? 'Мои отклики' : 'Мои вакансии'}`}/>),
                link: `${isExecutor ? '/my-responses' : '/my-vacancies'}`
            },
            {
                content: (<Text smallText='Мои задачи'/>),
                link: `${isExecutor ? '/my-taskresponses' : '/my-tasks'}`
            }
        ]   
    }, [isExecutor])

    const mods: Mods = {
        [cls.scrolled]: scrolled,
        [cls.scrollEmpty]: !scrolled
    }

  return (
    <header className={classNames('fixed w-full h-18 z-50', mods, [])}>
        <HStack justify='between' className='max-w-7xl mx-auto py-2'>
            <div className='flex gap-4 items-center'>
                <Link href='/'>
                    <HStack align='center' gap="8">
                        <Image 
                            src='icons/logo.svg'
                            alt='logo'
                            width={42}
                            height={42}
                        />
                        <div className='text-xl text-white'>
                            workKing
                        </div>
                    </HStack>
                </Link>
                <Link className='text-white hover:underline' href='/vacancies'>
                    Вакансии
                </Link>
                <Link className='text-white hover:underline' href='/tasks'>
                    Задачи
                </Link>
            </div>
            <HStack gap='4' className='text-white'>
                {user?.id ? (
                    <Dropdown items={dropdownItems}>
                        {user.avatar ? (
                            <Avatar 
                                size={50} 
                                borderR='50%' 
                                src={user?.avatar} 
                            />
                        ) : (
                            <Image 
                                src='/icons/profile.png'
                                width={50}
                                height={50}
                                alt='profile'
                            />
                        )}
                    </Dropdown>
                ) : (
                    <Link href='/auth'>
                        Войти
                    </Link>
                ) }
                <Button 
                    theme={ButtonTheme.OUTLINED_WHITE}
                    size={ButtonSize.M}
                    onClick={onGiveTask}
                >
                    Дать задание
                </Button>
            </HStack>
        </HStack>
    </header>
  );
};