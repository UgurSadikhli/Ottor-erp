import nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/json-transport';

export function generateOTP(length: number): string {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < length; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}

export async function sendOTP(email: string, otp: string): Promise<void> {
    const transporter = nodemailer.createTransport({
        host: "us2.smtp.mailhostbox.com",
        port: 587,
        secure: false,
        auth: {
            user: 'support@avazdg.tech', 
            pass: 'XYcCM$(4',
        }
    });

    const mailOptions: MailOptions = {
        from: 'support@avazdg.tech', 
        to: email,
        subject: 'Your OTP for verification',
        text: `Your OTP is ${otp}. Please use this OTP to verify your account.`
    };

    await transporter.sendMail(mailOptions);
    console.log('OTP sent successfully!');
}

