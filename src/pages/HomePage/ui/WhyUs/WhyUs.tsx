import Image from "next/image";

const whyUsData = [
  {
    icon: "icons/payment-guarantee-pic.svg",
    title: "Гарантия оплаты",
    description:
      "После назначения вас исполнителем, ваш гонорар резервируется на счете. Для получения денег вам только остается выполнить работу",
  },
  {
    icon: "icons/assistance-disputes-pic.svg",
    title: "Помощь в спорах",
    description:
      "В случае разногласий с заказчиком, вы всегда сможете обратиться за помощью в независимый Арбитраж, который поможет найти справедливое решение",
  },
  {
    icon: "icons/tasks-for-every-taste-pic.svg",
    title: "Задания на любой вкус",
    description:
      "Сервис подбирает интересные вам задания, неважно новичок вы или профессиональный фрилансер",
  },
  {
    icon: "icons/artificial-intelligence-pic.svg",
    title: "Искусственный интеллект",
    description:
      "Наша нейронная сеть непредвзято оценивает шансы исполнителей справиться с заданием. Новички могут быть уверены, что получат работу",
  },
  {
    icon: "icons/quick-start-pic.svg",
    title: "Быстрый старт",
    description: "Задания получают даже новички без опыта работы",
  },
  {
    icon: "icons/simple-interface-pic.svg",
    title: "Простой интерфейс",
    description:
      "Все условия для комфортной работы и общения с заказчиком. Ничего лишнего",
  },
];

export const WhyUs = () => {
  return (
    <div className="mt-20">
          <div className="text-primary text-xxl font-bold">
            Чем мы лучше остальных?
          </div>

          <div className="flex flex-wrap justify-between gap-5 mt-16">
            {whyUsData.map((elem, index) => (
              <div key={index} className='w-[30%] p-4 shadow-card rounded-2xl'> 
                <Image 
                  src={elem.icon}
                  alt="money_icon"
                  width={164}
                  height={128}
                  className="mx-auto"
                />
                <div className="text-xl text-primary mt-2.5">
                  Гарантия оплаты
                </div>
                <div className="text-md text-secondary">
                  После назначения вас исполнителем, ваш гонорар
                  резервируется на счете. Для получения денег вам
                  только остается выполнить работу
                </div>
              </div>
            ))}
          </div>
    </div>
  );
};