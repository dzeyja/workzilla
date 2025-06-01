import { Slider } from "shared/ui/Slider/Slider";

const FeedBacks = () => {
  return (
    <div className="py-20 bg-blue-bg mt-20 w-screen">
        <div className="max-w-7xl mx-auto">
            <div className="text-xxl font-bold text-primary">
                Отзывы наших пользователей
            </div>
            <Slider />
        </div>
    </div>
  );
};

export default FeedBacks