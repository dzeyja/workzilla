import Image from "next/image";
import { Banner } from "shared/ui/Banner/Banner";
import { Button } from "shared/ui/Button/Button";

const FindCityBanner = () => {
  return (
    <Banner className="mt-20 relative overflow-hidden">
        <div className="text-xxl font-bold text-white">
            Задания со всего мира
        </div>
        <div className="text-xl text-secondary">
            Найдем задание в конкретном городе!
        </div>
        <Button className="mt-10">
            Найти свой город
        </Button>
        <Image 
            src='icons/map-pic.svg'
            alt="map"
            width={600}
            height={266}
            className="absolute bottom-0 right-0"
        />
    </Banner>
  );
};

export default FindCityBanner