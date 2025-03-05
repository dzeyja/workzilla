'use client'

import cls from './Header.module.scss'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false)

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

    const mods: Mods = {
        [cls.scrolled]: scrolled,
    }

  return (
    <header className={classNames('fixed w-full z-50', mods, [])}>
        <div className='max-w-7xl mx-auto flex justify-between py-2'>
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
            <div className='flex gap-3 items-center text-white'>
                Войти
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