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
/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Everything about Categories
 * /categories:
 *   get:
 *     summary: Lists all Categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: Lists all Categories
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                      $ref: "#/components/schemas/Categories"
 *       5XX:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ERROR
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: "ERROR_GET_CATEGORIES"
 *   post:
 *     summary: Create a new Category
 *     tags: [Categories]
 *     requestBody:
 *       description : Create a new Category
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Categories'
 *     responses:
 *       200:
 *         description: Successful operation.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 message:
 *                   type: string
 *                   example: "CATEGORY_CREATED"
 *                 data:
 *                   type: array
 *                   items:
 *                      $ref: "#/components/schemas/Categories"
 *       5XX:
 *         description: Some server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ERROR
 *                 data:
 *                   type: object
 *                   properties:
 *                     message:
 *                       type: string
 *                       example: "ERROR_CREATE_CATEGORY"
 */
router.get("/", getAllCategories);
router.post("/", validatorCreateCategory, createCategory);
router.get("/:idCategory", getCategory);
router.put("/:idCategory", updateCategory);
router.delete("/:idCategory", deleteCategory);

export default router;
