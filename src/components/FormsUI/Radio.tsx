import { Radio } from "@/utils/MuiServerComponent";
import { useField, FieldHookConfig } from "formik";

interface CustomProps {
  label?: string;
  containerClassName?: string;
  labelClassName?: string;
}

const RadioWrapper = (props: CustomProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const { name, containerClassName, labelClassName, className, label, value } =
    props;
  let error: boolean = false;
  const configRadio = {
    ...field,
    id: label,
    type: "radio",
    name,
    className,
    value,
  };

  if (meta && meta.touched && meta.error) {
    error = true;
  }

  return (
    <div>
      <Radio
        {...configRadio}
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

export default RadioWrapper;
