"use client";
import React,{useState,useRef} from 'react';
import Link from 'next/link'
import AuthLayout from '../auth-layout';
import styles from "./email-verification.module.css"
import {useRouter} from "next/navigation"

const EmailVerificationPage: React.FC = () => {

    const [otp, setOTP] = useState<string[]>(['', '', '', '', '', '']);
    const inputRefs = useRef<HTMLInputElement[]>([]);


    const router=useRouter();

    const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const newOTP = [...otp];
        newOTP[index] = value;

        setOTP(newOTP);


        if (value && index < otp.length - 1 && inputRefs.current[index + 1]) {
            inputRefs.current[index + 1].focus();
        }
    };


    const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        const pastedData = event.clipboardData.getData('Text');
        const otpArray = pastedData.split('').slice(0, otp.length);
        const newOTP = [...otpArray];


        setOTP(newOTP);


        const filledIndex = otpArray.findIndex((digit) => digit !== '');
        if (filledIndex !== -1 && filledIndex < otp.length - 1 && inputRefs.current[filledIndex + 1]) {
            inputRefs.current[filledIndex + 1].focus();
        }
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        const otpString = otp.join('');

        console.log(`OTP : ${otpString}`);


        router.push("/auth/sign-in");
        

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
        <AuthLayout imageUrl="/assets/auth/img2.jpeg">
            <div className={`${styles.mainContainer} d-flex flex-column`}>
                <div className={"d-flex mb-5 flex-row align-items-center justify-content-between"}>
                    <div>
                        <img className={styles.authHeaderLogo} src="/assets/otor-erp-logo.png" alt="Logo"/>
                    </div>
                </div>

                <div
                    className={`${styles.seventyFiveToHundredContainer}d-flex mt-5 flex-column align-items-start justify-content-around w-75`}>
                    <p className={`${styles.minorText}`}>Password recovery.</p>
                    <h3 className={`${styles.mainText}`}>Email verification</h3>
                    <p className={`${styles.minorText}`}>Kindly enter the 6 digit code that has been sent to your email address.</p>
                </div>

                <div
                    className={`${styles.seventyFiveToHundredContainer} d-flex mt-3 flex-column align-items-start justify-content-around`}>
                    <div className="input-group d-flex flex-row ">

                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                ref={(ref) => (inputRefs.current[index] = ref as HTMLInputElement)}
                                className={`${styles.otpInput} m-2 text-center form-control rounded`}
                                type="text"
                                maxLength={1}
                                inputMode="numeric"
                                value={digit}
                                onChange={(event) => handleChange(index, event)}
                                onPaste={handlePaste}
                            />
                        ))}

                    </div>
                </div>


                <div className="mt-3 w-100">
                    <button onClick={handleSubmit} type="submit" className={`${styles.customButton} btn btn-primary w-75 mt-4`}>Send</button>
                </div>

            </div>
        </AuthLayout>
    );
};

export default EmailVerificationPage;
