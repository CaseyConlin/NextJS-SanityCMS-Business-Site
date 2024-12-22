import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { FormInputProps } from "./FormInputProps";
import { SxProps, Theme } from "@mui/system";

type FormInputTextProps = FormInputProps & {
  requrerules?: string;
  autocomplete?: string;
  multiline?: boolean;
  rows?: number;
  styleProps?: SxProps<Theme>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};
export const FormInputText = ({
  name,
  control,
  rules,
  autocomplete,
  label,
  multiline = false,
  rows,
  onChange,
  value,
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
}: FormInputTextProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
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
                  onChange(e.target.value);
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
