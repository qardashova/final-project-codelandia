import React, { useEffect } from "react";
import Popup from "../../../../containers/popup";
import { useGetAllCategoriesQuery } from "../../../../redux/rtkquery/parametricApi";
import { Form, FormProvider, useForm } from "react-hook-form";
import SelectUseForm from "../../../../components/select/SelectUseForm";

const FilterPopup = ({ open, handleClose, setFilterData }) => {
  const methods = useForm();
  const { data: categories } = useGetAllCategoriesQuery();

  const handleSubmit = methods.handleSubmit((data) => {
    setFilterData(data);
    handleClose();
  });

  const handleClear = () => {
    methods.reset();
  };

  return (
    <Popup
      open={open}
      handleClose={handleClose}
      popupTitle={"New Product"}
      minWidth="500px"
      onClickMainButton={handleSubmit}
      mainButtonTitle={"Submit"}
      secondButtonTitle={"Clear"}
      onClickSecondButton={handleClear}
    >
      <FormProvider {...methods}>
        <Form encType="multipart/form-data">
          <SelectUseForm name={"categoryId"} options={categories} />
        </Form>
      </FormProvider>
    </Popup>
  );
};

export default FilterPopup;
