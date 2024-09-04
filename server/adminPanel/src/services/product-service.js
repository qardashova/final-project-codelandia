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

const addProduct = async (product, productVariants) => {
  try {
    await pool.query("BEGIN");
    const productResult = await pool.query(
      "INSERT INTO products (name,description, category_id) VALUES ($1, $2,$3) RETURNING id",
      [product.name, product.description, product.categoryId]
    );

    const productId = productResult.rows[0].id;

    for (const variant of productVariants) {
      const { colorId, sizeId, price, image } = variant;
      await pool.query(
        "INSERT INTO product_variants (product_id, color_id, size_id, price,image) VALUES ($1, $2, $3, $4,$5)",
        [productId, colorId, sizeId, price, image]
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
};
