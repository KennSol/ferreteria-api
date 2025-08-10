import { products } from '../mock-data/products.data.js';
import { categories } from '../mock-data/categories.data.js';
import { v4 as uuidv4 } from 'uuid';

class ProductsService {
  getProductsHandler() {
    return products;
  }

  getProductHandlerByParam(id) {
    const product = products.find(p => p.id === id);
    if (!product) throw new Error('Producto no encontrado');
    return product;
  }

  postProductHandler(productData) {
    if (!productData.name || !productData.price || !productData.categoryId || !productData.stock) {
      throw new Error('Se requieren todos los campos');
    }
    if (!categories.find(c => c.id === productData.categoryId)) {
      throw new Error('Categoría inválida');
    }
    const newProduct = { id: uuidv4(), ...productData };
    products.push(newProduct);
    return newProduct;
  }

  putProductHandler(id, productData) {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Producto no encontrado');
    if (productData.categoryId && !categories.find(c => c.id === productData.categoryId)) {
      throw new Error('Categoría inválida');
    }
    products[index] = { ...products[index], ...productData };
    return products[index];
  }

  deleteProductHandler(id) {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) throw new Error('Producto no encontrado');
    products.splice(index, 1);
    return true;
  }
}

export default new ProductsService();