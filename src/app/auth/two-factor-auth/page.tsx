"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import AuthLayout from "../auth-layout";
import styles from "./two-factor-auth.module.css";
import { useRouter } from "next/navigation";

const TwoFactorAuthPage: React.FC = () => {
  const email = localStorage.getItem("email");
  const [otp, setOTP] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<HTMLInputElement[]>([]);
  const router = useRouter();

  const handleChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    if (value && index < otp.length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedData = event.clipboardData.getData("Text");
    const otpArray = pastedData.split("").slice(0, otp.length);
    const newOTP = [...otpArray];
    setOTP(newOTP);

    const filledIndex = otpArray.findIndex((digit) => digit !== "");
    if (
      filledIndex !== -1 &&
      filledIndex < otp.length - 1 &&
      inputRefs.current[filledIndex + 1]
    ) {
      inputRefs.current[filledIndex + 1].focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otpString = otp.join("");
    try {
      const response = await fetch(
        "http://localhost:3000/api/auth/validate-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: email, otp: otpString }),
        }
      );

      if (response.ok) {
        console.log("Login successful");
        console.log(response);
        router.push("/dashboard");
      } else {
        console.error("OTP validation failed");
      }
    } catch (error) {
      console.error("Error validating OTP:", error);
    }
  };

  return (
    <AuthLayout imageUrl="/assets/auth/img2.jpeg">
      <div className={`${styles.mainContainer} d-flex flex-column`}>
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
        </div>

        <div
          className={`${styles.seventyFiveToHundredContainer}d-flex mt-5 flex-column align-items-start justify-content-around`}
        >
          <p className={`${styles.minorText}`}>2FA</p>
          <h3 className={`${styles.mainText}`}>
            Please enter the 2FA code sent to your mail.
          </h3>
        </div>

        <div
          className={`${styles.seventyFiveToHundredContainer} d-flex mt-3 flex-column align-items-start justify-content-around`}
        >
          <div className="input-group d-flex flex-row ">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(ref) =>
                  (inputRefs.current[index] = ref as HTMLInputElement)
                }
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
          <button
            onClick={handleSubmit}
            type="submit"
            className={`${styles.customButton} btn btn-primary w-75 mt-4`}
          >
            Verify
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export default TwoFactorAuthPage;
