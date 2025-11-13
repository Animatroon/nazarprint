import { Router } from 'express';
import { clothesData, bagsData, forHomeData, headwearsData } from '../data/catalogs.data.js';

const router = Router();

// GET /api/catalogs/clothes - Получить все товары одежды
router.get('/clothes', (req, res) => {
  res.json({ success: true, data: clothesData });
});

// GET /api/catalogs/clothes/:id - Получить один товар одежды по ID
router.get('/clothes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = clothesData.find(item => item.id === id);
  
  if (product) {
    res.json({ success: true, data: product });
  } else {
    res.status(404).json({ success: false, error: 'Product not found' });
  }
});

// GET /api/catalogs/bags - Получить все сумки
router.get('/bags', (req, res) => {
  res.json({ success: true, data: bagsData });
});

// GET /api/catalogs/bags/:id - Получить одну сумку по ID
router.get('/bags/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = bagsData.find(item => item.id === id);
  
  if (product) {
    res.json({ success: true, data: product });
  } else {
    res.status(404).json({ success: false, error: 'Product not found' });
  }
});

// GET /api/catalogs/for-home - Получить все товары для дома
router.get('/for-home', (req, res) => {
  res.json({ success: true, data: forHomeData });
});

// GET /api/catalogs/for-home/:id - Получить один товар для дома по ID
router.get('/for-home/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = forHomeData.find(item => item.id === id);
  
  if (product) {
    res.json({ success: true, data: product });
  } else {
    res.status(404).json({ success: false, error: 'Product not found' });
  }
});

// GET /api/catalogs/headwears - Получить все головные уборы
router.get('/headwears', (req, res) => {
  res.json({ success: true, data: headwearsData });
});

// GET /api/catalogs/headwears/:id - Получить один головной убор по ID
router.get('/headwears/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = headwearsData.find(item => item.id === id);
  
  if (product) {
    res.json({ success: true, data: product });
  } else {
    res.status(404).json({ success: false, error: 'Product not found' });
  }
});

export default router;
