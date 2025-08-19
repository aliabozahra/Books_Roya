import React from "react";
import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { useModal } from "stores/useBookStore";

const CTASection = () => {
   const {  openmodal } = useModal();
  
  return (
    <section className="bg-[#1976D2] py-20 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12" dir="rtl">
          
          {/* النجمة على اليسار */}
          <div className="flex-1 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="220"
              height="220"
              viewBox="0 0 220 220"
              fill="none"
              className="text-white"
            >
              {Array.from({ length: 24 }).map((_, i) => {
                const angle = (i * 360) / 24;
                const x1 = 110 + 10 * Math.cos((angle * Math.PI) / 180);
                const y1 = 110 + 10 * Math.sin((angle * Math.PI) / 180);
                const x2 = 110 + 90 * Math.cos((angle * Math.PI) / 180);
                const y2 = 110 + 90 * Math.sin((angle * Math.PI) / 180);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="white"
                    strokeWidth="2"
                  />
                );
              })}
            </svg>
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
 اجعل أفكارك تُقرأ وتُخلّد. تواصل معنا الآن لنحوّلها إلى كتاب متكامل يليق برؤيتك.            </p>
            {/* الزر في المنتصف */}
            <div className="flex justify-center">
              <button  onClick={openmodal} className="flex items-center gap-2 bg-[#F79433] hover:bg-[#e37e1a] transition px-6 py-3 rounded-md font-semibold text-white">
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
