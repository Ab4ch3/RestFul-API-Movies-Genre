// Import express-validadtor, function check
import { check } from 'express-validator';

// Import response validateResults
import validateResults from '../../helpers/handleValidator.js';

/**
 * define validate based on models
 */
const validatorCreateCategory = [
  check('name', 'Name is Required').exists().notEmpty(),
  check('description')
    .exists()
    .custom((value, { req }) => {
      if (value === '') {
        console.log(value);
        throw new Error('Description is Required');
      }
      return true;
    }),
  (req, res, next) => {
    return validateResults(req, res, next);
  }
];

export { validatorCreateCategory };
