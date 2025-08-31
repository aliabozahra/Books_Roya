import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiBook, FiGlobe, FiClock, FiMenu, FiX } from 'react-icons/fi';
import logo from ".//imges/logo-new.png";
import ph from ".//imges/hero2.webp";
import bookk from ".//imges/icons8-reading-94.png";
import globel from ".//imges/icons8-globe-middle-east-94.png";
import clock from ".//imges/icons8-sand-clock-94.png";
import book from ".//imges/icons8-book-94.png";
import Modal from './modal';
import { useBookStore, useModal } from 'stores/useBookStore';

const HeroSection = () => {
  const {  openmodal } = useModal();
  const { stats } = useBookStore();
  const [open, setOpen] = useState(false);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], 
  });

    const y = useTransform(scrollYProgress, [0, 1], [0, 250], {
    clamp: false,
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 25]);

  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["drop-shadow(0px 0px 0px #f79433)", "drop-shadow(0px 0px 8px #217abe)"]
  );



  

  const handleStartProject = () => {
    openmodal(); 
    alert('Button works!');
  };

  return (
    <section className=" relative min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 overflow-hidden">
    
    {/* logoo */}
<header className="w-full sticky top-0 from-orange-50 via-white to-blue-50 backdrop-blur-md shadow-sm z-50">
  <div className="container mx-auto px-6 flex justify-between items-center h-20 relative">
    
    {/* Logo  */}
    <a 
      href="#hero" 
      className="absolute -top-6 right-6" 
    >
      <img 
        src={logo} 
        alt="Logo" 
        className="w-36 h-36 object-contain" 
      />
    </a>

    {/* Desktop Menu */}  
    <nav className="hidden md:flex flex-1 justify-center gap-10 text-gray-800 font-bold text-2xl">
      <a href="#hero" className="hover:text-[#f79433] transition-colors duration-300">الرئيسية</a>
      <a href="#why-us" className="hover:text-[#f79433] transition-colors duration-300">لماذا نحن؟</a>
      <a href="#services" className="hover:text-[#f79433] transition-colors duration-300">خدماتنا</a>
      <a href="#portfolio" className="hover:text-[#f79433] transition-colors duration-300">أعمالنا</a>
      <button onClick={openmodal} className="hover:text-[#f79433] transition-colors duration-300">
        تواصل معنا
      </button>
    </nav>

    {/* Mobile Menu Button */}
    <button
      onClick={() => setOpen(!open)}
      className="md:hidden text-3xl text-gray-800 absolute left-6"
    >
      {open ? <FiX /> : <FiMenu />}
    </button>
  </div>

  {/* Mobile Menu */}
  {open && (
    <div className="md:hidden bg-white shadow-md">
      <nav className="flex flex-col gap-6 p-6 text-gray-800 font-semibold text-lg">
        <a href="#hero" onClick={() => setOpen(false)} className="hover:text-[#f79433]">الرئيسية</a>
        <a href="#why-us" onClick={() => setOpen(false)} className="hover:text-[#f79433]">لماذا نحن؟</a>
        <a href="#services" onClick={() => setOpen(false)} className="hover:text-[#f79433]">خدماتنا</a>
        <a href="#portfolio" onClick={() => setOpen(false)} className="hover:text-[#f79433]">أعمالنا</a>
        <button
          onClick={() => { openmodal(); setOpen(false); }}
           className="
  bg-[#f79433] 
  text-white 
  px-8 py-4 
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
          تواصل معنا
        </button>
      </nav>
    </div>
  )}
</header>




      
    

      
     <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-16 ">
  <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

   {/* Left Side - Image */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center items-center lg:order-2"
>
  <motion.img
    src={ph}
    alt="Book Showcase"
    className="object-cover sm:max-w-[300px] sm:max-h-[200px] md:max-w-[500px] md:max-h-[350px] lg:w-[600px] lg:h-[380px] rounded-3xl shadow-2xl"
    // حركة مستمرة (float خفيف)
    animate={{ y: [0, -8, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    // حركة hover
    whileHover={{
      scale: 1.05,
      rotate: 1,
      boxShadow: "0px 20px 40px rgba(0,0,0,0.25)",
    }}
    whileTap={{ scale: 0.98 }}
  />
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
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#217abe] mb-6 leading-tight"
      >
        نصنع كتبًا تُقرأ.. وتبقى
      </motion.h1>

      {/* Subheading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-lg md:text-xl lg:text-2xl text-gray-900 mb-8  "
      >
        من الفكرة إلى كتاب متكامل: تأليف، تحرير، تدقيق، تصميم، بجودة احترافية تليق بمحتواك
      </motion.p>

      {/* CTA Button */}
      <motion.div className="mb-12">
              <button
                type="button"
                onClick={() => {
           openmodal();}}
                className="
  bg-[#f79433] 
  text-white 
  px-8 py-4 
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
                ابدأ مشروع كتابك الآن
              </button>
            </motion.div>

      {/* Stats */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 1 }}
  className="grid grid-cols-3 gap-8 max-w-xl mx-auto lg:mr-0"
>
  {/* Books Completed */}
  <div className="text-center">
    <motion.div
      whileHover={{ scale: 1.15, rotate: 3 }}
      className="flex items-center justify-center w-20 h-20 bg-[#217abe]/10 rounded-2xl mb-4 mx-auto shadow-lg"
    >
      <img
        src={book}
        alt="Books Completed"
        className="w-12 h-12 object-contain drop-shadow-xl"
      />
    </motion.div>
    <div className="text-3xl font-bold text-[#217abe] mb-1">
      +{stats?.booksCompleted}
    </div>
    <div className="text-lg font-bold text-[#f7b066]">كتاب مُنجز</div>
  </div>

  {/* Years of Experience */}
  <div className="text-center">
    <motion.div
      whileHover={{ scale: 1.15, rotate: -3 }}
      className="flex items-center justify-center w-20 h-20 bg-[#f79433]/10 rounded-2xl mb-4 mx-auto shadow-lg"
    >
      <img
        src={clock}
        alt="Years of Experience"
        className="w-12 h-12 object-contain drop-shadow-xl"
      />
    </motion.div>
    <div className="text-3xl font-bold text-[#217abe] mb-1">
      +{stats?.yearsExperience}
    </div>
    <div className="text-lg font-bold text-[#f7b066]">عام خبرة</div>
  </div>

  {/* Arab Countries */}
  <div className="text-center">
    <motion.div
      whileHover={{ scale: 1.15, rotate: 2 }}
      className="flex items-center justify-center w-20 h-20 bg-[#217abe]/10 rounded-2xl mb-4 mx-auto shadow-lg"
    >
      <img
        src={globel}
        alt="Arab Countries"
        className="w-12 h-12 object-contain drop-shadow-xl"
      />
    </motion.div>
    <div className="text-3xl font-bold text-[#217abe] mb-1">
      +{stats?.arabCountries}
    </div>
    <div className="text-lg font-bold text-[#f7b066]">دول عربية</div>
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
          <div className="w-32 h-32 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>



 <section
      ref={ref}
      className="relative bg-[#217abe] py-20 px-6 overflow-hidden"
    >
      {/* الأيقونة المتحركة مع السكرول */}
      <motion.img
      src={bookk}
      alt="book icon"
      style={{ y, rotate, filter }}
      className="absolute left-10 top-28 w-16 h-16 md:w-20 md:h-20"
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}
    />

      <div className="container mx-auto text-center text-white max-w-4xl">
        {/* العنوان الرئيسي */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight ">
          من الفكرة.. إلى رف القارئ
        </h2>

        {/* الوصف */}
        <p className="text-base md:text-lg lg:text-xl mb-10 text-gray-100 leading-relaxed">
          لا نُنتج كتبًا فقط، بل نُحوّل أفكارك إلى مؤلفات خالدة. 
          فريقنا من المؤلفين، المحررين، والمصممين يعمل بتناغم ليمنحك كتابًا 
          متكاملًا في شكله ومضمونه، يليق باسمك ورؤيتك.
        </p>

        {/* زر CTA */}
        <div>
          <button
            onClick={handleStartProject}
            className="
              bg-white
              text-[#f79433]  
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
              hover:bg-white
              focus:ring-4 
              focus:ring-[#f7b066] 
              focus:outline-none
            "
          >
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