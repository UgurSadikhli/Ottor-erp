import * as React from "react";
import Button from "@mui/material/Button";
import { ReactElement } from "react";
import Stack from "@mui/material/Stack";

interface IconButtonProps {
  label: string;
  icon?: ReactElement;
  href?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  label,
  icon,
  href,
}: IconButtonProps) => {
  const handleClick = () => {
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <Stack direction="row" spacing={3}>
      <Button
        variant="text"
        startIcon={icon}
        sx={{ fontSize: "15px" }}
        onClick={handleClick}
      >
        {label}
      </Button>
    </Stack>
  );
};

export default IconButton;
