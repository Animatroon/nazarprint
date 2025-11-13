# Nazarprint - Full Stack проект

## 📂 Структура проекта

```
nazarprint/
├── nazarprint-front/    # Angular фронтенд
└── nazarprint-back/     # Express бэкенд
```

## 🚀 Быстрый старт

### Бэкенд (Express + Node.js)

```bash
cd nazarprint-back
npm install
npm run dev    # Режим разработки с nodemon
# или
npm start      # Продакшн режим
```

Сервер запустится на **http://localhost:3001**

### Фронтенд (Angular)

```bash
cd nazarprint-front
npm install
npm start      # Запуск dev-сервера
```

Приложение откроется на **http://localhost:4200**

## 🔗 API Endpoints

### Health Check
- `GET /api/health` - Проверка работоспособности

### Каталоги товаров
- `GET /api/catalogs/clothes` - Все товары одежды
- `GET /api/catalogs/clothes/:id` - Товар по ID
- `GET /api/catalogs/bags` - Все сумки
- `GET /api/catalogs/bags/:id` - Сумка по ID
- `GET /api/catalogs/for-home` - Товары для дома
- `GET /api/catalogs/for-home/:id` - Товар для дома по ID
- `GET /api/catalogs/headwears` - Головные уборы
- `GET /api/catalogs/headwears/:id` - Головной убор по ID

### FAQ и главная
- `GET /api/faq` - Все FAQ вопросы
- `GET /api/home/catalogs` - Каталоги для главной
- `GET /api/home/instagram` - Instagram изображения

## 🛠 Технологии

### Backend
- Node.js
- Express.js
- CORS
- Nodemon
- ES Modules

### Frontend
- Angular 19
- RxJS
- HttpClient
- Angular Animations
- TypeScript

## 📝 Что было сделано

### Backend
✅ Создана структура Express сервера
✅ Настроены маршруты для всех каталогов
✅ Добавлены данные для всех товаров
✅ Настроен CORS для работы с Angular
✅ Добавлен Nodemon для автоперезагрузки
✅ Созданы отдельные файлы для данных (data/)
✅ Настроены переменные окружения (.env)

### Frontend
✅ Удалены все временные данные из компонентов
✅ Обновлены сервисы для работы с API
✅ Добавлен HttpClientModule
✅ Созданы environment файлы
✅ Настроены все компоненты для получения данных с бэка

## 🔧 Конфигурация

### Backend (.env)
```env
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:4200
```

### Frontend (environment.ts)
```typescript
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3001/api'
};
```

## 📦 Обновленные сервисы

- `ClothesService` - получение одежды с API
- `BagsService` - получение сумок с API
- `ForHomeService` - получение товаров для дома с API
- `HeadwearsService` - получение головных уборов с API
- `FaqComponent` - загрузка FAQ с бэкенда
- `HomeComponent` - загрузка каталогов и Instagram фото

## ✨ Особенности

- Все данные теперь приходят с бэкенда
- Фронтенд полностью очищен от моковых данных
- Настроена типизация TypeScript
- Добавлена обработка ошибок
- Консистентная структура API ответов

## 🎯 Следующие шаги

1. Добавить базу данных (MongoDB/PostgreSQL)
2. Создать админ-панель для управления товарами
3. Добавить аутентификацию
4. Реализовать корзину и заказы
5. Добавить загрузку изображений
6. Настроить деплой на продакшн

## 📄 Лицензия

ISC
