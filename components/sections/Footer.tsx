const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-400 rounded-sm flex items-center justify-center">
                <div className="text-white font-bold text-sm">G</div>
              </div>
              <span className="text-xl font-bold">GROMOTION</span>
            </div>
            <p className="text-gray-400 text-sm">
              fysiotherapie en optimalisatie
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Over ons
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Diensten
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Diensten</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Spinal Adjustment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Soft Tissue Therapy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sports Injury
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pain Treatment
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>+31 6 25 199 747</li>
              <li>9:00 - 17:00</li>
              <li>Maandag tot Vrijdag</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Gromotion. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
