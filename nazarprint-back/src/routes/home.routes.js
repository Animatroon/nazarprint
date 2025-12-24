import { Router } from 'express';
import { catalogsHomeData, instagramImages } from '../data/home.data.js';

const router = Router();

/**
 * @swagger
 * /api/home/catalogs:
 *   get:
 *     summary: Получить каталоги для главной страницы
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: Список каталогов
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
 *                     $ref: '#/components/schemas/CategoryHome'
 */
router.get('/catalogs', (req, res) => {
  res.json({ success: true, data: catalogsHomeData });
});

/**
 * @swagger
 * /api/home/instagram:
 *   get:
 *     summary: Получить изображения Instagram
 *     tags: [Home]
 *     responses:
 *       200:
 *         description: Список изображений
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
 *                     type: string
 *                   example: ["/assets/home-instagram/instagram-1.png"]
 */
router.get('/instagram', (req, res) => {
  res.json({ success: true, data: instagramImages });
});

export default router;
