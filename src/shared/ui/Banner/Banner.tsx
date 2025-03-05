import { ReactNode } from "react";
import cls from './Banner.module.css'
import { classNames } from "shared/lib/classNames/classNames";

interface BannerProps {
    children: ReactNode
    className?: string
}

export const Banner = (props: BannerProps) => {
    const { children, className } = props
  
    return (
        <div className={classNames(cls.Banner, {}, [className])}>
            {children}
        </div>
    );
};