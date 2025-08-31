import React from "react";
import { motion } from "framer-motion";
import { useModal } from "stores/useBookStore";

const Modal = () => {
  const { statModal, closemodal } = useModal();

  return (
    statModal && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-3"
        onClick={closemodal} // لو ضغط على الخلفية يقفل
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white p-6 rounded-xl shadow-xl w-full max-w-md"
          onClick={(e) => e.stopPropagation()} // يمنع قفل الموديل عند الضغط داخله
        >
          {/* زر الإغلاق */}
          <button
            onClick={closemodal}
            className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl font-bold"
          >
            ×
          </button>

          {/* العنوان */}
          <h2 className="text-xl font-semibold mb-5 text-gray-800 text-center border-b pb-2">
            طلب جديد
          </h2>

          {/* الفورم */}
          <form className="space-y-4 text-sm">
            {/* الاسم */}
            <div className="flex flex-col">
              <label className="mb-1 font-bold text-gray-900 text-start">
                الاسم<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full p-2.5 border border-gray-300 rounded-md focus:border-orange-400 focus:ring-1 focus:ring-orange-300 placeholder-gray-400"
                placeholder="مثال: محمد علي"
              />
            </div>

            {/* البريد */}
            <div className="flex flex-col">
              <label className="mb-1 font-bold text-gray-900 text-start">
                البريد الإلكتروني<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full p-2.5 border border-gray-300 rounded-md focus:border-orange-400 focus:ring-1 focus:ring-orange-300 placeholder-gray-400"
                placeholder="مثال: name@email.com"
              />
            </div>

            {/* الجوال */}
            <div className="flex flex-col">
              <label className="mb-1 font-bold text-gray-900 text-start">
                رقم الجوال<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full p-2.5 border border-gray-300 rounded-md focus:border-orange-400 focus:ring-1 focus:ring-orange-300 placeholder-gray-400 placeholder:text-right text-right"
                placeholder="+09665123456"
              />
            </div>

            {/* الدول */}
            <div className="flex flex-col">
              <label className="mb-1 font-bold text-gray-900 text-start">
                الدولة<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full p-2.5 pr-10 border border-gray-300 rounded-md focus:border-orange-400 focus:ring-1 focus:ring-orange-300 text-gray-700 appearance-none">
                  <option value="">اختر الدولة</option>
                  <option value="sa">المملكة العربية السعودية</option>
                  <option value="eg">مصر</option>
                  <option value="ae">الإمارات</option>
                  <option value="kw">الكويت</option>
                  <option value="qa">قطر</option>
                  <option value="bh">البحرين</option>
                  <option value="om">عُمان</option>
                  <option value="jo">الأردن</option>
                  <option value="ma">المغرب</option>
                  <option value="dz">الجزائر</option>
                </select>
                {/* السهم */}
                <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
                  ▼
                </span>
              </div>
            </div>

            {/* الخدمات */}
            <div className="flex flex-col">
              <label className="mb-1 font-bold text-gray-900 text-start">
                اختار الخدمة<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full p-2.5 pr-10 border border-gray-300 rounded-md focus:border-orange-400 focus:ring-1 focus:ring-orange-300 text-gray-700 appearance-none">
                  <option value="">اختر الخدمة</option>
                  <option>تأليف كتاب</option>
                  <option>التحرير والتدقيق اللغوي</option>
                  <option>التصميم والإخراج الفني</option>
                </select>
                {/* السهم */}
                <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
                  ▼
                </span>
              </div>
            </div>

            {/* زر الإرسال */}
            <button
              type="submit"
              className="w-full py-2.5 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 transition-all shadow-sm text-sm"
            >
              تقديم الطلب
            </button>
          </form>
        </motion.div>
      </motion.div>
    )
  );
};

export default Modal;
