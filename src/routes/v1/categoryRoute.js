// Import Routerx
import routerx from "express-promise-router";
// import CategoryController
import { getAllCategories } from "../../controllers/categoryController.js";
const router = routerx();

router.get("/", getAllCategories);
export default router;
