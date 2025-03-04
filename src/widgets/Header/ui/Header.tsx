import Image from 'next/image';

export const Header = () => {
  return (
    <header className='fixed w-full'>
        <div className='max-w-7xl mx-auto flex justify-between py-2'>
            <div className="flex items-center gap-2">
                <Image 
                    src='icons/logo.svg'
                    alt='logo'
                    width={42}
                    height={42}
                />
                <div className='text-3xl text-white'>
                    workzilla
                </div>
                </div>
                <div className='flex gap-3 items-center'>
                    Войти
                    <button className='bg-blue-300 py-3 px-5 rounded-xl'>
                        Дать задание
                    </button>
                </div>
        </div>
    </header>
  );
};