import Image from "next/image";

export const WithdrawMoney = () => {
  return (
    <div className="mt-20 w-full bg-primary p-banner rounded-2xl overflow-hidden">
        <div className="text-white text-xxl font-bold">
            Как вывести деньги?
          </div>
          <div className="text-secondary text-xl">
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
              <div className="text-xl font-bold">
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
  );
};