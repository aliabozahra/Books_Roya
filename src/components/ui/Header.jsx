import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
              <Icon name="BookOpen" size={24} color="white" />
            </div>
            <div className="flex flex-col">
              <span className="font-arabic-sans font-bold text-lg text-foreground leading-tight">
                دار النشر العربية
              </span>
              <span className="font-arabic-sans text-xs text-muted-foreground">
                Arabic Publishing House
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <Link 
              to="/services" 
              className="font-arabic-sans text-sm font-medium text-foreground hover:text-primary transition-smooth"
            >
              خدماتنا
            </Link>
            <Link 
              to="/portfolio" 
              className="font-arabic-sans text-sm font-medium text-foreground hover:text-primary transition-smooth"
            >
              معرض الأعمال
            </Link>
            <Link 
              to="/about" 
              className="font-arabic-sans text-sm font-medium text-foreground hover:text-primary transition-smooth"
            >
              من نحن
            </Link>
            <Link 
              to="/testimonials" 
              className="font-arabic-sans text-sm font-medium text-foreground hover:text-primary transition-smooth"
            >
              آراء العملاء
            </Link>
            <Link 
              to="/contact" 
              className="font-arabic-sans text-sm font-medium text-foreground hover:text-primary transition-smooth"
            >
              تواصل معنا
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open('/portfolio-download', '_blank')}
              className="font-arabic-sans"
            >
              تحميل المعرض
            </Button>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => window.open('/consultation-booking', '_blank')}
              className="font-arabic-sans shadow-cta"
            >
              احجز استشارة
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-muted transition-smooth"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <Link
                to="/services"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-md text-base font-medium font-arabic-sans text-foreground hover:text-primary hover:bg-muted transition-smooth"
              >
                خدماتنا
              </Link>
              <Link
                to="/portfolio"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-md text-base font-medium font-arabic-sans text-foreground hover:text-primary hover:bg-muted transition-smooth"
              >
                معرض الأعمال
              </Link>
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-md text-base font-medium font-arabic-sans text-foreground hover:text-primary hover:bg-muted transition-smooth"
              >
                من نحن
              </Link>
              <Link
                to="/testimonials"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-md text-base font-medium font-arabic-sans text-foreground hover:text-primary hover:bg-muted transition-smooth"
              >
                آراء العملاء
              </Link>
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="block px-3 py-2 rounded-md text-base font-medium font-arabic-sans text-foreground hover:text-primary hover:bg-muted transition-smooth"
              >
                تواصل معنا
              </Link>
              
              {/* Mobile CTAs */}
              <div className="pt-4 pb-2 space-y-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  fullWidth
                  onClick={() => {
                    window.open('/portfolio-download', '_blank');
                    closeMobileMenu();
                  }}
                  className="font-arabic-sans"
                >
                  تحميل المعرض
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  fullWidth
                  onClick={() => {
                    window.open('/consultation-booking', '_blank');
                    closeMobileMenu();
                  }}
                  className="font-arabic-sans shadow-cta"
                >
                  احجز استشارة
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;