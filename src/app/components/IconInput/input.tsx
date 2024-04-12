"use client";
import * as React from "react";
import { styled } from "@mui/joy/styles";
import Input from "@mui/joy/Input";
import { ReactElement } from "react";


interface FloatingLabelInputProps {
  value: string;
  icon?: ReactElement;
  onChange: (value: string) => void;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  value,
  icon,
  onChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Input
      value={value}
      onChange={handleInputChange}
      endDecorator={icon}
      slotProps={{ input: { placeholder: "Enter search word", type: "text" } }}
      sx={{
        "--Input-minHeight": "50px",
        "--Input-radius": "10px",
        "& input::placeholder": {
          color: "#636b74",
        },
      }}
    />
  );
};

export default FloatingLabelInput;
