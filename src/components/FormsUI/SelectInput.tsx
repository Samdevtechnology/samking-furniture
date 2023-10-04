import { Select, Option as MuiOption } from "@/utils/MuiServerComponent";
import { useField, FieldHookConfig } from "formik";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import React from "react";
interface SelectProps {
  variant?: "static" | "standard" | "outlined";
  helperText?: string;
  label?: string;
  fullWidth?: boolean;
  size?: "md" | "lg";
  children: React.ReactNode;
}
interface OptionProps {
  children: string;
  value?: string;
}

export const SelectInput = (props: SelectProps & FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props);
  const {
    name,
    variant = "outlined",
    size = "md",
    type = "select",
    className,
    helperText,
    label,
    fullWidth,
    children,
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

  const Options = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const value = child.props.value;
      const children = child.props.children;
      return (
        <MuiOption
          key={value ?? children.toLowerCase()}
          value={value ?? children.toLowerCase()}
        >
          {children}
        </MuiOption>
      );
    }
    return null;
  });

  return (
    <div className={fullWidth ? " w-full" : ""}>
      <Select
        label={label ? label : name}
        {...configSelectInput}
        onChange={(val) => helpers.setValue(val || "")}
        onClick={(e) => e.preventDefault()}
      >
        {Options}
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

export const Option = ({ children, value }: OptionProps) => {
  return (
    <MuiOption value={value ?? children.toLowerCase()}>{children}</MuiOption>
  );
};
export default SelectInput;
