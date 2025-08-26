import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import 'animate.css';
import useBookPublishingStore from '../../store/useBookPublishingStore';

// Import components
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyUsSection from './components/WhyUsSection';
import ProcessSection from './components/ProcessSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTAClosingSection from './components/CTAClosingSection';
import Footer from './components/Footer';

const ArabicBookPublishingServiceLandingPage = () => {
  const { fetchPortfolio, fetchTestimonials } = useBookPublishingStore();

  useEffect(() => {
    // Fetch data on component mount
    fetchPortfolio();
    fetchTestimonials();
  }, [fetchPortfolio, fetchTestimonials]);

  return (
    <div dir="rtl" className="min-h-screen bg-background  ">
      <Helmet>
        <title>خدمات نشر الكتب العربية - نحول أفكارك إلى كتب خالدة</title>
        <meta name="description" content="خدمات شاملة لنشر الكتب العربية للكتاب والمؤلفين. استشارة مجانية، تأليف، تحرير، تصميم وطباعة احترافية." />
        <meta name="keywords" content="نشر كتب, طباعة كتب, تأليف عربي, خدمات نشر, كتب عربية" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="/arabic-book-publishing-service-landing-page" />
        
        {/* Open Graph tags */}
        <meta property="og:title" content="خدمات نشر الكتب العربية - نحول أفكارك إلى كتب خالدة" />
        <meta property="og:description" content="خدمات شاملة لنشر الكتب العربية للكتاب والمؤلفين" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/arabic-book-publishing-service-landing-page" />
        
        {/* Arabic language support */}
        <html lang="ar" dir="rtl" />
      </Helmet>

      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <PortfolioSection />
        <TestimonialsSection />
        <CTAClosingSection />
        <Footer />
      </main>
    </div>
  );
};

export default ArabicBookPublishingServiceLandingPage;