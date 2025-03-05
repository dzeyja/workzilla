import Image from "next/image";

export const FreelancerBenefits = () => {
  return (
    <div className="mt-20">
          <div className="text-primary text-xxl font-bold">
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
              <div className="text-xl text-primary mt-2.5">
                Деньги
              </div>
              <div className="text-md text-secondary">
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
              <div className="text-xl text-primary mt-2.5">
                Свободное время
              </div>
              <div className="text-md text-secondary">
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
              <div className="text-xl text-primary mt-2.5">
                Свободу выбора
              </div>
              <div className="text-md text-secondary">
                Только вы решаете, с какими
                заданиями или вакансиями вам
                работать
              </div>
            </div>
          </div>
    </div>
  );
};