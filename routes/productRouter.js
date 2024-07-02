import { Router } from "express";
const router = Router();

import {
  getAllproducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

router.route("/").get(getAllproducts).post(createProduct);
router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

export default router;
