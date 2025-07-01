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
    <footer className="bg-[#f0f2e8] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Left Section - Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex flex-col items-center">
                <div className="flex space-x-1 mb-1">
                  <div className="w-1 h-1 bg-[#85c263] rounded-full"></div>
                  <div className="w-1 h-1 bg-[#85c263] rounded-full"></div>
                  <div className="w-1 h-1 bg-[#85c263] rounded-full"></div>
                </div>
                <div className="flex space-x-1 mb-1">
                  <div className="w-1 h-1 bg-[#85c263] rounded-full"></div>
                  <div className="w-1 h-1 bg-[#85c263] rounded-full"></div>
                  <div className="w-1 h-1 bg-[#85c263] rounded-full"></div>
                </div>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-[#85c263] rounded-full"></div>
                  <div className="w-1 h-1 bg-[#85c263] rounded-full"></div>
                  <div className="w-1 h-1 bg-[#85c263] rounded-full"></div>
                </div>
              </div>
              <span className="text-xl font-bold text-gray-800">GROMOTION</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              In onze trajecten streven we naar een holistische benadering
              waarbij we niet enkel symptomen behandelen, maar samen de kern van
              jouw gezondheidsuitdagingen ontdekken.
            </p>
          </div>

          {/* Center Section - Pages */}
          <div>
            <h4 className="font-bold text-gray-800 mb-6 text-lg">
              Pagina&apos;s
            </h4>
            <ul className="space-y-3">
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
            <h4 className="font-bold text-gray-800 mb-6 text-lg">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center mt-0.5 flex-shrink-0">
                  <MapPin className="w-3 h-3 text-gray-600" />
                </div>
                <div className="text-gray-600 text-sm">
                  <div>Hendrik Ido Ambacht</div>
                  <div>Avelingen 2B</div>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-3 h-3 text-gray-600" />
                </div>
                <span className="text-gray-600 text-sm">+31 85 20 30 155</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center mt-0.5 flex-shrink-0">
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
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-600">
              <span>Ontwikkeld door Achieve.nl © 2025</span>
              <a href="#" className="hover:text-gray-800 transition-colors">
                Algemene Voorwaarden
              </a>
              <a href="#" className="hover:text-gray-800 transition-colors">
                Privacy Statement
              </a>
              <span>2025 © GROMOTION</span>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-gray-700" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
              >
                <Twitter className="w-4 h-4 text-gray-700" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
              >
                <Instagram className="w-4 h-4 text-gray-700" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center hover:bg-gray-400 transition-colors"
              >
                <Facebook className="w-4 h-4 text-gray-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
