export interface Product {
    id: number;
    name: string;
    price: number;
    images: string[];
    type?: string;
    category: string;
    color?: string[];
    format?: string[];
    description?: string[];
    methods?: string[];
}  



// {
//     "id": 1,
//     "name": 'Зонт складной автомат DERBY',
//     'type': 'Зонт UC',
//     'images': ['/assets/catalogs/for-home/umbrella-auto-derby.jpg'],
//     '': 6750,
//     'color': ['black'],
//     'methods': ['DTF'],
//     'format': ['A6', 'A5', 'A4'],
//     'category': 'Зонты'
//   },
//   {
//     'id': 3,
//     'name': 'Настенные часы MONTRE',
//     'type': 'Часы SWG',
//     'color': ['black', 'red', 'blue'],
//     "images": [],
//     'price': 9500,
//     'description': ['Материал: пластик', "Настенные часы в пластиковом корпусе синего цвета замечательно дополнят интерьер в классическом стиле.", 'Часы разборные, на циферблат можно нанести поздравление и подарить близким людям, а также нанести логотип своей компании.', 'Оптовая печать просчитывается индивидуально.'],
//     'category': "Часы"
//   },