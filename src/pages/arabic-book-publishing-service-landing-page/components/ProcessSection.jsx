import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaLightbulb, FaEdit, FaPalette, FaPrint, FaRocket, FaChevronDown } from 'react-icons/fa';

const ProcessSection = () => {
  const [expandedStep, setExpandedStep] = useState(null);

  const steps = [
    {
      number: 1,
      icon: <FaComments className="text-2xl" />,
      title: "الاستشارة والتخطيط",
      duration: "1-2 يوم",
      shortDescription: "نناقش فكرتك ونضع خطة شاملة للمشروع",
      fullDescription: "في هذه المرحلة نستمع إلى فكرتك بعناية، نناقش أهدافك من الكتاب، ونضع خطة مفصلة تشمل الجدول الزمني، المتطلبات، والتكلفة. كما نقدم لك استشارة متخصصة حول أفضل الطرق لتطوير فكرتك.",
      deliverables: [
        "جلسة استشارة مجانية",
        "خطة شاملة للمشروع",
        "جدول زمني مفصل",
        "تقدير التكلفة النهائية"
      ]
    },
    {
      number: 2,
      icon: <FaLightbulb className="text-2xl" />,
      title: "تطوير المحتوى والهيكل",
      duration: "1-2 أسبوع",
      shortDescription: "نساعدك في تنظيم أفكارك وبناء هيكل متماسك للكتاب",
      fullDescription: "نعمل معك على تطوير هيكل الكتاب، تنظيم الفصول، وصياغة المحتوى الأولي. نضمن التدفق المنطقي للأفكار والحفاظ على صوتك الكتابي المميز.",
      deliverables: [
        "هيكل تفصيلي للكتاب",
        "مخطط الفصول والعناوين",
        "محتوى أولي منظم",
        "مراجعة وتطوير الأفكار"
      ]
    },
    {
      number: 3,
      icon: <FaEdit className="text-2xl" />,
      title: "التحرير والتدقيق",
      duration: "2-3 أسابيع",
      shortDescription: "مراجعة شاملة لضمان جودة النص لغوياً ونحوياً",
      fullDescription: "نقوم بمراجعة النص على عدة مستويات: التدقيق اللغوي والنحوي، مراجعة الأسلوب والسياق، وتحسين انسيابية النص. نضمن خلو النص من الأخطاء وجاهزيته للنشر.",
      deliverables: [
        "تدقيق لغوي ونحوي شامل",
        "مراجعة الأسلوب والسياق",
        "تحسين التدفق والانسيابية",
        "تقرير مفصل بالتعديلات"
      ]
    },
    {
      number: 4,
      icon: <FaPalette className="text-2xl" />,
      title: "التصميم والإخراج الفني",
      duration: "1-2 أسبوع",
      shortDescription: "تصميم غلاف جذاب وتنسيق داخلي احترافي",
      fullDescription: "نصمم غلاف الكتاب ليعكس محتواه ويجذب القارئ، بالإضافة إلى تنسيق الصفحات الداخلية باحترافية عالية. نختار الخطوط والألوان المناسبة لنوع الكتاب.",
      deliverables: [
        "تصميم غلاف احترافي",
        "تنسيق الصفحات الداخلية",
        "اختيار الخطوط المناسبة",
        "ملف جاهز للطباعة"
      ]
    },
    {
      number: 5,
      icon: <FaPrint className="text-2xl" />,
      title: "الطباعة والإنتاج",
      duration: "1-2 أسبوع",
      shortDescription: "طباعة عالية الجودة بأفضل المواد والتقنيات",
      fullDescription: "نتولى عملية الطباعة باستخدام أحدث التقنيات وأفضل أنواع الورق. نقدم خيارات متنوعة للأحجام والتجليد حسب نوع الكتاب واحتياجاتك.",
      deliverables: [
        "طباعة عالية الجودة",
        "خيارات متنوعة للتجليد",
        "مراجعة نهائية قبل الطباعة",
        "نسخ تجريبية للمراجعة"
      ]
    },
    {
      number: 6,
      icon: <FaRocket className="text-2xl" />,
      title: "التسليم والنشر",
      duration: "3-5 أيام",
      shortDescription: "تسليم الكتاب النهائي والمساعدة في التوزيع",
      fullDescription: "نسلمك الكتاب النهائي مطبوعاً ونقدم المساعدة في التوزيع والتسويق. كما نزودك بنسخ رقمية عالية الجودة لمختلف الاستخدامات.",
      deliverables: [
        "تسليم النسخ المطبوعة",
        "نسخ رقمية عالية الجودة",
        "المساعدة في التوزيع",
        "دعم ما بعد النشر"
      ]
    }
  ];

  const toggleStep = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <section id="process" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 text-6xl text-primary animate-pulse">
          <FaRocket />
        </div>
        <div className="absolute bottom-20 left-20 text-5xl text-secondary animate-bounce">
          <FaLightbulb />
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
            خطواتنا واضحة
            <span className="block text-primary mt-2">لنصل إلى كتاب يُفتخر به</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            نتبع منهجية علمية واضحة في كل مشروع، مما يضمن جودة النتيجة والالتزام بالمواعيد
          </motion.p>
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            
            {/* Timeline Line */}
            <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent"></div>

            {/* Steps */}
            <div className="space-y-8">
              {steps?.map((step, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  
                  {/* Step Card */}
                  <div className="mr-20 bg-card border border-border rounded-xl p-6 hover:shadow-testimonial transition-all duration-300 hover:-translate-y-1">
                    
                    {/* Step Header */}
                    <div 
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => toggleStep(index)}
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-lg text-muted-foreground font-semibold">
                          {step?.title}
                        </div>
                        <div className="text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                          {step?.duration}
                        </div>
                      </div>
                      
                      <motion.div
                        animate={{ rotate: expandedStep === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown className="text-muted-foreground" />
                      </motion.div>
                    </div>

                    {/* Short Description */}
                    <p className="text-muted-foreground mt-3 leading-relaxed">
                      {step?.shortDescription}
                    </p>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedStep === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 mt-4 border-t border-border">
                            <h4 className="font-semibold text-foreground mb-3">تفاصيل المرحلة:</h4>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {step?.fullDescription}
                            </p>
                            
                            <h4 className="font-semibold text-foreground mb-3">المخرجات:</h4>
                            <ul className="space-y-2">
                              {step?.deliverables?.map((deliverable, deliverableIndex) => (
                                <li 
                                  key={deliverableIndex}
                                  className="flex items-center gap-3 text-muted-foreground"
                                >
                                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                                  {deliverable}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute right-6 top-6 w-4 h-4 rounded-full border-2 border-white shadow-lg z-10"
                    style={{
                      background: index < 2 ? '#f79433' : index < 4 ? '#217abe' : '#2d5aa0'
                    }}
                    whileHover={{ scale: 1.2 }}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                  />

                  {/* Step Number */}
                  <motion.div
                    className="absolute right-2 top-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-sm font-bold shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  >
                    {step?.number}
                  </motion.div>

                  {/* Step Icon (floating) */}
                  <motion.div
                    className="absolute -right-12 top-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg"
                    style={{
                      background: index < 2 ? 'linear-gradient(135deg, #f79433, #e67e22)' : 
                                 index < 4 ? 'linear-gradient(135deg, #217abe, #3498db)': 'linear-gradient(135deg, #2d5aa0, #8e44ad)'
                    }}
                    animate={{ 
                      y: [-2, 2, -2],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {step?.icon}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4  ">
              مستعد لبدء رحلة كتابك؟
            </h3>
            <p className="text-muted-foreground mb-6">
              احجز استشارتك المجانية اليوم ودعنا نساعدك في تحويل فكرتك إلى كتاب حقيقي
            </p>
            
            <motion.button
              onClick={() => {
                const whatsappMessage = 'أريد البدء في مشروع كتابي وأريد معرفة التفاصيل';
                const whatsappURL = `https://wa.me/966123456789?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(whatsappURL, '_blank');
              }}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ابدأ مشروعك الآن
              <FaRocket />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;