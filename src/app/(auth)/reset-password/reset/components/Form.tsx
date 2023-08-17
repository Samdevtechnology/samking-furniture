"use client";

import TextInput from "@/components/FormsUI/TextInput";
import { Alert, Button, Spinner } from "@/utils/MuiServerComponent";
import CUSTOM_BTN_CONFIG from "@/utils/BUTTON_CONFIG";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import useAuthContext from "@/app/(auth)/context/AuthContext";
import { useState } from "react";

type formModel = {
  password: string;
  confirm: string;
};

const FORM_VALIDATION = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password is too short")
    .required("Pls input your new password"),
  confirm: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords don't match")
    .required("Pls confirm your password"),
});

const ResetForm = () => {
  const router = useRouter();
  const { samkingSid, updateAuthContext } = useAuthContext();
  const [error, setError] = useState("");
  const [open, setOpen] = useState(true);

  const INITIAL_FORM_STATE: formModel = {
    password: "",
    confirm: "",
  };

  const submitHandler = async (
    values: formModel,
    actions: FormikHelpers<formModel>
  ) => {
    const response = await fetch("/api/reset-password", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        samkingSid,
        password: values.password,
        confirm: values.password,
      }),
    });

    const newPassRes = await response.json();
    console.log("🚀 ~ file: Form.tsx:54 ~ ResetForm ~ newPassRes:", newPassRes);

    if (newPassRes.error) {
      return setError(newPassRes.message);
    }

    if (newPassRes.ok) {
      updateAuthContext({
        samkingSid: newPassRes.samkingSid,
        message: newPassRes.message,
      });

      return router.push("/login");
    }
  };

  return (
    <>
      {Boolean(error) && (
        <Alert
          open={open}
          onClose={() => setOpen(false)}
          color="orange"
          className="text-xs md:text-sm"
          variant="ghost"
        >
          <span>{` ${error}. Create new`}</span>
        </Alert>
      )}

      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={submitHandler}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-y-6">
            <TextInput name="password" type="password" label="Password" />
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
              {isSubmitting ? <Spinner /> : "Reset Password"}
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default ResetForm;
