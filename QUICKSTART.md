# 🚀 Быстрый старт Nazarprint

## Установка и запуск

### 1. Бэкенд (порт 3001)

```bash
cd nazarprint-back
npm install
npm run dev
```

Сервер запустится: http://localhost:3001

### 2. Фронтенд (порт 4200)

```bash
cd nazarprint-front
npm install
npm start
```

Приложение: http://localhost:4200

## ✅ Проверка работы

Откройте в браузере:
- Frontend: http://localhost:4200
- Backend health: http://localhost:3001/api/health
- API каталог одежды: http://localhost:3001/api/catalogs/clothes

## 📝 Основные изменения

✅ Все данные перенесены на бэкенд
✅ Фронтенд получает данные через HTTP API
✅ Настроен CORS между фронтом и бэком
✅ Добавлен Nodemon для автоперезагрузки
✅ Удалены все моковые данные с фронта

## 🔧 API Endpoints

- `/api/catalogs/clothes` - одежда
- `/api/catalogs/bags` - сумки
- `/api/catalogs/for-home` - для дома
- `/api/catalogs/headwears` - головные уборы
- `/api/faq` - FAQ
- `/api/home/catalogs` - каталоги главной
- `/api/home/instagram` - Instagram фото
