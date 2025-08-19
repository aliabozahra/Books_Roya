import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PortfolioShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'جميع الكتب', count: 24 },
    { id: 'business', name: 'الأعمال والإدارة', count: 8 },
    { id: 'literature', name: 'الأدب والثقافة', count: 6 },
    { id: 'academic', name: 'الكتب الأكاديمية', count: 5 },
    { id: 'biography', name: 'السير والتراجم', count: 3 },
    { id: 'religion', name: 'الكتب الدينية', count: 2 }
  ];

  const books = [
    {
      id: 1,
      title: 'فن القيادة في العصر الرقمي',
      author: 'د. أحمد محمد الخالدي',
      category: 'business',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop',
      description: 'دليل شامل للقيادة الحديثة في عالم التكنولوجيا',
      year: '2023',
      pages: 280
    },
    {
      id: 2,
      title: 'رحلة في عالم الشعر العربي',
      author: 'فاطمة السعدي',
      category: 'literature',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      description: 'استكشاف جميل لتطور الشعر العربي عبر العصور',
      year: '2023',
      pages: 320
    },
    {
      id: 3,
      title: 'أسس البحث العلمي المعاصر',
      author: 'د. محمود عبد الرحمن',
      category: 'academic',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      description: 'منهجية شاملة للبحث العلمي في العلوم الإنسانية',
      year: '2023',
      pages: 450
    },
    {
      id: 4,
      title: 'استراتيجيات التسويق الرقمي',
      author: 'سارة أحمد النوري',
      category: 'business',
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=300&h=400&fit=crop',
      description: 'دليل عملي للتسويق في العصر الرقمي',
      year: '2023',
      pages: 240
    },
    {
      id: 5,
      title: 'حكايات من التراث العربي',
      author: 'عبد الله الحكيم',
      category: 'literature',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop',
      description: 'مجموعة مختارة من أجمل حكايات التراث',
      year: '2022',
      pages: 180
    },
    {
      id: 6,
      title: 'سيرة عالم جليل',
      author: 'د. خالد المنصوري',
      category: 'biography',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop',
      description: 'سيرة ملهمة لأحد علماء العرب المعاصرين',
      year: '2022',
      pages: 350
    },
    {
      id: 7,
      title: 'الإدارة المالية للمشاريع الصغيرة',
      author: 'نور الدين العمري',
      category: 'business',
      image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=300&h=400&fit=crop',
      description: 'دليل عملي لإدارة الأموال في المشاريع الناشئة',
      year: '2022',
      pages: 200
    },
    {
      id: 8,
      title: 'مناهج البحث في علم النفس',
      author: 'د. ليلى الزهراني',
      category: 'academic',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      description: 'مرجع شامل لطلاب وباحثي علم النفس',
      year: '2022',
      pages: 380
    }
  ];

  const filteredBooks = activeFilter === 'all' 
    ? books 
    : books?.filter(book => book?.category === activeFilter);

  return (
    <section id="portfolio-section" className="py-20 bg-muted/30" dir="rtl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-arabic-sans text-3xl md:text-4xl font-bold text-foreground mb-6">
            معرض أعمالنا المنشورة
          </h2>
          <p className="font-arabic-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            اكتشف مجموعة من الكتب التي ساعدنا في نشرها وتحويلها من أفكار إلى منشورات احترافية
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveFilter(category?.id)}
              className={`px-6 py-3 rounded-lg font-arabic-sans font-medium transition-all duration-300 ${
                activeFilter === category?.id
                  ? 'bg-primary text-white shadow-cta'
                  : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary border border-border'
              }`}
            >
              {category?.name}
              <span className={`mr-2 text-sm ${
                activeFilter === category?.id ? 'text-white/80' : 'text-muted-foreground'
              }`}>
                ({category?.count})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Books Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredBooks?.map((book, index) => (
            <motion.div
              key={book?.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border group-hover:border-primary/30">
                {/* Book Cover */}
                <div className="relative overflow-hidden">
                  <Image
                    src={book?.image}
                    alt={book?.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <Icon name="Eye" size={24} className="text-primary" />
                    </div>
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-3 right-3 bg-primary text-white px-2 py-1 rounded-md text-xs font-arabic-sans font-medium">
                    {book?.year}
                  </div>
                </div>

                {/* Book Info */}
                <div className="p-6">
                  <h3 className="font-arabic-sans text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {book?.title}
                  </h3>
                  
                  <p className="font-arabic-sans text-sm text-muted-foreground mb-3">
                    بقلم: {book?.author}
                  </p>
                  
                  <p className="font-arabic-sans text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {book?.description}
                  </p>

                  {/* Book Details */}
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-arabic-sans">
                    <div className="flex items-center gap-1">
                      <Icon name="FileText" size={14} />
                      <span>{book?.pages} صفحة</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Calendar" size={14} />
                      <span>{book?.year}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button
            onClick={() => window.open('/portfolio-full', '_blank')}
            className="inline-flex items-center gap-3 bg-outline border-2 border-primary text-primary px-8 py-4 rounded-lg font-arabic-sans font-semibold hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Icon name="Grid" size={20} />
            عرض جميع الأعمال
          </button>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary/10 rounded-xl p-8 border border-primary/20"
        >
          <div className="text-center mb-8">
            <h3 className="font-arabic-sans text-2xl font-bold text-foreground mb-4">
              قصص نجاح ملهمة
            </h3>
            <p className="font-arabic-sans text-muted-foreground">
              كتب حققت نجاحاً باهراً وأثرت في حياة آلاف القراء
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-success" />
              </div>
              <h4 className="font-arabic-sans text-lg font-semibold text-foreground mb-2">
                أكثر من 50,000 نسخة مباعة
              </h4>
              <p className="font-arabic-sans text-sm text-muted-foreground">
                من كتاب "فن القيادة في العصر الرقمي"
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={32} className="text-primary" />
              </div>
              <h4 className="font-arabic-sans text-lg font-semibold text-foreground mb-2">
                جائزة أفضل كتاب عربي
              </h4>
              <p className="font-arabic-sans text-sm text-muted-foreground">
                حصل عليها كتاب "رحلة في عالم الشعر العربي"
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Globe" size={32} className="text-secondary" />
              </div>
              <h4 className="font-arabic-sans text-lg font-semibold text-foreground mb-2">
                ترجم إلى 5 لغات
              </h4>
              <p className="font-arabic-sans text-sm text-muted-foreground">
                كتاب "أسس البحث العلمي المعاصر"
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;