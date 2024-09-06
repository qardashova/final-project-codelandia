import { Controller, useFormContext } from "react-hook-form";
import MultiSelect from "./MultiSelect";
const SelectUseForm = ({ name, label, options }) => {
  const { register } = useFormContext();
  const { ...registerProps } = { ...register(name) };

  return (
    <Controller
      {...registerProps}
      render={({ field }) => (
        <MultiSelect
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
