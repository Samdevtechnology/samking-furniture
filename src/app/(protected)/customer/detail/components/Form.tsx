"use client";

import TextInput from "@/components/FormsUI/TextInput";
import { Alert, Button, Spinner } from "@/utils/MuiServerComponent";
import CUSTOM_BTN_CONFIG from "@/utils/BUTTON_CONFIG";
import { Form, Formik, FormikHelpers } from "formik";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import * as Yup from "yup";
import { signIn } from "next-auth/react";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import CardContainer from "@/app/(protected)/components/CardContainer";
import SelectInput, { Option } from "@/components/FormsUI/SelectInput";

type formModel = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: string;
  dob: string;
};

const FORM_VALIDATION = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string().email("Email is not valid").required("Email is required"),
  phone: Yup.string(),
  gender: Yup.string().oneOf(["male", "female"]).required("Gender is required"),
  dob: Yup.date()
    .max(new Date(), "Date of birth cannot be in the future")
    .required("Date of birth is required")
    .test(
      "is-valid-age",
      "You must be at least 18 years old",
      function (value) {
        const currentDate = new Date();
        const userDate = new Date(value);
        const age = currentDate.getFullYear() - userDate.getFullYear();
        return age >= 18;
      }
    ),
});

const DetailsForm = () => {
  const INITIAL_FORM_STATE: formModel = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
  };

  const router = useRouter();
  const alertRef = useRef<HTMLDivElement>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const submitHandler = async (
    values: formModel,
    actions: FormikHelpers<formModel>
  ) => {
    const res = await signIn("credentials", {
      ...values,
      redirect: false,
    });

    if (res?.error) {
      setErrorMsg(res.error);
    }
    if (
      (res?.ok && res?.url?.includes("/login")) ||
      res?.url?.includes("/register")
    )
      res.url = "";
    const url = res?.url || "/profile";
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

      <div>
        <Formik
          initialValues={{ ...INITIAL_FORM_STATE }}
          validationSchema={FORM_VALIDATION}
          onSubmit={submitHandler}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-y-4">
              <CardContainer>
                <TextInput name="firstName" label="First Name" />
                <TextInput name="lastName" label="Last Name" />
                <TextInput name="email" type="email" label="Email" />
                <TextInput name="phone" label="Contact number" />
                <SelectInput name="gender" label="Gender">
                  <Option>Male</Option>
                  <Option>Female</Option>
                  <Option>Other</Option>
                </SelectInput>
                <TextInput name="phone" label="Date of Birth" />
              </CardContainer>
              <div className="px-6">
                <Button
                  type="submit"
                  className={`w-full rounded-md inline-flex just-cont ${CUSTOM_BTN_CONFIG()}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Spinner /> : "SAVE"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default DetailsForm;
