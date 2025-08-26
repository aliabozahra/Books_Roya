import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ServicesGrid = () => {
  const services = [
    {
      icon: 'Edit3',
      title: 'الكتابة الاحترافية',
      description: 'فريق من الكتاب المتخصصين يحولون أفكارك إلى محتوى احترافي مقروء',
      features: [
        'كتابة بأسلوب احترافي',
        'تطوير الأفكار وإثرائها',
        'مراجعات دورية معك',
        'ضمان الأصالة والجودة'
      ],
      color: 'primary',
      bgGradient: 'from-primary/10 to-primary/5'
    },
    {
      icon: 'FileCheck',
      title: 'التحرير والمراجعة',
      description: 'مراجعة شاملة للمحتوى لغوياً ونحوياً وأسلوبياً لضمان أعلى جودة',
      features: [
        'المراجعة اللغوية والنحوية',
        'تحسين الأسلوب والسلاسة',
        'التأكد من تماسك المحتوى',
        'التدقيق النهائي المتقن'
      ],
      color: 'secondary',
      bgGradient: 'from-secondary/10 to-secondary/5'
    },
    {
      icon: 'Palette',
      title: 'التصميم والإخراج',
      description: 'تصميم غلاف مميز وتنسيق داخلي احترافي يجذب القراء ويعكس جودة المحتوى',
      features: [
        'تصميم غلاف جذاب ومميز',
        'تنسيق الصفحات الداخلية',
        'اختيار الخطوط المناسبة',
        'إضافة الصور والرسوم البيانية'
      ],
      color: 'accent',
      bgGradient: 'from-accent/10 to-accent/5'
    },
    {
      icon: 'Printer',
      title: 'الطباعة عالية الجودة',
      description: 'طباعة بأحدث التقنيات وأجود الخامات لضمان منتج نهائي يليق بكتابك',
      features: [
        'طباعة بجودة عالية',
        'خامات فاخرة ومتينة',
        'خيارات متنوعة للأحجام',
        'عينات للمراجعة قبل الطباعة'
      ],
      color: 'success',
      bgGradient: 'from-success/10 to-success/5'
    },
    {
      icon: 'Truck',
      title: 'التوزيع والنشر',
      description: 'شبكة توزيع واسعة تضمن وصول كتابك للقراء في جميع أنحاء الوطن العربي',
      features: [
        'التوزيع في 9 دول عربية',
        'النشر في المكتبات الرئيسية',
        'النشر الإلكتروني',
        'تسويق وترويج الكتاب'
      ],
      color: 'warning',
      bgGradient: 'from-warning/10 to-warning/5'
    },
    {
      icon: 'Headphones',
      title: 'الدعم والمتابعة',
      description: 'دعم مستمر طوال رحلة النشر وما بعدها لضمان نجاح كتابك في السوق',
      features: [
        'دعم فني مستمر',
        'متابعة مبيعات الكتاب',
        'تقارير دورية مفصلة',
        'استشارات تسويقية'
      ],
      color: 'primary',
      bgGradient: 'from-primary/10 to-primary/5'
    }
  ];

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
            خدماتنا الشاملة لنشر كتابك
          </h2>
          <p className="  text-lg text-muted-foreground max-w-3xl mx-auto">
            نقدم لك حلولاً متكاملة تغطي جميع جوانب عملية النشر من الفكرة حتى وصول كتابك للقراء
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services?.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`h-full bg-gradient-to-br ${service?.bgGradient} rounded-xl p-6 border border-border hover:border-${service?.color}/30 transition-all duration-300 hover:shadow-lg`}>
                {/* Icon */}
                <div className={`w-14 h-14 bg-${service?.color}/10 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service?.icon} size={28} className={`text-${service?.color}`} />
                </div>

                {/* Title */}
                <h3 className="  text-xl font-bold text-foreground mb-4">
                  {service?.title}
                </h3>

                {/* Description */}
                <p className="  text-muted-foreground leading-relaxed mb-6">
                  {service?.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service?.features?.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className={`w-5 h-5 bg-${service?.color}/20 rounded-full flex items-center justify-center flex-shrink-0`}>
                        <Icon name="Check" size={12} className={`text-${service?.color}`} />
                      </div>
                      <span className="  text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decorative Element */}
                <div className={`absolute top-4 left-4 w-2 h-2 bg-${service?.color} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-success/10 rounded-xl p-8 border border-success/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="Shield" size={32} className="text-success" />
              <h3 className="  text-2xl font-bold text-foreground">
                ضمان الجودة 100%
              </h3>
            </div>
            <p className="  text-muted-foreground max-w-2xl mx-auto mb-6">
              نضمن لك جودة استثنائية في جميع مراحل العمل، وإذا لم تكن راضياً عن النتيجة، 
              نعيد لك أموالك كاملة دون أي أسئلة
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground  ">
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-success" />
                <span>التسليم في الوقت المحدد</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="RefreshCw" size={16} className="text-success" />
                <span>مراجعات مجانية حتى الرضا التام</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" size={16} className="text-success" />
                <span>معايير جودة عالمية</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;