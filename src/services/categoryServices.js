import models from "../models/index.js";

export default {
  getAllCategories: async () => {
    const result = await models.Category.findAll();
    return result;
  },
  getCategory: async (idCategory) => {
    const result = await models.Category.findByPk(idCategory);

    if (result) {
      return result.dataValues;
    }

    return result;
  },
  createCategory: async (Category) => {
    /* 
      Esto verificar si la tabla esta creada y sino esta creada la crea
    */
    await models.Category.sync();
    const result = await models.Category.create({
      name: Category.name,
      description: Category.description,
    });

    if (result) {
      return result.dataValues;
    }

    return result;
  },
};
