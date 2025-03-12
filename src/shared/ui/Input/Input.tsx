"use client";

import { InputHTMLAttributes, useCallback } from 'react';
import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' >

interface InputProps extends HTMLInputProps {
    onChange?: (value: string) => void
    className?: string
    value?: string
}

export const Input = (props: InputProps) => {
    const { 
        className, 
        onChange,
        value,
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return <input 
        value={value}
        onChange={onChangeHandler}
        className={classNames(cls.Input, {}, [])}
        {...otherProps}
    />
};