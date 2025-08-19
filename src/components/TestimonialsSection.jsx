import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaQuoteRight } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useBookStore } from 'stores/useBookStore';

const TestimonialsSection = () => {
  const { testimonials, fetchTestimonials, loading } = useBookStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetchTestimonials();
  }, [fetchTestimonials]);

  if (!mounted) {
    return <div className="py-section bg-[#FCF3E7]"></div>;
  }

  return (
    <section className="py-20 bg-[#FCF3E7]" id="testimonials" dir="rtl">
      <div className="container mx-auto px-4">
        
        {/* العنوان العام */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#009CA6]">
            تجارب واقعية .. نتائج ملموسة
          </h2>
          <p className="text-gray-700 mt-2">تعرّف على آراء العملاء الذين وثقوا بنا</p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#f79433]"></div>
          </div>
        ) : (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1024: { slidesPerView: 2 }, // بطاقتين في الديسكتوب
            }}
          >
            {testimonials.map((testimonial) => (
             <SwiperSlide key={testimonial?.id}>
  <div className="flex items-center justify-center h-full">
    <div className="bg-white rounded-xl shadow-md border border-gray-100 
                    max-w-lg w-full p-8 md:py-12 flex flex-col justify-between">
      
      {/* الاسم + أيقونة الاقتباس */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg text-gray-800 leading-snug">
          {testimonial?.name}
        </h3>
        <FaQuoteRight className="text-[#f79433] text-3xl ml-2" />
      </div>

      {/* الوظيفة */}
      <p className="text-sm text-gray-500 mb-4">{testimonial?.role}</p>

      {/* النص */}
      <p className="text-gray-700 leading-relaxed mb-4">
        {testimonial?.content}
      </p>

      {/* خط فاصل */}
      <div className="border-t-2 border-[#f79433] my-4 w-24"></div>

      {/* الاسم + الصورة */}
      <div className="flex items-center justify-end gap-3">
        <div className="text-right">
          <p className="font-bold text-md">{testimonial?.role}</p>
          <p className="text-sm text-gray-600">{testimonial?.name}</p>
        </div>
        
      </div>
    </div>
  </div>
</SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* ستايل لأسهم وبوليتس الباجينيشن */}
      <style >{`
        .swiper-pagination-bullet {
          background-color: #217abe;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: #f79433;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
