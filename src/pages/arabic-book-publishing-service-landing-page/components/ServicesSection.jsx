import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaPenFancy, FaEdit, FaPalette } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { BiSolidEdit } from 'react-icons/bi';

const ServicesSection = () => {
  const services = [
    {
      icon: <FaPenFancy className="text-3xl" />,
      title: "التأليف وصياغة الأفكار",
      description: "نساعدك في تحويل أفكارك إلى نصوص احترافية مع الحفاظ على أسلوبك الشخصي",
      features: [
        "صياغة احترافية للأفكار",
        "تنظيم المحتوى والفصول",
        "الحفاظ على الهوية الكتابية"
      ]
    },
    {
      icon: <BiSolidEdit className="text-3xl" />,
      title: "التحرير والتدقيق اللغوي",
      description: "مراجعة شاملة للنص لضمان خلوه من الأخطاء اللغوية والنحوية",
      features: [
        "تدقيق لغوي ونحوي دقيق",
        "مراجعة الأسلوب والسياق",
        "تحسين انسيابية النص"
      ]
    },
    {
      icon: <MdDesignServices className="text-3xl" />,
      title: "التصميم والإخراج الفني",
      description: "تصميم غلاف جذاب وتنسيق داخلي احترافي يليق بمحتوى كتابك",
      features: [
        "تصميم غلاف احترافي",
        "تنسيق الصفحات الداخلية",
        "اختيار الخطوط المناسبة"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-6xl text-primary rotate-45">
          <FaCheckCircle />
        </div>
        <div className="absolute bottom-20 right-20 text-8xl text-secondary -rotate-12">
          <FaPalette />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl text-accent/30">
          <FaEdit />
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
            className="text-3xl lg:text-4xl font-bold text-foreground mb-4  "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            كل ما يحتاجه كتابك...
            <span className="block text-primary mt-2">في مكان واحد</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            من الفكرة الأولى إلى الكتاب المطبوع، نقدم خدمات شاملة تضمن جودة استثنائية
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services?.map((service, index) => (
            <motion.div
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-card border border-border rounded-xl p-8 h-full hover:shadow-testimonial transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    {service?.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-4  ">
                    {service?.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service?.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service?.features?.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: (index * 0.2) + (featureIndex * 0.1) + 0.8
                        }}
                      >
                        <div className="flex-shrink-0">
                          <FaCheckCircle className="text-primary text-lg" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Hover effect indicator */}
                  <motion.div 
                    className="absolute bottom-4 left-4 w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: (index * 0.2) + 1.2 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl p-8 max-w-2xl mx-auto">
            <p className="text-lg text-foreground mb-4 font-semibold">
              هل تريد خدمة مخصصة لاحتياجاتك الخاصة؟
            </p>
            <p className="text-muted-foreground mb-6">
              نقدم حلول مخصصة تتناسب مع طبيعة كتابك ومتطلباتك الخاصة
            </p>
            
            <motion.button
              onClick={() => {
                const whatsappMessage = 'أريد استشارة حول الخدمات المخصصة لكتابي';
                const whatsappURL = `https://wa.me/966123456789?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(whatsappURL, '_blank');
              }}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              استشارة مجانية الآن
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;