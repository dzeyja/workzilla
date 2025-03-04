import Image from "next/image";

export const WhyUs = () => {
  return (
    <div className="mt-20">
          <div className="text-[var(--primary-color)] text-[40px] font-bold">
            Чем мы лучше остальных?
          </div>

          <div className="flex flex-wrap justify-between gap-5 mt-16">
            <div className='w-[30%] p-4 shadow-xl rounded-2xl'> 
              <Image 
                src='icons/payment-guarantee-pic.svg'
                alt="money_icon"
                width={164}
                height={128}
                className="mx-auto"
              />
              <div className="text-[26px] text-[var(--primary-color)] mt-2.5">
                Гарантия оплаты
              </div>
              <div className="text-[18px] text-[var(--secondary-color)]">
                После назначения вас исполнителем, ваш гонорар
                резервируется на счете. Для получения денег вам
                только остается выполнить работу
              </div>
            </div>
            <div className='w-[30%] p-4 shadow-xl rounded-2xl'> 
              <Image 
                src='icons/assistance-disputes-pic.svg'
                alt="money_icon"
                width={164}
                height={128}
                className="mx-auto"
              />
              <div className="text-[26px] text-[var(--primary-color)] mt-2.5">
                Помощь в спорах
              </div>
              <div className="text-[18px] text-[var(--secondary-color)]">
                В случае разногласий с заказчиком, вы всегда
                сможете обратиться за помощью в независимый
                Арбитраж, который поможет найти справедливое
                решение
              </div>
            </div>
            <div className='w-[30%] p-4 shadow-xl rounded-2xl'> 
              <Image 
                src='icons/tasks-for-every-taste-pic.svg'
                alt="money_icon"
                width={164}
                height={128}
                className="mx-auto"
              />
              <div className="text-[26px] text-[var(--primary-color)] mt-2.5">
                Задания на любой вкус
              </div>
              <div className="text-[18px] text-[var(--secondary-color)]">
                Сервис подбирает интересные вам задания,
                неважно новичок вы или профессиональный
                фрилансер
              </div>
            </div>
            <div className='w-[30%] p-4 shadow-xl rounded-2xl'> 
              <Image 
                src='icons/artificial-intelligence-pic.svg'
                alt="money_icon"
                width={164}
                height={128}
                className="mx-auto"
              />
              <div className="text-[26px] text-[var(--primary-color)] mt-2.5">
                Искусственный интеллект
              </div>
              <div className="text-[18px] text-[var(--secondary-color)]">
                Наша нейронная сеть непредвзято оценивает
                шансы исполнителей справиться с заданием.
                Новички могут быть уверены, что получат работу
              </div>
            </div>
            <div className='w-[30%] p-4 shadow-xl rounded-2xl'> 
              <Image 
                src='icons/quick-start-pic.svg'
                alt="money_icon"
                width={164}
                height={128}
                className="mx-auto"
              />
              <div className="text-[26px] text-[var(--primary-color)] mt-2.5">
                Быстрый старт
              </div>
              <div className="text-[18px] text-[var(--secondary-color)]">
                Задания получают даже новички без опыта работы
              </div>
            </div>
            <div className='w-[30%] p-4 shadow-xl rounded-2xl'> 
              <Image 
                src='icons/simple-interface-pic.svg'
                alt="money_icon"
                width={164}
                height={128}
                className="mx-auto"
              />
              <div className="text-[26px] text-[var(--primary-color)] mt-2.5">
                Простой интерфейс
              </div>
              <div className="text-[18px] text-[var(--secondary-color)]">
                Все условия для комфортной работы и общения с
                заказчиком. Ничего лишнего
              </div>
            </div>
          </div>
    </div>
  );
};