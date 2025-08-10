import ProductsService from '../services/products.service.js';

const getProductsHandler = async (req, res) => {
  try {
    const products = ProductsService.getProductsHandler();
    let response = {
      message: 'success',
      data: {
        products,
        count: products.length
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

const getProductHandlerByParam = async (req, res) => {
  try {
    const id = req.params.id;
    const product = ProductsService.getProductHandlerByParam(id);
    let response = {
      message: 'success',
      data: product
    };
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      message: error.message
    });
  }
};

const postProductHandler = async (req, res) => {
  try {
    const newProduct = req.body;
    const product = ProductsService.postProductHandler(newProduct);
    let response = {
      message: 'success',
      data: {
        productId: product.id
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

const putProductHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const productData = req.body;
    const product = ProductsService.putProductHandler(id, productData);
    let response = {
      message: 'success',
      data: product
    };
    return res.status(200).json(response);
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      message: error.message
    });
  }
};

const deleteProductHandler = async (req, res) => {
  try {
    const id = req.params.id;
    ProductsService.deleteProductHandler(id);
    return res.status(204).send();
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      message: error.message
    });
  }
};

export {
  getProductsHandler,
  getProductHandlerByParam,
  postProductHandler,
  putProductHandler,
  deleteProductHandler
};