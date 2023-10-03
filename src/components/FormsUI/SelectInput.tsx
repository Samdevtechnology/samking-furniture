import { Select, Option } from "@/utils/MuiServerComponent";
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

const SelectInput = (props: CustomProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
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

  const configSelectInput = {
    ...field,
    size,
    type,
    variant,
    className: clsx(`${className}`, {
      "w-full": fullWidth === true,
    }),
    error: false,
  };

  if (meta && meta.touched && meta.error) {
    configSelectInput.error = true;
  }

  return (
    <div className={fullWidth ? " w-full" : ""}>
      <Select label={label ? label : name} {...configSelectInput}>
        <Option value="love">love</Option>
        <Option value="love1">love1</Option>
        <Option value="love2">love2</Option>
      </Select>
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

export default SelectInput;
