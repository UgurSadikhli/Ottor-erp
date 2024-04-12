import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import styles from './input.module.css'


interface InputFieldProps {
    label: string;
    placeholder: string;
    width:number;
    height:number;
  }

export default function InputField({label,placeholder,height,width}:InputFieldProps) {
  return (
    <FormControl>
      <FormLabel className={styles.Input}> {label}</FormLabel>
      <Input className={styles.Input} placeholder={placeholder} sx={{ width: {width}, height:{height}}} />
    </FormControl>
  );
}