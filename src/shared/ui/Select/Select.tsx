import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import { VStack } from '../Stack';
import { Text, TextTheme, TextWeight } from '../Text/Text';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    label?: string;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const { className, label, options, onChange, value, readonly } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value as T);
        }
    };

    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className="bg-white rounded-btn dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <VStack role='div' gap='4' className={classNames("", {}, [className])}>
            {label && (
                <Text 
                    smallText={label} 
                    theme={TextTheme.SECONdARY}  
                    weight={TextWeight.MEDIUM}
                />
            )}
            <select
                disabled={readonly}
                className={classNames(
                    "px-4 py-2 border rounded-lg text-sm outline-none"
                )}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </VStack>
    );
};

