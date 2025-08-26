import React from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiBook } from "react-icons/fi";
import { useModal } from "stores/useBookStore";

const CTASection = () => {
  const { openmodal } = useModal();

  return (
    <section className="bg-[#1976D2] py-20 text-white">
      <div className="container mx-auto px-6">
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          dir="rtl"
        >
          {/* أيقونة الكتاب مع الحركة */}
          <div className="flex-1 flex justify-center">
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex justify-center items-center"
            >
              {/* الكتاب الأساسي */}
              <FiBook className="text-[#F79433] w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 drop-shadow-lg" />

              {/* كتاب صغير أعلى يمين */}
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-4 -right-4 md:-top-6 md:-right-6 lg:-top-8 lg:-right-8"
              >
                <FiBook className="text-white w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 opacity-70" />
              </motion.div>

              {/* كتاب صغير أسفل يسار */}
              <motion.div
                animate={{ y: [0, -8, 0], x: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-3 -left-3 md:-bottom-5 md:-left-5 lg:-bottom-6 lg:-left-6"
              >
                <FiBook className="text-white w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 opacity-50" />
              </motion.div>
            </motion.div>

            {/* تأثير الإضاءة خلف الكتاب */}
            <div className="absolute inset-0 bg-gradient-radial from-orange-400/20 via-transparent to-transparent blur-2xl -z-10"></div>
          </div>

          {/* النصوص والزر */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              كتابك القادم يبدأ من هنا
            </h2>
            <p className="text-lg text-gray-100 max-w-xl mx-auto">
              اجعل أفكارك تُقرأ وتُخلّد. تواصل معنا الآن لنحوّلها إلى كتاب
              متكامل يليق برؤيتك.
            </p>
            {/* زر CTA */}
            <div className="flex justify-center">
              <button
                onClick={openmodal}
                className="flex items-center gap-2 bg-[#F79433] hover:bg-[#e37e1a] transition px-6 py-3 rounded-md font-semibold text-white"
              >
                <FiArrowLeft className="text-lg" />
                ابدأ الآن
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
