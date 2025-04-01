"use client";

import { InputHTMLAttributes, useCallback } from 'react';
import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme, TextWeight } from '../Text/Text';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' >

interface InputProps extends HTMLInputProps {
    onChange?: (value: string) => void
    className?: string
    value?: string | number
    layout?: string
}

export const Input = (props: InputProps) => {
    const { 
        className, 
        layout,
        onChange,
        value,
        type='text',
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <div>
            {layout && (
                <Text 
                    theme={TextTheme.SECONdARY}
                    weight={TextWeight.MEDIUM}
                    smallText={layout}
                    className='mb-2'
                />
            )}
            <input 
                value={value ?? ''}
                onChange={onChangeHandler}
                className={classNames(cls.Input, {}, [className])}
                type={type}
                {...otherProps}
            />
        </div>
    )
};