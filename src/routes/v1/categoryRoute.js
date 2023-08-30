// Import Routerx
import routerx from "express-promise-router";
//import Validator
import { validatorCreateCategory } from "../../middleware/validators/categoryValidator.js";
// import CategoryController
import {
  getAllCategories,
  getCategory,
  createCategory,
} from "../../controllers/categoryController.js";
const router = routerx();

router.get("/:idCategory", getCategory);
router.get("/", getAllCategories);
router.post("/", validatorCreateCategory, createCategory);

export default router;
