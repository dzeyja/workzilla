import { ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";

interface BannerProps {
    children: ReactNode
    className?: string
}

export const Banner = (props: BannerProps) => {
    const { children, className } = props
  
    return (
        <div className={classNames('p-banner rounded-banner bg-gradient-to-b from-accent-gradient-from to-accent-gradient-to', {}, [className])}>
            {children}
        </div>
    );
};