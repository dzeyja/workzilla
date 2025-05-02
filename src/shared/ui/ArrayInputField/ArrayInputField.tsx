'use client';

import { useState } from 'react';
import { HStack, VStack } from 'shared/ui/Stack';
import { Text, TextTheme, TextWeight } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Button, ButtonTheme } from '../Button/Button';

interface ArrayInputFieldProps {
  label?: string;
  values?: string[];
  onChange: (newValues: string[]) => void;
  className?: string;
  placeholder?: string
}

export const ArrayInputField = (props: ArrayInputFieldProps) => {
    const { 
        label, 
        values, 
        onChange, 
        className,
        placeholder
    } = props;

    const [inputValue, setInputValue] = useState('');

    const handleAdd = () => {
        const trimmed = inputValue.trim();
        if (trimmed && !values?.includes(trimmed)) {
            onChange([...(values || []), trimmed]);
            setInputValue('');
        }
    };

    const handleRemove = (index: number) => {
        const newValues = (values || []).filter((_, i) => i !== index);
        onChange(newValues);
    };

    return (
        <VStack gap="8" max className={className}>
            <VStack gap="4" max>
                <HStack gap='8' align='end'>
                    <Input
                        className={className}
                        value={inputValue}
                        onChange={setInputValue}
                        layout={`Добавить ${label?.toLowerCase()}`}
                        placeholder={placeholder}
                    />
                    <Button 
                        onClick={handleAdd} 
                        theme={ButtonTheme.GREEN_CLEAR}
                        className='mb-3'
                    >
                        Добавить
                    </Button>
                </HStack>
                <VStack gap='4'>
                    {values?.map((item, index) => (
                        <HStack role='li' gap='4' align='center' justify='between' className='min-w-sm rounded-btn px-3 bg-white' key={index} >
                            <Text text={item} theme={TextTheme.SECONdARY} />
                            <Button 
                                onClick={() => handleRemove(index)} 
                                theme={ButtonTheme.ERROR_CLEAR}
                                className='mt-1'
                            >
                                    Удалить
                            </Button>
                        </HStack>
                    ))}
                </VStack>
            </VStack>
        </VStack>
    );
};
