import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import styles from './input.module.css'

interface InputFieldProps {
    label: string;
    placeholder: string;
    width: number;
    height: number;
    onChange?: (value: string) => void;
}

export default function InputField({ label, placeholder, width, height, onChange }: InputFieldProps) {
    const [value, setValue] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <FormControl>
            <FormLabel className={styles.Input}>{label}</FormLabel>
            <Input
                className={styles.Input}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
                sx={{ width, height }}
            />
        </FormControl>
    );
}
