"use client";
import { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoonnummer: "",
    adres: "",
    soorten: "",
    beschrijving: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  return (
    <section className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            We kijken ernaar uit om van je te horen!
          </h2>
          <p className="text-gray-300">
            Beschikbaar van 9:00 tot 17:00 uur, maandag tot en met vrijdag.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-1">
            <form onSubmit={handleSubmit}>
              <Card className="bg-white p-8 rounded-2xl border-0">
                <CardContent className="p-0 space-y-6">
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Naam
                    </label>
                    <input
                      type="text"
                      name="naam"
                      value={formData.naam}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Telefoonnummer
                    </label>
                    <input
                      type="tel"
                      name="telefoonnummer"
                      value={formData.telefoonnummer}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Adres
                    </label>
                    <input
                      type="text"
                      name="adres"
                      value={formData.adres}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Soorten Diensten
                    </label>
                    <select
                      name="soorten"
                      value={formData.soorten}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    >
                      <option value="">Selecteer een dienst</option>
                      <option value="spinal-adjustment">
                        Spinal Adjustment
                      </option>
                      <option value="low-backpains">Low Backpains</option>
                      <option value="massages">Massages</option>
                      <option value="accidents-fall-injury">
                        Accidents & Fall injury
                      </option>
                      <option value="stretching">Stretching</option>
                      <option value="legs">Legs</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Beschrijving
                    </label>
                    <textarea
                      name="beschrijving"
                      value={formData.beschrijving}
                      onChange={handleInputChange}
                      placeholder="Schrijf hier je bericht"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    ></textarea>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Verstuur{" "}
                    <ArrowRight className="inline-block w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <Card className="bg-white p-8 rounded-2xl h-full border-0">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Neem contact met ons op en wij bellen je terug!
                </h3>
                <div className="mb-6">
                  <p className="text-gray-600 mb-4">Via Whatsapp</p>
                  <Button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    +31 6 25 199 747
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial */}
          <div className="lg:col-span-1">
            <Card className="bg-white p-8 rounded-2xl h-full border-0">
              <CardContent className="p-0">
                <div className="text-4xl text-green-600 mb-4">&quot;</div>
                <p className="text-gray-700 mb-6">
                  Een behandeling krijgen bij Gromotion was echt
                  levensveranderend. De deskundige therapeuten ontdekten snel de
                  oorzaak van mijn rugpijn en stelden een persoonlijk plan op
                  dat echt resultaat opleverde. Dankzij hun zorg ben ik nu
                  pijnvrij en kan ik weer doen wat ik het liefste doe.
                </p>
                <p className="font-semibold text-gray-800">Bas Scheltema</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
