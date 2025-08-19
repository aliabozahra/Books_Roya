import React from 'react';
import { motion } from 'framer-motion';
import { FiBookOpen, FiFileText, FiClock } from 'react-icons/fi'; 
import { FaPalette } from 'react-icons/fa';
import { useBookStore, useModal } from 'stores/useBookStore';

const WhyUsSection = () => {
  const { requestQuote } = useBookStore();
     const {  openmodal } = useModal();
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const reasons = [
    {
      id: 1,
      title: "خبرة عميقة",
      description: "في صناعة الكتب التعليمية والأكاديمية والأدبية.",
      icon: <FiBookOpen className="w-8 h-8 text-[#1a4e85]" />,
      bg: "bg-[#1a4e85]/10"
    },
    {
      id: 2,
      title: "تصميم احترافي",
      description: "يلفت القارئ قبل أن يقرأ.",
      icon: <FaPalette className="w-8 h-8 text-[#f79433]" />,
      bg: "bg-[#f79433]/10"
    },
    {
      id: 3,
      title: "محتوى متقن",
      description: "يضمن جودة واحترافية في كل كلمة.",
      icon: <FiFileText className="w-8 h-8 text-[#d65c32]" />,
      bg: "bg-[#d65c32]/10"
    },
    {
      id: 4,
      title: "التزام بالمواعيد",
      description: "لتسليم كتابك في الوقت المناسب.",
      icon: <FiClock className="w-8 h-8 text-[#217abe]" />,
      bg: "bg-[#217abe]/10"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="why-us">
      <div className="container mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
          dir="rtl"
        >
          <span className="text-primary font-bold text-3xl tracking-wide">
            لماذا نحن؟
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-6 leading-snug">
            لأن كتابك يستحق التميز
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            نحن لا نُنتج كتبًا فقط، بل نُحوّل أفكارك إلى مؤلفات خالدة مع فريق متكامل من المؤلفين والمحررين والمصممين.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-orange-400 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
          dir="rtl"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className={`w-20 h-20 ${reason.bg} rounded-full flex items-center justify-center mb-6`}>
                {reason.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="flex justify-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={openmodal}
            className="bg-[#f79433] text-white px-10 py-4 rounded-xl text-lg font-semibold shadow-md hover:bg-[#1a4e85] transition"
          >
            اطلب الآن
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;