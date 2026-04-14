import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import prisma from '../config/database.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const UPLOADS_DIR = path.join(__dirname, '../../uploads');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOADS_DIR),
  filename: (req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${unique}${ext}`);
  }
});

const ALLOWED_MIMETYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif', 'image/svg+xml'];

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (ALLOWED_MIMETYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Недопустимый тип файла. Разрешены: jpeg, png, webp, gif, svg'));
    }
  }
});

const router = Router();

router.post('/upload', upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, error: 'Файл не загружен' });
  }

  try {
    const media = await prisma.media.create({
      data: {
        filename: req.file.originalname,
        path: `/uploads/${req.file.filename}`,
        mimetype: req.file.mimetype,
        size: req.file.size,
        alt: req.body.alt || null
      }
    });

    res.json({ success: true, data: { id: media.id, url: media.path, alt: media.alt } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Ошибка сохранения файла' });
  }
});

router.get('/', async (req, res) => {
  try {
    const media = await prisma.media.findMany({
      orderBy: { createdAt: 'desc' },
      take: 100
    });
    res.json({ success: true, data: media });
  } catch (err) {
    res.status(500).json({ success: false, error: 'Ошибка загрузки медиа' });
  }
});

router.delete('/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ success: false, error: 'Неверный ID' });

  try {
    await prisma.media.delete({ where: { id } });
    res.json({ success: true });
  } catch {
    res.status(404).json({ success: false, error: 'Медиафайл не найден' });
  }
});

export default router;
