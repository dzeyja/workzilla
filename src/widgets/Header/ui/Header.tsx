'use client'

import Link from 'next/link';
import cls from './Header.module.scss'
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const user = useSelector(getUserAuthData)
    const dispatch = useAppDispatch()

    useEffect(() => {
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
    }, [])

    const onLogout = useCallback(() => {
        dispatch(userActions.logout())
    }, [])

    const mods: Mods = {
        [cls.scrolled]: scrolled,
        [cls.scrollEmpty]: !scrolled
    }

  return (
    <header className={classNames('fixed w-full z-50', mods, [])}>
        <div className='max-w-7xl mx-auto flex justify-between py-2'>
            <Link href='/'>
                <div className="flex items-center gap-2">
                    <Image 
                        src='icons/logo.svg'
                        alt='logo'
                        width={42}
                        height={42}
                    />
                    <div className='text-xl text-white'>
                        workKing
                    </div>
                </div>
            </Link>
            <div className='flex gap-3 items-center text-white'>
                {user ? (
                    <Button 
                        onClick={onLogout}
                        theme={ButtonTheme.OUTLINED_WHITE}
                    >
                        Выйти
                    </Button> 
                ) : (
                    <Link href='/auth'>
                        Войти
                    </Link>
                )}
                <Button 
                    theme={ButtonTheme.OUTLINED_WHITE}
                    size={ButtonSize.M}
                >
                    Дать задание
                </Button>
            </div>
        </div>
    </header>
  );
};