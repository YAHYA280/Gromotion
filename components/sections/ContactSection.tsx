"use client";
import { useState } from "react";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoonnummer: "",
    adres: "",
    soorten: "",
    beschrijving: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const serviceOptions = [
    "Spinal Adjustment",
    "Low Backpains",
    "Massages",
    "Accidents & Fall Injury",
    "Stretching",
    "Legs",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServiceSelect = (service: string) => {
    setFormData({
      ...formData,
      soorten: service,
    });
    setIsDropdownOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleWhatsAppClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=31613316628", "_blank");
  };

  return (
    <section className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            We kijken ernaar uit om van je te horen!
          </h2>
          <p className="text-gray-300 text-lg">
            Beschikbaar van 9:00 tot 17:00 uur, maandag tot en met vrijdag.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit}>
              <div className="bg-[#F3F8E8] p-8 rounded-[12px]">
                <div className="space-y-6">
                  {/* Naam Field */}
                  <div className="relative">
                    <label className="absolute -top-2 left-4 bg-[#F3F8E8] px-2 text-sm font-medium text-gray-700 z-10">
                      Naam
                    </label>
                    <input
                      type="text"
                      name="naam"
                      value={formData.naam}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-400 rounded-xl bg-transparent focus:border-green-500 focus:outline-none"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="relative">
                    <label className="absolute -top-2 left-4 bg-[#F3F8E8] px-2 text-sm font-medium text-gray-700 z-10">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-400 rounded-xl bg-transparent focus:border-green-500 focus:outline-none"
                      required
                    />
                  </div>

                  {/* Telefoonnummer Field */}
                  <div className="relative">
                    <label className="absolute -top-2 left-4 bg-[#F3F8E8] px-2 text-sm font-medium text-gray-700 z-10">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      name="telefoonnummer"
                      value={formData.telefoonnummer}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-400 rounded-xl bg-transparent focus:border-green-500 focus:outline-none"
                      required
                    />
                  </div>

                  {/* Adres Field */}
                  <div className="relative">
                    <label className="absolute -top-2 left-4 bg-[#F3F8E8] px-2 text-sm font-medium text-gray-700 z-10">
                      Adres
                    </label>
                    <input
                      type="text"
                      name="adres"
                      value={formData.adres}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-400 rounded-xl bg-transparent focus:border-green-500 focus:outline-none"
                      required
                    />
                  </div>

                  {/* Soorten Diensten Dropdown */}
                  <div className="relative">
                    <label className="absolute -top-2 left-4 bg-[#F3F8E8] px-2 text-sm font-medium text-gray-700 z-10">
                      Soorten Diensten
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full px-4 py-4 border-2 border-gray-400 rounded-xl bg-transparent focus:border-green-500 focus:outline-none text-left flex items-center justify-between"
                      >
                        <span
                          className={
                            formData.soorten ? "text-gray-700" : "text-gray-500"
                          }
                        >
                          {formData.soorten || "Selecteer een dienst"}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-500 transition-transform ${
                            isDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-gray-300 rounded-xl shadow-lg z-20 max-h-48 overflow-y-auto">
                          {serviceOptions.map((option, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => handleServiceSelect(option)}
                              className="w-full px-4 py-3 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none first:rounded-t-xl last:rounded-b-xl"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Beschrijving Field */}
                  <div className="relative">
                    <label className="absolute -top-2 left-4 bg-[#F3F8E8] px-2 text-sm font-medium text-gray-700 z-10">
                      Beschrijving
                    </label>
                    <textarea
                      name="beschrijving"
                      value={formData.beschrijving}
                      onChange={handleInputChange}
                      placeholder="Schrijf hier je bericht"
                      rows={4}
                      className="w-full px-4 py-4 border-2 border-gray-400 rounded-xl bg-transparent focus:border-green-500 focus:outline-none placeholder-gray-500"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="group w-full h-11 bg-[#85c263] text-white py-4 rounded-lg hover:bg-[#6ba84a] transition-all duration-300 font-semibold text-lg hover:scale-105 active:scale-95 overflow-hidden relative"
                  >
                    <span className="relative z-10">Verstuur</span>
                    <ArrowRight className="inline-block w-5 h-5 ml-2 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10 rotate-[-45deg]" />

                    {/* Subtle shine animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  </Button>
                </div>
              </div>
            </form>
          </div>

          {/* Right Side - Contact Info & Testimonial */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <div className="bg-[#F3F8E8] p-8 rounded-[12px]">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Neem contact met ons op en wij bellen je terug!
              </h3>
              <div className="text-center">
                <p className="text-gray-700 mb-4 font-medium">Via Whatsapp</p>
                <Button
                  onClick={handleWhatsAppClick}
                  className="group h-11 bg-[#85c263] text-white px-8 py-4 rounded-lg hover:bg-[#6ba84a] transition-all duration-300 flex items-center font-semibold text-lg mx-auto hover:scale-105 active:scale-95 overflow-hidden relative cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 mr-3 text-white relative z-10" />
                  <span className="relative z-10">+31 6 13 316 628</span>

                  {/* Subtle shine animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                </Button>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="bg-[#F3F8E8] p-8 rounded-[12px]">
              <div className="text-center">
                <div className="text-6xl text-[#85c263] mb-6 font-serif leading-none">
                  &quot;
                </div>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  &quot;Een behandeling krijgen bij Gromotion was echt
                  levensveranderend. De deskundige therapeuten ontdekten snel de
                  oorzaak van mijn rugpijn en stelden een persoonlijk plan op
                  dat echt resultaat opleverde. Dankzij hun zorg ben ik nu
                  pijnvrij en kan ik weer doen wat ik het liefste doe.&quot;
                </p>
                <p className="font-bold text-gray-800 text-xl">Bas Scheltema</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
