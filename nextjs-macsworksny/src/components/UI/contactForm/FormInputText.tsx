import { Controller, Path, PathValue, RegisterOptions } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { SxProps, Theme } from "@mui/system";

import { Control, FieldValues } from "react-hook-form";

type FormInputTextProps<T extends FieldValues = FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  rules?:
    | Omit<
        RegisterOptions<T, Path<T>>,
        "disabled" | "setValueAs" | "valueAsNumber" | "valueAsDate"
      >
    | undefined;
  label?: string;
  requirerules?: string;
  autocomplete?: string;
  multiline?: boolean;
  rows?: number;
  styleProps?: SxProps<Theme>;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value?: string;
  defaultValue?: PathValue<T, Path<T>>;
};
export const FormInputText = <T extends FieldValues = FieldValues>({
  name,
  control,
  rules,
  autocomplete,
  label,
  multiline = false,
  rows,
  onChange,
  value,
  defaultValue,
  styleProps = {
    fieldset: {
      color: "black",
      borderColor: "black",
    },
    label: {
      color: "black",
      "&.Mui-focused": {
        color: "#FF6600",
      },
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: "white",
      "&.Mui-focused fieldset": {
        borderColor: "#FF6600",
        color: "#FF6600",
      },
    },
  },
}: FormInputTextProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({
        field: { ref, ...field },
        fieldState: { invalid, error },
      }) => (
        <TextField
          required={rules?.required ? true : false}
          {...field}
          inputRef={ref}
          id={name}
          autoComplete={autocomplete}
          variant="outlined"
          helperText={error ? error.message : null}
          fullWidth
          error={invalid}
          label={label}
          multiline={multiline}
          rows={rows}
          sx={{ ...styleProps }}
          onChange={
            onChange
              ? (e) => {
                  onChange(e);
                  field.onChange(e);
                }
              : field.onChange
          }
          value={value}
        />
      )}
    />
  );
};
