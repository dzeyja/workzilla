import Image from "next/image";
import { Slider } from "shared/ui/Slider/Slider";

export const FeedBacks = () => {
  return (
    <div className="py-20 bg-[#DCF6FF] mt-20 w-screen">
        <div className="max-w-7xl mx-auto">
            <div className="text-[40px] font-bold text-[var(--primary-color)]">
                Отзывы наших пользователей
            </div>
            <Slider />
        </div>
    </div>
  );
};