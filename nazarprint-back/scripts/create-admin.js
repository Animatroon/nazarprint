import bcrypt from 'bcrypt';
import prisma from '../src/config/database.js';

const username = process.argv[2] || 'admin';
const password = process.argv[3] || 'admin123';

const passwordHash = await bcrypt.hash(password, 12);

const existing = await prisma.admin.findUnique({ where: { username } });
if (existing) {
  await prisma.admin.update({ where: { username }, data: { passwordHash } });
  console.log(`Admin "${username}" updated`);
} else {
  await prisma.admin.create({ data: { username, passwordHash } });
  console.log(`Admin "${username}" created`);
}

await prisma.$disconnect();
