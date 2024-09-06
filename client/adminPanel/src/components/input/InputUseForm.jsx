import { Controller, useFormContext } from "react-hook-form";
import Input from "./Input";
const InputUseForm = ({ name, label, type }) => {
  const { register } = useFormContext();

  const { ...registerProps } = { ...register(name) };

  return (
    <Controller
      {...registerProps}
      render={({ field }) => (
        <Input
          label={label}
          type={type}
          name={field.name}
          value={field.value || ""}
          onChange={field.onChange}
        />
      )}
    ></Controller>
  );
};

export default InputUseForm;
