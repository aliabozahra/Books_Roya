import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { FaStar, FaQuoteRight, FaLinkedin, FaUserCircle } from 'react-icons/fa';
import useBookPublishingStore from '../../../store/useBookPublishingStore';

const TestimonialsSection = () => {
  const { testimonials, loading, fetchTestimonials } = useBookPublishingStore();

  // Mock testimonials data for demo
  const mockTestimonials = [
    {
      id: 1,
      name: 'د. فاطمة السعد',
      position: 'كاتبة وباحثة أكاديمية',
      content: 'خدمة متميزة واهتمام بأدق التفاصيل. فريق العمل محترف جداً وساعدني في تحويل بحثي الأكاديمي إلى كتاب يصل لجمهور أوسع. كتابي وصل لمستوى احترافي عالي فاق توقعاتي بكثير.',
      rating: 5,
      image: '/assets/images/no_image.png',
      bookTitle: 'التربية في العصر الرقمي',
      verified: true
    },
    {
      id: 2,
      name: 'أحمد البدري',
      position: 'مؤلف وكاتب',
      content: 'فريق محترف ومتفهم لاحتياجات الكاتب. ساعدوني في تطوير روايتي من فكرة بسيطة إلى عمل أدبي متكامل. النتيجة فاقت توقعاتي والكتاب حقق نجاحاً كبيراً في المعارض.',
      rating: 5,
      image: '/assets/images/no_image.png',
      bookTitle: 'ظلال الماضي',
      verified: true
    },
    {
      id: 3,
      name: 'سارة العلي',
      position: 'خبيرة اقتصادية',
      content: 'تجربة رائعة من البداية للنهاية. الفريق ساعدني في تحويل خبرتي العملية في الاستثمار إلى دليل عملي مفيد للقراء. الاهتمام بالتفاصيل والجودة كان استثنائياً.',
      rating: 5,
      image: '/assets/images/no_image.png',
      bookTitle: 'دليل الاستثمار الذكي',
      verified: true
    },
    {
      id: 4,
      name: 'د. محمد الأندلسي',
      position: 'مؤرخ وباحث',
      content: 'عمل احترافي متقن. ساعدوني في إخراج كتابي التاريخي بشكل يليق بأهمية الموضوع. التصميم والإخراج كان رائعاً والمراجعة اللغوية دقيقة جداً.',
      rating: 5,
      image: '/assets/images/no_image.png',
      bookTitle: 'تاريخ الأندلس المجيد',
      verified: true
    },
    {
      id: 5,
      name: 'فاطمة النور',
      position: 'شاعرة',
      content: 'تعاملهم مع ديواني الشعري كان بحساسية عالية ومراعاة لطبيعة النص الشعري. النتيجة كانت ديوان جميل يعكس روح القصائد ويحافظ على جمالياتها.',
      rating: 5,
      image: '/assets/images/no_image.png',
      bookTitle: 'ديوان الحب والوطن',
      verified: true
    }
  ];

  const testimonialsToShow = testimonials?.length > 0 ? testimonials : mockTestimonials;

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  const renderStars = (rating) => {
    return [...Array(5)]?.map((_, index) => (
      <FaStar
        key={index}
        className={`${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 text-8xl text-primary rotate-12">
          <FaQuoteRight />
        </div>
        <div className="absolute bottom-20 left-20 text-6xl text-secondary -rotate-12">
          <FaStar />
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-foreground mb-6  "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            هدفنا ثقة العملاء..
            <span className="block text-primary mt-2">واستفادة القرّاء</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            كلمات المؤلفين الذين وثقوا بخبرتنا تتحدث عن جودة خدماتنا أفضل من أي وصف
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          className="relative max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="testimonials-swiper pb-12"
          >
            {testimonialsToShow?.map((testimonial, index) => (
              <SwiperSlide key={testimonial?.id}>
                <motion.div
                  className="group h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-card border border-border rounded-xl p-6 h-full hover:shadow-testimonial transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                    
                    {/* Background Quote */}
                    <div className="absolute top-4 left-4 text-4xl text-primary/10">
                      <FaQuoteRight />
                    </div>
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                            <FaUserCircle className="text-2xl text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground flex items-center gap-2">
                            {testimonial?.name}
                            {testimonial?.verified && (
                              <span className="text-primary text-sm">
                                <FaLinkedin />
                              </span>
                            )}
                          </h4>
                          <p className="text-sm text-muted-foreground">{testimonial?.position}</p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1 mb-4">
                        {renderStars(testimonial?.rating)}
                      </div>

                      {/* Testimonial Content */}
                      <blockquote className="text-muted-foreground leading-relaxed mb-4 italic">
                        "{testimonial?.content}"
                      </blockquote>

                      {/* Book Title */}
                      {testimonial?.bookTitle && (
                        <div className="pt-4 border-t border-border">
                          <p className="text-sm text-primary font-medium">
                            كتاب: {testimonial?.bookTitle}
                          </p>
                        </div>
                      )}

                      {/* Verification Badge */}
                      {testimonial?.verified && (
                        <div className="absolute top-4 right-4">
                          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">✓</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Hover effect gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "98%", label: "نسبة رضا العملاء" },
            { number: "5/5", label: "متوسط التقييم" },
            { number: "300+", label: "مؤلف راضي" },
            { number: "24h", label: "وقت الاستجابة" }
          ]?.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center group hover:bg-card/50 p-4 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                {metric?.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric?.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4  ">
              هل تريد أن تكون التجربة الإيجابية القادمة؟
            </h3>
            <p className="text-muted-foreground mb-6">
              انضم إلى مئات المؤلفين الراضين عن خدماتنا واحصل على استشارة مجانية اليوم
            </p>
            
            <motion.button
              onClick={() => {
                const whatsappMessage = 'أريد استشارة مجانية حول خدمات نشر الكتب';
                const whatsappURL = `https://wa.me/966123456789?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(whatsappURL, '_blank');
              }}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              احجز استشارتك المجانية
              <FaQuoteRight />
            </motion.button>
          </div>
        </motion.div>
      </div>
      {/* Custom Swiper Styles */}
      <style  global>{`
        .testimonials-swiper .swiper-pagination-bullet {
          background: #f79433 !important;
          opacity: 0.3 !important;
        }
        
        .testimonials-swiper .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;