import React from 'react';
import { motion } from "framer-motion";
import { BookOpenText, Palette, CheckCircle } from "lucide-react";
import logo from "./imges/hero2.webp"; 
import { useBookStore } from 'stores/useBookStore';

const WhyUsSection = () => {
  const { requestQuote } = useBookStore();

  const handleOrderNow = () => {
    requestQuote({
      type: 'whyus_cta',
      timestamp: new Date()?.toISOString()
    });
  };

  // return (
  //  <section className="bg-[#e9f6fc] py-20">
  //     <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16">
        
  //       {/* النص */}
  //       <div className="flex-1 text-right max-w-2xl">
  //         <motion.h2
  //           initial={{ opacity: 0, y: -20 }}
  //           animate={{ opacity: 1, y: 0 }}
  //           transition={{ duration: 0.5 }}
  //           className="text-4xl font-bold text-[#1a4e85] mb-6"
  //         >
  //           لماذا نحن؟
  //         </motion.h2>

  //         <p className="text-xl md:text-2xl font-semibold text-[#f79433] mb-10 leading-relaxed">
  //           لأن كتابك يستحق التميز
  //         </p>

  //         {/* القائمة */}
  //         <ul className="space-y-6 text-lg">
  //           <li className="flex items-start justify-end gap-4">
  //             <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#f79433]/10 text-[#f79433]">
  //               <BookOpenText className="w-6 h-6" />
  //             </div>
  //             <span className="flex-1">
  //               خبرة عميقة في صناعة الكتب التعليمية والأكاديمية والأدبية.
  //             </span>
  //           </li>

  //           <li className="flex items-start justify-end gap-4">
  //             <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#217abe]/10 text-[#217abe]">
  //               <Palette className="w-6 h-6" />
  //             </div>
  //             <span className="flex-1">
  //               تصميم احترافي يلفت القارئ قبل أن يقرأ.
  //             </span>
  //           </li>

  //           <li className="flex items-start justify-end gap-4">
  //             <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#d65c32]/10 text-[#d65c32]">
  //               <CheckCircle className="w-6 h-6" />
  //             </div>
  //             <span className="flex-1">
  //               محتوى متقن يضمن جودة واحترافية في كل كلمة.
  //             </span>
  //           </li>

  //           <li className="flex items-start justify-end gap-4">
  //             <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[#1a4e85]/10 text-[#1a4e85]">
  //               <CheckCircle className="w-6 h-6" />
  //             </div>
  //             <span className="flex-1">
  //               التزام بالمواعيد لتسليم كتابك في الوقت المناسب.
  //             </span>
  //           </li>
  //         </ul>

  //         {/* الأزرار */}
  //         <div className="flex flex-col sm:flex-row justify-end gap-4 mt-12">
  //           <button 
  //             onClick={handleOrderNow}
  //             className="bg-[#f79433] text-white px-8 py-4 rounded-lg flex items-center gap-2 hover:bg-[#1a4e85] transition text-lg shadow-md"
  //           >
  //             اطلب الآن
  //           </button>
  //         </div>
  //       </div>

  //       {/* الصورة */}
  //       <div className="flex-1 flex justify-center">
  //         <img
  //           src={logo}
  //           alt="لماذا نحن؟"
  //           className="rounded-2xl w-full max-w-md h-auto object-cover shadow-xl"
  //         />
  //       </div>
  //     </div>
  //   </section>
  // );
};

export default WhyUsSection;
