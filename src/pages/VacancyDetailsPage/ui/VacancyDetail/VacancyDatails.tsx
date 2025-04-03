"use client";

import { fetchVacancyById, getVacancy, getVacancyIsLoading, vacancyReducer,  } from "entities/Vacancy";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button } from "shared/ui/Button/Button";
import { Loader } from "shared/ui/Loader/Loader";
import { Page } from "shared/ui/Page/Page";
import { Text, TextTheme, TextWeight } from "shared/ui/Text/Text";

const VacancyDatails = () => {
  const params = useParams()
  const dispatch = useAppDispatch()
  const vacancy = useSelector(getVacancy)
  const isLoading = useSelector(getVacancyIsLoading)
  
  const loading = (
    <div className="bg-gray p-8 w-full rounded-lg h-screen flex items-center justicy-center">
      <Loader />
    </div>
  )

  useEffect(() => {
    if(params?.id) {
      dispatch(fetchVacancyById(String(params.id)))
    }
  }, [dispatch])

  const renderVacancyProps = (props: string) => (
    <Text smallText={props} key={props} theme={TextTheme.SECONdARY} className="ml-4"/>
  )

  
  return (
    <DynamicModuleLoader reducer={vacancyReducer} name='vacancy'>
      <Page>
        {isLoading && loading}
        <div className="flex gap-8">
          <div className="bg-gray w-[20%] p-16">
            <Text title="Рекомндаций" />
          </div>
          <div className="bg-gray p-8 w-full rounded-lg">
            <div className="flex justify-between items-center">
              <Text title={vacancy?.title} theme={TextTheme.PRIMARY} />
              <Text title={vacancy?.company} />
            </div>
            <Text text={vacancy?.salary} weight={TextWeight.MEDIUM} className="mt-1"/>
            <div className="flex gap-1 items-center">
              <Image 
                src='/icons/location-icon.png'
                alt='location'
                width={20}
                height={20}
              />
              <Text text={vacancy?.location} />
            </div>
            <Text smallText={vacancy?.description} theme={TextTheme.SECONdARY} />
            <Button className="mt-4">
              Показать контакты
            </Button>
            <Text text="Обязанности сотрудника" weight={TextWeight.MEDIUM} className="mt-4"/>
            {vacancy?.responsibilities.map(renderVacancyProps)}
            <Text text="Требования к кандидату" weight={TextWeight.MEDIUM} className="mt-4"/>
            {vacancy?.requirements.map(renderVacancyProps)}
            <Text text="Условия работы" weight={TextWeight.MEDIUM} className="mt-4"/>
            {vacancy?.conditions.map(renderVacancyProps)}
            <Text className="mt-6" smallText="Сервис workKing.kz не несет ответственности за сотрудничество по данным вакансиям, т.к. они предполагают работу вне сервиса." />
          </div>
        </div>
      </Page>
    </DynamicModuleLoader>
  );
};

export default VacancyDatails