"use client"
import React, {useState} from 'react';
import styles from "./add-new-inventory.module.css";
import CustomButton from "@/app/components/Buttons/CustomButton/CustomButton";
import ArrowRightIcon from "@/app/components/Icons/ArrowRightIcon/ArrowRightIcon";
import MainLayout from "@/app/layouts/main-layout";
import InputField from "@/app/components/Input/input";
import AddPhotoIcon from "@/app/components/Icons/AddPhotoIcon/AddPhotoIcon";
import uploadImg from "../../../../public/assets/otor-erp-logo.png";
import SelectIndicator from "@/app/components/SelectIndicator/SelectIndicator";
import HeaderStaffIcon from '@/app/components/Icons/HeaderStaffIcon/HeaderStaffIcon';
import SrockAndInventoryHeaderIcon from '@/app/components/Icons/SrockAndInventoryHeaderIcon/SrockAndInventoryHeaderIcon';


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


const AddNewItem = () => {

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
        <MainLayout icon={<SrockAndInventoryHeaderIcon/>} title="Update Inventory" label="Add new item to stocks">
            <div className={styles.main}>
                <div className={styles.top}>
                    <CustomButton icon={<ArrowRightIcon color="black"/>} links="stocksAndInventory/inventory" label="Back"/>
                </div>
                <div className={styles.body}>
                    <div className={styles.form}>
                        <div className={styles.formTop}>
                            <span className={styles.formTitle}>Add New Item</span>
                        </div>
                        <div className={styles.formBody}>
                            <div className={styles.leftSide}>

                                <div className={styles.inputContainer}>
                                    <input onChange={handleFileChange} type="file" name="file" id="file" className={styles.input}/>
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
                                        label="Product name"
                                        placeholder="Enter product name"
                                        width={450}
                                        height={54}
                                    />
                                  <InputField
                                        label="Product ID"
                                        placeholder="Enter ID"
                                        width={450}
                                        height={54}
                                    />
                                </div>
                                <div className={styles.formBlock}>
                                <SelectIndicator
                                        options={SelectIndicatorOptions.role}
                                        placeholder="Category"
                                        height={55}
                                        width={450}
                                        label="Select category"
                                        showLabel={true}
                                    />
                                    <InputField
                                        label="QTY purchased"
                                        placeholder="Enter quantity"
                                        width={450}
                                        height={54}
                                    />
                                </div>
                                <div className={styles.formBlock}>
                                <InputField
                                        label="Unit price"
                                        placeholder="Enter amount"
                                        width={450}
                                        height={54}
                                    />
                                    <InputField
                                        label="Total amount"
                                        placeholder="Amount"
                                        width={450}
                                        height={54}
                                    />
                                </div>
                                <div className={styles.formBlock}>
                                <InputField
                                        label="Supplier"
                                        placeholder="Enter supplier name"
                                        width={450}
                                        height={54}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.formBottom}>
                            <div className={styles.buttonContainer}>
                                <button className={styles.button}>Add Item</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>

    );
};

export default AddNewItem;