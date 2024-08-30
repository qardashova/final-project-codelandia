import { Controller, useFormContext } from "react-hook-form";
import Input from "./Input";
const InputUseForm = ({ name, label }) => {
  const { register } = useFormContext();

  const { ...registerProps } = { ...register(name) };

  return (
    <Controller
      {...registerProps}
      render={({ field }) => (
        <Input
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
