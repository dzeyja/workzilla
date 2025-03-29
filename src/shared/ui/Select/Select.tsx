import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';

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
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    return (
        <div className={classNames("flex flex-col gap-1", {}, [className])}>
            {label && (
                <span className="text-sm font-medium text-gray-900 dark:text-gray-300">
                    {label}
                </span>
            )}
            <select
                disabled={readonly}
                className={classNames(
                    "w-full px-4 py-2 border rounded-lg text-sm transition-all border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#ff6600] focus:border-[#ff6600] disabled:opacity-50 disabled:cursor-not-allowed"
                )}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
};

