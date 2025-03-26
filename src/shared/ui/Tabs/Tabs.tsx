import { HTMLAttributes, ReactNode, useCallback } from "react";
import { Card, CardTheme } from "../Card/Card";
import { classNames } from "shared/lib/classNames/classNames";

export interface TabItem<T extends string> {
    content: ReactNode
    value: T
}

interface TabsProps<T extends string> extends HTMLAttributes<HTMLElement> {
    tabs: TabItem<T>[]
    value: T
    className?: string
    onTabClick: (tab: TabItem<T>) => void
}

export const Tabs = <T extends string>(props: TabsProps<T>) => {
    const {
        tabs,
        value,
        className,
        onTabClick
    } = props

    const clickHandle = useCallback((tab: TabItem<T>) => {
        return () => onTabClick(tab)
    }, [onTabClick])
  
    return (
        <div className={classNames('flex gap-1 flex-wrap', {}, [className])}>
            {tabs.map((tab) => (
                <div
                    onClick={clickHandle(tab)}
                    className={`p-3 rounded-btn cursor-pointer ${value === tab.value ? 'bg-primary text-white' : 'bg-gray'}`}
                    key={tab.value}
                >
                    {tab.content}
                </div>
            ))}
        </div>
    );
};