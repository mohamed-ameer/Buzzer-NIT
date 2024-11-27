"use client";
import {auth} from "../../../../firebase";
import {signInWithPhoneNumber, ConfirmationResult, RecaptchaVerifier} from "firebase/auth";
import React, { useState, useEffect, useTransition, FormEvent } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "../../components/ui/input-otp";
import { Input } from "../../components/ui/input";
import {Button} from "../../components/ui/button";
import Loading from "../../components/Loading";
import {useRouter} from "next/navigation";
import Link from 'next/link';
const BuzzerAppLogin = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [resendCountdown, setResendCountdown] = useState(0);
  const [recaptchaVerifier, setRecaptchaVerifier] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [confirmationResult, setConfirmationResult] = useState(null);
  
  useEffect(() => {
    let timer;
    if (resendCountdown > 0) {
      timer = setTimeout(() => {
        setResendCountdown(resendCountdown - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [resendCountdown]);

  useEffect(() => {
    const recaptchaVerifier = new RecaptchaVerifier(auth,"recaptcha-container", {
      size: "invisible",
      callback: (response) => {
        // Handle the response from the reCAPTCHA verification
      },
    });
    setRecaptchaVerifier(recaptchaVerifier);
    return () => {
      recaptchaVerifier.clear();
    };
  }, []);

  useEffect(() => {
    const hasEnteredAllOtpDigits = otp.length === 6;
    if (hasEnteredAllOtpDigits) {
      verifyOtp();
    }
  }, [otp]);
  const verifyOtp = async () => {
    startTransition(async () => {
      setError("");
      if (!confirmationResult) {
        setError("Please request OTP first.");
        return;
      }
      try {
        await confirmationResult?.confirm(otp);
        setSuccess("OTP verified successfully!");
        setError("");
        setPhoneNumber("");
        setOtp("");
        router.push("/");
      } catch (error) {
        console.error("Error verifying OTP:", error);
        setError("Invalid OTP. Please try again.");
      }
    })
  };

  const requestOtp = async (e) => {
    e.preventDefault();
    setResendCountdown(60);
    startTransition(async () =>{
      setError("");
      if (!phoneNumber) {
        setError("Please enter a phone number.");
        return;
      }
      if (!recaptchaVerifier) {
        setError("Recaptcha verification failed.");
        return;
      }
      try {
        const confirmationResult = await signInWithPhoneNumber(
          auth,
          phoneNumber, 
          recaptchaVerifier);
        setConfirmationResult(confirmationResult);
        setSuccess("OTP sent successfully!");
        setError("");
      } catch (error) {
        setResendCountdown(0);
        if (error.code === "auth/invalid-phone-number") {
          setError("Invalid phone number.");
        } else if (error.code === "auth/too-many-requests") {
          setError("Too many requests. Please try again later.");
        } else {
          setError("Failed to send OTP. Please try again.");
        }
        setSuccess("");
      }
    })
  };
  return (
    <div className="max-w-7xl mx-auto lg:mx-20 px-4">
      <div className="flex items-center justify-between h-screen">
        <div className="w-full max-w-md text-center lg:text-start">
          <div className="px-6 py-8 ">
            <Link href="/">
              <div className="flex justify-center lg:justify-start mb-6">
                <img src="/images/auth/app-logo.svg" alt="Buzzer App Logo" className="" />
              </div>
            </Link>
            <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
            <p className="text-gray-600 mb-8">
              {confirmationResult ? "Enter the OTP sent to your phone number" : "Enter your phone number with country code (ie. +20 for egypt)"}
            </p>
            {!confirmationResult &&
            <form onSubmit={requestOtp}>
              <div className="mb-6">
                <div className="relative">
                  <Input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="phone number"
                    className="w-full px-4 py-3 pl-4 rounded-lg bg-transparent border border-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-colors"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={isPending || !phoneNumber || resendCountdown > 0}
                className="w-full bg-transparent border border-yellow-500 text-black-500 rounded-r hover:bg-yellow-500 hover:text-white transition-colors duration-300 py-2 px-6 rounded-lg transition-colors"
              >
                {resendCountdown > 0 
                ? `Resend OTP in ${resendCountdown}s` 
                : isPending
                ? "Sending OTP"
                : "Next"}
              </button>
            </form>
            }
            {confirmationResult && 
            <div className="flex flex-col items-center justify-center mt-4">
              <InputOTP maxLength={6} value={otp} onChange={(value) => setOtp(value)} >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
            }
            <div className="p-10 text-center">
                  {isPending && <Loading />}
                  {error && <p className="text-red-500">{error}</p>}
                  {success && <p className="text-green-500">{success}</p>}
            </div>
          </div>
          <div className="px-6 py-4 text-center">
            <p className="text-gray-600">Don't have an Account? <Link href="/register" passHref className="text-red-400 font-medium">Register</Link></p>
          </div>
        </div>
        <div className="hidden lg:block">
          <img
            src="/images/auth/login-illustration.svg"
            alt="Buzzer App Illustration"
            className=""
          />
        </div>
      </div>
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default BuzzerAppLogin;