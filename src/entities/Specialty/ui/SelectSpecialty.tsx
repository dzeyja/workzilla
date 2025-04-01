"use client";

import { useCallback, useMemo } from "react";
import { Select, SelectOption } from "shared/ui/Select/Select";
import { Specialties } from "../model/types/specialty";

interface SelectSpecialtyProps {
  value?: Specialties
  onChange?: (value: Specialties) => void
}

export const SelectSpecialty = (props: SelectSpecialtyProps) => {
    const { value, onChange } = props

    const selectOptions = useMemo<SelectOption<Specialties>[]>(() => 
        Object.values(Specialties).map(specialty => ({
            value: specialty,
            content: specialty
        })), []
    );
  
    const onChangeHandler = useCallback((value: Specialties) => {
        onChange?.(value)
    }, [onChange])

    return <Select 
              options={selectOptions}
              value={value}
              onChange={onChangeHandler}
            />
};