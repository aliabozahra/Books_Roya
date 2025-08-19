import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram,
  FaBook,
  FaArrowUp
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'الرئيسية', href: '#' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'أعمالنا', href: '#portfolio' },
    { name: 'خطوات العمل', href: '#process' }
  ];

  const services = [
    'التأليف وصياغة الأفكار',
    'التحرير والتدقيق اللغوي',
    'التصميم والإخراج الفني',
    'الطباعة والنشر',
    'التوزيع والتسويق'
  ];

  const contactInfo = {
    phone: '+966123456789',
    email: 'info@bookpublishing.sa',
    address: 'الرياض، المملكة العربية السعودية',
    whatsapp: '+966123456789'
  };

  const socialLinks = [
    { icon: <FaWhatsapp />, href: `https://wa.me/${contactInfo?.whatsapp}`, name: 'WhatsApp' },
    { icon: <FaLinkedin />, href: '#', name: 'LinkedIn' },
    { icon: <FaTwitter />, href: '#', name: 'Twitter' },
    { icon: <FaInstagram />, href: '#', name: 'Instagram' }
  ];

  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 text-6xl text-primary animate-pulse">
          <FaBook />
        </div>
        <div className="absolute bottom-10 left-10 text-4xl text-secondary animate-bounce">
          <FaBook />
        </div>
      </div>
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Company Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <FaBook className="text-xl text-white" />
                </div>
                <h3 className="text-xl font-bold  ">خدمات نشر الكتب</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                نحول أفكارك إلى كتب احترافية. خدمات شاملة من التأليف إلى النشر والتوزيع مع ضمان الجودة والالتزام بالمواعيد.
              </p>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-3">تواصل معنا</h4>
              <div className="flex gap-3">
                {socialLinks?.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-primary rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social?.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-primary">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks?.map((link, index) => (
                <li key={index}>
                  <a
                    href={link?.href}
                    className="text-gray-300 hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link?.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <motion.button
                onClick={() => {
                  const whatsappMessage = 'أريد معرفة المزيد عن خدماتكم';
                  const whatsappURL = `https://wa.me/${contactInfo?.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
                  window.open(whatsappURL, '_blank');
                }}
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                استشارة مجانية
                <FaWhatsapp />
              </motion.button>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-primary">خدماتنا</h4>
            <ul className="space-y-3">
              {services?.map((service, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-primary">معلومات الاتصال</h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FaPhone className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">الهاتف</p>
                  <a 
                    href={`tel:${contactInfo?.phone}`}
                    className="text-white hover:text-primary transition-colors"
                  >
                    {contactInfo?.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">البريد الإلكتروني</p>
                  <a 
                    href={`mailto:${contactInfo?.email}`}
                    className="text-white hover:text-primary transition-colors"
                  >
                    {contactInfo?.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">العنوان</p>
                  <p className="text-white">{contactInfo?.address}</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={`https://wa.me/${contactInfo?.whatsapp}?text=${encodeURIComponent('مرحبا، أريد الاستفسار عن خدماتكم')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 w-full justify-center"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaWhatsapp className="text-lg" />
              تواصل عبر الواتساب
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center md:text-right">
              <p>
                © {currentYear} خدمات نشر الكتب. جميع الحقوق محفوظة.
              </p>
              <p className="mt-1">
                صُنع بـ ❤️ لخدمة المؤلفين العرب
              </p>
            </div>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="bg-primary hover:bg-primary/90 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>
      {/* Floating Action Button for Mobile */}
      <motion.div
        className="fixed bottom-6 left-6 z-40 md:hidden"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.a
          href={`https://wa.me/${contactInfo?.whatsapp}?text=${encodeURIComponent('مرحبا، أريد الاستفسار عن خدماتكم')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center text-white shadow-2xl"
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 10px 25px rgba(0, 0, 0, 0.1)',
              '0 20px 40px rgba(0, 0, 0, 0.2)',
              '0 10px 25px rgba(0, 0, 0, 0.1)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileTap={{ scale: 0.9 }}
        >
          <FaWhatsapp className="text-2xl" />
        </motion.a>
      </motion.div>
    </footer>
  );
};

export default Footer;