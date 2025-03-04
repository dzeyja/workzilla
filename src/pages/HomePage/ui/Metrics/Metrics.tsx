export const Metrics = () => {
  return (
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
  );
};