import { Grid2 } from "@mui/material";
import Popup from "../../../../containers/popup";
import { Form, FormProvider, useForm } from "react-hook-form";
import InputUseForm from "../../../../components/input/InputUseForm";
import FileInputUseForm from "../../../../components/fileInput/FileInputUseForm";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../redux/store";
import { upload } from "../../../../redux/actions/blogActions";

const CreateBlog = ({ open, handleClose }) => {
  const methods = useForm();
  const dispatch = useAppDispatch();

  const handleSubmit = methods.handleSubmit((data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("image", data.image);
    dispatch(upload(formData));
  });

  useEffect(() => {
    if (!open) {
      methods.reset();
    }
  }, [open, methods]);

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
        <Form encType="multipart/form-data">
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
              <FileInputUseForm name={"image"} />
            </Grid2>
          </Grid2>
        </Form>
      </FormProvider>
    </Popup>
  );
};

export default CreateBlog;
