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

type formModel = {
  current: string;
  new: string;
  confirm: string;
};

const FORM_VALIDATION = Yup.object().shape({
  current: Yup.string()
    .min(5, "Password is too short")
    .required("Pls provide password"),
  new: Yup.string()
    .min(5, "Password is too short")
    .required("Pls provide password"),
  confirm: Yup.string()
    .min(5, "Password is too short")
    .required("Pls provide password"),
});

const PasswordForm = () => {
  const INITIAL_FORM_STATE: formModel = {
    current: "",
    new: "",
    confirm: "",
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
              <TextInput
                name="current"
                type="password"
                label="Current Password"
              />
              <TextInput name="new" type="password" label="New Password" />
              <TextInput
                name="confirm"
                type="password"
                label="Confirm Password"
              />
              <Button
                type="submit"
                className={`rounded-md inline-flex just-cont ${CUSTOM_BTN_CONFIG()}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? <Spinner /> : "Change Password"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default PasswordForm;
