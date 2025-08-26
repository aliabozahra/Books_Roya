import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FinalCTA = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer when it reaches zero
          days = 2;
          hours = 23;
          minutes = 45;
          seconds = 30;
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsAppConsultation = () => {
    const message = encodeURIComponent(`مرحباً، أرغب في الاستفادة من العرض الخاص للاستشارة المجانية وخصم 25% على خدمات النشر. 

أريد مناقشة مشروع كتابي والحصول على:
• استشارة مجانية مدتها 60 دقيقة
• تقييم مجاني لمشروع الكتاب
• خطة عمل مخصصة
• خصم 25% على الباقة المختارة

شكراً لكم.`);
    window.open(`https://wa.me/966501234567?text=${message}`, '_blank');
  };

  const benefits = [
    {
      icon: 'MessageCircle',
      title: 'استشارة مجانية 60 دقيقة',
      description: 'بدلاً من 30 دقيقة فقط'
    },
    {
      icon: 'FileText',
      title: 'تقييم مجاني لمشروعك',
      description: 'تحليل شامل لفكرة كتابك'
    },
    {
      icon: 'Target',
      title: 'خطة عمل مخصصة',
      description: 'استراتيجية مفصلة لنجاح كتابك'
    },
    {
      icon: 'Percent',
      title: 'خصم 25% على جميع الباقات',
      description: 'وفر حتى 5000 ريال سعودي'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden" dir="rtl">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-secondary rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 bg-warning/20 text-warning px-4 py-2 rounded-full   text-sm font-medium mb-6 border border-warning/30">
            <Icon name="Clock" size={16} />
            <span>عرض محدود لفترة قصيرة</span>
          </div>

          <h2 className="  text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            لا تدع فكرة كتابك تبقى مجرد حلم!
          </h2>
          
          <p className="  text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            احجز استشارتك المجانية الآن واحصل على خصم حصري 25% على جميع خدمات النشر
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card rounded-2xl p-8 shadow-xl border border-border mb-12 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="  text-2xl font-bold text-foreground mb-2">
              العرض ينتهي خلال:
            </h3>
            <p className="  text-muted-foreground">
              لا تفوت هذه الفرصة الذهبية
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 max-w-md mx-auto mb-8">
            {[
              { label: 'يوم', value: timeLeft?.days },
              { label: 'ساعة', value: timeLeft?.hours },
              { label: 'دقيقة', value: timeLeft?.minutes },
              { label: 'ثانية', value: timeLeft?.seconds }
            ]?.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary text-white rounded-lg p-4 mb-2">
                  <div className="text-2xl md:text-3xl font-bold">
                    {item?.value?.toString()?.padStart(2, '0')}
                  </div>
                </div>
                <div className="  text-sm text-muted-foreground">
                  {item?.label}
                </div>
              </div>
            ))}
          </div>

          {/* Special Offer Benefits */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {benefits?.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 bg-success/10 rounded-lg p-4 border border-success/20"
              >
                <div className="w-12 h-12 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name={benefit?.icon} size={20} className="text-success" />
                </div>
                <div>
                  <h4 className="  font-semibold text-foreground mb-1">
                    {benefit?.title}
                  </h4>
                  <p className="  text-sm text-muted-foreground">
                    {benefit?.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main CTA */}
          <div className="text-center">
            <Button
              variant="default"
              size="xl"
              onClick={handleWhatsAppConsultation}
              iconName="MessageCircle"
              iconPosition="right"
              className="  text-lg px-12 py-6 shadow-cta hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              احجز استشارتك المجانية الآن واحصل على الخصم
            </Button>
            
            <p className="  text-sm text-muted-foreground mt-4">
              * العرض ساري لأول 50 عميل فقط
            </p>
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <p className="  text-muted-foreground mb-4">
              انضم إلى أكثر من 300 مؤلف حققوا أحلامهم معنا
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground  ">
              <div className="flex items-center gap-2">
                <Icon name="Users" size={16} className="text-primary" />
                <span>+300 مؤلف راضٍ</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Star" size={16} className="text-warning" />
                <span>تقييم 4.9/5</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Award" size={16} className="text-success" />
                <span>معدل نجاح 98%</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} className="text-secondary" />
                <span>ضمان الجودة 100%</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Risk Reversal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-success/10 rounded-xl p-6 border border-success/20 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Icon name="Shield" size={24} className="text-success" />
              <h3 className="  text-lg font-bold text-foreground">
                ضمان استرداد المبلغ كاملاً
              </h3>
            </div>
            <p className="  text-muted-foreground">
              إذا لم تكن راضياً عن جودة عملنا خلال أول 30 يوم، نعيد لك أموالك كاملة دون أي أسئلة
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;