import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="w-screen bg-gradient-to-b from-[#FF9A8B] to-[#FF6A88] h-screen">
        <div className="flex justify-between w-7xl mx-auto">
            <div>
                <div className="text-6xl text-white font-bold mt-36">
                    Надежный сервис для<br/>
                    <span className="bg-gradient-to-r from-[var(--green-gradient-from)] to-[var(--green-gradient-to)] bg-clip-text text-transparent">
                        удаленной работы
                    </span> 
                </div>
                <div className="mt-7 text-xl text-white">
                    Тысячи заданий каждый день – на Workzilla найдется работа
                    для каждого
                </div>
                <div className="flex flex-col gap-5 w-[407px]">
                    <button className="bg-gradient-to-r from-[var(--green-gradient-from)] to-[var(--green-gradient-to)] text-[#30333C] py-5 px-20 text-[24px] rounded-xl mt-20">
                        Начать зарабатывать
                    </button>
                    <button className="border py-5 px-20 text-[24px] bg-transparent border-white rounded-xl text-white">
                        Я - заказчик
                    </button>
                </div>
            </div>
            <Image 
                src='icons/intro.svg'
                alt="intro"
                width={484}
                height={536}
                className="mt-16"
            />
        </div>
    </div>
  );
};