"use client";
import React, {useState} from 'react';
import Link from 'next/link'
import AuthLayout from '../auth-layout';
import styles from "./sign-up.module.css"
import { useRouter } from 'next/navigation'

const SignUpPage: React.FC = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        password: ''
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

        try {
            const response = await fetch('http://localhost:3000/api/auth/register-user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Registration successful');
                console.log(response);
                router.push('/auth/email-verification');
            } else {
                console.error('Registration failed');
            }
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };


    return (
        <AuthLayout imageUrl="/assets/auth/img1.jpeg">
            <div className="d-flex flex-column w-75">
                <div className={"d-flex mb-5 flex-row align-items-center justify-content-between"}>
                    <div>
                        <img className={styles.authHeaderLogo} src="/assets/otor-erp-logo.png" alt="Logo"/>
                    </div>
                </div>

                <div className={"d-flex mt-2 flex-column align-items-start justify-content-around"}>
                    <p className={`${styles.welcomeBackText}`}>Welcome! Let's get started.</p>
                    <h3 className={`${styles.pleaseSignInText}`}>Create an Account</h3>
                </div>


                <div className={"d-flex mt-3 flex-column align-items-start justify-content-around"}>

                    <div className="input-group d-flex flex-column">
                        <label className={`${styles.inputText}`} htmlFor="firstName">First Name</label>
                        <input onChange={handleChange} name={"name"} type="text"
                               className={`${styles.authInput} form-control`} id="firstName"
                               placeholder="Enter first name"/>
                    </div>

                    <div className="input-group d-flex flex-column">
                        <label className={`${styles.inputText}`} htmlFor="lastName">Last Name</label>
                        <input onChange={handleChange} name={"surname"} type="text"
                               className={`${styles.authInput} form-control`} id="lastName"
                               placeholder="Enter last name"/>
                    </div>


                    <div className="input-group d-flex flex-column">
                        <label className={`${styles.inputText}`} htmlFor="email">Email Address</label>
                        <input onChange={handleChange} name={"email"} type="email"
                               className={`${styles.authInput} form-control`} id="email"
                               placeholder="Enter email adress"/>
                    </div>

                    <div className="input-group d-flex flex-column">
                        <label className={`${styles.inputText}`} htmlFor="password">Password</label>
                        <input onChange={handleChange} name={"password"} type="password"
                               className={`${styles.authInput} form-control`} id="password"
                               placeholder="●●●●●●●●●●"/>
                    </div>

                </div>


                <div className="mt-3">
                    <button type="submit" onClick={handleSubmit}
                            className={`${styles.signUpButton} btn btn-primary w-75 mt-2`}>Sign Up
                    </button>


                </div>

                <div className={`${styles.alreadyHaveAnAccountContainer} d-flex mt-3 flex-row align-items-center justify-content-end`}>
                    <Link href="/auth/sign-in" className={`${styles.alreadyHaveAnAccountText}`}>
                        Already have an account ?
                    </Link>
                </div>


            </div>
        </AuthLayout>
    );
};

export default SignUpPage;
