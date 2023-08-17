"use client";

import TextInput from "@/components/FormsUI/TextInput";
import { Alert, Button, Spinner } from "@/utils/MuiServerComponent";
import TextLinkWrap from "@/utils/TextLinkWrap";
import CUSTOM_BTN_CONFIG from "@/utils/BUTTON_CONFIG";
import Checkbox from "@/components/FormsUI/Checkbox";
import { Form, Formik, FormikHelpers } from "formik";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import useAuthContext from "@/app/(auth)/context/AuthContext";

type formModel = {
  email: string;
  password: string;
  remember: boolean;
};

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .email("Email is not valid")
    .required("Pls provide an email"),
  password: Yup.string()
    .min(5, "Password is too short")
    .required("Pls provide password"),
  remember: Yup.boolean().nullable(),
});

const LoginForm = () => {
  const { email, updateAuthContext } = useAuthContext();

  const forgotHandler = (email: string) => {
    updateAuthContext({ email });
  };

  const INITIAL_FORM_STATE: formModel = {
    email: email || "",
    password: "",
    remember: false,
  };

  const router = useRouter();
  const alertRef = useRef<HTMLDivElement>(null);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (errorMsg) {
      alertRef?.current?.scrollIntoView({ behavior: "auto" });
    }
  }, [errorMsg]);

  const submitHandler = async (
    values: formModel,
    actions: FormikHelpers<formModel>
  ) => {
    const res = await signIn("credentials", {
      ...values,
      redirect: false,
    });

    if (res?.error) {
      return setErrorMsg(res.error);
    }
    if (res?.url?.includes("/login") || res?.url?.includes("/register"))
      res.url = "";
    const url = res?.url || "/customer/account";
    router.push(url);
  };

  return (
    <>
      {errorMsg && (
        <div ref={alertRef} className="py-6 -mt-5">
          <Alert
            color="red"
            className="text-xs md:text-sm"
            icon={<InformationCircleIcon className="h-5 w-5" />}
            variant="ghost"
          >
            <span>{errorMsg}</span>
          </Alert>
        </div>
      )}

      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={submitHandler}
      >
        {({ isSubmitting, values }) => (
          <Form className="flex flex-col gap-y-4">
            <TextInput name="email" type="email" label="Email" />
            <TextInput name="password" type="password" label="Password" />
            <div className="flex justify-between items-center">
              <legend>
                <Checkbox
                  containerClassName="-ml-3"
                  labelClassName="text-inherit font-normal"
                  label="Remember me"
                  name="remember"
                />
              </legend>
              <div>
                <TextLinkWrap scale={false} href="/reset-password">
                  <span onClick={() => forgotHandler(values.email)}>
                    Forgot password?
                  </span>
                </TextLinkWrap>
              </div>
            </div>
            <Button
              type="submit"
              className={`rounded-md inline-flex just-cont ${CUSTOM_BTN_CONFIG()}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spinner /> : "LOGIN"}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default LoginForm;
