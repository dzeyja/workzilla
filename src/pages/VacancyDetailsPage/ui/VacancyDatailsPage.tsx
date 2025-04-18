"use client"

import { useParams } from "next/navigation";
import { Page } from "shared/ui/Page/Page";
import { VacancyDetails } from 'entities/Vacancy'
import { HStack } from "shared/ui/Stack";
import { Text } from "shared/ui/Text/Text";
import { VacancyRecomdationsList } from "features/vacancyRecomendationsList";


const VacancyDatailsPage = () => {
  const params = useParams()

  if (!params?.id) {
    return <Text title='Вакансия не найдена!'/>
  }

  return (
    <Page>
      <HStack align="start" gap="16" max>
        <VacancyRecomdationsList />
        <VacancyDetails paramsId={String(params?.id)} />
      </HStack>
    </Page>
  );
};

export default VacancyDatailsPage