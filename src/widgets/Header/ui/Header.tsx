import Image from 'next/image';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';

export const Header = () => {
  return (
    <header className='fixed w-full z-50'>
        <div className='max-w-7xl mx-auto flex justify-between py-2'>
            <div className="flex items-center gap-2">
                <Image 
                    src='icons/logo.svg'
                    alt='logo'
                    width={42}
                    height={42}
                />
                <div className='text-3xl text-white'>
                    workKing
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                Войти
                <Button 
                    theme={ButtonTheme.OUTLINED}
                    size={ButtonSize.L}
                >
                    Дать задание
                </Button>
            </div>
        </div>
    </header>
  );
};