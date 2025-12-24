import { Router } from 'express';
import faqController from '../controllers/faq.controller.js';

const router = Router();

/**
 * @swagger
 * /api/faq:
 *   get:
 *     summary: Получить все FAQ
 *     tags: [FAQ]
 *     responses:
 *       200:
 *         description: Список FAQ
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
 *                     $ref: '#/components/schemas/FAQ'
 */
router.get('/', faqController.getAllFaq.bind(faqController));

/**
 * @swagger
 * /api/faq/{id}:
 *   get:
 *     summary: Получить FAQ по ID
 *     tags: [FAQ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID FAQ
 *     responses:
 *       200:
 *         description: Данные FAQ
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/FAQ'
 *       404:
 *         description: FAQ не найден
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ErrorResponse'
 */
router.get('/:id', faqController.getFaqById.bind(faqController));

export default router;
