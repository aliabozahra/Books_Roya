import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import 'animate.css';

// Import components
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import WhyUsSection from '../components/WhyUsSection';
import ProcessSection from '../components/ProcessSection';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const LandingPage = () => {
  useEffect(() => {
    // Set HTML direction to RTL for Arabic content
    document.documentElement?.setAttribute('dir', 'rtl');
    document.documentElement?.setAttribute('lang', 'ar');
    
    // Cleanup function to reset direction if needed
    return () => {
      document.documentElement?.removeAttribute('dir');
      document.documentElement?.removeAttribute('lang');
    };
  }, []);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>خدمات النشر والتأليف - نحول أفكارك إلى منشورات تدوم</title>
        <meta 
          name="description" 
          content="خدمات احترافية في التأليف والنشر والتحرير. أكثر من 15 عام خبرة، +300 كتاب منجز في 9 دول عربية. استشارة مجانية وضمان الجودة." 
        />
        <meta name="keywords" content="تأليف كتب, نشر كتب, تحرير نصوص, تدقيق لغوي, تصميم كتب, النشر العربي" />
        <meta name="author" content="خدمات النشر والتأليف" />
        <meta property="og:title" content="خدمات النشر والتأليف - نحول أفكارك إلى منشورات تدوم" />
        <meta property="og:description" content="خدمات احترافية في التأليف والنشر والتحرير. أكثر من 15 عام خبرة، +300 كتاب منجز." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ar_SA" />
        <link rel="canonical" href="/" />
      </Helmet>

      {/* Main Content */}
      <main className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section id="home">
          <HeroSection />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Services Section */}
        <section id="services">
          <ServicesSection />
        </section>

        {/* Why Us Section */}
        <section id="why-us">
          <WhyUsSection />
        </section>

        {/* Process Section */}
        <section id="process">
          <ProcessSection />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio">
          <PortfolioSection />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>

        {/* CTA Section */}
        <section id="contact">
          <CTASection />
        </section>

        {/* Footer */}
        <Footer />
      </main>

      {/* Scroll to top functionality */}
      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #f79433;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #e07d2b;
        }
      `}</style>
    </>
  );
};

export default LandingPage;