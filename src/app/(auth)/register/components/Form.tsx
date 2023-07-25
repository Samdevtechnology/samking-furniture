"use client";

import TextInput from "@/components/FormsUI/TextInput";
import { Button, Spinner } from "@/utils/MuiServerComponent";
import TextLinkWrap from "@/utils/TextLinkWrap";
import Checkbox from "@/components/FormsUI/Checkbox";
import CUSTOM_BTN_CONFIG from "@/utils/BUTTON_CONFIG";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

type formModel = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  promotions: boolean;
};

const INITIAL_FORM_STATE: formModel = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  promotions: false,
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
  const Router = useRouter();

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
    console.log(userInfo);
    Router.push("/login");
  };

  return (
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
  );
};

export default RegisterForm;
