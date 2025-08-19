import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaPhone, FaEnvelope, FaUser, FaBookOpen } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import useBookPublishingStore from '../../../store/useBookPublishingStore';
import Swal from 'sweetalert2';

const CTAClosingSection = () => {
  const [showConsultationForm, setShowConsultationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    bookType: '',
    message: ''
  });

  const { submitConsultation, loading, error } = useBookPublishingStore();

  const bookTypes = [
    'رواية',
    'كتاب أكاديمي',
    'كتاب تجاري',
    'ديوان شعر',
    'كتاب تاريخي',
    'كتاب ديني',
    'كتاب تقني',
    'غير ذلك'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!formData?.name || !formData?.phone || !formData?.bookType) {
      Swal?.fire({
        title: 'خطأ',
        text: 'يرجى ملء جميع الحقول المطلوبة',
        icon: 'error',
        confirmButtonText: 'حسناً',
        confirmButtonColor: '#f79433'
      });
      return;
    }

    try {
      await submitConsultation(formData);
      
      Swal?.fire({
        title: 'تم الإرسال بنجاح!',
        text: 'سيتم توجيهك إلى واتساب لإكمال المحادثة',
        icon: 'success',
        confirmButtonText: 'رائع',
        confirmButtonColor: '#f79433'
      });

      setShowConsultationForm(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        bookType: '',
        message: ''
      });

    } catch (error) {
      Swal?.fire({
        title: 'حدث خطأ',
        text: 'يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة',
        icon: 'error',
        confirmButtonText: 'حسناً',
        confirmButtonColor: '#f79433'
      });
    }
  };

  const handleDirectWhatsApp = () => {
    const whatsappMessage = 'مرحبا، أريد بدء مشروع كتاب جديد وأحتاج لاستشارة مجانية';
    const whatsappURL = `https://wa.me/966123456789?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 text-8xl text-white animate-pulse">
            <FaRocket />
          </div>
          <div className="absolute bottom-20 left-20 text-6xl text-white animate-bounce">
            <FaBookOpen />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl text-white/20">
            <FaRocket />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Heading */}
            <motion.h2 
              className="text-3xl lg:text-5xl font-bold mb-6  "
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              كتابك القادم يبدأ من هنا
            </motion.h2>
            
            <motion.p 
              className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              لا تدع فكرتك العبقرية تبقى مجرد حلم. ابدأ رحلة تحويلها إلى كتاب حقيقي اليوم
            </motion.p>

            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                onClick={() => setShowConsultationForm(true)}
                className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-bold shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                احجز استشارة مجانية
                <FaRocket className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                onClick={handleDirectWhatsApp}
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                تواصل مباشرة
                <FaPhone className="group-hover:animate-pulse" />
              </motion.button>
            </motion.div>

            {/* Trust Elements */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">استشارة مجانية</div>
                <div className="text-lg opacity-80">نناقش مشروعك بالتفصيل</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">ضمان الجودة</div>
                <div className="text-lg opacity-80">نضمن رضاك التام</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">دعم مستمر</div>
                <div className="text-lg opacity-80">نساندك حتى النشر</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 border-2 border-white/20 rounded-full"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-24 h-24 border-2 border-white/20 rounded-full"
            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </section>
      {/* Consultation Form Modal */}
      {showConsultationForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-card rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ duration: 0.3 }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-xl font-bold text-foreground  ">
                احجز استشارتك المجانية
              </h3>
              <button
                onClick={() => setShowConsultationForm(false)}
                className="text-muted-foreground hover:text-foreground p-2 hover:bg-muted rounded-full transition-colors"
              >
                <MdClose className="text-xl" />
              </button>
            </div>

            {/* Modal Content */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  الاسم الكامل *
                </label>
                <div className="relative">
                  <FaUser className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    name="name"
                    value={formData?.name}
                    onChange={handleInputChange}
                    className="w-full pr-10 pl-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="اكتب اسمك الكامل"
                    required
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  رقم الهاتف *
                </label>
                <div className="relative">
                  <FaPhone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData?.phone}
                    onChange={handleInputChange}
                    className="w-full pr-10 pl-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="05xxxxxxxx"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  البريد الإلكتروني
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleInputChange}
                    className="w-full pr-10 pl-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
              </div>

              {/* Book Type Field */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  نوع الكتاب *
                </label>
                <select
                  name="bookType"
                  value={formData?.bookType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  required
                >
                  <option value="">اختر نوع الكتاب</option>
                  {bookTypes?.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  رسالة إضافية
                </label>
                <textarea
                  name="message"
                  value={formData?.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                  placeholder="أخبرنا عن فكرتك للكتاب..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  loading
                    ? 'bg-muted text-muted-foreground cursor-not-allowed'
                    : 'bg-primary hover:bg-primary/90 text-white hover:scale-105 hover:shadow-lg'
                }`}
                whileHover={!loading ? { scale: 1.02 } : {}}
                whileTap={!loading ? { scale: 0.98 } : {}}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-muted-foreground border-t-transparent rounded-full animate-spin"></div>
                    جاري الإرسال...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    إرسال الطلب
                    <FaRocket />
                  </div>
                )}
              </motion.button>

              {error && (
                <div className="text-red-600 text-sm text-center mt-2">
                  {error}
                </div>
              )}

              {/* Privacy Note */}
              <p className="text-xs text-muted-foreground text-center mt-4">
                نحن نحترم خصوصيتك. معلوماتك آمنة ولن نشاركها مع أطراف ثالثة.
              </p>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default CTAClosingSection;