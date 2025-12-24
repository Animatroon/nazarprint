import prisma from '../src/config/database.js';

const UNSPLASH_IMAGES = {
  clothes: [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800', // T-shirt white
    'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800', // T-shirt modern
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800', // Black shirt
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800', // Hoodie
    'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800', // Clothes rack
    'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&w=800', // White tee
    'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=800', // Style
    'https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=800', // Urban
    'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?auto=format&fit=crop&w=800', // Mens
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800'  // White shirt
  ],
  bags: [
    'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800', // Tote
    'https://images.unsplash.com/photo-1590874103328-27cf2679d660?auto=format&fit=crop&w=800', // Backpack
    'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=800', // Brown bag
    'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=800', // Handbag
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800', // Backpack outdoors
    'https://images.unsplash.com/photo-1622560417282-5f543d1084af?auto=format&fit=crop&w=800', // Tote art
    'https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?auto=format&fit=crop&w=800', // Blue bag
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800', // Paper bag
    'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800', // Leather bag
    'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800'  // Bag
  ],
  headwears: [
    'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800', // Baseball cap
    'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800', // Hat
    'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800', // Cap
    'https://images.unsplash.com/photo-1533827432537-70133748f5c8?auto=format&fit=crop&w=800', // Beanie
    'https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=800', // Cap street
    'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=800', // Hat
    'https://images.unsplash.com/photo-1583744633944-41e97d130e63?auto=format&fit=crop&w=800', // Blue cap
    'https://images.unsplash.com/photo-1575424909138-46b05e5919ec?auto=format&fit=crop&w=800', // White cap
    'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800', // Black shirt cap
    'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=800'  // Cap
  ],
  "for-home": [
    'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800', // Decor
    'https://images.unsplash.com/photo-1576014131795-d4ac1d6b0565?auto=format&fit=crop&w=800', // Pillow
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800', // Mug
    'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800', // Mug
    'https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=800', // Kitchen
    'https://images.unsplash.com/photo-1574672280602-95cb48422e6e?auto=format&fit=crop&w=800', // Candles
    'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800', // Vase
    'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800', // Towel
    'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800', // Furniture
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800'  // Chair
  ],
  sport: [
    'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800', // Gym
    'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800', // Dumbbells
    'https://images.unsplash.com/photo-1534258936925-c48947387e3b?auto=format&fit=crop&w=800', // Fitness
    'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=800', // Bag sport
    'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=800', // Yoga mat
    'https://images.unsplash.com/photo-1627483297929-37f416fec7cd?auto=format&fit=crop&w=800', // Bottle
    'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800', // Equipment
    'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800', // Sportswear
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800', // Yoga
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800'  // Weights
  ],
  souvenirs: [
    'https://images.unsplash.com/photo-1590502160462-2d1257fb2e29?auto=format&fit=crop&w=800', // Pen
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800', // Notebook
    'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=800', // Keychain
    'https://images.unsplash.com/photo-1607513549889-722a9693bc2a?auto=format&fit=crop&w=800', // Mug
    'https://images.unsplash.com/photo-1623869150041-0a62319c5b05?auto=format&fit=crop&w=800', // Souvenir
    'https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&w=800', // Book
    'https://images.unsplash.com/photo-1603986386653-ec54d001099f?auto=format&fit=crop&w=800', // Bottle
    'https://images.unsplash.com/photo-1517260739337-6799d2fb3212?auto=format&fit=crop&w=800', // Planner
    'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800', // Sticker
    'https://images.unsplash.com/photo-1520699049698-acd2fcc51056?auto=format&fit=crop&w=800'  // Gift
  ],
  accessories: [
    'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800', // Wallet
    'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800', // Belt
    'https://images.unsplash.com/photo-1551466085-f370a485db1f?auto=format&fit=crop&w=800', // Glasses
    'https://images.unsplash.com/photo-1616353329119-460f0e73f374?auto=format&fit=crop&w=800', // Watch
    'https://images.unsplash.com/photo-1611003228941-98852ba62227?auto=format&fit=crop&w=800', // Headphones
    'https://images.unsplash.com/photo-1549488497-6031cdc54b38?auto=format&fit=crop&w=800', // Scarf
    'https://images.unsplash.com/photo-1609357602737-1725b84c8d57?auto=format&fit=crop&w=800', // Socks
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800', // Tie
    'https://images.unsplash.com/photo-1589128771229-6948b816e3ce?auto=format&fit=crop&w=800', // Jewelry
    'https://images.unsplash.com/photo-1515286595460-a292434de00d?auto=format&fit=crop&w=800'  // Bag
  ],
  office: [
    'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800', // Notebook
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800', // Office
    'https://images.unsplash.com/photo-1491013516836-7d3243209273?auto=format&fit=crop&w=800', // Desk
    'https://images.unsplash.com/photo-1662947119561-ebdc778ca995?auto=format&fit=crop&w=800', // Pen
    'https://images.unsplash.com/photo-1606836576983-8b458e75221d?auto=format&fit=crop&w=800', // Folder
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800', // Paper
    'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=800', // Planner
    'https://images.unsplash.com/photo-1503554676855-4884ab39563c?auto=format&fit=crop&w=800', // Monitor
    'https://images.unsplash.com/photo-1534067783741-512d69f1d017?auto=format&fit=crop&w=800', // Cup
    'https://images.unsplash.com/photo-1585241936939-be05368a5bc3?auto=format&fit=crop&w=800'  // Mouse
  ]
};

