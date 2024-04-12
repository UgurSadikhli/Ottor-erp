import * as React from 'react';
import Textarea from '@mui/joy/Textarea';
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import styles from './textArea.module.css';

export default function FocusedRingTextarea() {
  return (

    <Textarea
      placeholder="Enter message..."
      className={styles.Input}
      minRows={5}
      sx={{
        '--Textarea-focusedInset': 'var(--any, )',
        '--Textarea-focusedThickness': '0.25rem',
        '--Textarea-focusedHighlight': 'rgba(13,110,253,.25)',
        '&::before': {
          transition: 'box-shadow .15s ease-in-out',
        },
        '&:focus-within': {
          borderColor: '#86b7fe',
        },width:"1020px"
      }}
    />


  );
}