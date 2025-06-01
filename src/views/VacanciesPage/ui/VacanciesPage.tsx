"use client"

import { VacancyList } from "entities/Vacancy";
import { Page } from "shared/ui/Page/Page";
import { HStack } from "shared/ui/Stack";
import { VacanciesPageSearch } from "./VacanciesPageSearch/VacanciesPageSearch";
import { VacanciesPageFilters } from "./VacanciesPageFilters/VacanciesPageFilters";

export const VacanciesPage = () => {
  return (
    <Page>
      <HStack align="start" gap="8" max>
        <VacanciesPageFilters />
        <div>
          <VacanciesPageSearch />
          <VacancyList />
        </div>
      </HStack>
    </Page>
  );
};