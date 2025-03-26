import cls from './Card.module.scss'
import { HTMLAttributes, ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";

export enum CardTheme {
    GRAY = 'gray',
    OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLElement> {
    className?: string
    children: ReactNode
    theme?: CardTheme
}

export const Card = (props: CardProps) => {
    const {
        className,
        children,
        theme = CardTheme.GRAY
    } = props

    return (
        <div className={classNames('', {}, [className, cls[theme]])}>
            {children}
        </div>
    );
};