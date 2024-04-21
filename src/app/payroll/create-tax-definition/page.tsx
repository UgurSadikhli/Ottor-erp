import React from 'react';
import styles from "./CreateTaxDefinition.module.css";
import MainLayout from "@/app/layouts/main-layout";
import CustomButton from "@/app/components/Buttons/CustomButton/CustomButton";
import ArrowRightIcon from "@/app/components/Icons/ArrowRightIcon/ArrowRightIcon";
import InputField from "@/app/components/Input/input";

const CreateTaxDefinition = () => {
    return (
        <MainLayout>
            <div className={styles.main}>
                <div className={styles.top}>
                    <CustomButton icon={<ArrowRightIcon color="black"/>} links="payroll" label="Back"/>
                </div>
                <div className={styles.body}>
                    <div className={styles.form1}>
                        <div className={styles.form1Top}>
                            <span className={styles.formTopTW}>Create tax definition</span>
                        </div>
                        <div className={styles.form1Bottom}>
                            <div className={styles.form1H1}>
                                <InputField
                                    label="Tax type"
                                    placeholder="Enter tax name"
                                    width={450}
                                    height={54}
                                />
                                <InputField
                                    label="% value"
                                    placeholder="Enter % value"
                                    width={450}
                                    height={54}
                                />
                            </div>
                            <div className={styles.form1H2}>
                                <button className={styles.buttons}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </MainLayout>
    );
};

export default CreateTaxDefinition;