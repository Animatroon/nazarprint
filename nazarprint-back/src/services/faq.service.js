import prisma from '../config/database.js';

class FaqService {
  async getAllFaq() {
    return await prisma.faq.findMany({
      orderBy: { order: 'asc' }
    });
  }

  async getFaqById(id) {
    return await prisma.faq.findUnique({
      where: { id: parseInt(id) }
    });
  }

  formatFaq(faq) {
    return {
      id: faq.id,
      question: faq.question,
      answer: faq.answer,
      open: false
    };
  }

  formatFaqs(faqs) {
    return faqs.map(faq => this.formatFaq(faq));
  }
}

export default new FaqService();
