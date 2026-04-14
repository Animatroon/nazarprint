# Nazarprint Backend API

Backend API для проекта Nazarprint - сервис печати и нанесения изображений.

## 🚀 Технологии

- Node.js
- Express.js
- CORS
- Nodemon (для разработки)

## 📦 Установка

```bash
npm install
```

## 🏃 Запуск

### Режим разработки (с автоперезагрузкой):
```bash
npm run dev
```

### Режим продакшн:
```bash
npm start
```

## 📡 API Endpoints

### Каталоги

- `GET /api/catalogs/clothes` - Получить все товары одежды
- `GET /api/catalogs/clothes/:id` - Получить товар одежды по ID
- `GET /api/catalogs/bags` - Получить все сумки
- `GET /api/catalogs/bags/:id` - Получить сумку по ID
- `GET /api/catalogs/for-home` - Получить все товары для дома
- `GET /api/catalogs/for-home/:id` - Получить товар для дома по ID
- `GET /api/catalogs/headwears` - Получить все головные уборы
- `GET /api/catalogs/headwears/:id` - Получить головной убор по ID

### FAQ

- `GET /api/faq` - Получить все FAQ вопросы
- `GET /api/faq/:id` - Получить FAQ по ID

### Главная страница

- `GET /api/home/catalogs` - Получить каталоги для главной страницы
- `GET /api/home/instagram` - Получить изображения Instagram

## 🔧 Конфигурация

Создайте файл `.env` в корне проекта:

```env
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:4200
```

## 📝 Структура проекта

```
nazarprint-back/
├── src/
│   ├── data/           # Данные (заглушки для БД)
│   │   ├── catalogs.data.js
│   │   ├── faq.data.js
│   │   └── home.data.js
│   ├── routes/         # Маршруты API
│   │   ├── catalogs.routes.js
│   │   ├── faq.routes.js
│   │   └── home.routes.js
│   └── server.js       # Точка входа
├── .env
├── .gitignore
├── package.json
└── README.md
```

## 🌐 CORS

API настроен для работы с фронтендом на `http://localhost:4200`. Для изменения URL отредактируйте переменную `FRONTEND_URL` в `.env`.

## 📄 Лицензия

ISC
