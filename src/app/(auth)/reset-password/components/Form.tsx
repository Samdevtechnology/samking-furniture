"use client";

import TextInput from "@/components/FormsUI/TextInput";
import { Button, Spinner } from "@/utils/MuiServerComponent";
import CUSTOM_BTN_CONFIG from "@/utils/BUTTON_CONFIG";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import useAuthContext from "@/app/(auth)/context/AuthContext";

type formModel = {
  email: string;
};

type EmailResModel = {
  message?: string;
  redirect?: boolean;
  ok?: boolean;
  samkingSid?: string;
};

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string()
    .email("Email is not valid")
    .required("Pls provide an email"),
});

const ResetForm = () => {
  const router = useRouter();
  const { email, updateAuthContext } = useAuthContext();

  const INITIAL_FORM_STATE: formModel = {
    email: email || "",
  };

  const submitHandler = async (
    values: formModel,
    actions: FormikHelpers<formModel>
  ) => {
    if (email !== values.email) {
      updateAuthContext({ email: values.email });
    }
    const response = await fetch("/api/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: values.email }),
    });
    const emailRes: EmailResModel = await response.json();

    if (emailRes.redirect) {
      if (emailRes.message) {
        updateAuthContext({ message: emailRes.message });
      }
      return router.push("/register");
    }

    if (emailRes.samkingSid) {
      updateAuthContext({ samkingSid: emailRes.samkingSid });
      return router.push("/reset-password/verification");
    }
  };

  return (
    <>
      <Formik
        initialValues={{ ...INITIAL_FORM_STATE }}
        validationSchema={FORM_VALIDATION}
        onSubmit={submitHandler}
      >
        {({ isSubmitting }) => (
          <Form className="flex flex-col gap-y-6">
            <TextInput size="lg" name="email" type="email" label="Email" />

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
