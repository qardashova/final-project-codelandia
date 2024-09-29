import { Form, FormProvider, useForm } from "react-hook-form";
import Popup from "../../../../containers/popup";
import Stepper from "../../../../components/stepper";
import React, { useEffect, useState } from "react";
import CreateProduct from "./steps/CreateProduct";
import CreateProductVariants from "./steps/CreateProductVariants";
import { useAppDispatch } from "../../../../redux/store";
import { addProduct } from "../../../../redux/actions/productActions";
import {
  useGetAllColorsQuery,
  useGetAllSizesQuery,
} from "../../../../redux/rtkquery/parametricApi";

const AddProductPopup = ({ open, handleClose }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [variantData, setVariantData] = useState([]);
  const { data: colors } = useGetAllColorsQuery();
  const { data: sizes } = useGetAllSizesQuery();

  const methods = useForm();
  const dispatch = useAppDispatch();

  const handleSubmit = methods.handleSubmit((data) => {
    const { color, size, ...product } = data;
    dispatch(addProduct({ product, productVariants: variantData }));
  });

  useEffect(() => {
    if (!open) {
      methods.reset();
      setActiveStep(0);
      setVariantData([]);
    }
  }, [open, methods]);

  return (
    <Popup
      open={open}
      handleClose={handleClose}
      popupTitle={"New Product"}
      minWidth="700px"
    >
      <FormProvider {...methods}>
        <Form encType="multipart/form-data">
          <Stepper
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            steps={stepList}
            handleSubmit={handleSubmit}
          >
            <CreateProduct colors={colors} sizes={sizes} />
            <CreateProductVariants
              methods={methods}
              colors={colors}
              sizes={sizes}
              variantData={variantData}
              setVariantData={setVariantData}
            />
          </Stepper>
        </Form>
      </FormProvider>
    </Popup>
  );
};

export default AddProductPopup;

const stepList = [
  { id: 1, title: "Create Product", component: <CreateProduct /> },
  {
    id: 2,
    title: "Create Product Variants",
    component: <CreateProductVariants />,
  },
];
