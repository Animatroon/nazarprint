import prisma from '../src/config/database.js';

const UNSPLASH_IMAGES = {
  clothes: [
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1503342394128-c104d54dba01?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?auto=format&fit=crop&w=800'
  ],
  headwears: [
    'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1533827432537-70133748f5c8?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1534215754734-18e55d13e346?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1583744633944-41e97d130e63?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1575424909138-46b05e5919ec?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1556306535-0f09a537f0a3?auto=format&fit=crop&w=800'
  ],
  bags: [
    'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1590874103328-27cf2679d660?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1622560417282-5f543d1084af?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800'
  ],
  dishes: [
    'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1607513549889-722a9693bc2a?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1544013104-89a7a1e56c3b?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800'
  ],
  office: [
    'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1491013516836-7d3243209273?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1662947119561-ebdc778ca995?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1606836576983-8b458e75221d?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1503554676855-4884ab39563c?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1534067783741-512d69f1d017?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1585241936939-be05368a5bc3?auto=format&fit=crop&w=800'
  ],
  'for-home': [
    'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1576014131795-d4ac1d6b0565?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1574672280602-95cb48422e6e?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1578500494198-246f612d3b3d?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800'
  ],
  gifts: [
    'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1481492108884-0e88c51c2c51?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1577401239170-897942555fb3?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1608228088998-57828365d486?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800'
  ],
  package: [
    'https://images.unsplash.com/photo-1576502200916-3808e07386a5?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1614680376739-414d95ff43df?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1574453818701-e11cdfe2f0d8?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1585559604959-4e4f18f54d2e?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1590503682177-fe87f608ae98?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1589307004125-1af93a9174e6?auto=format&fit=crop&w=800'
  ],
  'for-sports': [
    'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1534258936925-c48947387e3b?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800'
  ],
  'sport-forms': [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1529698236395-d4bfd39301a0?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1522582302093-254b2b7c4d7f?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1543652437-15ae8f8b0e23?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1499312853583-86dc1b89e11a?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1519098901909-b1553a1190af?auto=format&fit=crop&w=800'
  ],
  'award-products': [
    'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1614680376739-414d95ff43df?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1530540807830-0e5a7e3023ba?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1547149316-3ddef3fd7e40?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1560348718-87b5a6e5e5a4?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1605152276897-4f618f831968?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&w=800'
  ],
  discount: [
    'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&w=800'
  ],
  uniforms: [
    'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?auto=format&fit=crop&w=800'
  ],
  souvenirs: [
    'https://images.unsplash.com/photo-1590502160462-2d1257fb2e29?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1617347454431-f49d7ff5c3b1?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1607513549889-722a9693bc2a?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1512418490979-92798cec1380?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1603986386653-ec54d001099f?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1517260739337-6799d2fb3212?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1520699049698-acd2fcc51056?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1623869150041-0a62319c5b05?auto=format&fit=crop&w=800'
  ],
  accessories: [
    'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1551466085-f370a485db1f?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1616353329119-460f0e73f374?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1611003228941-98852ba62227?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1549488497-6031cdc54b38?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1609357602737-1725b84c8d57?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1589128771229-6948b816e3ce?auto=format&fit=crop&w=800',
    'https://images.unsplash.com/photo-1515286595460-a292434de00d?auto=format&fit=crop&w=800'
  ]
};

const CATEGORIES = [
  { name: 'clothes',        displayName: 'Одежда',              slug: 'clothes',       icon: '/assets/home-catalogs/catalog-icon-1.svg',  order: 1 },
  { name: 'headwears',      displayName: 'Головные уборы',       slug: 'headwears',     icon: '/assets/home-catalogs/catalog-icon-2.svg',  order: 2 },
  { name: 'bags',           displayName: 'Сумки',               slug: 'bags',          icon: '/assets/home-catalogs/catalog-icon-3.svg',  order: 3 },
  { name: 'dishes',         displayName: 'Посуда',              slug: 'dishes',        icon: '/assets/home-catalogs/catalog-icon-4.svg',  order: 4 },
  { name: 'office',         displayName: 'Для офиса',           slug: 'office',        icon: '/assets/home-catalogs/catalog-icon-5.svg',  order: 5 },
  { name: 'for-home',       displayName: 'Для дома',            slug: 'for-home',      icon: '/assets/home-catalogs/catalog-icon-6.svg',  order: 6 },
  { name: 'gifts',          displayName: 'Подарочные наборы',   slug: 'gifts',         icon: '/assets/home-catalogs/catalog-icon-7.svg',  order: 7 },
  { name: 'package',        displayName: 'Упаковка',            slug: 'package',       icon: '/assets/home-catalogs/catalog-icon-8.svg',  order: 8 },
  { name: 'for-sports',     displayName: 'Для спорта',          slug: 'for-sports',    icon: '/assets/home-catalogs/catalog-icon-9.svg',  order: 9 },
  { name: 'sport-forms',    displayName: 'Спортивные формы',    slug: 'sport-forms',   icon: '/assets/home-catalogs/catalog-icon-10.svg', order: 10 },
  { name: 'award-products', displayName: 'Наградная продукция', slug: 'award-products',icon: '/assets/home-catalogs/catalog-icon-11.svg', order: 11 },
  { name: 'discount',       displayName: 'Распродажа',          slug: 'discount',      icon: '/assets/home-catalogs/catalog-icon-12.svg', order: 12 },
  { name: 'uniforms',       displayName: 'Униформа',            slug: 'uniforms',      icon: '/assets/home-catalogs/catalog-icon-13.svg', order: 13 },
  { name: 'souvenirs',      displayName: 'Сувениры',            slug: 'souvenirs',     icon: '/assets/home-catalogs/catalog-icon-1.svg',  order: 14 },
  { name: 'accessories',    displayName: 'Аксессуары',          slug: 'accessories',   icon: '/assets/home-catalogs/catalog-icon-3.svg',  order: 15 },
];

