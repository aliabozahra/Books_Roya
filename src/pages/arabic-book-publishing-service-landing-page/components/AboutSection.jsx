import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaArrowLeft } from 'react-icons/fa';
import { MdTransform } from 'react-icons/md';

const AboutSection = () => {
  const handleCTAClick = () => {
    const whatsappMessage = 'أريد معرفة المزيد عن خدماتكم لتحويل فكرتي إلى كتاب';
    const whatsappURL = `https://wa.me/966123456789?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="py-20 bg-muted/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 right-20 text-8xl text-primary rotate-12">
          <FaLightbulb />
        </div>
        <div className="absolute bottom-20 left-20 text-6xl text-secondary -rotate-12">
          <MdTransform />
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Right Side - Content */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6  ">
                نحول أفكارك العبقرية
                <span className="block text-primary mt-2">إلى كتب تخلد اسمك</span>
              </h2>
            </motion.div>

            <motion.div
              className="space-y-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                كم من فكرة رائعة ماتت في عقل صاحبها لأنه لم يجد الطريق الصحيح لتحويلها إلى كتاب؟ 
                نحن نؤمن أن كل فكرة تستحق أن ترى النور، وكل كاتب يستحق أن يرى حلمه حقيقة.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                منذ أكثر من 15 عاماً، نساعد الكتاب والمؤلفين في تحويل أفكارهم إلى كتب احترافية. 
                من اللحظة الأولى لفكرتك حتى وصول كتابك إلى المكتبات، نحن معك في كل خطوة.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-primary/10">
                <p className="text-primary font-semibold text-lg mb-2">
                  رسالتنا واضحة:
                </p>
                <p className="text-muted-foreground">
                  "لا نصنع كتباً عادية، بل نخلق إرثاً أدبياً يحمل بصمتك ويخلد اسمك في عقول القراء"
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <button
                onClick={handleCTAClick}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-cta transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-3 group"
              >
                اطلب الآن
                <FaArrowLeft className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Left Side - Book Transformation Animation */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative">
              
              {/* Idea to Book Transformation */}
              <div className="flex items-center gap-8">
                
                {/* Idea Bulb */}
                <motion.div
                  className="relative"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <FaLightbulb className="text-3xl text-white" />
                  </div>
                  
                  {/* Sparkle effects */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-300 rounded-full"
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: 0
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-1 -left-1 w-3 h-3 bg-orange-400 rounded-full"
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: 1
                    }}
                  />
                </motion.div>

                {/* Transformation Arrow */}
                <motion.div
                  className="flex flex-col items-center"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <MdTransform className="text-4xl text-primary mb-2" />
                  <span className="text-sm text-muted-foreground font-medium">تحويل</span>
                  
                  {/* Flowing particles */}
                  <div className="flex gap-1 mt-2">
                    {[...Array(3)]?.map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 bg-primary/60 rounded-full"
                        animate={{ 
                          y: [0, -10, 0],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>
                </motion.div>

                {/* Finished Book */}
                <motion.div
                  className="relative"
                  animate={{ 
                    y: [-5, 5, -5],
                    rotateY: [0, 10, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                >
                  <div className="w-32 h-40 bg-gradient-to-r from-secondary to-primary rounded-lg shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                    
                    {/* Book cover design */}
                    <div className="absolute top-4 right-4 left-4">
                      <div className="text-white text-sm font-bold mb-2 text-center  ">
                        كتابك المميز
                      </div>
                      <div className="w-full h-px bg-white/30"></div>
                    </div>
                    
                    {/* Success icon */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">✨</span>
                      </div>
                    </div>
                    
                    {/* Book spine */}
                    <div className="absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-l from-black/30 to-transparent"></div>
                  </div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-primary/30 rounded-lg blur-lg scale-110 -z-10"></div>
                </motion.div>
              </div>

              {/* Success message */}
              <motion.div
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <p className="text-primary font-semibold text-sm whitespace-nowrap">
                  من الفكرة إلى الكتاب المطبوع
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;