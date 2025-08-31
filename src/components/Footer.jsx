import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiMail, FiPhone, FiGlobe, FiMapPin, 
  FiFacebook, FiTwitter, FiInstagram, FiLinkedin 
} from 'react-icons/fi';
import logo from "./imges/logo-new.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'من نحن', href: '#about' },
    { name: 'خدماتنا', href: '#services' },
    { name: 'أعمالنا', href: '#portfolio' },
    { name: 'تواصل معنا', href: '#contact' }
  ];

  const contactInfo = [
    { icon: FiMail, text: 'http://roya4tp.com/' },
    { icon: FiPhone, text: '+966 50 123 4567' },
    { icon: FiGlobe, text: 'http://roya4tp.com/' },
    { icon: FiMapPin, text: 'الرياض، المملكة العربية السعودية' },
  ];

  const socialLinks = [
    { icon: FiFacebook, href: 'https://www.facebook.com/roya4tp', label: 'Facebook' },
    { icon: FiTwitter, href: 'https://twitter.com/roya4tp', label: 'Twitter' },
    { icon: FiInstagram, href: 'https://www.instagram.com/roya4tp/', label: 'Instagram' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/company/roya4tp', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-[#0D1B2A] text-white">
      <div className="container mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-3 md:grid-cols-2 gap-10" dir="rtl">
          
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
              className="h-40 w-auto mb-6"
            />
            
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-5 text-[#F79433]">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: -5 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#F79433] transition-colors duration-300 text-base"
                  >
                    {link.name}
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
            <h4 className="text-xl font-semibold mb-5 text-[#F79433]">بيانات الاتصال</h4>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: -5 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-[#F79433] transition-colors duration-300 text-base"
                >
                  <item.icon className="w-5 h-5 text-[#1976D2]" />
                  <span>{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4" dir="rtl">
          
          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-sm"
          >
            © {currentYear} جميع الحقوق محفوظة.
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-[#F79433] hover:bg-[#1976D2] rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-white" />
              </motion.a>
            ))}
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-6 text-gray-400 text-sm"
          >
            <a href="#" className="hover:text-[#F79433] transition-colors duration-300">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-[#F79433] transition-colors duration-300">
              شروط الاستخدام
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
