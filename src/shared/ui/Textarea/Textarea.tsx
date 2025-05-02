"use client";

import { TextareaHTMLAttributes } from 'react';
import cls from './Input.module.scss'
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextTheme, TextWeight } from '../Text/Text';
import { VStack } from '../Stack';

type HTMLTextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' >

interface TextareaProps extends HTMLTextareaProps {
    onChange?: (value: string) => void
    className?: string
    value?: string | number
    layout?: string
}

export const TextArea = (props: TextareaProps) => {
    const { 
        className, 
        layout,
        onChange,
        value,
        ...otherProps
    } = props

    const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value)
    }

    return (
        <VStack gap='4'>
            {layout && (
                <Text 
                    theme={TextTheme.SECONdARY}
                    weight={TextWeight.MEDIUM}
                    smallText={layout}
                />
            )}
            <textarea 
                value={value ?? ''}
                onChange={onChangeHandler}
                className={classNames(cls.Input, {}, [className])}
                {...otherProps}
            />
        </VStack>
    )
};