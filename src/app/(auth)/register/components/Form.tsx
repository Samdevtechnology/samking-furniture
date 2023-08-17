"use client";

import TextInput from "@/components/FormsUI/TextInput";
import { Alert, Button, Spinner } from "@/utils/MuiServerComponent";
import TextLinkWrap from "@/utils/TextLinkWrap";
import Checkbox from "@/components/FormsUI/Checkbox";
import CUSTOM_BTN_CONFIG from "@/utils/BUTTON_CONFIG";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import useAuthContext from "@/app/(auth)/context/AuthContext";

type formModel = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  promotions: boolean;
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("Pls Provide First Name"),
  lastName: Yup.string().required("Pls Provide Last Name"),
  email: Yup.string()
    .email("Email is not valid")
    .required("Pls provide an Email"),
  password: Yup.string()
    .min(6, "Password is too short")
    .required("Pls provide password"),
  promotions: Yup.boolean().nullable(),
});

const RegisterForm = () => {
  const { email, message } = useAuthContext();
  const alertRef = useRef<HTMLDivElement>(null);
  const Router = useRouter();

  const [open, setOpen] = useState(true);

  const INITIAL_FORM_STATE: formModel = {
    firstName: "",
    lastName: "",
    email: email || "",
    password: "",
    promotions: false,
  };

  const submitHandler = async (
    values: formModel,
    actions: FormikHelpers<formModel>
  ) => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...values }),
    });

    const userInfo = await response.json();
    Router.push("/login");
  };

  return (
    <>
      {message && (
        <div ref={alertRef} className="py-6 -mt-5">
          <Alert
            open={open}
            onClose={() => setOpen(false)}
            color="orange"
            className="text-xs md:text-sm"
            variant="ghost"
          >
            <span>{` ${message}. Create new`}</span>
          </Alert>
        </div>
      )}

      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={submitHandler}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-y-4">
            <div className="flex justify-between flex-col sm:flex-row items-center gap-y-4 gap-x-8">
              <TextInput label="First Name" name="firstName" fullWidth />
              <TextInput label="Last Name" name="lastName" fullWidth />
            </div>
            <TextInput label="Email" name="email" type="email" />
            <div>
              <TextInput
                label="Password"
                name="password"
                type="password"
                helperText="minimum of 6 characters."
              />
            </div>
            <div>
              <legend>
                <Checkbox
                  className="rounded-full"
                  containerClassName="-ml-3"
                  labelClassName="text-inherit text-sm font-normal"
                  label="I'd like to receive exclusive promotions, discounts and trends mails."
                  name="promotions"
                />
              </legend>
            </div>
            <Button
              type="submit"
              className={`rounded-md text-center inline-flex just-cont ${CUSTOM_BTN_CONFIG()}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spinner /> : "CREATE ACCOUNT"}
            </Button>
            <small>
              By creating your account you agree to the &nbsp;
              <TextLinkWrap href="/" scale={false}>
                Terms & conditions
              </TextLinkWrap>
              &nbsp; and &nbsp;
              <TextLinkWrap href="/" scale={false}>
                cookies & Privacy Policy
              </TextLinkWrap>
            </small>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default RegisterForm;
