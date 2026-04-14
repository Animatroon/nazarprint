import { Router } from 'express';
import productsController from '../controllers/products.controller.js';

const router = Router();

/**
 * @swagger
 * /api/catalogs/{category}:
 *   get:
 *     summary: Получить товары по категории
 *     tags: [Catalogs]
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *           enum: [clothes, bags, headwears, for-home, dishes, office, gifts, package, for-sports, sport-forms, award-products, discount, uniforms]
 *         description: Название категории
 *     responses:
 *       200:
 *         description: Список товаров
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Product'
 */
router.get('/:category', productsController.getProductsByCategory.bind(productsController));

/**
 * @swagger
 * /api/catalogs/{category}/{id}:
 *   get:
 *     summary: Получить товар по ID
 *     tags: [Catalogs]
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *         description: Название категории
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID товара
 *     responses:
 *       200:
 *         description: Данные товара
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Product'
 *       404:
 *         description: Товар не найден
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/:category/:id', productsController.getProductById.bind(productsController));

// CRUD Operations
router.post('/', productsController.createProduct.bind(productsController));
router.put('/:id', productsController.updateProduct.bind(productsController));
router.delete('/:id', productsController.deleteProduct.bind(productsController));

export default router;
