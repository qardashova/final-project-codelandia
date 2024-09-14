import { Grid2 } from "@mui/material";
import Popup from "../../../../containers/popup";
import { Form, FormProvider, useForm } from "react-hook-form";
import InputUseForm from "../../../../components/input/InputUseForm";
import FileInputUseForm from "../../../../components/fileInput/FileInputUseForm";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { addBlog, updateBlog } from "../../../../redux/actions/blogActions";
import { handleResetBlog } from "../../../../redux/reducers/blogReducer";
// import { upload } from "../../../../redux/actions/blogActions";

const CreateBlog = ({ open, handleClose }) => {
  const { blog } = useAppSelector((state) => state.blog);
  const methods = useForm();
  const dispatch = useAppDispatch();
  const image = methods.watch("image");

  const handleSubmit = methods.handleSubmit((data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append(
      "image",
      blog.image && !data.image
        ? blog.image.replace("http://localhost:3001/image/", "")
        : data.image
    );
    if (blog.id) {
      formData.append("id", blog.id);
      dispatch(updateBlog(formData));
    } else {
      console.log("jj");

      dispatch(addBlog(formData));
    }
  });

  useEffect(() => {
    if (!open) {
      methods.reset();
      dispatch(handleResetBlog());
    } else {
      const { name, description } = blog;
      methods.reset({ name, description });
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
            {blog.image && !image && (
              <Grid2 size={12}>
                <img
                  src={blog.image}
                  width={"100%"}
                  style={{ margin: "10px 0 ", maxHeight: "300px" }}
                />
              </Grid2>
            )}
          </Grid2>
        </Form>
      </FormProvider>
    </Popup>
  );
};

export default CreateBlog;
