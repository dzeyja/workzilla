"use client";

import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { getSelectType } from "../model/selectors/selectTypes";
import { selectTypeActions, selectTypeReducer } from "../model/slice/selectTypeSlice";
import { VacancyTypes } from "../model/types/selecTypes";
import { DynamicModuleLoader } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export const SelectTypes = () => {
    const dispatch = useAppDispatch()
    const type = useSelector(getSelectType)
    
    const tabs = useMemo<TabItem<VacancyTypes>[]>(() => [
        {
          content: 'Все',
          value: VacancyTypes.ALL
        },
        {
          content: 'Разработка',
          value: VacancyTypes.DEVELOPMENT
        },
        {
          content: 'Дизайн',
          value: VacancyTypes.DESIGN
        },
        {
            content: 'Аналитика',
            value: VacancyTypes.ANALYTICS
        },
        {
            content: 'Маркетинг',
            value: VacancyTypes.MARKETING
        },
    ], [])
      
    const onChangeType = useCallback((newTab: TabItem<VacancyTypes>) => {
        dispatch(selectTypeActions.setType(newTab.value))
    }, [dispatch])
    
    return (
        <DynamicModuleLoader reducer={selectTypeReducer} name='selectType'>
            <div className="w-[20%]">
                <div className="text-xl mb-4">
                    Категории
                </div>
                <Tabs<VacancyTypes> 
                    value={type ?? VacancyTypes.ALL} 
                    onTabClick={onChangeType} 
                    tabs={tabs}
                />
            </div>
        </DynamicModuleLoader>
    );
};