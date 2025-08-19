import { create } from 'zustand';
import image from "../components/imges/Qe8jdF_1754296241.png"

export const useBookStore = create((set, get) => ({
  // State
  loading: false,
  books: [],
  testimonials: [],
 
  stats: {
    booksCompleted: 300,
    yearsExperience: 15,
    arabCountries: 9
  },
  processSteps: [
    { step: 1, title: 'الاستشارة المجانية', description: 'نبدأ بفهم رؤيتك وأهدافك من الكتاب' },
    { step: 2, title: 'وضع الخطة', description: 'نضع خطة مفصلة للمحتوى والجدول الزمني' },
    { step: 3, title: 'التأليف والكتابة', description: 'فريقنا يعمل على تحويل أفكارك إلى نص احترافي' },
    { step: 4, title: 'المراجعة والتدقيق', description: 'مراجعة شاملة للمحتوى والتدقيق اللغوي' },
    { step: 5, title: 'التصميم والإخراج', description: 'تصميم الغلاف والصفحات الداخلية' },
    { step: 6, title: 'التسليم النهائي', description: 'تسليم الكتاب جاهز للطباعة والنشر' }
  ],

  // بدل الـ Axios بخطوة مباشرة
  fetchBooks: async () => {
    set({ loading: true });
    set({
      books: [
        { 
          id: 1, 
          title: 'رحلة في عالم الأدب', 
          author: 'أحمد محمد', 
          cover: image, 
          description: 'كتاب يأخذك في رحلة شيقة عبر عالم الأدب العربي' 
        },
        { 
          id: 2, 
          title: 'فن الإدارة الحديثة', 
          author: 'سارة أحمد', 
          cover: image, 
          description: 'دليلك الشامل لإتقان فنون الإدارة المعاصرة' 
        },
        { 
          id: 3, 
          title: 'تاريخ الحضارة العربية', 
          author: 'محمد علي', 
          cover: image, 
          description: 'استكشاف عميق لتاريخ الحضارة العربية وإنجازاتها' 
        }
      ]
    });
    set({ loading: false });
  },

  fetchTestimonials: async () => {
    set({ loading: true });
    set({
      testimonials: [
        {
          id: 1,
          name: 'د. خالد الأحمد',
          role: 'أستاذ جامعي',
          content: 'فريق محترف ومتميز، ساعدوني في إنجاز كتابي بأعلى جودة ممكنة. النتيجة فاقت توقعاتي.',
          rating: 5,
          avatar: '/api/placeholder/80/80'
        },
        {
          id: 2,
          name: 'فاطمة السعد',
          role: 'كاتبة ومؤلفة',
          content: 'تجربة رائعة من البداية حتى النهاية. الفريق محترف والنتيجة النهائية مذهلة.',
          rating: 5,
          avatar: '/api/placeholder/80/80'
        },
        {
          id: 3,
          name: 'عمر التميمي',
          role: 'رجل أعمال',
          content: 'أنصح بشدة بالتعامل مع هذا الفريق. احترافية عالية والتزام بالمواعيد.',
          rating: 5,
          avatar: '/api/placeholder/80/80'
        }
      ]
    });
    set({ loading: false });
  },
}));

export const useModal = create((set) => ({
  statModal: false,
  closemodal: () => set({ statModal: false }),
  openmodal: () => set({ statModal: true }),
}));
