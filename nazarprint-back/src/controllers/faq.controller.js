import faqService from '../services/faq.service.js';

class FaqController {
  async getAllFaq(req, res, next) {
    try {
      const faqs = await faqService.getAllFaq();
      const formattedFaqs = faqService.formatFaqs(faqs);
      res.json({ success: true, data: formattedFaqs });
    } catch (error) {
      next(error);
    }
  }

  async getFaqById(req, res, next) {
    try {
      const { id } = req.params;
      const faq = await faqService.getFaqById(id);

      if (!faq) {
        return res.status(404).json({ success: false, error: 'FAQ not found' });
      }

      const formattedFaq = faqService.formatFaq(faq);
      res.json({ success: true, data: formattedFaq });
    } catch (error) {
      next(error);
    }
  }
}

export default new FaqController();
