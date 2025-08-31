import React from "react";
import { motion } from "framer-motion";
import { FiBook, FiClock, FiGlobe, FiCheckCircle } from "react-icons/fi";
import { useBookStore, useModal } from "stores/useBookStore";

const ProcessSection = () => {
  const { processSteps } = useBookStore();
  const { openmodal } = useModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // أيقونات لكل خطوة
  const stepIcons = [FiBook, FiClock, FiGlobe, FiCheckCircle];

  return (
    <section className="py-24 bg-[#e9f6fc] " id="process">
      <div className="container mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          dir="rtl"
        >
          <span className="text-[#f79433] font-bold text-base md:text-3xl">
            رحلتنا معك
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-[#217abe] mt-2 mb-4 leading-snug">
            خطواتنا واضحة، لنصل إلى كتاب يُفتخر به
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            نتبع منهجية مدروسة تضمن الوصول إلى النتيجة المطلوبة بأعلى جودة
          </p>
          <div className="w-24 h-1 bg-[#217abe] mx-auto mt-5 rounded-full"></div>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Desktop Layout */}
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-2 gap-14 relative">
              {/* Connecting Line */}
              <div className="absolute inset-0 flex justify-center">
                <div className="w-1 bg-gray-300 rounded-full"></div>
              </div>

              {/* Left Column - Odd Steps */}
              <div className="space-y-14 relative z-10">
                {processSteps
                  ?.filter((_, i) => i % 2 === 0)
                  .map((step, i) => {
                    const Icon = stepIcons[i % stepIcons.length];
                    const color = i % 2 === 0 ? "#217abe" : "#f79433";
                    return (
                      <motion.div
                        key={step?.step}
                        variants={itemVariants}
                        dir="rtl"
                        className="flex items-start gap-5"
                      >
                        {/* الرقم */}
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md"
                          style={{ backgroundColor: color }}
                        >
                          {step?.step}
                        </motion.div>

                        {/* النص + الأيقونة */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex-1 flex justify-between items-center hover:shadow-2xl transition">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {step?.title}
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                              {step?.description}
                            </p>
                          </div>
                          <Icon className="text-[#f79433]" size={28} />
                        </div>
                      </motion.div>
                    );
                  })}
              </div>

              {/* Right Column - Even Steps */}
              <div className="space-y-14 relative z-10 pt-16">
                {processSteps
                  ?.filter((_, i) => i % 2 === 1)
                  .map((step, i) => {
                    const Icon = stepIcons[(i + 1) % stepIcons.length];
                    const color = i % 2 === 0 ? "#f79433" : "#217abe";
                    return (
                      <motion.div
                        key={step?.step}
                        variants={itemVariants}
                        dir="rtl"
                        className="flex items-start gap-5"
                      >
                        {/* النص + الأيقونة */}
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex-1 flex justify-between items-center hover:shadow-2xl transition">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {step?.title}
                            </h3>
                            <p className="text-gray-600 text-base leading-relaxed">
                              {step?.description}
                            </p>
                          </div>
                          <Icon className="text-[#f79433]" size={28} />
                        </div>

                        {/* الرقم */}
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md"
                          style={{ backgroundColor: color }}
                        >
                          {step?.step}
                        </motion.div>
                      </motion.div>
                    );
                  })}
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {processSteps?.map((step, i) => {
              const Icon = stepIcons[i % stepIcons.length];
              const color = i % 2 === 0 ? "#217abe" : "#f79433";
              return (
                <motion.div
                  key={step?.step}
                  variants={itemVariants}
                  dir="rtl"
                  className="relative flex items-start gap-4"
                >
                  {/* الرقم */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-base shadow-md"
                    style={{ backgroundColor: color }}
                  >
                    {step?.step}
                  </motion.div>

                  {/* النص + الأيقونة */}
                  <div className="bg-white rounded-lg p-5 shadow-lg border border-gray-100 flex-1 flex justify-between items-center">
                    <div>
                      <h3 className="text-base font-bold text-gray-900 mb-2">
                        {step?.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step?.description}
                      </p>
                    </div>
                    <Icon className="text-gray-400" size={22} />
                  </div>

                  {i < processSteps?.length - 1 && (
                    <div className="absolute right-5 top-12 w-0.5 h-8 bg-gray-300"></div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
          dir="rtl"
        >
          <div className="bg-[#217abe] rounded-2xl p-8 text-white shadow-lg">
            <h3 className="text-2xl font-bold mb-3">مستعد لبدء رحلة كتابك؟</h3>
            <p className="text-base mb-5 opacity-90">
              دعنا نساعدك في تحويل فكرتك إلى واقع ملموس
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#217abe] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:shadow-lg transition"
              onClick={openmodal}
            >
              ابدأ مشروعك الآن
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
