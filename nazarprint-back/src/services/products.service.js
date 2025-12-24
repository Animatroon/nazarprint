import prisma from '../config/database.js';

class ProductsService {
  async getProductsByCategory(categoryName) {
    return await prisma.product.findMany({
      where: {
        category: {
          name: categoryName
        }
      },
      include: {
        images: {
          orderBy: { order: 'asc' }
        },
        printingMethods: {
          include: {
            printingMethod: true
          }
        }
      },
      orderBy: {
        id: 'asc'
      }
    });
  }

  async getProductById(id) {
    return await prisma.product.findUnique({
      where: { id: parseInt(id) },
      include: {
        images: {
          orderBy: { order: 'asc' }
        },
        printingMethods: {
          include: {
            printingMethod: true
          }
        },
        category: true
      }
    });
  }

  async getAllCategories() {
    return await prisma.category.findMany({
      orderBy: { id: 'asc' }
    });
  }

  async searchProducts(query) {
    return await prisma.product.findMany({
      where: {
        OR: [
          { name: { contains: query, mode: 'insensitive' } },
          { description: { hasSome: [query] } },
          { subcategory: { contains: query, mode: 'insensitive' } }
        ]
      },
      include: {
        images: {
          orderBy: { order: 'asc' }
        },
        category: true
      }
    });
  }

  async createProduct(data) {
    const { categoryId, methodIds, images, ...rest } = data;

    return await prisma.product.create({
      data: {
        ...rest,
        category: { connect: { id: categoryId } },
        images: {
          create: images?.map((url, i) => ({ url, order: i })) || []
        },
        printingMethods: {
          create: methodIds?.map(mId => ({ printingMethodId: mId })) || []
        }
      },
      include: {
        images: true,
        printingMethods: true,
        category: true
      }
    });
  }

  async updateProduct(id, data) {
    const { categoryId, methodIds, images, ...rest } = data;
    const productId = parseInt(id);

    // Transaction to update related records
    return await prisma.$transaction(async (prisma) => {
      // Update basic fields
      const product = await prisma.product.update({
        where: { id: productId },
        data: {
          ...rest,
          ...(categoryId && { category: { connect: { id: categoryId } } })
        }
      });

      // Update Images if provided (replace strategy for simplicity)
      if (images) {
        await prisma.productImage.deleteMany({ where: { productId } });
        await prisma.productImage.createMany({
          data: images.map((url, i) => ({ url, order: i, productId }))
        });
      }

      // Update Printing Methods if provided
      if (methodIds) {
        await prisma.productPrintingMethod.deleteMany({ where: { productId } });
        await prisma.productPrintingMethod.createMany({
          data: methodIds.map(mId => ({ printingMethodId: mId, productId }))
        });
      }

      return this.getProductById(productId);
    });
  }

  async deleteProduct(id) {
    return await prisma.product.delete({
      where: { id: parseInt(id) }
    });
  }

  formatProduct(product) {
    return {
      id: product.id,
      name: product.name,
      type: product.type,
      price: product.price,
      color: product.colors,
      images: product.images.map(img => img.url),
      methods: product.printingMethods?.map(pm => pm.printingMethod.name) || [],
      format: product.formats,
      description: product.description,
      category: product.subcategory
    };
  }

  formatProducts(products) {
    return products.map(product => this.formatProduct(product));
  }
}

export default new ProductsService();
