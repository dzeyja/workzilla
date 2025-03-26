import { VacancyList } from "entities/Vacancy";
import { SelectTypes } from "features/SelectTypes";
import { Page } from "shared/ui/Page/Page";
import { VacanciesPageFilters } from "./VacanciesPageFilters/VacanciesPageFilters";

export const VacanciesPage = () => {
  return (
    <Page>
      <div className="flex gap-5">
        <SelectTypes />
        <div>
          <VacanciesPageFilters />
          <VacancyList />
        </div>
      </div>
    </Page>
  );
};