const METHODS = [
  { name: 'DTF',         description: 'Direct to Film — высокая детализация и цветопередача' },
  { name: 'UV',          description: 'UV-печать — печать на любых твёрдых поверхностях' },
  { name: 'Шелкография', description: 'Шелкотрафаретная печать — большие тиражи, устойчивость красок' },
  { name: 'Лазер',       description: 'Лазерная гравировка — высокая точность и долговечность' },
  { name: 'Вышивка',     description: 'Машинная вышивка — объём, текстура, элегантность' }
];

const PRODUCT_NAMES = {
  clothes:        ['Футболка с логотипом', 'Поло корпоративное', 'Худи с нанесением', 'Свитшот брендированный', 'Джемпер с вышивкой', 'Майка промо', 'Рубашка с логотипом', 'Куртка с печатью', 'Жилет корпоративный', 'Ветровка с принтом'],
  headwears:      ['Кепка с логотипом', 'Бейсболка брендированная', 'Панама с печатью', 'Шапка вязаная', 'Берет корпоративный', 'Козырёк с нанесением', 'Ушанка промо', 'Кепка пятипанелька', 'Шапка с вышивкой', 'Бандана с принтом'],
  bags:           ['Шоппер с логотипом', 'Рюкзак брендированный', 'Сумка-тоут промо', 'Сумка через плечо', 'Папка А4 с печатью', 'Поясная сумка', 'Дорожная сумка', 'Сумка для ноутбука', 'Косметичка с логотипом', 'Экосумка хлопковая'],
  dishes:         ['Кружка с логотипом', 'Термокружка брендированная', 'Стакан с принтом', 'Чашка корпоративная', 'Бокал с гравировкой', 'Термос с логотипом', 'Кружка хамелеон', 'Пивная кружка', 'Набор чайный', 'Бутылка для воды'],
  office:         ['Блокнот с логотипом', 'Ручка шариковая', 'Папка брендированная', 'Ежедневник с печатью', 'Флешка с гравировкой', 'Набор канцелярский', 'Степлер брендированный', 'Подставка под ручки', 'Мышка с логотипом', 'Коврик для мыши'],
  'for-home':     ['Зонт с логотипом', 'Часы настенные', 'Бутылка термо', 'Плед с принтом', 'Подушка декоративная', 'Фоторамка с логотипом', 'Полотенце с вышивкой', 'Свеча в боксе', 'Магнит сувенирный', 'Брелок с логотипом'],
  gifts:          ['Подарочный набор премиум', 'Бокс корпоративный', 'Набор для гриля', 'Чайный набор', 'Набор для вина', 'Spa-набор', 'Набор для кофе', 'Деловой набор', 'Детский набор', 'Набор туриста'],
  package:        ['Крафт-пакет', 'Коробка подарочная', 'Пакет бумажный', 'Пакет полиэтиленовый', 'Коробка почтовая', 'Лента атласная', 'Стружка декоративная', 'Наклейка логотип', 'Пупырчатая плёнка', 'Скотч брендированный'],
  'for-sports':   ['Мяч футбольный', 'Гантели набор', 'Коврик йога', 'Повязка на голову', 'Перчатки спортивные', 'Сумка спортивная', 'Бутылка для воды', 'Скакалка', 'Резинки для фитнеса', 'Полотенце спортивное'],
  'sport-forms':  ['Футболка спортивная', 'Шорты спортивные', 'Костюм тренировочный', 'Гетры футбольные', 'Форма баскетбольная', 'Майка волейбольная', 'Форма хоккейная', 'Куртка беговая', 'Лосины спортивные', 'Комбинезон спортивный'],
  'award-products':['Кубок металлический', 'Медаль наградная', 'Диплом в рамке', 'Статуэтка стеклянная', 'Плакетка деревянная', 'Значок нагрудный', 'Грамота с печатью', 'Монета памятная', 'Флаг на подставке', 'Сертификат в конверте'],
  discount:       ['Акция: Футболка', 'Акция: Кружка', 'Акция: Кепка', 'Акция: Ручка', 'Акция: Блокнот', 'Акция: Шоппер', 'Акция: Термокружка', 'Акция: Флешка', 'Акция: Значок', 'Акция: Набор'],
  uniforms:       ['Поло корпоративное', 'Халат рабочий', 'Жилет безопасности', 'Комбинезон рабочий', 'Куртка медицинская', 'Фартук с логотипом', 'Брюки рабочие', 'Рубашка персонала', 'Костюм медицинский', 'Куртка поварская'],
  souvenirs:      ['Ручка сувенирная', 'Блокнот А6', 'Брелок металлический', 'Значок корпоративный', 'Магнит на холодильник', 'Открытка брендированная', 'Сувенирная тарелка', 'Плакат с логотипом', 'Наклейки сет', 'Закладка для книг'],
  accessories:    ['Кошелёк с гравировкой', 'Ремень кожаный', 'Очки солнечные', 'Часы с логотипом', 'Шарф брендированный', 'Носки с принтом', 'Галстук с вышивкой', 'Браслет', 'Платок шёлковый', 'Перчатки кожаные']
};

