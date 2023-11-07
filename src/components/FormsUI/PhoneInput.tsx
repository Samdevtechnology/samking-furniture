import { Input } from "@/utils/MuiServerComponent";
import { useField, FieldHookConfig } from "formik";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
interface CustomProps {
  variant?: "static" | "standard" | "outlined";
  helperText?: string;
  label?: string;
  fullWidth?: boolean;
  size?: "md" | "lg";
}

const PhoneInput = (props: CustomProps & FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props);
  const {
    name,
    variant = "outlined",
    size = "md",
    type,
    className,
    helperText,
    label,
    fullWidth,
  } = props;

  const configPhoneInput = {
    ...field,
    size,
    type,
    variant,
    className: clsx(`${className}`, {
      "w-full": fullWidth === true,
    }),
    error: false,
    pattern: "[0-9]*",
  };

  if (meta && meta.touched && meta.error) {
    configPhoneInput.error = true;
  }

  const numericPattern = /^[0-9]*$/;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Check if the input value matches the numeric pattern

    const numericValue = e.target.value.replace(/\D/g, "");

    // Update the field value with the input value
    helpers.setValue(numericValue);
  };

  return (
    <div className={fullWidth ? " w-full" : ""}>
      <Input
        label={label ? label : name}
        {...configPhoneInput}
        onChange={handleInputChange}
      />
      {Boolean(helperText) && !meta.error && (
        <small className="flex items-center">
          <InformationCircleIcon className="w-4 h-4 mr-1" />
          {helperText}
        </small>
      )}
      {meta.touched && meta.error && (
        <small className="flex items-center text-red-400">
          <InformationCircleIcon className="w-4 h-4 mr-1" />
          {meta.error}
        </small>
      )}
    </div>
  );
};

export default PhoneInput;
