"use client";
import React, { useState } from 'react';
import Select, { selectClasses } from '@mui/joy/Select/Select';
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
    placeholder: string;
    height: number;
    width: number;
    label: string;
    showLabel: boolean;
    onChange: (value: string) => void;
  }
  
  const SelectIndicator: React.FC<SelectIndicatorProps> = ({
    options,
    placeholder,
    height,
    width,
    label,
    showLabel,
    onChange,
  }) => {
    const handleOptionClick = (value: string) => {
      onChange(value);
    };
  
    return (
      <FormControl>
        {showLabel && <FormLabel>{label}</FormLabel>}
        <Select
          sx={{
            height: height,
            width: width,
          }}
          IconComponent={<KeyboardArrowDown color='red'/>}
        >
          {options.map((option) => (
            <Option key={option.value} value={option.value} onClick={() => handleOptionClick(option.value)}>
              {option.label}
            </Option>
          ))}
        </Select>
      </FormControl>
    );
  };
  
  export default SelectIndicator;