"use client";

import { useCallback, useMemo } from "react";
import { TabItem, Tabs } from "shared/ui/Tabs/Tabs";
import { Text } from "shared/ui/Text/Text";

export interface SelectTypesItem<T extends string> {
    content: string;
    value: T;
}

interface SelectTypesProps<T extends string> {
    title?: string
    className?: string;
    value: T
    items: SelectTypesItem<T>[],
    onChange: (value: T) => void
}

export const SelectTypes = <T extends string>(props: SelectTypesProps<T>) => {
    const {
        title,
        value,
        items,
        onChange
    } = props
      
    const onChangeTab = useCallback((newTab: TabItem<T>) => {
        onChange(newTab.value)
    }, [onChange])
    
    return (
        <div className="w-full">
            <Text title={title} className="mb-2" />
            <Tabs<T> 
                value={value} 
                onTabClick={onChangeTab} 
                tabs={items}
            />
        </div>
    );
};