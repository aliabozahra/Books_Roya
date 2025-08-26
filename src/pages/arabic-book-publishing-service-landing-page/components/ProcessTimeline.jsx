import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 1,
      title: 'الاستشارة المجانية',
      duration: '30 دقيقة',
      description: 'نناقش فكرة كتابك وأهدافك ونضع خطة مخصصة لمشروعك',
      details: `خلال هذه الجلسة سنقوم بـ:
• تحليل فكرة كتابك وإمكانياتها
• تحديد الجمهور المستهدف
• وضع استراتيجية المحتوى
• تقدير الجدول الزمني والتكلفة
• الإجابة على جميع استفساراتك`,
      icon: 'MessageCircle',
      color: 'primary'
    },
    {
      id: 2,
      title: 'التخطيط والهيكلة',
      duration: '3-5 أيام',
      description: 'نضع هيكل الكتاب التفصيلي ونحدد المحتوى المطلوب لكل فصل',
      details: `في هذه المرحلة نقوم بـ:
• إنشاء مخطط تفصيلي للكتاب
• تحديد عدد الفصول والصفحات
• وضع خطة زمنية للكتابة
• تحديد المراجع والمصادر المطلوبة
• إعداد دليل الأسلوب الكتابي`,
      icon: 'FileText',
      color: 'secondary'
    },
    {
      id: 3,
      title: 'الكتابة والتأليف',
      duration: '4-8 أسابيع',
      description: 'فريق الكتاب المتخصصين يحول أفكارك إلى محتوى احترافي',
      details: `عملية الكتابة تشمل:
• كتابة المحتوى بأسلوب احترافي
• مراجعات دورية معك للتأكد من الجودة
• تطوير الأفكار وإثرائها
• إضافة الأمثلة والحالات العملية
• كتابة المقدمة والخاتمة`,
      icon: 'Edit',
      color: 'accent'
    },
    {
      id: 4,
      title: 'التحرير والمراجعة',
      duration: '2-3 أسابيع',
      description: 'مراجعة شاملة للمحتوى لغوياً ونحوياً وأسلوبياً',
      details: `التحرير يتضمن:
• المراجعة اللغوية والنحوية
• تحسين الأسلوب والسلاسة
• التأكد من تماسك المحتوى
• مراجعة المراجع والاقتباسات
• التدقيق النهائي قبل التصميم`,
      icon: 'CheckCircle',
      color: 'success'
    },
    {
      id: 5,
      title: 'التصميم والإخراج',
      duration: '2-3 أسابيع',
      description: 'تصميم الغلاف والصفحات الداخلية بشكل احترافي جذاب',
      details: `التصميم يشمل:
• تصميم غلاف مميز وجذاب
• تنسيق الصفحات الداخلية
• اختيار الخطوط المناسبة
• إضافة الصور والرسوم البيانية
• إعداد ملف الطباعة النهائي`,
      icon: 'Palette',
      color: 'warning'
    },
    {
      id: 6,
      title: 'الطباعة والتوزيع',
      duration: '1-2 أسابيع',
      description: 'طباعة الكتاب بجودة عالية وتوزيعه في الأسواق المستهدفة',
      details: `المرحلة الأخيرة تتضمن:
• طباعة عينات للمراجعة النهائية
• الطباعة بجودة عالية
• التوزيع في المكتبات الرئيسية
• النشر الإلكتروني على المنصات
• تسليم النسخ المطلوبة للمؤلف`,
      icon: 'Truck',
      color: 'primary'
    }
  ];

  return (
    <section className="py-20 bg-muted/30" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="  text-3xl md:text-4xl font-bold text-foreground mb-6">
            رحلة تحويل فكرتك إلى كتاب منشور
          </h2>
          <p className="  text-lg text-muted-foreground max-w-3xl mx-auto">
            عملية منظمة ومدروسة من 6 مراحل تضمن لك الحصول على كتاب احترافي يليق بأفكارك ويحقق أهدافك
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Timeline */}
          <div className="space-y-4">
            {steps?.map((step, index) => (
              <motion.div
                key={step?.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative cursor-pointer transition-all duration-300 ${
                  activeStep === index ? 'scale-105' : 'hover:scale-102'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  activeStep === index 
                    ? `border-${step?.color} bg-${step?.color}/5 shadow-lg` 
                    : 'border-border bg-card hover:border-primary/30'
                }`}>
                  <div className="flex items-center gap-4">
                    {/* Step Number & Icon */}
                    <div className={`relative flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeStep === index 
                        ? `bg-${step?.color} text-white shadow-lg` 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon name={step?.icon} size={24} />
                      <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        activeStep === index 
                          ? 'bg-white text-foreground' 
                          : 'bg-primary text-white'
                      }`}>
                        {step?.id}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="  text-lg font-semibold text-foreground">
                          {step?.title}
                        </h3>
                        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                          activeStep === index 
                            ? `bg-${step?.color}/20 text-${step?.color}` 
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {step?.duration}
                        </span>
                      </div>
                      <p className="  text-muted-foreground text-sm leading-relaxed">
                        {step?.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className={`flex-shrink-0 transition-transform duration-300 ${
                      activeStep === index ? 'rotate-90' : ''
                    }`}>
                      <Icon name="ChevronLeft" size={20} className="text-muted-foreground" />
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps?.length - 1 && (
                  <div className="absolute right-8 top-full w-0.5 h-4 bg-border"></div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Details Panel */}
          <div className="sticky top-8">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-xl p-8 shadow-lg border border-border"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 bg-${steps?.[activeStep]?.color}/10 rounded-full flex items-center justify-center`}>
                  <Icon name={steps?.[activeStep]?.icon} size={24} className={`text-${steps?.[activeStep]?.color}`} />
                </div>
                <div>
                  <h3 className="  text-xl font-bold text-foreground">
                    {steps?.[activeStep]?.title}
                  </h3>
                  <p className="  text-sm text-muted-foreground">
                    المدة المتوقعة: {steps?.[activeStep]?.duration}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <p className="  text-muted-foreground leading-relaxed">
                  {steps?.[activeStep]?.description}
                </p>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="  font-semibold text-foreground mb-3">
                    تفاصيل هذه المرحلة:
                  </h4>
                  <div className="  text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                    {steps?.[activeStep]?.details}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-primary/10 rounded-xl p-8 border border-primary/20">
            <h3 className="  text-2xl font-bold text-foreground mb-4">
              جاهز لبدء رحلة نشر كتابك؟
            </h3>
            <p className="  text-muted-foreground mb-6 max-w-2xl mx-auto">
              احجز استشارتك المجانية الآن ودعنا نناقش مشروع كتابك ونضع خطة مخصصة لتحقيق أهدافك
            </p>
            <button
              onClick={() => {
                const message = encodeURIComponent("مرحباً، أرغب في حجز استشارة مجانية لمناقشة مشروع كتابي");
                window.open(`https://wa.me/966501234567?text=${message}`, '_blank');
              }}
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg   font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-cta"
            >
              <Icon name="MessageCircle" size={20} />
              احجز استشارتك المجانية الآن
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;