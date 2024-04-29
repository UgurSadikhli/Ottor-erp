"use client"
import React, {useState} from 'react';
import styles from "./AddNewStaff.module.css";
import CustomButton from "@/app/components/Buttons/CustomButton/CustomButton";
import ArrowRightIcon from "@/app/components/Icons/ArrowRightIcon/ArrowRightIcon";
import MainLayout from "@/app/layouts/main-layout";
import InputField from "@/app/components/Input/input";
import AddPhotoIcon from "@/app/components/Icons/AddPhotoIcon/AddPhotoIcon";
import uploadImg from "../../../../public/assets/otor-erp-logo.png";
import SelectIndicator from "@/app/components/SelectIndicator/SelectIndicator";
import HeaderStaffIcon from '@/app/components/Icons/HeaderStaffIcon/HeaderStaffIcon';


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




const AddNewStaff = () => {

    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const [name,setName]=useState('');
    const [surname,setSurname]=useState('');
    const [email,setEmail]=useState('');
    const [designation,setDesignation]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [officialEmail,setOfficialEmail]=useState('');
    const [gender,setGender]=useState('');
    const [role,setRole]=useState('');

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
        } else {
            setSelectedFile(null);
        }
    };
    const handleGenderChange = (value: string) => {
        setGender(value);
    };

    const handleDesignationChange = (value: string) => {
        setDesignation(value);
    };
    const handleRoleChange = (value: string) => {
        setRole(value);
    };




    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData={
            "name":name,
            "surname":surname,
            "email":email,
            "designation":designation,
            "phoneNumber":phoneNumber,
            "officialEmail":officialEmail,
            "gender":gender,
            "role":role,
            "profileImg":selectedFile
        }

        try {
            const response = await fetch(
                "http://localhost:3000/api/staff/create-employee",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (response.ok) {
                const responseData = await response.json();

                console.log(responseData);

            } else {
                console.error("Add New Staff failed");
            }
        } catch (error) {
            console.error("Error Add New Staff :", error);
        }
    };

    const handleSubmit = () => {

        console.log(`Name: ${name}`);
        console.log(`Surname: ${surname}`);
        console.log(`Name: ${email}`);
        console.log(`Name: ${designation}`);
        console.log(`Name: ${phoneNumber}`);
        console.log(`Name: ${officialEmail}`);
        console.log(`Gender: ${gender}`);
        console.log(`Name: ${role}`);



    };

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     setSelectedFile(file);
    // };



    return (
        <MainLayout icon={<HeaderStaffIcon />} label="View, search for and add new staff" title=" All Staff" >
            <div className={styles.main}>
                <div className={styles.top}>
                    <CustomButton icon={<ArrowRightIcon color="black"/>} links="staff" label="Back"/>
                </div>
                <div className={styles.body}>
                    <div className={styles.form}>
                        <div className={styles.formTop}>
                            <span className={styles.formTitle}>Add a New Staff</span>
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
                                        label="First name"
                                        placeholder="Enter first name"
                                        width={450}
                                        height={54}
                                        onChange={setName}
                                    />
                                    <InputField
                                        label="Last name"
                                        placeholder="Enter last name"
                                        width={450}
                                        height={54}
                                        onChange={setSurname}
                                    />
                                </div>
                                <div className={styles.formBlock}>
                                    <InputField
                                        label="Email address"
                                        placeholder="Enter email address"
                                        width={450}
                                        height={54}
                                        onChange={setEmail}
                                    />
                                    <InputField
                                        label="Phone number"
                                        placeholder="Enter phone number"
                                        width={450}
                                        height={54}
                                        onChange={setPhoneNumber}
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
                                        onChange={handleGenderChange}
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
                                        options={SelectIndicatorOptions.role}
                                        placeholder="Select role"
                                        height={55}
                                        width={450}
                                        label="Role"
                                        showLabel={true}
                                        onChange={handleRoleChange}
                                    />
                                    <SelectIndicator
                                        options={SelectIndicatorOptions.designation}
                                        placeholder="Select designation"
                                        height={55}
                                        width={450}
                                        label="Designation"
                                        showLabel={true}
                                        onChange={handleDesignationChange}
                                    />
                                </div>
                                <div className={styles.formBlock}>
                                    <InputField
                                        label="Staff ID"
                                        placeholder="Staff ID"
                                        width={450}
                                        height={54}
                                        isdisabled={true}
                                    />
                                    <InputField
                                        label="Official email"
                                        placeholder="Official email"
                                        width={450}
                                        height={54}
                                        onChange={setOfficialEmail}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={styles.formBottom}>
                            <div className={styles.buttonContainer}>
                                <button onClick={ handleSubmit} className={styles.button}>Add Staff</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>

    );
};

export default AddNewStaff;