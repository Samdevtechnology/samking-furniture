"use client";

import React, { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { Button, Spinner } from "@/utils/MuiServerComponent";
import CUSTOM_BTN_CONFIG from "@/utils/BUTTON_CONFIG";
import useAuthContext from "@/app/(auth)/context/AuthContext";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
  const { samkingSid, updateAuthContext } = useAuthContext();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [otpCountdown, setOtpCountdown] = useState(15);
  const [otpBtn, setOtpBtn] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!samkingSid) {
    router.replace("/register");
  }

  useEffect(() => {
    if (otpCountdown > 0) {
      const timer = setInterval(() => {
        setOtpCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    } else {
      setOtpBtn(true);
    }
  }, [otpCountdown]);

  const startCountdown = () => {
    setOtpCountdown(30);
    requestNewOtpHandler();
    setOtpBtn(false);
  };

  const requestNewOtpHandler = async () => {
    const response = await fetch("/api/reset-password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ samkingSid, type: "newOtp" }),
    });

    const newOtpRes = await response.json();

    if (newOtpRes.error) {
      updateAuthContext({ message: newOtpRes.message });
      return router.push("/reset-password");
    }
    if (newOtpRes.ok) {
      updateAuthContext({ samkingSid: newOtpRes.samkingSid });
    }
  };

  const formSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (otp.length !== 4) {
      setError("This verification code is not valid. Pls Check!");
      return setIsSubmitting(false);
    }

    if (!samkingSid) {
      setError("The verification code is not valid. Please request a new one.");
      return setIsSubmitting(false);
    }

    const response = await fetch("/api/reset-password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ samkingSid, otp, type: "compare" }),
    });

    const otpRes = await response.json();
    if (otpRes.error) {
      setError(otpRes.message);
      setIsSubmitting(false);
    }

    if (otpRes.ok) {
      return router.push("/reset-password/reset");
    }
  };

  const handleOtpChange = (otpValue: string) => {
    // Allow only numeric values
    if (/^\d*$/.test(otpValue)) {
      setOtp(otpValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Prevent moving focus on non-numeric key press
    const key = e.key;
    if (!/^\d$/.test(key) && key !== "Backspace") {
      e.preventDefault();
    }
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="pb-8 flex just-cont flex-col w-fit m-auto">
          <div className="flex just-cont" onKeyDown={handleKeyDown}>
            <OtpInput
              value={otp}
              onChange={handleOtpChange}
              numInputs={4}
              containerStyle={"flex gap-x-8"}
              inputStyle={
                "flex !w-20 outline outline-[1px] focus:outline-2 focus:outline-primary focused rounded-md bg-transparent px-4 py-4 text-3xl"
              }
              renderInput={(props) => <input {...props} />}
            />
          </div>
          {Boolean(error) && (
            <span className="text-red-400 pt-1 text-sm">{error}</span>
          )}
        </div>
        <Button
          type="submit"
          className={`rounded-md inline-flex font-primary just-cont w-full ${CUSTOM_BTN_CONFIG()}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? <Spinner /> : "submit"}
        </Button>
      </form>
      <div className="mt-8 text-center">
        {otpBtn ? (
          <button
            onClick={startCountdown}
            className="font-secondary font-medium text-xl w-max transition-all h-7 underline decoration-[0.5px] hover:decoration-1 underline-offset-4"
          >
            Request a new code
          </button>
        ) : (
          <p className="text-sm font-medium">
            Haven&apos;t received the verification code yet? Sometimes it takes
            a moment. You can request a new OTP in&nbsp;
            <span className=" text-light-blue-800">
              {otpCountdown} seconds.
            </span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Form;
