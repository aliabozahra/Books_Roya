import React from 'react';
import { motion } from "framer-motion";
import { BookOpenText, SpellCheck, Palette } from "lucide-react";
import logo from "./imges/hero2.webp"; 
import { useModal } from 'stores/useBookStore';

const AboutSection = () => {
  const { openmodal } = useModal();

  return (
    <section className="bg-[#e9f6fc] py-20">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* النص */}
        <div className="flex-1 text-right max-w-2xl">
          {/* العنوان */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-6xl font-bold text-[#217abe] mb-10 "
          >
            خدماتنا
          </motion.h2>

          {/* الوصف */}
          <p className="text-lg md:text-xl font-medium text-gray-700 mb-12 leading-relaxed pr-6">
            كل ما يحتاجه كتابك… في مكان واحد. فريقنا يقدم لك خدمات متكاملة تبدأ من بلورة الفكرة، 
            مرورًا بالتحرير والتدقيق، وصولًا إلى تصميم وإخراج كتابك بأعلى جودة.
          </p>

          {/* القائمة */}
          <ul className="space-y-8 text-lg">
  <li className="flex items-center justify-end gap-4">
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#f79433]/10 text-[#f79433]">
      <BookOpenText className="w-7 h-7" />
    </div>
    <span className="flex-1 pr-6 leading-relaxed">
      <strong className="text-[#1a4e85]">التأليف وصياغة الأفكار :</strong>  
      نحول عصارة خبراتك إلى محتوى مفيد وجذاب.
    </span>
  </li>

  <li className="flex items-center justify-end gap-4">
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#217abe]/10 text-[#217abe]">
      <SpellCheck className="w-7 h-7" />
    </div>
    <span className="flex-1 pr-6 leading-relaxed">
      <strong className="text-[#1a4e85]">التحرير والتدقيق اللغوي :</strong>  
      صياغة سلسة وأسلوب متقن خالٍ من الأخطاء النحوية والإملائية.
    </span>
  </li>

  <li className="flex items-center justify-end gap-4">
    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-[#d65c32]/10 text-[#d65c32]">
      <Palette className="w-7 h-7" />
    </div>
    <span className="flex-1 pr-6 leading-relaxed">
      <strong className="text-[#1a4e85]">التصميم والإخراج الفني :</strong>  
      أغلفة جذابة وصفحات أنيقة جاهزة للطباعة والنشر.
    </span>
  </li>
</ul>


          {/* الأزرار */}
          <div className="flex justify-start mt-14 pr-6">
            <button 
              onClick={openmodal}
              className="
  bg-[#f79433] 
  text-white 
  px-14 py-4 
  text-lg 
  font-bold 
  rounded-2xl 
  shadow-lg 
  transition-all 
  duration-300 
  ease-in-out 
  hover:shadow-xl 
  hover:-translate-y-1 
  hover:bg-[#e88a2d] 
  focus:ring-4 
  focus:ring-[#f7b066] 
  focus:outline-none
"
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
