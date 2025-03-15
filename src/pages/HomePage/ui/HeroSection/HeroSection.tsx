'use client'

import { getUserAuthData } from "entities/User";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
 
const HeroSection = () => {

  return (
    <div className="w-screen bg-gradient-to-b from-primary-gradient-from to-primary-gradient-to h-screen">
        <div className="flex justify-between w-7xl mx-auto">
            <div>
                <div className="text-6xl text-white font-bold mt-36">
                    Надежный сервис для<br/>
                    <span className="text-blue-color">
                        удаленной работы
                    </span> 
                </div>
                <div className="mt-7 text-xl text-white">
                    Тысячи заданий каждый день – на WorkKing найдется работа
                    для каждого
                </div>
                <div className="flex flex-col gap-5 w-[407px]">
                    <Button
                        size={ButtonSize.MD}
                        className="mt-16"
                    >
                        Начать зарабатывать
                    </Button>
                    <Button 
                        theme={ButtonTheme.OUTLINED_WHITE}
                        size={ButtonSize.MD}
                    >
                        Я - заказчик
                    </Button>
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

export default HeroSection