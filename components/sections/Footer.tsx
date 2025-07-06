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
                  <Image
                    className="h-8 lg:h-10 w-auto"
                    alt="Gromotion Logo"
                    src="/Gromotion.svg"
                    width={160}
                    height={40}
                    priority
                  />
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
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
                    >
                      Over ons
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
                    >
                      Waarom wij?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
                    >
                      Onze diensten
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
                    >
                      Reviews
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-800 transition-colors text-sm"
                    >
                      Map
                    </a>
                  </li>
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
                    <span className="text-gray-600 text-sm">
                      +31 85 20 30 155
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <Mail className="w-3 h-3 text-gray-600" />
                    </div>
                    <div className="text-gray-600 text-sm">
                      <div>contact@gromotion.nl</div>
                      <div>info@gromotion.nl</div>
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
                    className="font-bold hover:text-gray-800 transition-colors cursor-pointer"
                  >
                    Ontwikkeld door Achieve.nl © 2025
                  </a>
                  <a href="#" className="hover:text-gray-800 transition-colors">
                    Algemene Voorwaarden
                  </a>
                  <a href="#" className="hover:text-gray-800 transition-colors">
                    Privacy Statement
                  </a>
                  <span>2025 © GROMOTION</span>
                </div>

                <div className="flex items-center space-x-2">
                  <a
                    href="#"
                    className="w-7 h-7 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                  >
                    <Linkedin className="w-3 h-3 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-7 h-7 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                  >
                    <Twitter className="w-3 h-3 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-7 h-7 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
                  >
                    <Instagram className="w-3 h-3 text-white" />
                  </a>
                  <a
                    href="#"
                    className="w-7 h-7 bg-gray-400 rounded-full flex items-center justify-center hover:bg-gray-500 transition-colors"
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
