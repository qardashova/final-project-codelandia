import { Form, FormProvider, useForm } from "react-hook-form";
import Popup from "../../../../containers/popup";
import { useAppDispatch } from "../../../../redux/store";
import { useEffect } from "react";

const AddFAQ = ({ open, handleClose }) => {
  const methods = useForm();
  const dispatch = useAppDispatch();

  const handleSubmit = methods.handleSubmit((data) => {
    console.log(data);
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
      popupTitle={"New FAQ"}
      minWidth="700px"
      mainButtonTitle={"Create"}
      onClickMainButton={handleSubmit}
    >
      <FormProvider {...methods}>
        <Form>
          
        </Form>
      </FormProvider>
    </Popup>
  );
};

export default AddFAQ;
