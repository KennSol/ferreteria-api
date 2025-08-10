import CategoriesService from '../services/categories.service.js';

const getCategoriesHandler = async (req, res) => {
  try {
    const categories = CategoriesService.getCategoriesHandler();
    let response = {
      message: 'success',
      data: {
        categories,
        count: categories.length
      }
    };
    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Error interno del servidor'
    });
  }
};

const getCategoryHandlerByParam = async (req, res) => {
  try {
    const id = req.params.id;
    const category = CategoriesService.getCategoryHandlerByParam(id);
    let response = {
      message: 'success',
      data: category
    };
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      message: error.message
    });
  }
};

const postCategoryHandler = async (req, res) => {
  try {
    const newCategory = req.body;
    const category = CategoriesService.postCategoryHandler(newCategory);
    let response = {
      message: 'success',
      data: {
        categoryId: category.id
      }
    };
    return res.status(201).json(response);
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: error.message
    });
  }
};

const putCategoryHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const categoryData = req.body;
    const category = CategoriesService.putCategoryHandler(id, categoryData);
    let response = {
      message: 'success',
      data: category
    };
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      message: error.message
    });
  }
};

const deleteCategoryHandler = async (req, res) => {
  try {
    const id = req.params.id;
    CategoriesService.deleteCategoryHandler(id);
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: error.message
    });
  }
};

export {
  getCategoriesHandler,
  getCategoryHandlerByParam,
  postCategoryHandler,
  putCategoryHandler,
  deleteCategoryHandler
};