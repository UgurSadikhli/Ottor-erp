import React, {ReactElement} from 'react';
import styles from "./SimpleCustomButton.module.css";
import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface Props {
    links?: string
    label?: string
    icon?: ReactElement
}


const SimpleCustomButton = ({links, label, icon}:Props) => {

    const linkTo = `/${links}`;

    return (
        <Stack direction="row" spacing={3}>
            <Link className={styles.link} href={linkTo}>
                <Button
                    variant="text"
                    startIcon={icon}
                    sx={{ fontSize: "15px",background:"linear-gradient(135deg, #14add6 0%, #384295 100%)",color:"white",width:200,borderRadius:2,textTransform: "none"}}
                >
                    {label}
                </Button>
            </Link>
        </Stack>
    );
};

export default SimpleCustomButton;
