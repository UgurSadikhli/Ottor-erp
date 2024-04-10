"use client";
import React, {useState} from 'react';
import Link from 'next/link'
import AuthLayout from '../auth-layout';
import styles from "./password-reset.module.css"

const PasswordResetPage: React.FC = () => {

    const [formData, setFormData] = useState({
        newPassword: '',
        confirmNewPassword: ''
    });


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        console.log(formData);
        e.preventDefault();

        // try {
        //     const response = await fetch('http://localhost:3000/api/auth/login-user', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(formData)
        //     });
        //
        //     if (response.ok) {
        //         console.log('Login successful');
        //         console.log(response);
        //     } else {
        //         console.error('Login failed');
        //     }
        // } catch (error) {
        //     console.error('Error loginning user:', error);
        // }
    };


    return (
        <AuthLayout imageUrl="/assets/auth/img3.png">
            <div className="d-flex flex-column w-75">
                <div className={"d-flex mb-5 flex-row align-items-center justify-content-between"}>
                    <div>
                        <img className={styles.authHeaderLogo} src="/assets/otor-erp-logo.png" alt="Logo"/>
                    </div>
                    <div>
                        <Link className={`${styles.authHeaderButton} btn btn-outline-primary`} href="/auth/sign-up">
                            Sign Up
                        </Link>
                    </div>
                </div>

                <div className={"d-flex mt-5 flex-column align-items-start justify-content-around"}>
                    <p className={`${styles.minorText}`}>Password recovery.</p>
                    <h3 className={`${styles.mainText}`}>Password reset</h3>
                    <p className={`${styles.minorText}`}>Kindly enter a new password</p>
                </div>

                <div className={"d-flex mt-3 flex-column align-items-start justify-content-around"}>


                    <div className="input-group d-flex flex-column mt-4">
                        <label className={`${styles.inputText}`} htmlFor="newPassword">New password</label>
                        <input onChange={handleChange} name={"newPassword"} type="password"
                               className={`${styles.authInput} form-control`} id="newPassword"
                               placeholder="●●●●●●●●●●"/>
                    </div>


                    <div className="input-group d-flex flex-column mt-4">
                        <label className={`${styles.inputText}`} htmlFor="password">Confirm new password</label>
                        <input onChange={handleChange} name={"confirmNewPassword"} type="password"
                               className={`${styles.authInput} form-control`} id="password"
                               placeholder="●●●●●●●●●●"/>
                    </div>


                </div>


                <div className="mt-3">
                    <button onClick={handleSubmit} type="submit"
                            className={`${styles.customButton} btn btn-primary w-75 mt-4`}>Reset
                    </button>
                </div>

            </div>
        </AuthLayout>
    );
};

export default PasswordResetPage;
