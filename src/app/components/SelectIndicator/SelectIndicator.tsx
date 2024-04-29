"use client";
import React, { useState } from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from "../Icons/KeyboarArrowDown/KeyboarArrowDown";
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/joy/FormControl';

interface OptionType {
  value: string;
  label: string;
}

interface SelectIndicatorProps {
  options: OptionType[];
  placeholder:string;
  height: number;
  width: number;
  label:string;
  showLabel: boolean;
  onChange?: (value: string) => void;
}

const SelectIndicator: React.FC<SelectIndicatorProps> = ({ options, placeholder, height, width, label, showLabel, onChange }) => {
    const [selectValue, setSelectValue] = React.useState('');

    // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    //     const newValue = event?.target?.value as string;
    //     setSelectValue(newValue);
    //     console.log(newValue);
    //     if (onChange) {
    //         onChange(newValue);
    //     }
    // };

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSelectValue(event.target.value as string);
    };

    return (
        <FormControl>
            {showLabel && <FormLabel className={styles.Input}>{label}</FormLabel>}
            <Select
                className={styles.Input}
                placeholder={placeholder}
                indicator={<KeyboardArrowDown color='#777777' />}
                onChange={handleChange}
                value={selectValue}
                sx={{
                    height: height,
                    width: width,
                    [`& .${selectClasses.indicator}`]: {
                        transition: '0.2s',
                        [`&.${selectClasses.expanded}`]: {
                            transform: 'rotate(-180deg)',
                        },
                    },
                    '& input::placeholder': {
                        color: "red"
                    }
                }}
            >
                {options.map((option) => (
                    // <Option key={option.value} value={option.value}>{option.label}</Option>
                    <MenuItem value={option.value}>{option.label}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default SelectIndicator;
