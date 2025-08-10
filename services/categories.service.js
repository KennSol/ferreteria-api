import { categories } from '../mock-data/categories.data.js';
import { products } from '../mock-data/products.data.js';
import { v4 as uuidv4 } from 'uuid';

class CategoriesService {
  getCategoriesHandler() {
    return categories;
  }

  getCategoryHandlerByParam(id) {
    const category = categories.find(c => c.id === id);
    if (!category) throw new Error('Categoría no encontrada');
    return category;
  }

  postCategoryHandler(categoryData) {
    if (!categoryData.name) throw new Error('Se requiere el nombre de la categoría');
    const newCategory = { id: uuidv4(), ...categoryData };
    categories.push(newCategory);
    return newCategory;
  }

  putCategoryHandler(id, categoryData) {
    const index = categories.findIndex(c => c.id === id);
    if (index === -1) throw new Error('Categoría no encontrada');
    categories[index] = { ...categories[index], ...categoryData };
    return categories[index];
  }

  deleteCategoryHandler(id) {
    const index = categories.findIndex(c => c.id === id);
    if (index === -1) throw new Error('Categoría no encontrada');
    if (products.some(p => p.categoryId === id)) {
      throw new Error('No se puede eliminar una categoría con productos asociados');
    }
    categories.splice(index, 1);
    return true;
  }
}

export default new CategoriesService();