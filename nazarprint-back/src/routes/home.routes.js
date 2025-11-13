import { Router } from 'express';
import { catalogsHomeData, instagramImages } from '../data/home.data.js';

const router = Router();

// GET /api/home/catalogs - Получить каталоги для главной страницы
router.get('/catalogs', (req, res) => {
  res.json({ success: true, data: catalogsHomeData });
});

// GET /api/home/instagram - Получить изображения Instagram
router.get('/instagram', (req, res) => {
  res.json({ success: true, data: instagramImages });
});

export default router;
