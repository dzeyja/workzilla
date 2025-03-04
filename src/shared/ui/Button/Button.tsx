import { ReactNode } from "react";
import { classNames } from "shared/lib/classNames/classNames";

export enum ButtonTheme {
    PRIMARY = 'primary'
}

interface ButtonProps {
    children: ReactNode
    className?: string
}

export const Button = (props: ButtonProps) => {
    const { 
        className, 
        children 
    } = props

    return (
        <button className={classNames('', {}, [className])}>
            {children}
        </button>
  );
};