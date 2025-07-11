"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Over ons", href: "#about" },
    { name: "Diensten", href: "#services" },
    { name: "Reviews", href: "#testimonials" },
    { name: "FAQs", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToContact = () => {
    scrollToSection("#contact");
  };

  return (
    <header className="fixed w-full top-0 left-0 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center justify-between px-4 lg:px-8 xl:px-16 h-16 lg:h-20 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <button
            onClick={() => scrollToSection("#hero")}
            className="focus:outline-none"
          >
            <Image
              className="h-10 lg:h-12 w-auto"
              alt="Gromotion Logo"
              src="/Gromotion.svg"
              width={200}
              height={56}
              priority
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.href)}
              className="font-poppins font-medium text-gray-700 text-base hover:text-[#85c263] transition-colors cursor-pointer focus:outline-none focus:text-[#85c263]"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Button
            onClick={scrollToContact}
            className="group h-11 px-6 bg-[#85c263] hover:bg-[#6ba84a] rounded-lg transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 overflow-hidden relative"
          >
            <span className="font-poppins font-semibold text-white text-base relative z-10">
              Advies gesprek
            </span>
            <ArrowRight className="w-4 h-4 ml-2 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10 rotate-[-45deg]" />

            {/* Subtle shine animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#85c263] transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="px-4 py-4 space-y-4">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left font-poppins font-medium text-gray-700 text-base hover:text-[#85c263] transition-colors py-2 focus:outline-none focus:text-[#85c263]"
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4">
              <Button
                onClick={scrollToContact}
                className="group w-full h-11 bg-[#85c263] hover:bg-[#6ba84a] rounded-lg transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden relative"
              >
                <span className="font-poppins font-semibold text-white text-base relative z-10">
                  Advies gesprek
                </span>
                <ArrowRight className="w-4 h-4 ml-2 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10 rotate-[-45deg]" />

                {/* Subtle shine animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
