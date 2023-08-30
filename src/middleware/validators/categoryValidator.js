// Import express-validadtor, function check
import { check } from "express-validator";

// Import response validateResults
import validateResults from "../../helpers/handleValidator.js";

/**
 * define validate based on models
 */
const validatorCreateCategory = [
  check("name").exists().notEmpty(),
  check("description").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

export { validatorCreateCategory };
