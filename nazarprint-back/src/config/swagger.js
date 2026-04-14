import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Nazarprint API',
      version: '1.0.0',
      description: 'API для сервиса печати Nazarprint',
      contact: {
        name: 'Nazarprint'
      }
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development сервер'
      }
    ],
    tags: [
      {
        name: 'Catalogs',
        description: 'Операции с каталогами и товарами'
      },
      {
        name: 'Categories',
        description: 'Операции с категориями'
      },
      {
        name: 'FAQ',
        description: 'Часто задаваемые вопросы'
      },
      {
        name: 'Home',
        description: 'Данные для главной страницы'
      },
      {
        name: 'Requests',
        description: 'Заявки на обратный звонок и расчет'
      }
    ],
    components: {
      schemas: {
        Product: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID товара'
            },
            name: {
              type: 'string',
              description: 'Название товара'
            },
            type: {
              type: 'string',
              nullable: true,
              description: 'Тип товара'
            },
            price: {
              type: 'integer',
              description: 'Цена в сомах'
            },
            color: {
              type: 'array',
              items: { type: 'string' },
              description: 'Доступные цвета'
            },
            images: {
              type: 'array',
              items: { type: 'string' },
              description: 'URL изображений'
            },
            methods: {
              type: 'array',
              items: { type: 'string' },
              description: 'Методы печати'
            },
            format: {
              type: 'array',
              items: { type: 'string' },
              description: 'Доступные форматы/размеры'
            },
            description: {
              type: 'array',
              items: { type: 'string' },
              description: 'Описание товара'
            },
            category: {
              type: 'string',
              nullable: true,
              description: 'Подкатегория товара'
            }
          }
        },
        Category: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID категории'
            },
            name: {
              type: 'string',
              description: 'Системное название категории'
            },
            displayName: {
              type: 'string',
              description: 'Отображаемое название категории'
            }
          }
        },
        CategoryHome: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID категории'
            },
            name: {
              type: 'string',
              description: 'Название категории'
            },
            icon: {
              type: 'string',
              description: 'Путь к иконке'
            },
            link: {
              type: 'string',
              description: 'Ссылка на категорию'
            }
          }
        },
        FAQ: {
          type: 'object',
          properties: {
            id: {
              type: 'integer',
              description: 'ID FAQ'
            },
            question: {
              type: 'string',
              description: 'Вопрос'
            },
            answer: {
              type: 'string',
              description: 'Ответ'
            }
          }
        },
        SuccessResponse: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true
            },
            data: {
              type: 'object'
            }
          }
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false
            },
            error: {
              type: 'string'
            }
          }
        }
      }
    }
  },
  apis: ['./src/routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
