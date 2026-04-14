import requestsService from '../services/requests.service.js';

class RequestsController {
  async createCallbackRequest(req, res, next) {
    try {
      const { name, phone } = req.body;

      if (!name || !phone) {
        return res.status(400).json({
          success: false,
          error: 'Имя и телефон обязательны'
        });
      }

      const request = await requestsService.createCallbackRequest({ name, phone });
      const formatted = requestsService.formatCallbackRequest(request);

      res.status(201).json({ success: true, data: formatted });
    } catch (error) {
      next(error);
    }
  }

  async createCalculationRequest(req, res, next) {
    try {
      const { name, phone, details, quantity, contactMethod } = req.body;

      if (!name || !phone) {
        return res.status(400).json({
          success: false,
          error: 'Имя и телефон обязательны'
        });
      }

      const request = await requestsService.createCalculationRequest({
        name,
        phone,
        details,
        quantity,
        contactMethod
      });
      const formatted = requestsService.formatCalculationRequest(request);

      res.status(201).json({ success: true, data: formatted });
    } catch (error) {
      next(error);
    }
  }

  async getAllCallbackRequests(req, res, next) {
    try {
      const requests = await requestsService.getAllCallbackRequests();
      const formatted = requests.map(r => requestsService.formatCallbackRequest(r));
      res.json({ success: true, data: formatted });
    } catch (error) {
      next(error);
    }
  }

  async getAllCalculationRequests(req, res, next) {
    try {
      const requests = await requestsService.getAllCalculationRequests();
      const formatted = requests.map(r => requestsService.formatCalculationRequest(r));
      res.json({ success: true, data: formatted });
    } catch (error) {
      next(error);
    }
  }

  async updateCallbackStatus(req, res, next) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const request = await requestsService.updateCallbackStatus(id, status);
      const formatted = requestsService.formatCallbackRequest(request);

      res.json({ success: true, data: formatted });
    } catch (error) {
      next(error);
    }
  }

  async updateCalculationStatus(req, res, next) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const request = await requestsService.updateCalculationStatus(id, status);
      const formatted = requestsService.formatCalculationRequest(request);

      res.json({ success: true, data: formatted });
    } catch (error) {
      next(error);
    }
  }
}

export default new RequestsController();