const CATEGORIES = [
  { name: 'clothes', displayName: 'Одежда' },
  { name: 'bags', displayName: 'Сумки' },
  { name: 'for-home', displayName: 'Для дома' },
  { name: 'headwears', displayName: 'Головные уборы' },
  { name: 'sport', displayName: 'Спорт' },
  { name: 'souvenirs', displayName: 'Сувениры' },
  { name: 'accessories', displayName: 'Аксессуары' },
  { name: 'office', displayName: 'Офис' }
];

const METHODS = [
  { name: 'DTF', description: 'Direct to Film печать' },
  { name: 'UV', description: 'UV печать' },
  { name: 'Шелкография', description: 'Шелкотрафаретная печать' },
  { name: 'Лазер', description: 'Лазерная гравировка' },
  { name: 'Вышивка', description: 'Вышивка логотипов' }
];

async function main() {
  console.log('Начинаю полную перезапись базы данных...');

  // Очистка таблиц (в обратном порядке зависимостей)
  // Используем deleteMany вместо truncate, чтобы работать с FK
  await prisma.productPrintingMethod.deleteMany({});
  await prisma.productImage.deleteMany({});
  await prisma.orderItem.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.printingMethod.deleteMany({});
  await prisma.category.deleteMany({});

  console.log('Таблицы очищены.');

  // Создание категорий
  console.log('Создание категорий...');
  const createdCats = [];
  for (const cat of CATEGORIES) {
    const c = await prisma.category.create({ data: cat });
    createdCats.push(c);
  }

  // Создание методов
  console.log('Создание методов печати...');
  const createdMethods = [];
  for (const m of METHODS) {
    const method = await prisma.printingMethod.create({ data: m });
    createdMethods.push(method);
  }

  // Генерация продуктов
  for (const cat of createdCats) {
    console.log(`Генерация товаров для категории: ${cat.displayName}`);
    const images = UNSPLASH_IMAGES[cat.name] || UNSPLASH_IMAGES['clothes']; // fallback

    for (let i = 0; i < 10; i++) {
      const idx = i + 1;
      const imageUrl = images[i] || images[0];

      const product = await prisma.product.create({
        data: {
          name: `${cat.displayName} товар №${idx}`,
          type: 'Standard',
          price: 2000 + (i * 500),
          colors: ['black', 'white', 'red', 'blue'],
          formats: ['XS', 'S', 'M', 'L', 'XL'],
          subcategory: cat.displayName,
          description: [
            'Высокое качество материалов.',
            'Идеально подходит для брендирования.',
            'Доступны различные цвета и размеры.',
            'Быстрое изготовление и доставка.'
          ],
          categoryId: cat.id,
          images: {
            create: [
              { url: imageUrl, order: 0 },
              { url: imageUrl, order: 1 } // Дублируем для галереи
            ]
          }
        }
      });

      // Привязка методов (случайно 2-3 метода)
      const shuffledMethods = createdMethods.sort(() => 0.5 - Math.random());
      const selectedMethods = shuffledMethods.slice(0, 2);

      for (const m of selectedMethods) {
        await prisma.productPrintingMethod.create({
          data: {
            productId: product.id,
            printingMethodId: m.id
          }
        });
      }
    }
  }

  console.log('База данных успешно заполнена тестовыми данными (10 товаров на категорию).');
}

main()
  .catch((e) => {
    console.error('Ошибка при заполнении БД:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
