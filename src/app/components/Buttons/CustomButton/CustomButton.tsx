import React, {ReactElement} from 'react';
import styles from "./CustomButton.module.css";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface Props {
    links: string
    label?: string
    icon?: ReactElement
}


const CustomButton = ({links, label, icon}:Props) => {

    const linkTo = `/${links}`;

    return (
        <Stack direction="row" spacing={3}>
            <Link className={styles.link} href={linkTo}>
                <Button
                    variant="text"
                    startIcon={icon}
                    color="primary"
                    sx={{ fontSize: "15px" }}
                >
                    {label}
                </Button>
            </Link>
        </Stack>
    );
};

export default CustomButton;