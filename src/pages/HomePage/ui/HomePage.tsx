import Image from "next/image";
import { HeroSection } from "widgets/HeroSection";

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between gap-5 mt-20">
          <div> 
            <div className="text-[40px] text-[var(--primary-color)] font-bold mb-1.5">
              150 тыс.
            </div>
            <div className="text-[18px] text-[var(--secondary-color)]">
              заданий публикуется
              на сайте каждый месяц
            </div>
          </div>

          <div> 
            <div className="text-[40px] text-[var(--primary-color)] font-bold mb-1.5">
              27 секунд
            </div>
            <div className="text-[18px] text-[var(--secondary-color)]">
              средняя частота
              появления нового задания
            </div>
          </div>

          <div> 
            <div className="text-[40px] text-[var(--primary-color)] font-bold mb-1.5">
              100 тыс. ₽
            </div>
            <div className="text-[18px] text-[var(--secondary-color)]">
              в месяц зарабатывают
              активные исполнители
            </div>
          </div>

          <div> 
            <div className="text-[40px] text-[var(--primary-color)] font-bold mb-1.5">
              16 лет
            </div>
            <div className="text-[18px] text-[var(--secondary-color)]">
              помогаем решать
              ваши задачи
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-[var(--primary-color)] text-[40px] font-bold">
            Что получает фрилансер?
          </div>
          <div className="flex gap-12 mt-16">
            <div className='w-64'> 
              <Image 
                src='icons/money-pic.svg'
                alt="money_icon"
                width={164}
                height={128}
              />
              <div className="text-[26px] text-[var(--primary-color)] mt-2.5">
                Деньги
              </div>
              <div className="text-[18px] text-[var(--secondary-color)]">
                На Workzilla можно стабильно
                зарабатывать, занимаясь тем, что
                нравится
              </div>
            </div>
            <div className='w-64'> 
              <Image 
                src='icons/free-time-pic.svg'
                alt="money_icon"
                width={164}
                height={128}
              />
              <div className="text-[26px] text-[var(--primary-color)] mt-2.5">
                Свободное время
              </div>
              <div className="text-[18px] text-[var(--secondary-color)]">
                Больше не нужно работать от звонка
                до звонка. Вы можете сами
                составлять свой график
              </div>
            </div>
            <div className='w-64'> 
              <Image 
                src='icons/free-choice-pic.svg'
                alt="money_icon"
                width={164}
                height={128}
              />
              <div className="text-[26px] text-[var(--primary-color)] mt-2.5">
                Свободу выбора
              </div>
              <div className="text-[18px] text-[var(--secondary-color)]">
                Только вы решаете, с какими
                заданиями или вакансиями вам
                работать
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 w-full bg-[var(--blue-gradient-to)] p-[60px] rounded-2xl overflow-hidden">
          <div className="text-white text-[40px] font-bold">
            Как вывести деньги?
          </div>
          <div className="text-[var(--secondary-color)] text-[22px]">
            Вывести деньги можно на банковскую<br/>
            карту и кошельки популярных систем
          </div>
          <div className="relative flex gap-4 mt-10">
            <div className="flex items-center gap-5 p-5 bg-white rounded-2xl z-10">
              <Image 
                src='icons/bank-card-pic.svg'
                alt="bank-card"
                width={70}
                height={70}
              />
              <div className="text-[22px] font-bold">
                Банковская<br />
                карта
              </div>
            </div>
            <div className="flex items-center gap-5 p-5 bg-white rounded-2xl z-10">
              <Image 
                src='icons/you-money-pic.svg'
                alt="bank-card"
                width={220}
                height={50}
              />
            </div>
            <Image 
              src='icons/finance-pic.svg'
              alt="finance pic"
              className="absolute -right-16 -bottom-16 rounded-r-2xl"
              width={1200}
              height={378}
            />
          </div>
        </div>

        <div className="mt-20">
          <div className="text-[var(--primary-color)] text-[40px] font-bold">
            Чем мы лучше остальных?
          </div>

          <div className="flex flex-wrap gap-5 mt-16">
            <div className='w-[30%]'> 
              <Image 
                src='icons/money-pic.svg'
                alt="money_icon"
                width={164}
                height={128}
              />
              <div className="text-[26px] text-[var(--primary-color)] mt-2.5">
                Деньги
              </div>
              <div className="text-[18px] text-[var(--secondary-color)]">
                На Workzilla можно стабильно
                зарабатывать, занимаясь тем, что
                нравится
              </div>
            </div>
            <div className='w-[30%]'> 
              <Image 
                src='icons/money-pic.svg'
                alt="money_icon"
                width={164}
                height={128}
              />
              <div className="text-[26px] text-[var(--primary-color)] mt-2.5">
                Деньги
              </div>
              <div className="text-[18px] text-[var(--secondary-color)]">
                На Workzilla можно стабильно
                зарабатывать, занимаясь тем, что
                нравится
              </div>
            </div>
            <div className='w-[30%]'> 
              <Image 
                src='icons/money-pic.svg'
                alt="money_icon"
                width={164}
                height={128}
              />
              <div className="text-[26px] text-[var(--primary-color)] mt-2.5">
                Деньги
              </div>
              <div className="text-[18px] text-[var(--secondary-color)]">
                На Workzilla можно стабильно
                зарабатывать, занимаясь тем, что
                нравится
              </div>
            </div>
            <div className='w-[30%]'> 
              <Image 
                src='icons/money-pic.svg'
                alt="money_icon"
                width={164}
                height={128}
              />
              <div className="text-[26px] text-[var(--primary-color)] mt-2.5">
                Деньги
              </div>
              <div className="text-[18px] text-[var(--secondary-color)]">
                На Workzilla можно стабильно
                зарабатывать, занимаясь тем, что
                нравится
              </div>
            </div>
            <div className='w-[30%]'> 
              <Image 
                src='icons/money-pic.svg'
                alt="money_icon"
                width={164}
                height={128}
              />
              <div className="text-[26px] text-[var(--primary-color)] mt-2.5">
                Деньги
              </div>
              <div className="text-[18px] text-[var(--secondary-color)]">
                На Workzilla можно стабильно
                зарабатывать, занимаясь тем, что
                нравится
              </div>
            </div>
            <div className='w-[30%]'> 
              <Image 
                src='icons/money-pic.svg'
                alt="money_icon"
                width={164}
                height={128}
              />
              <div className="text-[26px] text-[var(--primary-color)] mt-2.5">
                Деньги
              </div>
              <div className="text-[18px] text-[var(--secondary-color)]">
                На Workzilla можно стабильно
                зарабатывать, занимаясь тем, что
                нравится
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};