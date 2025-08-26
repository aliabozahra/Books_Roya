import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'د. أحمد محمد الخالدي',
      title: 'أستاذ إدارة الأعمال',
      location: 'الرياض، السعودية',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      bookTitle: 'فن القيادة في العصر الرقمي',
      rating: 5,
      testimonial: `تجربة استثنائية مع فريق دار النشر العربية. لقد حولوا أفكاري المتناثرة إلى كتاب احترافي يفوق توقعاتي. 
الفريق محترف جداً والتزموا بالمواعيد المحددة. كتابي الآن يُدرّس في عدة جامعات عربية.`,
      beforeAfter: {
        before: 'كانت لدي أفكار متناثرة حول القيادة',
        after: 'أصبح لدي كتاب احترافي يُدرّس في الجامعات'
      },
      results: [
        'أكثر من 50,000 نسخة مباعة',
        'ترجم إلى 3 لغات',
        'يُدرّس في 12 جامعة عربية'
      ]
    },
    {
      id: 2,
      name: 'فاطمة السعدي',
      title: 'كاتبة وشاعرة',
      location: 'القاهرة، مصر',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      bookTitle: 'رحلة في عالم الشعر العربي',
      rating: 5,
      testimonial: `لم أكن أتوقع أن تكون عملية النشر بهذه السهولة والاحترافية. الفريق فهم رؤيتي تماماً وساعدني في إخراج كتاب يعكس شغفي بالشعر العربي. 
التصميم رائع والتحرير متقن جداً.`,
      beforeAfter: {
        before: 'مخطوطة شعرية تحتاج للتنظيم والإخراج',
        after: 'كتاب حاز على جائزة أفضل كتاب شعري'
      },
      results: [
        'جائزة أفضل كتاب شعري 2023',
        'أكثر من 25,000 نسخة مباعة',
        'مراجعات إيجابية 98%'
      ]
    },
    {
      id: 3,
      name: 'د. محمود عبد الرحمن',
      title: 'أستاذ البحث العلمي',
      location: 'بيروت، لبنان',
      avatar: 'https://randomuser.me/api/portraits/men/56.jpg',
      bookTitle: 'أسس البحث العلمي المعاصر',
      rating: 5,
      testimonial: `خدمة متميزة من البداية للنهاية. الفريق متخصص ويفهم متطلبات الكتب الأكاديمية. ساعدوني في تنظيم المحتوى وإخراجه بشكل علمي دقيق. 
النتيجة كتاب أكاديمي معتمد في عدة جامعات.`,
      beforeAfter: {
        before: 'بحوث أكاديمية متفرقة تحتاج للتجميع',
        after: 'مرجع أكاديمي معتمد في الجامعات'
      },
      results: [
        'معتمد في 15 جامعة عربية',
        'مرجع أساسي لطلاب الدراسات العليا',
        'طُبع 8 طبعات في عامين'
      ]
    },
    {
      id: 4,
      name: 'سارة أحمد النوري',
      title: 'خبيرة تسويق رقمي',
      location: 'دبي، الإمارات',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      bookTitle: 'استراتيجيات التسويق الرقمي',
      rating: 5,
      testimonial: `تجربة رائعة! الفريق فهم طبيعة مجال التسويق الرقمي وساعدني في إخراج كتاب عملي يفيد رجال الأعمال. 
التصميم عصري والمحتوى منظم بطريقة تجعل القراءة ممتعة ومفيدة.`,
      beforeAfter: {
        before: 'خبرة عملية تحتاج للتوثيق والتنظيم',
        after: 'دليل عملي يستخدمه آلاف المسوقين'
      },
      results: [
        'أكثر من 30,000 نسخة مباعة',
        'دليل معتمد في دورات التسويق',
        'تقييم 4.9/5 على منصات البيع'
      ]
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials?.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials?.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials?.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="  text-3xl md:text-4xl font-bold text-foreground mb-6">
            ماذا يقول عملاؤنا عنا؟
          </h2>
          <p className="  text-lg text-muted-foreground max-w-3xl mx-auto">
            قصص نجاح حقيقية من مؤلفين حولنا أحلامهم إلى كتب منشورة ومؤثرة
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-card rounded-2xl p-8 md:p-12 shadow-testimonial border border-border"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div className="space-y-6">
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(testimonials?.[currentIndex]?.rating)]?.map((_, i) => (
                        <Icon key={i} name="Star" size={20} className="text-warning fill-current" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="  text-lg leading-relaxed text-foreground">
                      "{testimonials?.[currentIndex]?.testimonial}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <Image
                        src={testimonials?.[currentIndex]?.avatar}
                        alt={testimonials?.[currentIndex]?.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                      />
                      <div>
                        <h4 className="  text-lg font-semibold text-foreground">
                          {testimonials?.[currentIndex]?.name}
                        </h4>
                        <p className="  text-sm text-muted-foreground">
                          {testimonials?.[currentIndex]?.title}
                        </p>
                        <p className="  text-xs text-muted-foreground flex items-center gap-1">
                          <Icon name="MapPin" size={12} />
                          {testimonials?.[currentIndex]?.location}
                        </p>
                      </div>
                    </div>

                    {/* Book Title */}
                    <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="BookOpen" size={16} className="text-primary" />
                        <span className="  text-sm font-medium text-primary">
                          الكتاب المنشور
                        </span>
                      </div>
                      <h5 className="  font-semibold text-foreground">
                        {testimonials?.[currentIndex]?.bookTitle}
                      </h5>
                    </div>
                  </div>

                  {/* Results & Before/After */}
                  <div className="space-y-6">
                    {/* Before/After */}
                    <div className="space-y-4">
                      <div className="bg-destructive/10 rounded-lg p-4 border border-destructive/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="AlertCircle" size={16} className="text-destructive" />
                          <span className="  text-sm font-medium text-destructive">
                            قبل التعامل معنا
                          </span>
                        </div>
                        <p className="  text-sm text-muted-foreground">
                          {testimonials?.[currentIndex]?.beforeAfter?.before}
                        </p>
                      </div>

                      <div className="bg-success/10 rounded-lg p-4 border border-success/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Icon name="CheckCircle" size={16} className="text-success" />
                          <span className="  text-sm font-medium text-success">
                            بعد التعامل معنا
                          </span>
                        </div>
                        <p className="  text-sm text-muted-foreground">
                          {testimonials?.[currentIndex]?.beforeAfter?.after}
                        </p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h6 className="  font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Icon name="TrendingUp" size={16} className="text-primary" />
                        النتائج المحققة
                      </h6>
                      <ul className="space-y-2">
                        {testimonials?.[currentIndex]?.results?.map((result, index) => (
                          <li key={index} className="flex items-center gap-2   text-sm text-muted-foreground">
                            <Icon name="Check" size={14} className="text-success" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute top-1/2 -translate-y-1/2 -right-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-300 shadow-lg"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute top-1/2 -translate-y-1/2 -left-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors duration-300 shadow-lg"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' :'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300  "
            >
              <Icon name={isAutoPlaying ? "Pause" : "Play"} size={14} />
              {isAutoPlaying ? "إيقاف التشغيل التلقائي" : "تشغيل تلقائي"}
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-success/10 rounded-xl p-8 border border-success/20">
            <h3 className="  text-xl font-bold text-foreground mb-6">
              إحصائيات رضا العملاء
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">98%</div>
                <p className="  text-sm text-muted-foreground">معدل رضا العملاء</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">300+</div>
                <p className="  text-sm text-muted-foreground">كتاب منشور بنجاح</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary mb-2">15+</div>
                <p className="  text-sm text-muted-foreground">سنة من الخبرة</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">9</div>
                <p className="  text-sm text-muted-foreground">دول عربية نخدمها</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;