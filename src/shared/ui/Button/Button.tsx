import { HTMLAttributes, ReactNode } from "react";
import cls from './Button.module.scss'
import { classNames } from "shared/lib/classNames/classNames";

export enum ButtonTheme {
    PRIMARY = 'primary',
    OUTLINED = 'outlined',
    OUTLINED_WHITE = 'outlined_white',
    CLEAR = 'clear'
}

export enum ButtonSize {
    M = 'size_m',
    MD = 'size_md',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    className?: string
    theme?: ButtonTheme
    size?: ButtonSize
}

export const Button = (props: ButtonProps) => {
    const { 
        className, 
        children,
        theme = ButtonTheme.PRIMARY,
        size = ButtonSize.M,
        ...otherProps
    } = props

    return (
        <button 
            className={classNames('py-4 px-12 text-xl rounded-btn cursor-pointer hover:opacity-75 duration-300', {}, [className, cls[theme], cls[size]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};