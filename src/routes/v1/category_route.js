// Import Routerx
import routerx from 'express-promise-router';
// import Validator
import { validatorCreateCategory } from '../../middleware/validators/category_validator.js';

// import CategoryController
import {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
} from '../../controllers/category_controller.js';

const router = routerx();

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Add a new Category
 *     tags: [Categories]
 *     requestBody:
 *       description : Create a new Category
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/category'
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
 *                      $ref: "#/components/schemas/category"
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
router.post('/', validatorCreateCategory, createCategory);

/** GET CATEGORY
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
 *                      $ref: "#/components/schemas/category"
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
 */
router.get('/', getAllCategories);

/**
 * @swagger
 * /categories/{idCategory}:
 *   get:
 *     summary: Get an existing Category
 *     tags: [Categories]
 *     parameters:
 *        - in: path
 *          name: idCategory
 *          schema:
 *             type: integer
 *             format: int64
 *          required: true
 *          description : The Category ID
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
 *                 data:
 *                   type: array
 *                   items:
 *                      $ref: "#/components/schemas/category"
 *       404:
 *         description: The Category was not found
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
 *                       example: "NOT_FOUND"
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
 *                       example: "ERROR_GET_CATEGORY"
 */
router.get('/:idCategory', getCategory);
/**
 * @swagger
 * /categories/{idCategory}:
 *   put:
 *     summary: Update an existing Category
 *     tags: [Categories]
 *     parameters:
 *        - in: path
 *          name: idCategory
 *          schema:
 *             type: integer
 *             format: int64
 *          required: true
 *          description : The Category ID
 *     requestBody:
 *       description : Update an existent category
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/category'
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
 *                   example: "CATEGORY_UPDATED"
 *                 data:
 *                   type: array
 *                   example: 1
 *       404:
 *         description: The Category was not found
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
 *                       example: "NOT_FOUND"
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
 *                       example: "ERROR_UPDATED_CATEGORY"
 */
router.put('/:idCategory', updateCategory);
/**
 * @swagger
 * /categories/{idCategory}:
 *   delete:
 *     summary: Delete an existing Category
 *     tags: [Categories]
 *     parameters:
 *        - in: path
 *          name: idCategory
 *          schema:
 *             type: integer
 *             format: int64
 *          required: true
 *          description : The Category ID
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
 *                   example: "CATEGORY_DELETED"
 *                 data:
 *                   type: array
 *                   example: 1
 *       404:
 *         description: The Category was not found
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
 *                       example: "NOT_FOUND"
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
 *                       example: "ERROR_DELETED_CATEGORY"
 */
router.delete('/:idCategory', deleteCategory);

export default router;
