import Image from "next/image";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";

const CompletedTasks = () => {
  return (
    <div className="py-20 bg-[#DCF6FF] mt-20 w-screen">
        <div className="max-w-7xl mx-auto">
            <div className="text-xxl font-bold text-primary">
                Выполнено <span>73 307</span> заданий за месяц
            </div>
            <div className="w-[820px] mt-16">
                <div className="w-full p-6 bg-white rounded-xl flex gap-5 items-center">
                    <div>
                        <div className="text-[22px] text-primary">
                            Разместить информацию и фото на сайт
                        </div>
                        <div className="text-[16px] text-secondary">
                            Замечательный специалист! Прекрасно знает свое дело. Все во время, дельные советы. Сделал <br/>
                            даже больше, чем я ожидала. Всем рекомендую. И сама еще буду обращаться. ОГРОМНОЕ СПАСИБО
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Image 
                            src='icons/money-icon.svg'
                            alt="money-icon"
                            width={45}
                            height={45}
                        />
                        <div>
                            1000
                        </div>
                    </div>
                </div>
                <div className="mt-5 p-6 bg-white w-full rounded-xl flex gap-5 items-center">
                    <div>
                        <div className="text-xl text-primary">
                            Нарисовать иллюстрацию для книги
                        </div>
                        <div className="text-sm text-secondary">
                            Отлично выполнена работа. Все в срок, хорошая девушка - советую как художницу отличную и как человека.
                        </div> 
                    </div>
                    <div className="flex flex-col gap-1">
                        <Image 
                            src='icons/money-icon.svg'
                            alt="money-icon"
                            width={45}
                            height={45}
                        />
                        <div>
                            540
                        </div>
                    </div>
                </div>
                <div className="mt-5 p-6 bg-white w-full rounded-xl flex gap-5 items-center">
                    <div>
                        <div className="text-xl text-primary">
                            КОНТРОЛЬНАЯ РАБОТА
                        </div>
                        <div className="text-sm text-secondary">
                            Большое спасибо Елене. Работа выполнена на 5 баллов. Рекомендую её как высококлассного исполнителя.
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Image 
                            src='icons/money-icon.svg'
                            alt="money-icon"
                            width={45}
                            height={45}
                        />
                        <div>
                            1500
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16 flex items-center gap-8">
                <Button size={ButtonSize.MD}>
                    Начать зарабатывать
                </Button>
                <Button 
                    size={ButtonSize.MD} 
                    theme={ButtonTheme.OUTLINED}
                >
                    Смотреть все задания
                </Button>
            </div>
        </div>
    </div>
  );
};

export default CompletedTasks