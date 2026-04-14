import { Router } from 'express';
import requestsController from '../controllers/requests.controller.js';

const router = Router();

/**
 * @swagger
 * /api/requests/callback:
 *   post:
 *     summary: Создать заявку на обратный звонок
 *     tags: [Requests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *             properties:
 *               name:
 *                 type: string
 *                 description: Имя клиента
 *               phone:
 *                 type: string
 *                 description: Телефон клиента
 *     responses:
 *       201:
 *         description: Заявка создана
 *       400:
 *         description: Ошибка валидации
 */
router.post('/callback', requestsController.createCallbackRequest.bind(requestsController));

/**
 * @swagger
 * /api/requests/calculation:
 *   post:
 *     summary: Создать заявку на расчет
 *     tags: [Requests]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - phone
 *             properties:
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               details:
 *                 type: string
 *               quantity:
 *                 type: integer
 *               contactMethod:
 *                 type: object
 *                 properties:
 *                   phoneCall:
 *                     type: boolean
 *                   whatsapp:
 *                     type: boolean
 *                   telegram:
 *                     type: boolean
 *     responses:
 *       201:
 *         description: Заявка создана
 *       400:
 *         description: Ошибка валидации
 */
router.post('/calculation', requestsController.createCalculationRequest.bind(requestsController));

/**
 * @swagger
 * /api/requests/callback:
 *   get:
 *     summary: Получить все заявки на обратный звонок
 *     tags: [Requests]
 *     responses:
 *       200:
 *         description: Список заявок
 */
router.get('/callback', requestsController.getAllCallbackRequests.bind(requestsController));

/**
 * @swagger
 * /api/requests/calculation:
 *   get:
 *     summary: Получить все заявки на расчет
 *     tags: [Requests]
 *     responses:
 *       200:
 *         description: Список заявок
 */
router.get('/calculation', requestsController.getAllCalculationRequests.bind(requestsController));

/**
 * @swagger
 * /api/requests/callback/{id}/status:
 *   patch:
 *     summary: Обновить статус заявки на обратный звонок
 *     tags: [Requests]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [NEW, IN_PROGRESS, COMPLETED, CANCELLED]
 *     responses:
 *       200:
 *         description: Статус обновлен
 */
router.patch('/callback/:id/status', requestsController.updateCallbackStatus.bind(requestsController));

/**
 * @swagger
 * /api/requests/calculation/{id}/status:
 *   patch:
 *     summary: Обновить статус заявки на расчет
 *     tags: [Requests]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [NEW, IN_PROGRESS, COMPLETED, CANCELLED]
 *     responses:
 *       200:
 *         description: Статус обновлен
 */
router.patch('/calculation/:id/status', requestsController.updateCalculationStatus.bind(requestsController));

export default router;
