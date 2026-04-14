import prisma from '../config/database.js';

class RequestsService {
  async createCallbackRequest(data) {
    return await prisma.callbackRequest.create({
      data: {
        name: data.name,
        phone: data.phone
      }
    });
  }

  async createCalculationRequest(data) {
    return await prisma.calculationRequest.create({
      data: {
        name: data.name,
        phone: data.phone,
        details: data.details || null,
        quantity: data.quantity || 1,
        phoneCall: data.contactMethod?.phoneCall || false,
        whatsapp: data.contactMethod?.whatsapp || false,
        telegram: data.contactMethod?.telegram || false
      }
    });
  }

  async getAllCallbackRequests() {
    return await prisma.callbackRequest.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }

  async getAllCalculationRequests() {
    return await prisma.calculationRequest.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }

  async updateCallbackStatus(id, status) {
    return await prisma.callbackRequest.update({
      where: { id: parseInt(id) },
      data: { status }
    });
  }

  async updateCalculationStatus(id, status) {
    return await prisma.calculationRequest.update({
      where: { id: parseInt(id) },
      data: { status }
    });
  }

  formatCallbackRequest(request) {
    return {
      id: request.id,
      name: request.name,
      phone: request.phone,
      status: request.status,
      createdAt: request.createdAt
    };
  }

  formatCalculationRequest(request) {
    return {
      id: request.id,
      name: request.name,
      phone: request.phone,
      details: request.details,
      quantity: request.quantity,
      contactMethod: {
        phoneCall: request.phoneCall,
        whatsapp: request.whatsapp,
        telegram: request.telegram
      },
      status: request.status,
      createdAt: request.createdAt
    };
  }
}

export default new RequestsService();
