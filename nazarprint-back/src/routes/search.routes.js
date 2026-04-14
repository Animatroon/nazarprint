import { Router } from 'express';
import prisma from '../config/database.js';

const router = Router();

router.get('/', async (req, res) => {
  const { q, limit = 20 } = req.query;

  if (!q || q.trim().length < 2) {
    return res.json({ success: true, data: [] });
  }

  const term = q.trim();
  const take = Math.min(Number(limit), 50);

  try {
    const results = await prisma.$queryRaw`
      SELECT
        p.id,
        p.name,
        p.price,
        p.subcategory,
        c."displayName" AS "categoryName",
        c.slug AS "categorySlug",
        (
          SELECT pi.url
          FROM "ProductImage" pi
          WHERE pi."productId" = p.id
          ORDER BY pi.order ASC
          LIMIT 1
        ) AS image,
        similarity(p.name, ${term}) AS score
      FROM "Product" p
      JOIN "Category" c ON c.id = p."categoryId"
      WHERE p.name % ${term} OR p.name ILIKE ${'%' + term + '%'}
      ORDER BY score DESC, p.name ASC
      LIMIT ${take}
    `;

    res.json({ success: true, data: results });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Ошибка поиска' });
  }
});

export default router;
