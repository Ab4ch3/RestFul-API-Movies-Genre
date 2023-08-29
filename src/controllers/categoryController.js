// Import handleHttpErrors
import handleHttpErrors from "../helpers/handleErrors.js";
// Import Services
import categoryServices from "../services/categoryServices.js";
// Import Debug
import debug from "debug";
const logger = debug("app:module-CategoryController");

// Import Validator
import { matchedData } from "express-validator";

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
      status: "OK",
      data: allCategories,
    });
  } catch (e) {
    logger(e);
    handleHttpErrors(res, "ERROR_GET_CATEGORIES");
    next(e);
  }
};

export { getAllCategories };
