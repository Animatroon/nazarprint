import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import prisma from '../config/database.js';

const router = Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ success: false, error: 'Логин и пароль обязательны' });
  }

  try {
    const admin = await prisma.admin.findUnique({ where: { username } });
    if (!admin) {
      return res.status(401).json({ success: false, error: 'Неверный логин или пароль' });
    }

    const valid = await bcrypt.compare(password, admin.passwordHash);
    if (!valid) {
      return res.status(401).json({ success: false, error: 'Неверный логин или пароль' });
    }

    const token = jwt.sign(
      { id: admin.id, username: admin.username },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ success: true, token, username: admin.username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Ошибка сервера' });
  }
});

router.get('/me', async (req, res) => {
  const header = req.headers['authorization'];
  if (!header?.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'Не авторизован' });
  }
  try {
    const payload = jwt.verify(header.slice(7), process.env.JWT_SECRET);
    res.json({ success: true, username: payload.username });
  } catch {
    res.status(401).json({ success: false, error: 'Токен недействителен' });
  }
});

export default router;
