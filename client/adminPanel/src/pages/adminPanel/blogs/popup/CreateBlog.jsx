import { Grid2 } from "@mui/material";
import Popup from "../../../../containers/popup";
import { Form, FormProvider, useForm } from "react-hook-form";
import InputUseForm from "../../../../components/input/InputUseForm";
import FileInputUseForm from "../../../../components/fileInput/FileInputUseForm";

const CreateBlog = ({ open, handleClose }) => {
  const methods = useForm();

  const handleSubmit = methods.handleSubmit((data) => {
    console.log(data, "data");
  });

  return (
    <Popup
      open={open}
      handleClose={handleClose}
      popupTitle={"New Blog"}
      minWidth="700px"
      mainButtonTitle={"Create"}
      onClickMainButton={handleSubmit}
    >
      <FormProvider {...methods}>
        <Form>
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <InputUseForm name={"name"} label={"Name"} />
            </Grid2>
            <Grid2 size={12}>
              <InputUseForm
                name={"description"}
                label={"Description"}
                rows={4}
                multiline
              />
            </Grid2>
            <Grid2 size={12}>
              <FileInputUseForm name={"image"} base64 />
            </Grid2>
          </Grid2>
        </Form>
      </FormProvider>
    </Popup>
  );
};

export default CreateBlog;
