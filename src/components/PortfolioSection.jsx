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
import globel from ".//imges/icons8-globe-middle-east-94.png";
import clock from ".//imges/icons8-sand-clock-94.png";
import book from ".//imges/icons8-book-94.png";

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
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            مجموعة مختارة من الكتب التي ساهمنا في إنجازها بمختلف التخصصات
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#f79433] via-[#d65c32] to-[#217abe] mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Books */}
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-14 w-14 border-b-2 border-[#f79433]"></div>
          </div>
        ) : (
          <>
            {/* Mobile & Tablet (Swiper) */}
            <div className="block lg:hidden">
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
                  640: { slidesPerView: 2 },
                  768: { slidesPerView: 3 },
                }}
                className="portfolio-swiper"
              >
                {books?.map((book) => (
                  <SwiperSlide key={book?.id}>
                    <BookCard book={book} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Desktop (Grid 3x2) */}
            <div className="hidden lg:grid grid-cols-3 gap-6  ">
              {books?.slice(0, 6).map((book) => (
                <div
                  key={book?.id}
                  className=""
                >
                  <BookCard book={book} />
                </div>
              ))}
            </div>
          </>
        )}

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 bg-white rounded-xl p-6 shadow-md border border-gray-100"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center" dir="rtl">
            
            <div className="flex flex-col items-center">
              <img src={book} alt="كتب" className="w-14 h-14 mb-2" />
              <div className="text-2xl font-bold text-[#217abe] mb-1">300+</div>
              <div className="text-gray-900 font-bold ">كتاب منجز</div>
            </div>

            <div className="flex flex-col items-center">
              <img src={clock} alt="تخصصات" className="w-14 h-14 mb-2" />
              <div className="text-2xl font-bold text-[#f79433] mb-1">15+</div>
              <div className="text-gray-900 font-bold">تخصص مختلف</div>
            </div>

            <div className="flex flex-col items-center">
              <img src={globel} alt="دول" className="w-14 h-14 mb-2" />
              <div className="text-2xl font-bold text-[#217abe] mb-1">9</div>
              <div className="text-gray-900 font-bold">دول عربية</div>
            </div>

          </div>
        </motion.div>
      </div>

      <style>{`
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

/* Component for Book Card */
/* Component for Book Card */
const BookCard = ({ book }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="group h-full max-w-sm mx-auto"
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
        
        {/* Book Cover */}
        <div className="relative overflow-hidden h-72 flex items-center justify-center bg-gradient-to-r from-[#f79433]/10 via-[#d65c32]/10 to-[#217abe]/10">
          {book?.cover ? (
            <img 
              src={book.cover} 
              alt={book.title} 
              className="w-48 h-72 object-cover rounded-lg shadow-lg"
            />
          ) : (
            <div className="w-48 h-72 bg-gradient-to-r from-[#f79433] via-[#d65c32] to-[#217abe] rounded-lg shadow-lg flex items-center justify-center text-white text-sm">
              غلاف غير متوفر
            </div>
          )}

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f79433] via-[#d65c32] to-[#217abe] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
            <motion.a
              href={`https://www.google.com/search?q=${book?.title}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#217abe] px-5 py-2.5 rounded-lg font-medium flex items-center space-x-2 space-x-reverse"
              dir="rtl"
            >
              <FiEye className="w-5 h-5" />
              <span className="text-sm">عرض التفاصيل</span>
            </motion.a>
          </div>
        </div>

        {/* Book Info */}
        <div className="p-4 flex-1 flex flex-col" dir="rtl">
          <h3 className="text-base font-bold text-gray-900 mb-1">{book?.title}</h3>
          <div className="flex items-center text-gray-600 mb-2">
            <FiUser className="w-4 h-4 ml-1" />
            <span className="text-sm">{book?.author}</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {book?.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};


export default PortfolioSection;
