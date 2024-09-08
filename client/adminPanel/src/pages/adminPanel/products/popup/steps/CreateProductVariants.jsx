import { useState } from "react";
import Input from "../../../../../components/input/Input";
import { getNameById } from "../../../../../utils/helperFunctions";
import "./style.scss";

const CreateProductVariants = ({
  methods,
  colors = [],
  sizes = [],
  variantData,
  setVariantData,
}) => {
  const watch = methods.watch;
  const [color, size] = watch(["color", "size"]);

  const handleFileChange = (e, colorId) => {
    const image = e.target.files[0];
    console.log(image);
    // if (variantData.find((item) => item.colorId === colorId)) {
    //   return setVariantData((prev) =>
    //     prev.map((item) => {
    //       if (item.colorId === colorId) {
    //         return {
    //           ...item,
    //           image,
    //         };
    //       }
    //       return item;
    //     })
    //   );
    // } else {
    //   return setVariantData((prev) => [
    //     ...prev,
    //     {
    //       colorId,
    //       image,
    //     },
    //   ]);
    // }
  };

  const handlePriceChange = (e, colorId, sizeId) => {
    const price = Number(e.target.value);

    if (
      variantData.find(
        (item) => item.sizeId === sizeId && item.colorId === colorId
      )
    ) {
      return setVariantData((prev) =>
        prev.map((item) => {
          if (item.colorId === colorId && item.sizeId === sizeId) {
            return {
              ...item,
              price,
            };
          }
          return item;
        })
      );
    } else {
      return setVariantData((prev) => [
        ...prev,
        {
          colorId,
          sizeId,
          price,
        },
      ]);
    }
  };

  return (
    <div className="variant-container">
      {color.map((colorId) => {
        return (
          <div className="variant" key={colorId}>
            {variantData.find(
              (item) => item.colorId === colorId && !!item.image
            ) ? (
              <div className="property img-selected">Image Selected</div>
            ) : (
              <label className="property file-input-wrapper">
                Choose file
                <input
                  type="file"
                  name=""
                  id=""
                  className="file-input"
                  onChange={(e) => handleFileChange(e, colorId)}
                />
              </label>
            )}

            <div className="property color">{getNameById(colors, colorId)}</div>
            <div className="property size-price">
              {size.map((sizeId) => (
                <>
                  <div className="size">{getNameById(sizes, sizeId)}</div>
                  <div className="price">
                    <Input
                      label={"price"}
                      type={"number"}
                      onChange={(e) => handlePriceChange(e, colorId, sizeId)}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CreateProductVariants;
