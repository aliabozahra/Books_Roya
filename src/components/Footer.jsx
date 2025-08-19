import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiGlobe, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from 'react-icons/fi';
import logo from "./imges/logo_v1.png"
const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const quickLinks = [
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'أعمالنا', href: '#portfolio' },
    { name: 'تواصل معنا', href: '#contact' }
  ];

  const contactInfo = [
    { icon: FiMail, text: 'info@bookpublishing.com' },
    { icon: FiPhone, text: '+966 50 123 4567' },
    { icon: FiGlobe, text: 'www.bookpublishing.com' },
    { icon: FiMapPin, text: 'الرياض، المملكة العربية السعودية' },
  ];

  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-white text-white">
      <div className="container mx-auto px-container">
        
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8" dir="rtl">
            
            {/* Logo & About */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center lg:items-start"
            >
              <img 
                src={logo} 
                alt="Company Logo" 
                className="h-16 w-auto mb-6"
              />
              <p className="text-[#1976D2] leading-relaxed text-center lg:text-right font-arabic-sans">
                خبراء في خدمات النشر والتأليف، نرافقك من الفكرة إلى التميز.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-bold mb-4 text-[#F79433]">روابط سريعة</h4>
              <ul className="space-y-3">
                {quickLinks?.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: -5 }}
                  >
                    <a
                      href={link?.href}
                      className="text-[#1976D2] hover:text-[#F79433] transition-colors duration-200 font-arabic-sans"
                    >
                      {link?.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="text-lg font-bold mb-4 text-white">بيانات الاتصال</h4>
              <ul className="space-y-3">
                {contactInfo.map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: -5 }}
                    className="flex items-center gap-2 text-[#1976D2] hover:text-[#1976D2] transition-colors duration-200 font-arabic-sans"
                  >
                    <item.icon className="w-5 h-5 text-[#F79433]" />
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" dir="rtl">
            
            {/* Copyright */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm font-arabic-sans"
            >
              © {currentYear} جميع الحقوق محفوظة.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4 space-x-reverse"
            >
              {socialLinks?.map((social, index) => (
                <motion.a
                  key={index}
                  href={social?.href}
                  whileHover={{ 
                    scale: 1.2,
                    y: -3
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-[#F79433] hover:bg-[#1976D2] rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label={social?.label}
                >
                  <social.icon className="w-5 h-5 text-[#1976D2] group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>

            {/* Legal Links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex space-x-6 space-x-reverse text-gray-400 text-sm font-arabic-sans"
            >
              <a href="#" className="hover:text-[#F79433] transition-colors duration-200">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-[#F79433] transition-colors duration-200">
                شروط الاستخدام
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
