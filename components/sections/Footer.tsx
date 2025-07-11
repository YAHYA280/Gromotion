"use client";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
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
  };

  const navigationItems = [
    { name: "Over ons", href: "#about" },
    { name: "Waarom wij?", href: "#about" }, // Points to about section as it contains "why choose us"
    { name: "Onze diensten", href: "#services" },
    { name: "Contact", href: "#contact" },
    { name: "Reviews", href: "#testimonials" },
    { name: "FAQs", href: "#faq" },
    { name: "Map", href: "#location" }, // Points to location section
  ];

  return (
    <footer className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content Container with Background */}
        <div className="bg-[#F3F8E8] rounded-3xl py-12 px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {/* Left Section - Logo and Description */}
              <div className="space-y-6">
                <div className="flex items-center">
                  <button
                    onClick={() => scrollToSection("#hero")}
                    className="focus:outline-none focus:ring-2 focus:ring-[#85c263] rounded-md"
                  >
                    <Image
                      className="h-10 lg:h-14 w-auto"
                      alt="Gromotion Logo"
                      src="/Gromotion.svg"
                      width={200}
                      height={56}
                      priority
                    />
                  </button>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  In onze trajecten streven we naar een holistische benadering
                  waarbij we niet enkel symptomen behandelen, maar samen de kern
                  van jouw gezondheidsuitdagingen ontdekken.
                </p>
              </div>

              {/* Center Section - Pagina's */}
              <div>
                <h4 className="font-bold text-gray-800 mb-4 text-base">
                  Pagina&apos;s
                </h4>
                <ul className="space-y-2">
                  {navigationItems.map((item, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(item.href)}
                        className="text-gray-600 hover:text-[#85c263] transition-colors text-sm text-left focus:outline-none focus:text-[#85c263] focus:ring-2 focus:ring-[#85c263] rounded px-1 py-1"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Section - Contact */}
              <div>
                <h4 className="font-bold text-gray-800 mb-4 text-base">
                  Contact
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <MapPin className="w-3 h-3 text-gray-600" />
                    </div>
                    <div className="text-gray-600 text-sm">
                      <div>Hendrik Ido Ambacht</div>
                      <div>Avelingen 2B</div>
                    </div>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-3 h-3 text-gray-600" />
                    </div>
                    <a
                      href="https://api.whatsapp.com/send/?phone=31613316628"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#85c263] transition-colors text-sm focus:outline-none focus:text-[#85c263]"
                    >
                      +31 61 33 16 628
                    </a>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Mail className="w-3 h-3 text-gray-600" />
                    </div>
                    <div className="text-gray-600 text-sm space-y-1">
                      <div>
                        <a
                          href="mailto:contact@gromotion.nl"
                          className="hover:text-[#85c263] transition-colors focus:outline-none focus:text-[#85c263]"
                        >
                          contact@gromotion.nl
                        </a>
                      </div>
                      <div>
                        <a
                          href="mailto:info@gromotion.nl"
                          className="hover:text-[#85c263] transition-colors focus:outline-none focus:text-[#85c263]"
                        >
                          info@gromotion.nl
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-300 mt-10 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                  <a
                    href="https://achieve.nl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold hover:text-[#85c263] transition-colors cursor-pointer focus:outline-none focus:text-[#85c263]"
                  >
                    Ontwikkeld door Achieve.nl © 2025
                  </a>
                  <button
                    onClick={() => scrollToSection("#contact")}
                    className="hover:text-[#85c263] transition-colors focus:outline-none focus:text-[#85c263]"
                  >
                    Algemene Voorwaarden
                  </button>
                  <button
                    onClick={() => scrollToSection("#contact")}
                    className="hover:text-[#85c263] transition-colors focus:outline-none focus:text-[#85c263]"
                  >
                    Privacy Statement
                  </button>
                  <span>2025 © GROMOTION</span>
                </div>

                <div className="flex items-center space-x-2">
                  <a
                    href="#"
                    className="w-7 h-7 bg-gray-400 rounded-full flex items-center justify-center hover:bg-[#85c263] transition-colors focus:outline-none focus:bg-[#85c263] focus:ring-2 focus:ring-[#85c263] focus:ring-offset-2"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-3 h-3 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-7 h-7 bg-gray-400 rounded-full flex items-center justify-center hover:bg-[#85c263] transition-colors focus:outline-none focus:bg-[#85c263] focus:ring-2 focus:ring-[#85c263] focus:ring-offset-2"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-3 h-3 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-7 h-7 bg-gray-400 rounded-full flex items-center justify-center hover:bg-[#85c263] transition-colors focus:outline-none focus:bg-[#85c263] focus:ring-2 focus:ring-[#85c263] focus:ring-offset-2"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-3 h-3 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-7 h-7 bg-gray-400 rounded-full flex items-center justify-center hover:bg-[#85c263] transition-colors focus:outline-none focus:bg-[#85c263] focus:ring-2 focus:ring-[#85c263] focus:ring-offset-2"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-3 h-3 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
