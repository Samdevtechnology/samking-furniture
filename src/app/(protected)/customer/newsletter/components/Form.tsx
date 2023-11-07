"use client";

import { Alert, Button, Spinner } from "@/utils/MuiServerComponent";
import CUSTOM_BTN_CONFIG from "@/utils/BUTTON_CONFIG";
import { Form, Formik, FormikHelpers } from "formik";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import * as Yup from "yup";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Accordion from "./Accordion";

type formModel = {
  newsletter: string;
  daily: boolean;
  weekly: boolean;
};

const FORM_VALIDATION = Yup.object().shape({
  // firstName: Yup.string().required("First Name is required"),
});

const DetailsForm = () => {
  const INITIAL_FORM_STATE: formModel = {
    newsletter: "",
    daily: false,
    weekly: false,
  };

  const router = useRouter();
  const alertRef = useRef<HTMLDivElement>(null);
  const [errorMsg, setErrorMsg] = useState("");

  const submitHandler = async (
    values: formModel,
    actions: FormikHelpers<formModel>
  ) => {
    console.log(values);
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
              <Accordion />
              <div className="py-8">
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
