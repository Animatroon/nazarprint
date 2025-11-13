import { Router } from 'express';
import { faqData } from '../data/faq.data.js';

const router = Router();

// GET /api/faq - Получить все FAQ вопросы
router.get('/', (req, res) => {
  res.json({ success: true, data: faqData });
});

// GET /api/faq/:id - Получить один FAQ по ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const faq = faqData.find(item => item.id === id);
  
  if (faq) {
    res.json({ success: true, data: faq });
  } else {
    res.status(404).json({ success: false, error: 'FAQ not found' });
  }
});

export default router;
