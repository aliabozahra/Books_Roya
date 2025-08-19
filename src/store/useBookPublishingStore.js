import { create } from 'zustand';
import axios from 'axios';

const useBookPublishingStore = create((set, get) => ({
  // State
  loading: false,
  error: null,
  consultationSubmitted: false,
  portfolioItems: [],
  testimonials: [],
  stats: {
    booksPublished: 300,
    yearsExperience: 15,
    arabCountries: 9
  },

  // Actions
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  
  // Submit consultation form
  submitConsultation: async (formData) => {
    set({ loading: true, error: null });
    try {
      // Placeholder API call
      const response = await axios?.post('/api/consultation', formData);
      set({ consultationSubmitted: true, loading: false });
      
      // WhatsApp integration
      const whatsappMessage = `مرحبا، أريد حجز استشارة مجانية لنشر كتاب. الاسم: ${formData?.name}, الهاتف: ${formData?.phone}, نوع الكتاب: ${formData?.bookType}`;
      const whatsappURL = `https://wa.me/966123456789?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappURL, '_blank');
      
      return response?.data;
    } catch (error) {
      set({ error: 'حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى.', loading: false });
      throw error;
    }
  },

  // Fetch portfolio items
  fetchPortfolio: async () => {
    set({ loading: true });
    try {
      // Placeholder API call
      const response = await axios?.get('/api/portfolio');
      set({ portfolioItems: response?.data || [], loading: false });
    } catch (error) {
      // Fallback data for demo
      const mockPortfolio = [
        { id: 1, title: 'رواية الصحراء الذهبية', author: 'أحمد محمود', genre: 'رواية', coverImage: '/assets/images/book1.jpg' },
        { id: 2, title: 'دليل الاستثمار الذكي', author: 'سارة العلي', genre: 'اقتصاد', coverImage: '/assets/images/book2.jpg' },
        { id: 3, title: 'تاريخ الأندلس', author: 'محمد الأندلسي', genre: 'تاريخ', coverImage: '/assets/images/book3.jpg' }
      ];
      set({ portfolioItems: mockPortfolio, loading: false });
    }
  },

  // Fetch testimonials
  fetchTestimonials: async () => {
    try {
      // Placeholder API call
      const response = await axios?.get('/api/testimonials');
      set({ testimonials: response?.data || [] });
    } catch (error) {
      // Fallback data for demo
      const mockTestimonials = [
        {
          id: 1,
          name: 'د. فاطمة السعد',
          position: 'كاتبة وباحثة',
          content: 'خدمة متميزة واهتمام بأدق التفاصيل. كتابي وصل لمستوى احترافي عالي',
          rating: 5,
          image: '/assets/images/testimonial1.jpg'
        },
        {
          id: 2,
          name: 'أحمد البدري',
          position: 'مؤلف',
          content: 'فريق محترف ومتفهم لاحتياجات الكاتب. النتيجة فاقت توقعاتي',
          rating: 5,
          image: '/assets/images/testimonial2.jpg'
        }
      ];
      set({ testimonials: mockTestimonials });
    }
  },

  // Reset consultation state
  resetConsultation: () => set({ consultationSubmitted: false, error: null }),

  // Update stats (animated counters)
  updateStats: (newStats) => set({ stats: { ...get()?.stats, ...newStats } })
}));

export default useBookPublishingStore;