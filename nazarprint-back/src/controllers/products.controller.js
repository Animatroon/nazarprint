import productsService from '../services/products.service.js';

class ProductsController {
  async getProductsByCategory(req, res, next) {
    try {
      const { category } = req.params;
      const products = await productsService.getProductsByCategory(category);
      const formattedProducts = productsService.formatProducts(products);
      res.json({ success: true, data: formattedProducts });
    } catch (error) {
      next(error);
    }
  }

  async getProductById(req, res, next) {
    try {
      const { category, id } = req.params;
      const product = await productsService.getProductById(id);

      if (!product) {
        return res.status(404).json({ success: false, error: 'Product not found' });
      }

      const formattedProduct = productsService.formatProduct(product);
      res.json({ success: true, data: formattedProduct });
    } catch (error) {
      next(error);
    }
  }

  async getAllCategories(req, res, next) {
    try {
      const categories = await productsService.getAllCategories();
      res.json({ success: true, data: categories });
    } catch (error) {
      next(error);
    }
  }

  async searchProducts(req, res, next) {
    try {
      const { q } = req.query;
      if (!q) {
        return res.status(400).json({ success: false, error: 'Query parameter required' });
      }

      const products = await productsService.searchProducts(q);
      const formattedProducts = productsService.formatProducts(products);
      res.json({ success: true, data: formattedProducts });
    } catch (error) {
      next(error);
    }
  }

  async createProduct(req, res, next) {
    try {
      const product = await productsService.createProduct(req.body);
      const formattedProduct = productsService.formatProduct(product);
      res.status(201).json({ success: true, data: formattedProduct });
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req, res, next) {
    try {
      const { id } = req.params;
      const product = await productsService.updateProduct(id, req.body);
      const formattedProduct = productsService.formatProduct(product);
      res.json({ success: true, data: formattedProduct });
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req, res, next) {
    try {
      const { id } = req.params;
      await productsService.deleteProduct(id);
      res.json({ success: true, message: 'Product deleted' });
    } catch (error) {
      next(error);
    }
  }
}

export default new ProductsController();
