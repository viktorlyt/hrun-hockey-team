import { Router } from "express";
const router = Router();

import {
  getAllproducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";
import {
  validateProductIdParam,
  validateProductInput,
} from "../middleware/validationMiddleware.js";

router.route("/").get(getAllproducts).post(validateProductInput, createProduct);
router
  .route("/:productId")
  .get(validateProductIdParam, getProduct)
  .patch(validateProductIdParam, validateProductInput, updateProduct)
  .delete(validateProductIdParam, deleteProduct);

export default router;
