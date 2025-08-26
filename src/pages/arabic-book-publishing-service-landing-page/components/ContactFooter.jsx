import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ContactFooter = () => {
  const currentYear = new Date()?.getFullYear();

  const contactInfo = [
    {
      icon: 'Phone',
      title: 'اتصل بنا',
      details: ['+966 50 123 4567', '+966 11 234 5678'],
      action: () => window.open('tel:+966501234567', '_self')
    },
    {
      icon: 'Mail',
      title: 'راسلنا',
      details: ['info@arabicpublishing.com', 'support@arabicpublishing.com'],
      action: () => window.open('mailto:info@arabicpublishing.com', '_self')
    },
    {
      icon: 'MessageCircle',
      title: 'واتساب',
      details: ['متاح 24/7', 'رد فوري'],
      action: () => {
        const message = encodeURIComponent("مرحباً، أرغب في الاستفسار عن خدمات النشر");
        window.open(`https://wa.me/966501234567?text=${message}`, '_blank');
      }
    },
    {
      icon: 'MapPin',
      title: 'موقعنا',
      details: ['الرياض، المملكة العربية السعودية', 'حي الملك فهد، شارع العليا'],
      action: () => window.open('https://maps.google.com/?q=24.7136,46.6753', '_blank')
    }
  ];

  const socialLinks = [
    {
      icon: 'MessageCircle',
      name: 'واتساب',
      url: 'https://wa.me/966501234567',
      color: 'text-green-500'
    },
    {
      icon: 'Mail',
      name: 'البريد الإلكتروني',
      url: 'mailto:info@arabicpublishing.com',
      color: 'text-blue-500'
    },
    {
      icon: 'Phone',
      name: 'الهاتف',
      url: 'tel:+966501234567',
      color: 'text-primary'
    },
    {
      icon: 'Globe',
      name: 'الموقع الإلكتروني',
      url: '#',
      color: 'text-secondary'
    }
  ];

  const quickLinks = [
    { name: 'خدماتنا', href: '#services' },
    { name: 'معرض الأعمال', href: '#portfolio' },
    { name: 'آراء العملاء', href: '#testimonials' },
    { name: 'من نحن', href: '#about' },
    { name: 'اتصل بنا', href: '#contact' },
    { name: 'الأسئلة الشائعة', href: '#faq' }
  ];

  const services = [
    'الكتابة الاحترافية',
    'التحرير والمراجعة',
    'التصميم والإخراج',
    'الطباعة والنشر',
    'التوزيع والتسويق',
    'الاستشارات الأدبية'
  ];

  return (
    <footer className="bg-foreground text-white py-16" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Logo */}
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg">
                <Icon name="BookOpen" size={28} color="white" />
              </div>
              <div className="flex flex-col">
                <span className="  font-bold text-xl text-white leading-tight">
                  دار النشر العربية
                </span>
                <span className="  text-sm text-white/70">
                  Arabic Publishing House
                </span>
              </div>
            </div>

            <p className="  text-white/80 leading-relaxed">
              نحول أفكارك إلى منشورات خالدة. خبرة 15+ سنة في نشر الكتب العربية مع فريق متخصص 
              يضمن لك جودة استثنائية وخدمة متميزة.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                <Icon name="Award" size={16} className="text-primary" />
                <span className="  text-xs">معتمد من اتحاد الناشرين</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg">
                <Icon name="Shield" size={16} className="text-success" />
                <span className="  text-xs">ضمان الجودة 100%</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="  text-lg font-semibold text-white mb-6">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {quickLinks?.map((link, index) => (
                <li key={index}>
                  <a
                    href={link?.href}
                    className="  text-white/70 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <Icon name="ChevronLeft" size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                    {link?.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="  text-lg font-semibold text-white mb-6">
              خدماتنا
            </h3>
            <ul className="space-y-3">
              {services?.map((service, index) => (
                <li key={index}>
                  <div className="  text-white/70 flex items-center gap-2">
                    <Icon name="Check" size={14} className="text-primary" />
                    {service}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="  text-lg font-semibold text-white mb-6">
              تواصل معنا
            </h3>
            <div className="space-y-4">
              {contactInfo?.slice(0, 3)?.map((contact, index) => (
                <div
                  key={index}
                  onClick={contact?.action}
                  className="flex items-start gap-3 cursor-pointer group hover:bg-white/5 p-2 rounded-lg transition-colors duration-300"
                >
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors duration-300">
                    <Icon name={contact?.icon} size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="  font-medium text-white text-sm mb-1">
                      {contact?.title}
                    </h4>
                    {contact?.details?.map((detail, detailIndex) => (
                      <p key={detailIndex} className="  text-white/70 text-xs">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h4 className="  font-medium text-white text-sm mb-3">
                تابعنا على
              </h4>
              <div className="flex gap-3">
                {socialLinks?.map((social, index) => (
                  <a
                    key={index}
                    href={social?.url}
                    target={social?.url?.startsWith('http') ? '_blank' : '_self'}
                    rel={social?.url?.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary/20 transition-colors duration-300 group"
                    title={social?.name}
                  >
                    <Icon name={social?.icon} size={18} className="text-white group-hover:text-primary transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <h3 className="  text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Icon name="MapPin" size={20} className="text-primary" />
              موقعنا على الخريطة
            </h3>
            <div className="h-64 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="دار النشر العربية - الرياض"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=24.7136,46.6753&z=14&output=embed"
                className="border-0"
              />
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-white/70   text-sm">
              <p>
                © {currentYear} دار النشر العربية. جميع الحقوق محفوظة.
              </p>
              <div className="flex items-center gap-4">
                <a href="#privacy" className="hover:text-primary transition-colors duration-300">
                  سياسة الخصوصية
                </a>
                <span>|</span>
                <a href="#terms" className="hover:text-primary transition-colors duration-300">
                  شروط الاستخدام
                </a>
                <span>|</span>
                <a href="#cookies" className="hover:text-primary transition-colors duration-300">
                  سياسة الكوكيز
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white/70   text-sm">
                <Icon name="Globe" size={16} />
                <span>نخدم 9 دول عربية</span>
              </div>
              <div className="flex items-center gap-2 text-white/70   text-sm">
                <Icon name="Clock" size={16} />
                <span>دعم 24/7</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* WhatsApp Floating Button */}
        <div className="fixed bottom-6 left-6 z-50">
          <button
            onClick={() => {
              const message = encodeURIComponent("مرحباً، أرغب في الاستفسار عن خدمات النشر");
              window.open(`https://wa.me/966501234567?text=${message}`, '_blank');
            }}
            className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 animate-pulse"
            title="تواصل معنا عبر واتساب"
          >
            <Icon name="MessageCircle" size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;