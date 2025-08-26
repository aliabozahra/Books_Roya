import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    books: 0,
    years: 0,
    countries: 0
  });
  const sectionRef = useRef(null);

  const finalCounts = {
    books: 300,
    years: 15,
    countries: 9
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setCounts({
          books: Math.floor(finalCounts?.books * progress),
          years: Math.floor(finalCounts?.years * progress),
          countries: Math.floor(finalCounts?.countries * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(finalCounts);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const stats = [
    {
      id: 'books',
      icon: 'BookOpen',
      count: counts?.books,
      suffix: '+',
      label: 'كتاب منشور',
      description: 'تم نشرها بنجاح',
      color: 'primary',
      bgColor: 'bg-primary/10'
    },
    {
      id: 'years',
      icon: 'Calendar',
      count: counts?.years,
      suffix: '+',
      label: 'سنة خبرة',
      description: 'في مجال النشر',
      color: 'secondary',
      bgColor: 'bg-secondary/10'
    },
    {
      id: 'countries',
      icon: 'Globe',
      count: counts?.countries,
      suffix: '+',
      label: 'دولة عربية',
      description: 'نخدم فيها عملاءنا',
      color: 'accent',
      bgColor: 'bg-accent/10'
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-muted/30" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="  text-3xl md:text-4xl font-bold text-foreground mb-4">
            أرقام تتحدث عن نفسها
          </h2>
          <p className="  text-lg text-muted-foreground max-w-2xl mx-auto">
            إنجازاتنا وخبرتنا في خدمة المؤلفين العرب حول العالم
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats?.map((stat, index) => (
            <motion.div
              key={stat?.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="bg-card rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-border group-hover:border-primary/20">
                {/* Icon */}
                <div className={`w-16 h-16 ${stat?.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon 
                    name={stat?.icon} 
                    size={32} 
                    className={`text-${stat?.color}`}
                  />
                </div>

                {/* Count */}
                <div className="mb-4">
                  <span className="  text-4xl md:text-5xl font-bold text-foreground">
                    {stat?.count}
                  </span>
                  <span className={`text-3xl md:text-4xl font-bold text-${stat?.color} ml-1`}>
                    {stat?.suffix}
                  </span>
                </div>

                {/* Label */}
                <h3 className="  text-xl font-semibold text-foreground mb-2">
                  {stat?.label}
                </h3>

                {/* Description */}
                <p className="  text-sm text-muted-foreground">
                  {stat?.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute top-4 right-4 w-2 h-2 bg-${stat?.color} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground  ">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} className="text-success" />
              <span>ضمان الجودة 100%</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Clock" size={16} className="text-warning" />
              <span>التسليم في الوقت المحدد</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Award" size={16} className="text-primary" />
              <span>معتمدون من اتحاد الناشرين العرب</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Users" size={16} className="text-secondary" />
              <span>رضا العملاء 98%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;