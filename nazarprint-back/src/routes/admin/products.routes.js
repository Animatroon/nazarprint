import { Router } from 'express';
import prisma from '../../config/database.js';
import { requireAuth } from '../../middleware/auth.middleware.js';

const router = Router();
router.use(requireAuth);

const productSelect = {
  id: true,
  name: true,
  type: true,
  price: true,
  colors: true,
  formats: true,
  subcategory: true,
  description: true,
  categoryId: true,
  category: { select: { id: true, displayName: true, slug: true } },
  images: { select: { id: true, url: true, order: true }, orderBy: { order: 'asc' } },
  createdAt: true,
  updatedAt: true
};

router.get('/', async (req, res) => {
  try {
    const { page = 1, limit = 20, categoryId, search } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where = {};
    if (categoryId) where.categoryId = Number(categoryId);
    if (search) where.name = { contains: search, mode: 'insensitive' };

    const [products, total] = await Promise.all([
      prisma.product.findMany({ where, skip, take: Number(limit), select: productSelect, orderBy: { id: 'desc' } }),
      prisma.product.count({ where })
    ]);

    res.json({ success: true, data: products, total, page: Number(page), limit: Number(limit) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Ошибка получения товаров' });
  }
});

router.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ success: false, error: 'Неверный ID' });

  try {
    const product = await prisma.product.findUnique({ where: { id }, select: productSelect });
    if (!product) return res.status(404).json({ success: false, error: 'Товар не найден' });
    res.json({ success: true, data: product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Ошибка получения товара' });
  }
});

router.post('/', async (req, res) => {
  const { name, type, price, colors, formats, subcategory, description, categoryId, images } = req.body;

  if (!name || !price || !categoryId) {
    return res.status(400).json({ success: false, error: 'Название, цена и категория обязательны' });
  }

  try {
    const product = await prisma.product.create({
      data: {
        name,
        type: type || null,
        price: Number(price),
        colors: colors || [],
        formats: formats || [],
        subcategory: subcategory || null,
        description: description || [],
        categoryId: Number(categoryId),
        images: images?.length
          ? { create: images.map((url, i) => ({ url, order: i })) }
          : undefined
      },
      select: productSelect
    });

    res.status(201).json({ success: true, data: product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Ошибка создания товара' });
  }
});

router.put('/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ success: false, error: 'Неверный ID' });

  const { name, type, price, colors, formats, subcategory, description, categoryId, images } = req.body;

  try {
    const exists = await prisma.product.findUnique({ where: { id }, select: { id: true } });
    if (!exists) return res.status(404).json({ success: false, error: 'Товар не найден' });

    const data = {};
    if (name !== undefined) data.name = name;
    if (type !== undefined) data.type = type;
    if (price !== undefined) data.price = Number(price);
    if (colors !== undefined) data.colors = colors;
    if (formats !== undefined) data.formats = formats;
    if (subcategory !== undefined) data.subcategory = subcategory;
    if (description !== undefined) data.description = description;
    if (categoryId !== undefined) data.categoryId = Number(categoryId);

    if (images !== undefined) {
      await prisma.productImage.deleteMany({ where: { productId: id } });
      data.images = { create: images.map((url, i) => ({ url, order: i })) };
    }

    const product = await prisma.product.update({ where: { id }, data, select: productSelect });
    res.json({ success: true, data: product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Ошибка обновления товара' });
  }
});

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ success: false, error: 'Неверный ID' });

  try {
    await prisma.product.delete({ where: { id } });
    res.json({ success: true });
  } catch {
    res.status(404).json({ success: false, error: 'Товар не найден' });
  }
});

export default router;
