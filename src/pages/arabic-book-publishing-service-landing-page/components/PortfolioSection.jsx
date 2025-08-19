import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaBook, FaFilter, FaEye } from 'react-icons/fa';
import useBookPublishingStore from '../../../store/useBookPublishingStore';

const PortfolioSection = () => {
  const { portfolioItems, loading, fetchPortfolio } = useBookPublishingStore();
  const [activeFilter, setActiveFilter] = useState('الكل');
  const [filteredItems, setFilteredItems] = useState([]);

  const filters = ['الكل', 'رواية', 'اقتصاد', 'تاريخ', 'شعر', 'أدب', 'علوم'];

  // Mock portfolio data for demo
  const mockPortfolioItems = [
    {
      id: 1,
      title: 'رواية الصحراء الذهبية',
      author: 'أحمد محمود الكاتب',
      genre: 'رواية',
      coverImage: '/assets/images/no_image.png',
      description: 'رواية تحكي قصة الحب والصراع في الصحراء العربية',
      publishYear: 2023,
      pages: 320
    },
    {
      id: 2,
      title: 'دليل الاستثمار الذكي',
      author: 'د. سارة العلي',
      genre: 'اقتصاد',
      coverImage: '/assets/images/no_image.png',
      description: 'دليل شامل لأساسيات الاستثمار في الأسواق العربية',
      publishYear: 2023,
      pages: 250
    },
    {
      id: 3,
      title: 'تاريخ الأندلس المجيد',
      author: 'د. محمد الأندلسي',
      genre: 'تاريخ',
      coverImage: '/assets/images/no_image.png',
      description: 'سرد تاريخي مفصل عن حضارة الأندلس الإسلامية',
      publishYear: 2022,
      pages: 450
    },
    {
      id: 4,
      title: 'ديوان الحب والوطن',
      author: 'فاطمة النور',
      genre: 'شعر',
      coverImage: '/assets/images/no_image.png',
      description: 'مجموعة شعرية تعبر عن الحب والانتماء للوطن',
      publishYear: 2023,
      pages: 180
    },
    {
      id: 5,
      title: 'أسرار النجاح في الأعمال',
      author: 'خالد السعد',
      genre: 'أدب',
      coverImage: '/assets/images/no_image.png',
      description: 'نصائح وخبرات عملية في عالم ريادة الأعمال',
      publishYear: 2023,
      pages: 280
    },
    {
      id: 6,
      title: 'مقدمة في الذكاء الاصطناعي',
      author: 'د. عمر التقني',
      genre: 'علوم',
      coverImage: '/assets/images/no_image.png',
      description: 'شرح مبسط لمفاهيم الذكاء الاصطناعي وتطبيقاته',
      publishYear: 2023,
      pages: 350
    }
  ];

  useEffect(() => {
    // Use mock data if API fails or no items available
    const itemsToUse = portfolioItems?.length > 0 ? portfolioItems : mockPortfolioItems;
    
    if (activeFilter === 'الكل') {
      setFilteredItems(itemsToUse);
    } else {
      setFilteredItems(itemsToUse?.filter(item => item?.genre === activeFilter));
    }
  }, [portfolioItems, activeFilter]);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section id="portfolio" className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 text-7xl text-primary rotate-12">
          <FaBook />
        </div>
        <div className="absolute bottom-20 left-20 text-6xl text-secondary -rotate-12">
          <FaEye />
        </div>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl lg:text-4xl font-bold text-foreground mb-6  "
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            كتب أنجزناها..
            <span className="block text-primary mt-2">تتحدث عنا</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            مجموعة مختارة من أفضل الكتب التي ساعدنا في إنجازها، كل كتاب يحمل قصة نجاح مميزة
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {filters?.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 + 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFilter className="inline ml-2" />
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 }
            }}
            className="portfolio-swiper"
          >
            {filteredItems?.map((item, index) => (
              <SwiperSlide key={item?.id}>
                <motion.div
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-testimonial transition-all duration-500 hover:-translate-y-2 border border-border group-hover:border-primary/20">
                    
                    {/* Book Cover */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-6">
                          <FaBook className="text-4xl text-primary mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                          <h3 className="font-bold text-foreground text-lg mb-2   leading-tight">
                            {item?.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {item?.author}
                          </p>
                        </div>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                        <div className="text-center text-white p-4">
                          <FaEye className="text-2xl mb-3 mx-auto" />
                          <p className="text-sm font-medium">اضغط لمعرفة التفاصيل</p>
                        </div>
                      </div>

                      {/* Genre Badge */}
                      <div className="absolute top-3 right-3">
                        <span className="bg-white/90 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                          {item?.genre}
                        </span>
                      </div>

                      {/* Year Badge */}
                      <div className="absolute bottom-3 left-3">
                        <span className="bg-secondary text-white text-xs font-semibold px-2 py-1 rounded-full">
                          {item?.publishYear}
                        </span>
                      </div>
                    </div>

                    {/* Book Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-1 text-sm line-clamp-1 group-hover:text-primary transition-colors">
                        {item?.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-2">
                        بقلم: {item?.author}
                      </p>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
                        {item?.description}
                      </p>
                      
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>{item?.pages} صفحة</span>
                        <span className="bg-muted px-2 py-1 rounded-full">
                          {item?.genre}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { number: "300+", label: "كتاب منشور" },
            { number: "15+", label: "تخصص مختلف" },
            { number: "9", label: "دول عربية" },
            { number: "98%", label: "رضا العملاء" }
          ]?.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group hover:bg-card/50 p-4 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                {stat?.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat?.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-foreground mb-4  ">
              هل تريد أن يكون كتابك في معرض أعمالنا القادم؟
            </h3>
            <p className="text-muted-foreground mb-6">
              انضم إلى قائمة المؤلفين الناجحين الذين وثقوا بخبرتنا لتحقيق أحلامهم
            </p>
            
            <motion.button
              onClick={() => {
                const whatsappMessage = 'أريد أن أناقش مشروع كتابي ومعرفة كيف يمكنني الانضمام لمعرض أعمالكم';
                const whatsappURL = `https://wa.me/966123456789?text=${encodeURIComponent(whatsappMessage)}`;
                window.open(whatsappURL, '_blank');
              }}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ابدأ مشروعك معنا
              <FaBook />
            </motion.button>
          </div>
        </motion.div>
      </div>
      {/* Custom Swiper Styles */}
      <style global>{`
        .portfolio-swiper .swiper-navigation-prev,
        .portfolio-swiper .swiper-navigation-next {
          color: #f79433 !important;
          background: white !important;
          border-radius: 50% !important;
          width: 40px !important;
          height: 40px !important;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
        }
        
        .portfolio-swiper .swiper-pagination-bullet {
          background: #f79433 !important;
          opacity: 0.3 !important;
        }
        
        .portfolio-swiper .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default PortfolioSection;