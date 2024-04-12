import React from "react";
import styles from "./OfficeBudget.module.css";
import MainLayout from "../../layouts/main-layout"
import CustomButton from "@/app/components/Buttons/CustomButton/CustomButton";
import ArrowRightIcon from "@/app/components/Icons/ArrowRightIcon/ArrowRightIcon";

const CreateBudget = () => {
  return (
    <MainLayout>
      <div><span>Salam</span></div>
        <CustomButton icon={<ArrowRightIcon color="black"/>} links="office-budget" label="Back" />
    </MainLayout>
  );
};

export default CreateBudget;
