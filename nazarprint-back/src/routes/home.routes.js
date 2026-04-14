import { Router } from 'express';
import { instagramImages } from '../data/home.data.js';
import prisma from '../config/database.js';

const router = Router();

router.get('/catalogs', async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { order: 'asc' },
      select: { id: true, displayName: true, slug: true, icon: true }
    });

    const data = categories.map(cat => ({
      id: cat.id,
      name: cat.displayName,
      icon: cat.icon,
      link: `/catalogs/${cat.slug}`
    }));

    res.json({ success: true, data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Ошибка загрузки категорий' });
  }
});

router.get('/instagram', (req, res) => {
  res.json({ success: true, data: instagramImages });
});

export default router;
