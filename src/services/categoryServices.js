import models from '../models/index.js';

export default {
  /**
   * Get All Categories
   * @returns
   */
  getAllCategories: async () => {
    const result = await models.Category.findAll();
    return result;
  },
  /**
   * Get Category
   * @param {*} idCategory
   * @returns
   */
  getCategory: async (idCategory) => {
    const result = await models.Category.findByPk(idCategory);

    if (result) {
      return result.dataValues;
    }

    return result;
  },
  /**
   * Create Category
   * @param {} Category
   * @returns
   */
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
  /**
   * Update Category
   * @param {*} idCategory
   * @param {*} Category
   * @returns
   */
  updateCategory: async (idCategory, Category) => {
    const category = await models.Category.findByPk(idCategory);

    if (!category) {
      return null;
    }

    const result = await models.Category.update(
      {
        name: Category.name,
        description: Category.description,
      },
      {
        where: {
          id: idCategory,
        },
      }
    );
    return result[0];
  },
  /**
   * delete Category
   * @param {*} idCategory
   * @returns
   */
  deleteCategory: async (idCategory) => {
    const category = await models.Category.findByPk(idCategory);

    if (!category) {
      return null;
    }

    const result = await models.Category.destroy({
      where: {
        id: idCategory,
      },
    });
    console.log(result, 'desde servicio');
    return result;
  },
};
