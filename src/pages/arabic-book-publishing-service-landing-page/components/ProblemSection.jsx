import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';


const ProblemSection = () => {
  const problems = [
    {
      icon: 'AlertTriangle',
      title: 'جودة غير احترافية',
      description: 'النشر الذاتي غالباً ما يؤدي إلى كتب ذات جودة ضعيفة تضر بسمعتك المهنية'
    },
    {
      icon: 'Clock',
      title: 'نقص الوقت والخبرة',
      description: 'عملية النشر معقدة وتتطلب وقتاً طويلاً وخبرة متخصصة لا تملكها'
    },
    {
      icon: 'DollarSign',
      title: 'تكاليف خفية مرتفعة',
      description: 'التكاليف الحقيقية للنشر الذاتي أعلى بكثير مما تتوقع'
    },
    {
      icon: 'Users',
      title: 'صعوبة الوصول للقراء',
      description: 'بدون شبكة توزيع قوية، كتابك لن يصل إلى الجمهور المستهدف'
    }
  ];

  return (
    <section className="py-20 bg-background" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="  text-3xl md:text-4xl font-bold text-foreground mb-6">
                لماذا يفشل معظم المؤلفين في 
                <span className="text-destructive block mt-2">النشر الذاتي؟</span>
              </h2>
              
              <p className="  text-lg text-muted-foreground leading-relaxed mb-8">
                الكثير من المؤلفين الموهوبين يضيعون سنوات من العمل بسبب أخطاء يمكن تجنبها في عملية النشر. 
                لا تدع كتابك يكون واحداً منها.
              </p>
            </motion.div>

            {/* Problems List */}
            <div className="space-y-6">
              {problems?.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 border border-destructive/20"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-destructive/10 rounded-full flex items-center justify-center mt-1">
                    <Icon name={problem?.icon} size={20} className="text-destructive" />
                  </div>
                  <div className="flex-1">
                    <h3 className="  text-lg font-semibold text-foreground mb-2">
                      {problem?.title}
                    </h3>
                    <p className="  text-muted-foreground leading-relaxed">
                      {problem?.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary/10 rounded-lg p-6 border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon name="Lightbulb" size={24} className="text-primary" />
                <h3 className="  text-xl font-semibold text-foreground">
                  الحل الأمثل
                </h3>
              </div>
              <p className="  text-muted-foreground">
                دعنا نتولى كل هذه التحديات بينما تركز أنت على ما تجيده - الكتابة والإبداع.
              </p>
            </motion.div>
          </div>

          {/* Visual Comparison */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Before - Amateur */}
              <div className="relative">
                <div className="bg-destructive/10 rounded-lg p-6 border-2 border-dashed border-destructive/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center">
                      <Icon name="X" size={16} color="white" />
                    </div>
                    <h3 className="  text-lg font-semibold text-destructive">
                      النشر الذاتي التقليدي
                    </h3>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-16 bg-gray-300 rounded"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-gray-300 rounded mb-2"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded"></div>
                      <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                      <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm   text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="X" size={14} className="text-destructive" />
                      <span>تصميم غير احترافي</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="X" size={14} className="text-destructive" />
                      <span>أخطاء لغوية ونحوية</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="X" size={14} className="text-destructive" />
                      <span>توزيع محدود</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* VS Indicator */}
              <div className="flex items-center justify-center">
                <div className="bg-primary rounded-full p-3">
                  <Icon name="ArrowDown" size={20} color="white" />
                </div>
              </div>

              {/* After - Professional */}
              <div className="relative">
                <div className="bg-success/10 rounded-lg p-6 border-2 border-success/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                      <Icon name="Check" size={16} color="white" />
                    </div>
                    <h3 className="  text-lg font-semibold text-success">
                      النشر الاحترافي معنا
                    </h3>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 mb-4 shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-16 bg-gradient-to-br from-primary to-secondary rounded shadow-sm"></div>
                      <div className="flex-1">
                        <div className="h-3 bg-foreground rounded mb-2"></div>
                        <div className="h-2 bg-primary rounded w-3/4"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-foreground/80 rounded"></div>
                      <div className="h-2 bg-foreground/80 rounded w-5/6"></div>
                      <div className="h-2 bg-foreground/80 rounded w-4/5"></div>
                    </div>
                  </div>

                  <ul className="space-y-2 text-sm   text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span>تصميم احترافي مميز</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span>تحرير لغوي متقن</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span>توزيع في 9 دول عربية</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;