import { Checkbox } from "@/utils/MuiServerComponent";
import { useField, FieldHookConfig } from "formik";

interface CustomProps {
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
}

const CheckboxWrapper = (props: CustomProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const { name, containerClassName, labelClassName, className, label } = props;
  let error: boolean = false;
  const configCheckbox = {
    ...field,
    id: label,
    name,
    className,
  };

  if (meta && meta.touched && meta.error) {
    error = true;
  }

  return (
    <div>
      <Checkbox
        {...configCheckbox}
        containerProps={{
          className: containerClassName,
        }}
        labelProps={{
          className: labelClassName,
        }}
        label={label}
      />
      {error && meta.touched && meta.error && (
        <small className="flex items-center text-red-400">{meta.error}</small>
      )}
    </div>
  );
};

export default CheckboxWrapper;
