import { Form, FormProvider, useForm } from "react-hook-form";
import Popup from "../../../../containers/popup";
import { useAppDispatch, useAppSelector } from "../../../../redux/store";
import { useEffect } from "react";
import InputUseForm from "../../../../components/input/InputUseForm";
import { Grid2 } from "@mui/material";
import { addFAQ, updateFAQ } from "../../../../redux/actions/faqActions";
import { handleResetFAQ } from "../../../../redux/reducers/faqReducer";

const AddFAQ = ({ open, handleClose }) => {
  const { faq } = useAppSelector((state) => state.faq);
  const methods = useForm();
  const dispatch = useAppDispatch();

  const handleSubmit = methods.handleSubmit((data) => {
    if (faq.id) {
      dispatch(
        updateFAQ({
          ...data,
          id: faq.id,
          priority: +data.priority,
        })
      );
    } else {
      dispatch(
        addFAQ({
          ...data,
          priority: +data.priority,
        })
      );
    }
  });

  useEffect(() => {
    if (!open) {
      methods.reset();
      dispatch(handleResetFAQ());
    } else {
      const { question, answer, priority } = faq;
      methods.reset({ question, answer, priority });
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
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <InputUseForm name={"question"} label={"Question"} />
            </Grid2>
            <Grid2 size={12}>
              <InputUseForm
                name={"priority"}
                type={"number"}
                label={"Priority"}
              />
            </Grid2>
            <Grid2 size={12}>
              <InputUseForm name={"answer"} label="Answer" rows={4} multiline />
            </Grid2>
          </Grid2>
        </Form>
      </FormProvider>
    </Popup>
  );
};

export default AddFAQ;
