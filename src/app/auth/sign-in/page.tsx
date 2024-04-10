// @use-client
import React from 'react';
import Link from 'next/link'
import AuthLayout from '../auth-layout';
import styles from "./sign-in.module.css"

const SignInPage: React.FC = () => {

    return (
        <AuthLayout imageUrl="/assets/auth/img1.jpeg">
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
                    <p className={`${styles.welcomeBackText}`}>Welcome back!!</p>
                    <h3 className={`${styles.pleaseSignInText}`}>Please Sign In</h3>
                </div>

                <div className={"d-flex mt-3 flex-column align-items-start justify-content-around"}>

                    <div className="input-group d-flex flex-column ">
                        <label className={`${styles.inputText}`} htmlFor="email">Email Address</label>
                        <input type="email" className={`${styles.authInput} form-control`} id="email"
                               placeholder="Enter email adress"/>
                    </div>

                    <div className="input-group d-flex flex-column mt-4">
                        <label className={`${styles.inputText}`} htmlFor="password">Password</label>
                        <input type="password" className={`${styles.authInput} form-control`} id="password"
                               placeholder="●●●●●●●●●●"/>
                    </div>

                </div>

                <div  className={`${styles.rememberMeContainer} d-flex mt-3 flex-row align-items-center justify-content-between`}>
                    <div>
                        <input type="checkbox" id="rememberMe" className="form-check-input me-2"/>
                        <label htmlFor="rememberMe" className="form-check-label">Remember Me</label>
                    </div>
                    <Link href={"#"} className={`${styles.forgotPasswordText}`}>I forgot my password</Link>
                </div>

                <div className="mt-3">
                    <button type="submit" className={`${styles.signInButton} btn btn-primary w-75 mt-4`}>Sign In</button>
                </div>

            </div>
        </AuthLayout>
    );
};

export default SignInPage;
