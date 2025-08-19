
import React from 'react';
import { motion } from "framer-motion";

import { BookOpenText, SpellCheck, Palette } from "lucide-react";
import logo from "./imges/hero2.webp"; 
import { useModal } from 'stores/useBookStore';

const AboutSection = () => {
   const { statModal, openmodal } = useModal();

  const handleOrderNow = () => {
    openmodal(); // فتح المودال
  
  };

  return (
   <section className="bg-[#e9f6fc] py-20">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* النص */}
        <div className="flex-1 text-right max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-[#1a4e85] mb-6"
          >
            خدماتنا
          </motion.h2>

          <p className="text-lg md:text-xl font-medium text-gray-700 mb-10 leading-relaxed">
            كل ما يحتاجه كتابك… في مكان واحد. فريقنا يقدم لك خدمات متكاملة تبدأ من بلورة الفكرة، 
            مرورًا بالتحرير والتدقيق، وصولًا إلى تصميم وإخراج كتابك بأعلى جودة.
          </p>

          {/* القائمة */}
          <ul className="space-y-6 text-lg">
            <li className="flex items-start justify-end gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#f79433]/10 text-[#f79433]">
                <BookOpenText className="w-6 h-6" />
              </div>
              <span className="flex-1">
                <strong className="text-[#1a4e85]">التأليف وصياغة الأفكار:</strong>  
                نحول عصارة خبراتك إلى محتوى مفيد وجذاب.
              </span>
            </li>

            <li className="flex items-start justify-end gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#217abe]/10 text-[#217abe]">
                <SpellCheck className="w-6 h-6" />
              </div>
              <span className="flex-1">
                <strong className="text-[#1a4e85]">التحرير والتدقيق اللغوي:</strong>  
                صياغة سلسة وأسلوب متقن خالٍ من الأخطاء النحوية والإملائية.
              </span>
            </li>

            <li className="flex items-start justify-end gap-4">
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#d65c32]/10 text-[#d65c32]">
                <Palette className="w-6 h-6" />
              </div>
              <span className="flex-1">
                <strong className="text-[#1a4e85]">التصميم والإخراج الفني:</strong>  
                أغلفة جذابة وصفحات أنيقة جاهزة للطباعة والنشر.
              </span>
            </li>
          </ul>

          {/* الأزرار */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-12">
         <button 
            onClick={openmodal}
             className="bg-[#f79433] text-white px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-[#1a4e85] transition text-lg shadow-md"
          >
             اطلب الآن
            </button>
          </div>
        </div>

        {/* الصورة */}
        <div className="flex-1 flex justify-center">
          <img
            src={logo}
            alt="خدماتنا"
            className="rounded-3xl w-full max-w-md h-auto object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

