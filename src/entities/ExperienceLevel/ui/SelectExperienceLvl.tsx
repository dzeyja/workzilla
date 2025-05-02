"use client";

import { Select, SelectOption } from "shared/ui/Select/Select";
import { ExperienceLevel } from "../model/types/experinceLevel";
import { useCallback, useMemo } from "react";

interface SelectExperienceLvlProps {
    value?: ExperienceLevel
    label?: string
    onChange?: (value: ExperienceLevel) => void
}

export const SelectExperienceLvl = (props: SelectExperienceLvlProps) => {
    const {
        value,
        onChange,
        label
    } = props

    const selectOptions = useMemo<SelectOption<ExperienceLevel>[]>(() => 
        Object.values(ExperienceLevel).map(experience => ({
            value: experience,
            content: experience
        })), []
    );

    const onChangeHandler = useCallback((value: ExperienceLevel) => {
        onChange?.(value)
    }, [onChange])

    return <Select 
                options={selectOptions}
                value={value}
                onChange={onChangeHandler}
                label={label}
            />
};