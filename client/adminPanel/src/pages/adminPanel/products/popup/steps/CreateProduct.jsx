import { Grid2 } from "@mui/material";
import InputUseForm from "../../../../../components/input/InputUseForm";
import MultiSelectUseForm from "../../../../../components/select/MultiSelectUseForm";
import SelectUseForm from "../../../../../components/select/SelectUseForm";
import { useGetAllCategoriesQuery } from "../../../../../redux/rtkquery/parametricApi";

const CreateProduct = ({ colors, sizes }) => {
  const { data: categories } = useGetAllCategoriesQuery();

  return (
    <Grid2 container spacing={2}>
      <Grid2 size={12}>
        <InputUseForm name={"name"} label={"Product name"} />
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
        <SelectUseForm
          name={"categoryId"}
          label={"Category"}
          options={categories}
          fullData
        />
      </Grid2>
      <Grid2 size={6}>
        <MultiSelectUseForm
          name={"color"}
          label={"Color"}
          options={colors}
          fullData
        />
      </Grid2>
      <Grid2 size={6}>
        <MultiSelectUseForm
          name={"size"}
          label={"Size"}
          options={sizes}
          fullData
        />
      </Grid2>
    </Grid2>
  );
};

export default CreateProduct;
