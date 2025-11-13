import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import catalogsRoutes from './routes/catalogs.routes.js';
import faqRoutes from './routes/faq.routes.js';
import homeRoutes from './routes/home.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:4200',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/catalogs', catalogsRoutes);
app.use('/api/faq', faqRoutes);
app.use('/api/home', homeRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

export default app;
