import { Form, FormProvider, useForm } from "react-hook-form";
import Popup from "../../../../containers/popup";
import Stepper from "../../../../components/stepper";
import React, { useState } from "react";
import CreateProduct from "./steps/CreateProduct";
import CreateProductVariants from "./steps/CreateProductVariants";

const AddProductPopup = ({ open, handleClose }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [variantData, setVariantData] = useState([]);
  const methods = useForm();

  const handleSubmit = methods.handleSubmit((data) => {
    console.log(data);
    console.log(variantData);
  });

  return (
    <Popup
      open={open}
      handleClose={handleClose}
      popupTitle={"New Product"}
      minWidth="700px"
    >
      <FormProvider {...methods}>
        <Form>
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

const colors = [
  { id: 1, name: "Red" },
  { id: 2, name: "Blue" },
];

const sizes = [
  { id: 1, name: "Small" },
  { id: 2, name: "Medium" },
  { id: 3, name: "Large" },
];
