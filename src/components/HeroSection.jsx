import { motion } from 'framer-motion';
import { FiBook, FiGlobe, FiClock } from 'react-icons/fi';
import Button from './ui/Button';
import logo from ".//imges/logo_v1.png"
import Modal from './modal';
import { useBookStore, useModal } from 'stores/useBookStore';

const HeroSection = () => {
 const { statModal, openmodal } = useModal();
  const { stats } = useBookStore();

  const handleStartProject = () => {
    openmodal(); // فتح المودال
  };
 
  

  return (
    <section className=" relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
    
    {/* logoo */}
    <div className="w-full flex px-10 ">
  <img 
    src={logo} 
    alt="Logo"
    className="w-28 h-28 object-contain"
  />
</div>


      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f79433%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"></div>

      
     <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-16">
  <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

    {/* Left Side - Book Animation */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center items-center lg:order-2"
    >
      <div className="relative flex flex-col items-center">
        
        {/* Logo */}
        <img 
          src={logo} 
          alt="Logo" 
          className="w-20 md:w-28 lg:w-36 mb-3" 
        />

        {/* Floating Books Animation */}
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 2, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Main big book */}
          <FiBook className="text-primary w-24 h-24 md:w-40 md:h-40 lg:w-56 lg:h-56 drop-shadow-lg" />

          {/* Floating mini book (top-right) */}
          <motion.div
            animate={{ y: [0, -10, 0], x: [0, 8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            className="absolute -top-4 -right-4 md:-top-6 md:-right-6 lg:-top-8 lg:-right-8"
          >
            <FiBook className="text-secondary w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 opacity-70" />
          </motion.div>

          {/* Floating mini book (bottom-left) */}
          <motion.div
            animate={{ y: [0, -8, 0], x: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-3 -left-3 md:-bottom-5 md:-left-5 lg:-bottom-6 lg:-left-6"
          >
            <FiBook className="text-primary w-5 h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 opacity-50" />
          </motion.div>
        </motion.div>

        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-orange-300/20 via-transparent to-transparent blur-2xl"></div>
      </div>
    </motion.div>

    {/* Right Side - Content */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="text-center lg:text-right rtl:text-right lg:order-1"
      dir="rtl"
    >
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
      >
        نصنع كتبًا تُقرأ.. وتبقى
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 font-arabic-sans"
      >
        من الفكرة إلى كتاب متكامل: تأليف، تحرير، تدقيق، تصميم، بجودة احترافية تليق بمحتواك
      </motion.p>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mb-12"
      >
        <Button
           onClick={handleStartProject}
          size="xl"
          className="bg-[#f79433] hover:bg-[#e88a2d31] hover:text-[#f79433] hover:shadow-xl transform transition-all duration-300 text-white px-8 py-4 text-lg rounded-xl"
        >
          ابدأ مشروع كتابك الآن
        </Button>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mr-0"
      >
        {/* Books Completed */}
        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center w-14 h-14 md:w-18 md:h-18 lg:w-24 lg:h-24 bg-[#217abe]/10 rounded-full mb-3 mx-auto"
          >
            <FiBook className="text-[#217abe] w-8 h-8" />
          </motion.div>
          <div className="text-3xl font-bold text-gray-900 mb-1">+{stats?.booksCompleted}</div>
          <div className="text-sm text-gray-600 font-arabic-sans">كتاب مُنجز</div>
        </div>

        {/* Years of Experience */}
        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center w-14 h-14 md:w-18 md:h-18 lg:w-24 lg:h-24 bg-[#f79433]/10 rounded-full mb-3 mx-auto"
          >
            <FiClock className="text-[#f79433] w-8 h-8" />
          </motion.div>
          <div className="text-3xl font-bold text-gray-900 mb-1">+{stats?.yearsExperience}</div>
          <div className="text-sm text-gray-600 font-arabic-sans">عام خبرة</div>
        </div>

        {/* Arab Countries */}
        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center w-14 h-14 md:w-18 md:h-18 lg:w-24 lg:h-24 bg-[#217abe]/10 rounded-full mb-3 mx-auto"
          >
            <FiGlobe className="text-[#217abe] w-8 h-8" />
          </motion.div>
          <div className="text-3xl font-bold text-gray-900 mb-1">+{stats?.arabCountries}</div>
          <div className="text-sm text-gray-600 font-arabic-sans">دول عربية</div>
        </div>
      </motion.div>
    </motion.div>

  </div>
</div>


      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>



      <section className="relative bg-gradient-to-r from-[#f79433] via-[#d65c32] to-[#217abe] py-20 px-6">
  <div className="container mx-auto text-center text-white max-w-4xl">
    {/* العنوان الرئيسي */}
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
      من الفكرة.. إلى رف القارئ
    </h2>

    {/* الوصف */}
    <p className="text-base md:text-lg lg:text-xl mb-10 text-gray-100 leading-relaxed font-arabic-sans">
      لا نُنتج كتبًا فقط، بل نُحوّل أفكارك إلى مؤلفات خالدة. 
      فريقنا من المؤلفين، المحررين، والمصممين يعمل بتناغم ليمنحك كتابًا 
      متكاملًا في شكله ومضمونه، يليق باسمك ورؤيتك.
    </p>

    {/* زر CTA */}
    <div>
      <button onClick={handleStartProject} className="bg-white text-[#217abe] hover:bg-[#217abe] hover:text-white transition-all duration-300 px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
        اطلب الآن
      </button>
      <Modal />
    </div>
  </div>
</section>



    </section>

  );
};

export default HeroSection;