import models from "../models/index.js";

export default {
  getAllCategories: async () => {
    const result = await models.Category.findAll();
    return result;
  },
};
