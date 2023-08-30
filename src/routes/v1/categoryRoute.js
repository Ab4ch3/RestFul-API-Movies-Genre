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
} from "../../controllers/categoryController.js";
const router = routerx();

router.get("/:idCategory", getCategory);
router.put("/:idCategory", updateCategory);
router.get("/", getAllCategories);
router.post("/", validatorCreateCategory, createCategory);

export default router;
