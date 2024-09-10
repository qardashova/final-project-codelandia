import { Form, FormProvider, useForm } from "react-hook-form";
import Popup from "../../../../containers/popup";
import { Grid2 } from "@mui/material";
import InputUseForm from "../../../../components/input/InputUseForm";
import { useAppDispatch } from "../../../../redux/store";
import { addUser } from "../../../../redux/actions/userActions";
import { useEffect } from "react";

const AddUser = ({ open, handleClose }) => {
  const methods = useForm();
  const dispatch = useAppDispatch();

  const handleSubmit = methods.handleSubmit((data) => {
    dispatch(addUser(data));
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
      popupTitle={"New User"}
      minWidth="700px"
      mainButtonTitle={"Create"}
      onClickMainButton={handleSubmit}
    >
      <FormProvider {...methods}>
        <Form>
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <InputUseForm name={"fullname"} label={"Fullname"} />
            </Grid2>
            <Grid2 size={6}>
              <InputUseForm name={"username"} label={"Username"} />
            </Grid2>
            <Grid2 size={6}>
              <InputUseForm
                name={"password"}
                label={"Password"}
                type={"password"}
              />
            </Grid2>
          </Grid2>
        </Form>
      </FormProvider>
    </Popup>
  );
};

export default AddUser;
