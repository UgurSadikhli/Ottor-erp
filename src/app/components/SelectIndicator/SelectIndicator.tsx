import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from "../Icons/KeyboarArrowDown/KeyboarArrowDown";
import FormLabel from '@mui/joy/FormLabel';
import FormControl from '@mui/joy/FormControl';
import styles from './SelectIndicator.module.css';

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
  showLabel: boolean; // Add boolean prop to control label visibility
}

const SelectIndicator: React.FC<SelectIndicatorProps> = ({ options, placeholder, height, width, label, showLabel }) => {
  return (
    <FormControl>
      {showLabel && <FormLabel className={styles.Input}>{label}</FormLabel>} {/* Conditional rendering of FormLabel based on showLabel prop */}
      <Select
      className={styles.Input}
        placeholder={placeholder}
        indicator={<KeyboardArrowDown color='#777777' />}
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
        {options.map(option => (
          <Option key={option.value} value={option.value}>{option.label}</Option>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectIndicator;
