import { forwardRef, Ref } from "react";
import { useField, FieldHookConfig } from "formik";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input } from "@/utils/MuiServerComponent";
import { InformationCircleIcon } from "@heroicons/react/24/solid";
import { subYears, getYear, getMonth } from "date-fns";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

interface CustomHeaderProps {
  date: Date;
  changeYear: (year: number) => void;
  changeMonth: (month: number) => void;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}

interface DatePickerProp {
  variant?: "static" | "standard" | "outlined";
  helperText?: string;
  label?: string;
  size?: "md" | "lg";
}

interface InputProps extends DatePickerProp {
  value?: string;
  name: string;
  error: boolean;
  onClick?: () => void;
}

const MyInput = forwardRef<HTMLInputElement, InputProps>(
  ({ value = "", onClick, label, name, variant, size, error }, ref) => {
    return (
      <Input
        icon={!value && <CalendarIcon onClick={onClick} />}
        inputRef={ref as Ref<HTMLInputElement>}
        name={name}
        value={value}
        variant={variant}
        size={size}
        onClick={onClick}
        label={label}
        readOnly
        error={error}
      />
    );
  }
);

MyInput.displayName = "MyInput";

const CustomHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: CustomHeaderProps) => {
  const startYear = getYear(subYears(new Date(), 120));
  const stopYear = getYear(subYears(new Date(), 18));
  const years: number[] = [];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  for (let year = startYear; year <= stopYear; year++) {
    years.push(year);
  }

  return (
    <div className="m-3 px-1 flex justify-between items-center">
      <button
        type="button"
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      >
        <ChevronLeftIcon
          className={`w-5 h-5 text-gray-400 hover:text-gray-600 ${
            prevMonthButtonDisabled ? "opacity-0" : ""
          }`}
        />
      </button>
      <select
        className="py-1 rounded-sm"
        value={getYear(date)}
        onChange={({ target: { value } }) => changeYear(parseInt(value))}
      >
        {years.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        className="py-1 rounded-sm"
        value={months[getMonth(date)]}
        onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
      >
        {months.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
      >
        <ChevronRightIcon
          className={`w-5 h-5 text-gray-400 hover:text-gray-600 ${
            nextMonthButtonDisabled ? "opacity-0" : ""
          }`}
        />
      </button>
    </div>
  );
};

function DatePicker(props: DatePickerProp & FieldHookConfig<Date | null>) {
  const {
    name = "date",
    variant = "outlined",
    size = "md",
    helperText,
    label,
  } = props;
  let error = false;

  const [field, meta, helpers] = useField(name);

  const selectedDate = field.value ? new Date(field.value) : null;

  if (meta && meta.touched && meta.error) {
    error = true;
  }

  const inputOpt = {
    name,
    variant,
    size,
    label,
    error,
  };

  return (
    <div className="[&>div]:w-full">
      <ReactDatePicker
        {...field}
        renderCustomHeader={CustomHeader}
        selected={selectedDate}
        onChange={(date) => helpers.setValue(date)}
        customInput={<MyInput {...inputOpt} />}
        dateFormat="dd/MM/yyyy"
        minDate={subYears(new Date(), 120)}
        maxDate={subYears(new Date(), 18)}
        isClearable
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
}

export default DatePicker;
