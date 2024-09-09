import { Controller, useFormContext } from "react-hook-form";
import Input from "./Input";
const InputUseForm = ({ name, label, ...props }) => {
  const { register } = useFormContext();

  const { ...registerProps } = { ...register(name) };

  return (
    <Controller
      {...registerProps}
      render={({ field }) => (
        <Input
          {...props}
          label={label}
          name={field.name}
          value={field.value || ""}
          onChange={field.onChange}
        />
      )}
    ></Controller>
  );
};

export default InputUseForm;
