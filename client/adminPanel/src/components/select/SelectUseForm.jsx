import { Controller, useFormContext } from "react-hook-form";
import Select from "./Select";
const SelectUseForm = ({ name, label, options }) => {
  const { register } = useFormContext();
  const { ...registerProps } = { ...register(name) };

  return (
    <Controller
      {...registerProps}
      render={({ field }) => (
        <Select
          label={label}
          name={field.name}
          value={field.value || ""}
          options={options}
          handleChange={field.onChange}
        />
      )}
    ></Controller>
  );
};

export default SelectUseForm;
