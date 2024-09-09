import { Controller, useFormContext } from "react-hook-form";
import FileInput from "./FileInput";
import "./style.scss";
const FileInputUseForm = ({ name, base64 }) => {
  const { register } = useFormContext();
  const { ...registerProps } = { ...register(name) };

  return (
    <Controller
      {...registerProps}
      render={({ field }) => (
        <FileInput
          name={field.name}
          value={field.value || ""}
          handleChange={(event) => {
            const file = event.target.files[0];
            if (file) {
              if (base64) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  field.onChange(reader.result);
                };
                reader.readAsDataURL(file);
              } else {
                field.onChange(file);
              }
            }
          }}
        />
      )}
    ></Controller>
  );
};

export default FileInputUseForm;
