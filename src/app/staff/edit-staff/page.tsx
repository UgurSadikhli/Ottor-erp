"use client"
import React, {useState} from 'react';
import styles from "./EditStaff.module.css";
import MainLayout from "@/app/layouts/main-layout";
import CustomButton from "@/app/components/Buttons/CustomButton/CustomButton";
import ArrowRightIcon from "@/app/components/Icons/ArrowRightIcon/ArrowRightIcon";
import uploadImg from "../../../../public/assets/otor-erp-logo.png";
import AddPhotoIcon from "@/app/components/Icons/AddPhotoIcon/AddPhotoIcon";
import InputField from "@/app/components/Input/input";
import SelectIndicator from "@/app/components/SelectIndicator/SelectIndicator";

const SelectIndicatorOptions = {
    gender: [
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
    ],
    role: [
        { value: "All Staff", label: "All Staff" },
        { value: "Admin Staff", label: "Admin Staff" },
        { value: "IT Staff", label: "IT Staff" },
        { value: "Human Resources Staff", label: "Human Resources Staff" },
    ],
    designation: [
        { value: "Mr", label: "Mr" },
        { value: "Ms", label: "Ms" },
    ]
}

const EditStaff = () => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    };

    return (
        <MainLayout>
            <div className={styles.main}>
                <div className={styles.top}>
                    <CustomButton icon={<ArrowRightIcon color="black"/>} links="staff" label="Back"/>
                </div>
                <div className={styles.body}>
                    <div className={styles.form}>
                        <div className={styles.formTop}>
                            <span className={styles.formTitle}>Edir Staff Profile</span>
                        </div>
                        <div className={styles.formBody}>
                            <div className={styles.leftSide}>

                                <div className={styles.inputContainer}>
                                    <input onChange={handleFileChange} type="file" name="file" id="file"
                                           className={styles.input}/>
                                    <label htmlFor="file" className={styles.inputLabelContainer}>
                                        <div className={styles.inputLabelInner}>
                                            <img className={selectedFile ? styles.image : styles.dNone}
                                                 src={selectedFile ? URL.createObjectURL(selectedFile) : uploadImg}
                                                 alt="uploaded photo"/>
                                            <div className={selectedFile ? styles.indexZ : styles.photoFrameText}>
                                                <AddPhotoIcon/>
                                                <span>
                                                    {
                                                        selectedFile ? "Update photo" : "Upload photo"
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </label>
                                    <div className={styles.inputDescription}>
                                        <span className={styles.inputDescriptionTitle}>Allowed format</span>
                                        <span className={styles.inputDescriptionText}>JPG, JPEG, and PNG</span>
                                    </div>
                                    <div className={styles.inputDescription}>
                                        <span className={styles.inputDescriptionTitle}>Max file size</span>
                                        <span className={styles.inputDescriptionText}>2MB</span>
                                    </div>
                                </div>

                            </div>
                            <div className={styles.rightSide}>
                                <div className={styles.formBlock}>
                                    <InputField
                                        label="First name"
                                        placeholder="Enter first name"
                                        width={450}
                                        height={54}
                                    />
                                    <InputField
                                        label="Last name"
                                        placeholder="Enter last name"
                                        width={450}
                                        height={54}
                                    />
                                </div>
                                <div className={styles.formBlock}>
                                    <InputField
                                        label="Email address"
                                        placeholder="Enter email address"
                                        width={450}
                                        height={54}
                                    />
                                    <InputField
                                        label="Phone number"
                                        placeholder="Enter phone number"
                                        width={450}
                                        height={54}
                                    />
                                </div>
                                <div className={styles.formBlock}>
                                    <SelectIndicator
                                        options={SelectIndicatorOptions.gender}
                                        placeholder="Select gender"
                                        height={55}
                                        width={450}
                                        label="Gender"
                                        showLabel={true}
                                    />
                                    <InputField
                                        label="Phone number"
                                        placeholder="Enter phone number"
                                        width={450}
                                        height={54}
                                    />
                                </div>
                                <div className={styles.formBlock}>
                                    <InputField
                                        label="Staff ID"
                                        placeholder="Staff ID"
                                        width={450}
                                        height={54}
                                    />
                                    <SelectIndicator
                                        options={SelectIndicatorOptions.designation}
                                        placeholder="Select designation"
                                        height={55}
                                        width={450}
                                        label="Designation"
                                        showLabel={true}
                                    />
                                </div>
                                <div className={styles.formBlock}>
                                    <InputField
                                        label="Official email"
                                        placeholder="Official email"
                                        width={450}
                                        height={54}
                                    />
                                    <div className={styles.buttonContainer}>
                                        <button className={styles.button}>Edit Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.formBottom}>

                        </div>
                    </div>
                    <div className={styles.form}>
                        <div className={styles.formTop}>
                            <span className={styles.formTitle}>Assign Role</span>
                        </div>
                        <div className={styles.formBody}>

                            <div className={`${styles.rightSide} ${styles.justifyBetween}`}>
                                <div className={`${styles.formBlock} ${styles.justifyBetween}`}>
                                    <InputField
                                        label="User ID"
                                        placeholder="User ID"
                                        width={450}
                                        height={54}
                                    />
                                    <SelectIndicator
                                        options={SelectIndicatorOptions.role}
                                        placeholder="Select role"
                                        height={55}
                                        width={450}
                                        label="Role"
                                        showLabel={true}
                                    />
                                    <div className={styles.buttonContainer}>
                                        <button className={styles.button}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.formBottom}>

                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>

    );
};

export default EditStaff;