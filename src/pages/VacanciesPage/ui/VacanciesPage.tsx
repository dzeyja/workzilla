import { VacancyList } from "entities/Vacancy";
import { Page } from "shared/ui/Page/Page";

export const VacanciesPage = () => {
  return (
    <Page>
      <div className="flex gap-5">
        <div className="w-[500px] bg-primary h-64">
          Категорий
        </div>
        <VacancyList />
      </div>
    </Page>
  );
};