async function main() {
  console.log('Начинаю полную перезапись базы данных...');

  await prisma.productPrintingMethod.deleteMany({});
  await prisma.productImage.deleteMany({});
  await prisma.orderItem.deleteMany({});
  await prisma.product.deleteMany({});
  await prisma.printingMethod.deleteMany({});
  await prisma.category.deleteMany({});
  await prisma.faq.deleteMany({});
  await prisma.media.deleteMany({});

  console.log('Таблицы очищены.');

  const createdMethods = [];
  for (const m of METHODS) {
    const method = await prisma.printingMethod.create({ data: m });
    createdMethods.push(method);
  }
  console.log(`Создано ${createdMethods.length} методов печати.`);

  const createdCats = [];
  for (const cat of CATEGORIES) {
    const c = await prisma.category.create({ data: cat });
    createdCats.push(c);
  }
  console.log(`Создано ${createdCats.length} категорий.`);

  for (const cat of createdCats) {
    const images = UNSPLASH_IMAGES[cat.name] || UNSPLASH_IMAGES['clothes'];
    const names = PRODUCT_NAMES[cat.name] || PRODUCT_NAMES['clothes'];
    console.log(`  Товары для: ${cat.displayName}`);

    for (let i = 0; i < 10; i++) {
      const imageUrl = images[i] || images[0];
      const productName = names[i] || `${cat.displayName} товар №${i + 1}`;
      const price = 1500 + i * 300 + Math.floor(Math.random() * 500);

      const product = await prisma.product.create({
        data: {
          name: productName,
          type: i < 5 ? 'Стандарт' : 'Премиум',
          price,
          colors: ['Чёрный', 'Белый', 'Красный', 'Синий'],
          formats: ['XS', 'S', 'M', 'L', 'XL'],
          subcategory: i < 3 ? 'Популярное' : i < 7 ? 'Основное' : 'Новинки',
          description: [
            'Высокое качество материалов и исполнения.',
            'Идеально подходит для корпоративного брендирования.',
            'Доступны различные цвета, размеры и форматы.',
            'Быстрое изготовление от 1 до 3 рабочих дней.'
          ],
          categoryId: cat.id,
          images: {
            create: [{ url: imageUrl, order: 0 }]
          }
        }
      });

      const methodCount = 2 + (i % 2);
      const shuffled = [...createdMethods].sort(() => 0.5 - Math.random());
      for (const m of shuffled.slice(0, methodCount)) {
        await prisma.productPrintingMethod.create({
          data: { productId: product.id, printingMethodId: m.id }
        });
      }
    }
  }

  await prisma.faq.createMany({
    data: [
      { question: 'Как сделать заказ?', answer: 'Выберите товар в каталоге, заполните форму на сайте или позвоните нам. Менеджер свяжется с вами в течение часа.', order: 1 },
      { question: 'Какой минимальный тираж?', answer: 'Минимальный тираж зависит от метода нанесения. Для DTF — от 1 штуки, для шелкографии — от 20 штук.', order: 2 },
      { question: 'Какие форматы файлов принимаете?', answer: 'Принимаем векторные файлы: AI, EPS, PDF, SVG. Растровые изображения — JPG, PNG с разрешением от 300 dpi.', order: 3 },
      { question: 'Сколько времени занимает изготовление?', answer: 'Стандартный срок — 3–5 рабочих дней. При срочном заказе — от 1 рабочего дня (уточняйте наличие).', order: 4 },
      { question: 'Доставляете ли по Казахстану?', answer: 'Да, доставляем по всему Казахстану через KazPost и СДЭК. Также возможен самовывоз из нашего офиса.', order: 5 },
      { question: 'Можно ли заказать образец?', answer: 'Да, изготавливаем тестовые образцы. Стоимость образца засчитывается при оформлении основного заказа.', order: 6 },
      { question: 'Как ухаживать за нанесением?', answer: 'Рекомендуем стирать при температуре до 40°C, не использовать отбеливатель, гладить с изнаночной стороны.', order: 7 },
      { question: 'Предоставляете ли скидки при большом тираже?', answer: 'Да, при заказе от 50 штук — скидка 10%, от 100 штук — 15%, от 500 штук — индивидуальные условия.', order: 8 },
    ]
  });

  console.log('База данных успешно заполнена.');
}

main()
  .catch((e) => {
    console.error('Ошибка при заполнении БД:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
