"use client"
import React, { useState } from "react";
import Link from "next/link";
import styles from "./GroupButton.module.css";

interface Props {
  button1Name: string;
  button2Name: string;
  activeButton: string;
  button1Href: string;
  button2Href: string;
}

const GroupButton: React.FC<Props> = ({
  button1Name,
  button2Name,
  activeButton,
  button1Href,
  button2Href,
}) => {
  const [active, setActive] = useState(activeButton);

  const handleClick = (buttonName: string) => {
    setActive(buttonName);
  };


  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <button className={styles.button} onClick={() => handleClick(button1Name)} >
          <Link className={styles.text} href={button1Href} style={{ backgroundColor: "transparent", border:"none", fontSize: "16px", padding: "10px 15px", cursor: "pointer", textDecoration: active === button1Name?"underline" :"none", color: active === button1Name ? "#14add6" : "#666" }}>
            {button1Name}
          </Link>
        </button>
        <button   
        className={styles.button}
          onClick={() => handleClick(button2Name)}
        >
          <Link className={styles.text} href={button2Href}  style={{ backgroundColor: "transparent", border: "none", fontSize: "16px", padding: "10px 20px", cursor: "pointer", textDecoration: active === button2Name?"underline" :"none", color: active === button2Name ? "#14add6" : "#666" }}>
            {button2Name}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default GroupButton;
