// Importamos express validadtor
import { check } from "express-validator";

// Importamos la respuesta del validador
import validateResults from "../../helpers/handleValidator.js";

/**
 * Definimos la validacion basado en el modelo
 */
const validatorCreateCategory = [
  check("name").exists().notEmpty(),
  check("description").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

export { validatorCreateCategory };
