import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaBookOpen, FaPenFancy } from 'react-icons/fa';
import { MdMenuBook } from 'react-icons/md';
import { IoBookSharp } from 'react-icons/io5';
import useBookPublishingStore from '../../../store/useBookPublishingStore';

const HeroSection = () => {
  const { stats, updateStats } = useBookPublishingStore();
  const [animatedStats, setAnimatedStats] = useState({
    booksPublished: 0,
    yearsExperience: 0,
    arabCountries: 0
  });

  // Animated counters
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const animate = (target, current, setter, key) => {
      if (current < target) {
        setTimeout(() => {
          const increment = Math.ceil((target - current) / steps);
          const newValue = Math.min(current + increment, target);
          setAnimatedStats(prev => ({ ...prev, [key]: newValue }));
          animate(target, newValue, setter, key);
        }, stepDuration);
      }
    };

    animate(stats?.booksPublished, 0, null, 'booksPublished');
    animate(stats?.yearsExperience, 0, null, 'yearsExperience');
    animate(stats?.arabCountries, 0, null, 'arabCountries');
  }, [stats]);

  const handleCTAClick = () => {
    const whatsappMessage = 'مرحبا، أريد بدء مشروع كتابي الجديد';
    const whatsappURL = `https://wa.me/966123456789?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappURL, '_blank');
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-muted to-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 text-6xl text-primary animate-bounce">
          <FaBook />
        </div>
        <div className="absolute top-32 left-20 text-4xl text-secondary animate-pulse">
          <FaBookOpen />
        </div>
        <div className="absolute bottom-20 right-32 text-5xl text-accent animate-bounce">
          <MdMenuBook />
        </div>
        <div className="absolute bottom-40 left-10 text-3xl text-primary animate-pulse">
          <FaPenFancy />
        </div>
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Right Side - Content (RTL Layout) */}
          <motion.div 
            className="text-center lg:text-right order-2 lg:order-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl lg:text-6xl font-bold text-foreground mb-6   leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              نحن لا ننتج كتب فحسب
              <span className="block text-primary text-3xl lg:text-5xl mt-2">
                نحول أفكارك إلى منشورات خالدة
              </span>
            </motion.h1>

            <motion.p 
              className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              هل لديك فكرة رائعة لكتاب لكنك تفتقر للخبرة في النشر؟ نحن نقدم خدمات شاملة تحول حلمك إلى حقيقة، من الفكرة إلى الكتاب المطبوع
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={handleCTAClick}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-cta transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                ابدأ مشروع كتابك الآن
              </button>
              
              <button
                onClick={scrollToPortfolio}
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                شاهد أعمالنا
              </button>
            </motion.div>

            {/* Trust Statistics */}
            <motion.div 
              className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                  +{animatedStats?.booksPublished}
                </div>
                <div className="text-sm text-muted-foreground">كتاب مُنجز</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-secondary mb-1">
                  +{animatedStats?.yearsExperience}
                </div>
                <div className="text-sm text-muted-foreground">عام خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold text-accent mb-1">
                  +{animatedStats?.arabCountries}
                </div>
                <div className="text-sm text-muted-foreground">دول عربية</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Left Side - Book Animation */}
          <motion.div 
            className="flex justify-center items-center order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main Book Animation */}
              <motion.div
                className="relative z-10"
                animate={{ 
                  rotateY: [0, 15, 0, -15, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="w-64 h-80 bg-gradient-to-r from-primary to-secondary rounded-lg shadow-2xl relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <div className="absolute top-6 right-6 left-6">
                    <div className="text-white text-xl font-bold mb-2  ">
                      كتابك القادم
                    </div>
                    <div className="w-full h-0.5 bg-white/30"></div>
                  </div>
                  
                  {/* Book spine effect */}
                  <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-black/20 to-transparent"></div>
                  
                  {/* Pages effect */}
                  <div className="absolute right-2 top-4 bottom-4 w-1 bg-white/40 rounded-full"></div>
                  
                  {/* Content preview */}
                  <div className="absolute bottom-6 right-6 left-6 text-white/80 text-sm">
                    <div className="flex items-center justify-center h-32">
                      <IoBookSharp className="text-6xl animate-pulse" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Books */}
              <motion.div
                className="absolute -top-8 -right-8 w-16 h-20 bg-accent rounded shadow-lg"
                animate={{ 
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="flex items-center justify-center h-full text-white">
                  <FaBook className="text-2xl" />
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-12 h-16 bg-muted border-2 border-primary rounded shadow-lg"
                animate={{ 
                  y: [10, -10, 10],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <div className="flex items-center justify-center h-full text-primary">
                  <FaBookOpen className="text-lg" />
                </div>
              </motion.div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl scale-110 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;