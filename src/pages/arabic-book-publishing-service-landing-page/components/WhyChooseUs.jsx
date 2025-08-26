import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: 'Users',
      title: 'فريق متخصص ومتكامل',
      description: 'نضم كتاب ومحررين ومصممين متخصصين في النشر العربي',
      details: [
        'كتاب محترفون بخبرة +10 سنوات',
        'محررون لغويون معتمدون',
        'مصممون متخصصون في الكتب العربية',
        'مستشارون في التسويق والتوزيع'
      ],
      color: 'primary',
      bgGradient: 'from-primary/10 to-primary/5'
    },
    {
      icon: 'Shield',
      title: 'ضمان الجودة والالتزام',
      description: 'نضمن لك جودة استثنائية والالتزام بالمواعيد المحددة',
      details: [
        'ضمان الجودة 100% أو استرداد المبلغ',
        'التزام بالمواعيد المتفق عليها',
        'مراجعات مجانية حتى الرضا التام',
        'دعم فني مستمر طوال المشروع'
      ],
      color: 'success',
      bgGradient: 'from-success/10 to-success/5'
    },
    {
      icon: 'Globe',
      title: 'شبكة توزيع واسعة',
      description: 'نوصل كتابك لأكبر عدد من القراء في الوطن العربي',
      details: [
        'التوزيع في 9 دول عربية',
        'شراكات مع أكبر المكتبات',
        'النشر الإلكتروني على جميع المنصات',
        'خدمات التسويق والترويج'
      ],
      color: 'secondary',
      bgGradient: 'from-secondary/10 to-secondary/5'
    },
    {
      icon: 'Award',
      title: 'سجل حافل بالإنجازات',
      description: 'خبرة 15+ سنة في نشر الكتب العربية مع سجل نجاح مثبت',
      details: [
        '+300 كتاب منشور بنجاح',
        'كتب حائزة على جوائز أدبية',
        'مؤلفون حققوا شهرة واسعة',
        'معدل رضا عملاء 98%'
      ],
      color: 'warning',
      bgGradient: 'from-warning/10 to-warning/5'
    },
    {
      icon: 'DollarSign',
      title: 'أسعار تنافسية وشفافة',
      description: 'باقات متنوعة تناسب جميع الميزانيات بدون تكاليف خفية',
      details: [
        'باقات متدرجة حسب الاحتياجات',
        'شفافية كاملة في التسعير',
        'لا توجد تكاليف خفية',
        'إمكانية الدفع على دفعات'
      ],
      color: 'accent',
      bgGradient: 'from-accent/10 to-accent/5'
    },
    {
      icon: 'Clock',
      title: 'سرعة في التنفيذ',
      description: 'عمليات محسنة تضمن إنجاز مشروعك في أقل وقت ممكن',
      details: [
        'جداول زمنية واضحة ومحددة',
        'تحديثات دورية على التقدم',
        'فريق عمل متفرغ لمشروعك',
        'تسليم سريع دون التأثير على الجودة'
      ],
      color: 'primary',
      bgGradient: 'from-primary/10 to-primary/5'
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
            لماذا تختار دار النشر العربية؟
          </h2>
          <p className="  text-lg text-muted-foreground max-w-3xl mx-auto">
            نتميز بخبرة واسعة وفريق متخصص يضمن لك تجربة نشر استثنائية تحقق أهدافك وتتجاوز توقعاتك
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits?.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`h-full bg-gradient-to-br ${benefit?.bgGradient} rounded-xl p-6 border border-border hover:border-${benefit?.color}/30 transition-all duration-300 hover:shadow-lg`}>
                {/* Icon */}
                <div className={`w-16 h-16 bg-${benefit?.color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={benefit?.icon} size={32} className={`text-${benefit?.color}`} />
                </div>

                {/* Title */}
                <h3 className="  text-xl font-bold text-foreground mb-4">
                  {benefit?.title}
                </h3>

                {/* Description */}
                <p className="  text-muted-foreground leading-relaxed mb-6">
                  {benefit?.description}
                </p>

                {/* Details */}
                <div className="space-y-3">
                  {benefit?.details?.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-3">
                      <div className={`w-5 h-5 bg-${benefit?.color}/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <Icon name="Check" size={12} className={`text-${benefit?.color}`} />
                      </div>
                      <span className="  text-sm text-muted-foreground leading-relaxed">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className={`absolute top-4 left-4 w-2 h-2 bg-${benefit?.color} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="  text-2xl font-bold text-foreground text-center mb-12">
              مقارنة بين خدماتنا والنشر التقليدي
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Publishing */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="X" size={32} className="text-destructive" />
                  </div>
                  <h4 className="  text-lg font-semibold text-destructive mb-2">
                    النشر التقليدي
                  </h4>
                  <p className="  text-sm text-muted-foreground">
                    الطريقة القديمة المعقدة
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    'عملية معقدة وطويلة',
                    'تكاليف خفية مرتفعة',
                    'جودة غير مضمونة',
                    'صعوبة في التوزيع',
                    'عدم الالتزام بالمواعيد',
                    'دعم محدود أو معدوم'
                  ]?.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Icon name="X" size={16} className="text-destructive flex-shrink-0" />
                      <span className="  text-sm text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our Service */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Check" size={32} className="text-success" />
                  </div>
                  <h4 className="  text-lg font-semibold text-success mb-2">
                    خدماتنا المتطورة
                  </h4>
                  <p className="  text-sm text-muted-foreground">
                    الحل الأمثل والأكثر احترافية
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    'عملية مبسطة وسريعة',
                    'أسعار شفافة وتنافسية',
                    'ضمان الجودة 100%',
                    'شبكة توزيع واسعة',
                    'التزام تام بالمواعيد',
                    'دعم مستمر ومتخصص'
                  ]?.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                      <span className="  text-sm text-muted-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="  text-xl font-bold text-foreground mb-8">
            معتمدون ومعترف بنا من قبل
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
              <Icon name="Award" size={20} className="text-primary" />
              <span className="  text-sm font-medium">اتحاد الناشرين العرب</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
              <Icon name="BookOpen" size={20} className="text-secondary" />
              <span className="  text-sm font-medium">جمعية المؤلفين العرب</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
              <Icon name="Shield" size={20} className="text-success" />
              <span className="  text-sm font-medium">ISO 9001:2015</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg border border-border">
              <Icon name="Globe" size={20} className="text-accent" />
              <span className="  text-sm font-medium">معرض الكتاب العربي</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;