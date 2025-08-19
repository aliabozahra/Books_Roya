import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaPalette, FaFileAlt, FaClock, FaUserTie, FaShieldAlt } from 'react-icons/fa';
import { MdHighQuality, MdTimer } from 'react-icons/md';
import { BiSolidBadgeCheck } from 'react-icons/bi';

const WhyUsSection = () => {
  const reasons = [
    {
      icon: <FaUserTie className="text-2xl" />,
      title: "خبرة متخصصة",
      description: "فريق من المحررين والمصممين المتخصصين في الأدب العربي"
    },
    {
      icon: <MdHighQuality className="text-2xl" />,
      title: "جودة احترافية",
      description: "معايير عالمية في التحرير والتصميم والطباعة"
    },
    {
      icon: <FaFileAlt className="text-2xl" />,
      title: "محتوى متميز",
      description: "نحافظ على أصالة أفكارك مع تطوير الأسلوب والعرض"
    },
    {
      icon: <MdTimer className="text-2xl" />,
      title: "التزام بالمواعيد",
      description: "نلتزم بالجداول الزمنية المتفق عليها دون تأخير"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-16 right-16 text-7xl text-primary rotate-12">
          <FaAward />
        </div>
        <div className="absolute bottom-16 left-16 text-6xl text-secondary -rotate-12">
          <BiSolidBadgeCheck />
        </div>
        <div className="absolute top-1/3 left-1/4 text-4xl text-accent rotate-45">
          <FaShieldAlt />
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-5xl text-primary -rotate-45">
          <FaPalette />
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
            لأن كتابك يستحق التميز
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            نجمع بين الخبرة الطويلة والتقنيات الحديثة لنقدم لك خدمات استثنائية تجعل كتابك يبرز في عالم النشر
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Reasons List */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {reasons?.map((reason, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="flex items-start gap-4 p-6 rounded-xl border border-transparent hover:border-primary/20 hover:bg-card/50 transition-all duration-300">
                  
                  {/* Icon */}
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    {reason?.icon}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {reason?.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason?.description}
                    </p>
                    
                    {/* Hover effect underline */}
                    <motion.div 
                      className="h-0.5 bg-gradient-to-r from-primary to-secondary mt-3 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: 40 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: (index * 0.15) + 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Visual Elements */}
          <motion.div
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            
            {/* Central Quality Badge */}
            <div className="relative z-10">
              <motion.div
                className="w-48 h-48 bg-gradient-to-br from-primary via-secondary to-accent rounded-full flex items-center justify-center shadow-2xl"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <div className="w-40 h-40 bg-white rounded-full flex flex-col items-center justify-center text-center p-4">
                  <FaAward className="text-4xl text-primary mb-2" />
                  <div className="text-lg font-bold text-foreground  ">
                    جودة مضمونة
                  </div>
                  <div className="text-sm text-muted-foreground">
                    +300 كتاب
                  </div>
                </div>
              </motion.div>

              {/* Floating Quality Icons */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <MdHighQuality className="text-2xl text-primary" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-8 w-14 h-14 bg-secondary rounded-full shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <FaClock className="text-xl text-white" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-12 w-12 h-12 bg-accent rounded-full shadow-lg flex items-center justify-center"
                animate={{ 
                  x: [-5, 5, -5],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <BiSolidBadgeCheck className="text-lg text-white" />
              </motion.div>

              <motion.div
                className="absolute top-1/4 -right-10 w-10 h-10 bg-primary/80 rounded-full shadow-lg flex items-center justify-center"
                animate={{ 
                  rotate: [0, 360],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <FaShieldAlt className="text-sm text-white" />
              </motion.div>

              {/* Orbit rings */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full scale-125 animate-spin"></div>
              <div className="absolute inset-0 border border-secondary/20 rounded-full scale-150 animate-spin" style={{ animationDirection: 'reverse' }}></div>
            </div>

          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {[
            { number: "100%", label: "ضمان الجودة" },
            { number: "24/7", label: "دعم فني" },
            { number: "15+", label: "سنة خبرة" },
            { number: "9", label: "دول عربية" }
          ]?.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group hover:bg-card/50 p-4 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                {stat?.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat?.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;