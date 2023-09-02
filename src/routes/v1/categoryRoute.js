// Import Routerx
import routerx from "express-promise-router";
//import Validator
import { validatorCreateCategory } from "../../middleware/validators/categoryValidator.js";

// import CategoryController
import {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../controllers/categoryController.js";

const router = routerx();

router.post("/", validatorCreateCategory, createCategory);
router.get("/:idCategory", getCategory);
router.put("/:idCategory", updateCategory);
router.delete("/:idCategory", deleteCategory);
router.get("/", getAllCategories);

export default router;
