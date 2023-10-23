// Import Debug
import debug from 'debug';
// Import Validator
import { matchedData } from 'express-validator';
// Import handleHttpErrors
import handleHttpErrors from '../helpers/handleErrors.js';
// Import Services
import categoryServices from '../services/categoryServices.js';

const logger = debug('app:module-CategoryController');

/**
 * Get All Categories
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getAllCategories = async (req, res, next) => {
  try {
    const allCategories = await categoryServices.getAllCategories();
    res.status(200).json({
      status: 'OK',
      data: allCategories
    });
  } catch (e) {
    logger(e);
    handleHttpErrors(res, 'ERROR_GET_CATEGORIES');
    next(e);
  }
};

/**
 * Get Category
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const getCategory = async (req, res, next) => {
  try {
    const {
      params: { idCategory }
    } = req;
    const category = await categoryServices.getCategory(idCategory);
    if (!category) {
      handleHttpErrors(res, 'NOT_FOUND', 404);
    } else {
      res.status(200).json({
        status: 'OK',
        data: category
      });
    }
  } catch (e) {
    logger(e);
    handleHttpErrors(res, 'ERROR_GET_CATEGORY');
    next(e);
  }
};

/**
 * Create Category
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const createCategory = async (req, res, next) => {
  try {
    const body = matchedData(req);
    const createdCategory = await categoryServices.createCategory(body);
    res.status(200).json({
      status: 'OK',
      message: 'CATEGORY_CREATED',
      data: createdCategory
    });
  } catch (e) {
    logger(e);
    handleHttpErrors(res, 'ERROR_CREATED_CATEGORY');
    next(e);
  }
};
/**
 * Update Category
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const updateCategory = async (req, res, next) => {
  try {
    const {
      params: { idCategory }
    } = req;
    const { body } = req;
    const updatedCategory = await categoryServices.updateCategory(
      idCategory,
      body
    );
    if (!updatedCategory) {
      return handleHttpErrors(res, 'NOT_FOUND', 404);
    }

    if (updatedCategory === 0) {
      handleHttpErrors(res, 'ERROR_UPDATED_CATEGORY');
    } else {
      res.status(200).json({
        status: 'OK',
        message: 'CATEGORY_UPDATED',
        data: updatedCategory
      });
    }
  } catch (e) {
    logger(e);
    handleHttpErrors(res, 'ERROR_UPDATED_CATEGORY');
    next(e);
  }
};

/**
 * Delete Category
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const deleteCategory = async (req, res, next) => {
  try {
    const {
      params: { idCategory }
    } = req;
    const { body } = req;
    const deletedCategory = await categoryServices.deleteCategory(
      idCategory,
      body
    );
    if (!deletedCategory) {
      return handleHttpErrors(res, 'NOT_FOUND', 404);
    }

    if (deletedCategory === 0) {
      handleHttpErrors(res, 'ERROR_DELETED_CATEGORY');
    } else {
      res.status(200).json({
        status: 'OK',
        message: 'CATEGORY_DELETED',
        data: deletedCategory
      });
    }
  } catch (e) {
    logger(e);
    handleHttpErrors(res, 'ERROR_DELETED_CATEGORY');
    next(e);
  }
};

export {
  getAllCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory
};
