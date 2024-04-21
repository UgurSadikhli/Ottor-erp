import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControl from "@mui/joy/FormControl";
import styles from './calendar.module.css'


interface DatepickerFieldProps {

  width:number;

}

export default function DatePickerValue({width}:DatepickerFieldProps) {
  return (
   
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker
          className={styles.Input}
            defaultValue={dayjs("2022-17-04")}
            sx={{ width:{width}}}
          />
        </DemoContainer>
      </LocalizationProvider>
  );
}
