import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger.js';
import catalogsRoutes from './routes/catalogs.routes.js';
import categoriesRoutes from './routes/categories.routes.js';
import faqRoutes from './routes/faq.routes.js';
import homeRoutes from './routes/home.routes.js';
import requestsRoutes from './routes/requests.routes.js';
import mediaRoutes from './routes/media.routes.js';
import authRoutes from './routes/auth.routes.js';
import adminProductsRoutes from './routes/admin/products.routes.js';
import adminRequestsRoutes from './routes/admin/requests.routes.js';
import searchRoutes from './routes/search.routes.js';

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

// Swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/catalogs', catalogsRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/faq', faqRoutes);
app.use('/api/home', homeRoutes);
app.use('/api/requests', requestsRoutes);

app.use('/api/media', mediaRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/auth', authRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/admin/products', adminProductsRoutes);
app.use('/api/admin/requests', adminRequestsRoutes);

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
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
