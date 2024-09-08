const pool = require("../config/db");
const { successResult } = require("../utils/result-generators");
const {
  DATA_ADDED_SUCCESSFULLY,
  DATA_DELETED_SUCCESSFULLY,
} = require("../validations/messages/base-messages");

const getAllProducts = async () => {
  const res = await pool.query("Select * from products where deleted = 0");
  return successResult("", res.rows);
};

const getProductById = async (productId) => {
  try {
    const product = await pool.query("select * from products where id=$1", [
      productId,
    ]);
    const productVariants = await pool.query(
      "Select * from product_variants where product_id = $1",
      [productId]
    );
    return successResult("", {
      product: product.rows[0],
      productVariants: productVariants.rows,
    });
  } catch (error) {
    throw error;
  }
};

const getProductPriceByVariants = async ({ productId, colorId, sizeId }) => {
  const res = await pool.query(
    "Select price from product_variants where product_id = $1 and size_id = $2 and color_id = $3",
    [productId, colorId, sizeId]
  );
  return successResult("", res.rows[0]);
};

const addProduct = async (product, productVariants) => {
  try {
    await pool.query("BEGIN");
    const productResult = await pool.query(
      "INSERT INTO products (name,description, category_id) VALUES ($1, $2,$3) RETURNING id",
      [product.name, product.description, product.categoryId]
    );

    const productId = productResult.rows[0].id;

    for (const variant of productVariants) {
      const { colorId, sizeId, price } = variant;
      await pool.query(
        "INSERT INTO product_variants (product_id, color_id, size_id, price,image) VALUES ($1, $2, $3, $4,$5)",
        [productId, colorId, sizeId, price, "example.jpg"]
      );
    }
    await pool.query("COMMIT");
    return successResult(DATA_ADDED_SUCCESSFULLY);
  } catch (error) {
    await pool.query("ROLLBACK");
    throw error;
  }
};

const deleteProduct = async (productId) => {
  await pool.query("call delete_product($1)", [productId]);
  return successResult(DATA_DELETED_SUCCESSFULLY);
};

module.exports = {
  getAllProducts,
  addProduct,
  deleteProduct,
  getProductById,
  getProductPriceByVariants,
};
