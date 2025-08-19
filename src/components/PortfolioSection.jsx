import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FiEye, FiUser } from 'react-icons/fi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useBookStore } from 'stores/useBookStore';

const PortfolioSection = () => {
  const { books, fetchBooks, loading } = useBookStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetchBooks();
  }, [fetchBooks]);

  if (!mounted) {
    return <div className="py-16 bg-gray-50"></div>;
  }

  return (
    <section className="py-20 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
          dir="rtl"
        >
          <span className="text-[#217abe] font-bold text-4xl">أعمالنا</span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 mb-3">
            كتب أنجزناها.. تتحدث عنا
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto font-arabic-sans">
            مجموعة مختارة من الكتب التي ساهمنا في إنجازها بمختلف التخصصات
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#f79433] via-[#d65c32] to-[#217abe] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Books Slider */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-14 w-14 border-b-2 border-[#f79433]"></div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="portfolio-swiper"
            >
              {books?.map((book) => (
                <SwiperSlide key={book?.id}>
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="group"
                  >
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100">
                      
                      {/* Book Cover */}
                      <div className="relative overflow-hidden h-72 flex items-center justify-center bg-gradient-to-r from-[#f79433]/10 via-[#d65c32]/10 to-[#217abe]/10">
                        {book?.cover ? (
                          <img 
                            src={book.cover} 
                            alt={book.title} 
                            className="w-40 h-56 object-cover rounded-lg shadow-lg"
                          />
                        ) : (
                          <div className="w-40 h-56 bg-gradient-to-r from-[#f79433] via-[#d65c32] to-[#217abe] rounded-lg shadow-lg flex items-center justify-center text-white text-sm font-arabic-sans">
                            غلاف غير متوفر
                          </div>
                        )}

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#f79433] via-[#d65c32] to-[#217abe] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-[#217abe] px-5 py-2.5 rounded-lg font-medium flex items-center space-x-2 space-x-reverse"
                            dir="rtl"
                          >
                            <FiEye className="w-5 h-5" />
                            <span className="font-arabic-sans text-sm">عرض التفاصيل</span>
                          </motion.button>
                        </div>
                      </div>

                      {/* Book Info */}
                      <div className="p-5" dir="rtl">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{book?.title}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <FiUser className="w-4 h-4 ml-1" />
                          <span className="text-sm font-arabic-sans">{book?.author}</span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed font-arabic-sans line-clamp-3">
                          {book?.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 bg-white rounded-xl p-6 shadow-md border border-gray-100"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center" dir="rtl">
            
            <div>
              <div className="text-2xl font-bold text-[#217abe] mb-1">300+</div>
              <div className="text-gray-600 text-sm font-arabic-sans">كتاب منجز</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-[#f79433] mb-1">15+</div>
              <div className="text-gray-600 text-sm font-arabic-sans">تخصص مختلف</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-[#217abe] mb-1">9</div>
              <div className="text-gray-600 text-sm font-arabic-sans">دول عربية</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-[#f79433] mb-1">98%</div>
              <div className="text-gray-600 text-sm font-arabic-sans">رضا العملاء</div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .portfolio-swiper .swiper-pagination-bullet {
          background-color: #217abe;
          opacity: 0.5;
        }
        
        .portfolio-swiper .swiper-pagination-bullet-active {
          opacity: 1;
        }
        
        .portfolio-swiper .swiper-button-prev,
        .portfolio-swiper .swiper-button-next {
          color: #f79433;
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;
