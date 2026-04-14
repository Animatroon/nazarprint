import { Router } from 'express';
import prisma from '../../config/database.js';
import { requireAuth } from '../../middleware/auth.middleware.js';

const router = Router();
router.use(requireAuth);

router.get('/callbacks', async (req, res) => {
  try {
    const { status, page = 1, limit = 30 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const where = status ? { status } : {};

    const [items, total] = await Promise.all([
      prisma.callbackRequest.findMany({
        where, skip, take: Number(limit),
        orderBy: { createdAt: 'desc' }
      }),
      prisma.callbackRequest.count({ where })
    ]);

    res.json({ success: true, data: items, total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Ошибка получения заявок' });
  }
});

router.patch('/callbacks/:id', async (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body;
  const allowed = ['NEW', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'];
  if (!allowed.includes(status)) return res.status(400).json({ success: false, error: 'Неверный статус' });

  try {
    const item = await prisma.callbackRequest.update({ where: { id }, data: { status } });
    res.json({ success: true, data: item });
  } catch {
    res.status(404).json({ success: false, error: 'Заявка не найдена' });
  }
});

router.get('/calculations', async (req, res) => {
  try {
    const { status, page = 1, limit = 30 } = req.query;
    const skip = (Number(page) - 1) * Number(limit);
    const where = status ? { status } : {};

    const [items, total] = await Promise.all([
      prisma.calculationRequest.findMany({
        where, skip, take: Number(limit),
        orderBy: { createdAt: 'desc' }
      }),
      prisma.calculationRequest.count({ where })
    ]);

    res.json({ success: true, data: items, total });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Ошибка получения заявок' });
  }
});

router.patch('/calculations/:id', async (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body;
  const allowed = ['NEW', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'];
  if (!allowed.includes(status)) return res.status(400).json({ success: false, error: 'Неверный статус' });

  try {
    const item = await prisma.calculationRequest.update({ where: { id }, data: { status } });
    res.json({ success: true, data: item });
  } catch {
    res.status(404).json({ success: false, error: 'Заявка не найдена' });
  }
});

router.get('/stats', async (req, res) => {
  try {
    const [callbacks, calculations, callbacksNew, calculationsNew] = await Promise.all([
      prisma.callbackRequest.count(),
      prisma.calculationRequest.count(),
      prisma.callbackRequest.count({ where: { status: 'NEW' } }),
      prisma.calculationRequest.count({ where: { status: 'NEW' } }),
    ]);
    res.json({ success: true, data: { callbacks, calculations, callbacksNew, calculationsNew } });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Ошибка' });
  }
});

export default router;
