"use client";
import React, { useState } from "react";
import Link from "next/link";
import AuthLayout from "../auth-layout";
import styles from "./sign-in.module.css";
import { useRouter } from "next/navigation";

const SignInPage: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/login-user",
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
        const { user } = responseData;
        const otpResponse = await fetch(
          "http://localhost:3000/api/auth/send-otp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: formData.email }),
          }
        );

        if (otpResponse.ok) {
          console.log("OTP sent successfully");
          localStorage.setItem("email", formData.email);
          localStorage.setItem("name", user.name);
          localStorage.setItem("surname", user.surname);
          router.push("/auth/two-factor-auth");
        } else {
          console.error("Failed to send OTP");
        }
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error loginning user:", error);
    }
    localStorage.setItem("activeButton", "DashBoard");
  };

  return (
    <AuthLayout imageUrl="/assets/auth/img1.jpeg">
      <div className="d-flex flex-column w-75">
        <div
          className={
            "d-flex mb-5 flex-row align-items-center justify-content-between"
          }
        >
          <div>
            <img
              className={styles.authHeaderLogo}
              src="/assets/otor-erp-logo.png"
              alt="Logo"
            />
          </div>
          <div>
            <Link
              className={`${styles.authHeaderButton} btn btn-outline-primary`}
              href="/auth/sign-up"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <div
          className={
            "d-flex mt-5 flex-column align-items-start justify-content-around"
          }
        >
          <p className={`${styles.welcomeBackText}`}>Welcome back!!</p>
          <h3 className={`${styles.pleaseSignInText}`}>Please Sign In</h3>
        </div>

        <div
          className={
            "d-flex mt-3 flex-column align-items-start justify-content-around"
          }
        >
          <div className="input-group d-flex flex-column ">
            <label className={`${styles.inputText}`} htmlFor="email">
              Email Address
            </label>
            <input
              onChange={handleChange}
              name={"email"}
              type="email"
              className={`${styles.authInput} form-control`}
              id="email"
              placeholder="Enter email adress"
            />
          </div>

          <div className="input-group d-flex flex-column mt-4">
            <label className={`${styles.inputText}`} htmlFor="password">
              Password
            </label>
            <input
              onChange={handleChange}
              name={"password"}
              type="password"
              className={`${styles.authInput} form-control`}
              id="password"
              placeholder="●●●●●●●●●●"
            />
          </div>
        </div>

        <div
          className={`${styles.rememberMeContainer} d-flex mt-3 flex-row align-items-center justify-content-between`}
        >
          <div>
            <input
              type="checkbox"
              id="rememberMe"
              className="form-check-input me-2"
            />
            <label htmlFor="rememberMe" className="form-check-label">
              Remember Me
            </label>
          </div>
          <Link
            href={"/auth/password-reset"}
            className={`${styles.forgotPasswordText}`}
          >
            I forgot my password
          </Link>
        </div>

        <div className="mt-3">
          <button
            onClick={handleSubmit}
            type="submit"
            className={`${styles.signInButton} btn btn-primary w-75 mt-4`}
          >
            Sign In
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default SignInPage;
