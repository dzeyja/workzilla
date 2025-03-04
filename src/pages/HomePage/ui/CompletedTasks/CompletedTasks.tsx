import Image from "next/image";

export const CompletedTasks = () => {
  return (
    <div className="py-20 bg-[#DCF6FF] mt-20 w-screen">
        <div className="max-w-7xl mx-auto">
            <div className="text-[40px] font-bold text-[var(--primary-color)]">
                Выполнено <span>73 307</span> заданий за месяц
            </div>
            <div className="w-[820px] mt-16">
                <div className="w-full p-6 bg-white rounded-xl flex gap-5 items-center">
                    <div>
                        <div className="text-[22px] text-[var(--primary-color)]">
                            Разместить информацию и фото на сайт
                        </div>
                        <div className="text-[16px] text-[var(--secondary-color)]">
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
                        <div className="text-[22px] text-[var(--primary-color)]">
                            Нарисовать иллюстрацию для книги
                        </div>
                        <div className="text-[16px] text-[var(--secondary-color)]">
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
                        <div className="text-[22px] text-[var(--primary-color)]">
                            КОНТРОЛЬНАЯ РАБОТА
                        </div>
                        <div className="text-[16px] text-[var(--secondary-color)]">
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
                <button className="py-4 px-24 bg-[var(--blue-color)] text-[22px] rounded-[var(--btn-radius)] text-white">
                    Начать зарабатывать
                </button>
                <button className="py-4 px-24 bg-transparent border-[var(--blue-color)] border text-[22px] rounded-[var(--btn-radius)] text-[var(--blue-color)]">
                    Начать зарабатывать
                </button>
            </div>
        </div>
    </div>
  );
};