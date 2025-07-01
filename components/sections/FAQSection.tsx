"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Wat is het verschil met fysiotherapie?",
      answer:
        "Wij behandelen niet alleen een klacht, maar het patroon erachter. We nemen meer tijd en werken zonder restricties.",
    },
    {
      question: "Is dit iets voor mij als ik al lang klachten heb?",
      answer:
        "Juist dan. Wij werken graag met mensen die overal al geweest zijn.",
    },
    {
      question: "Hoe weet ik of het werkt?",
      answer: "We meten en filmen je progressie. Jij ziet zelf het verschil.",
    },
    {
      question: "Wat als ik geen resultaat merk?",
      answer: "Dan stopt het traject. We hanteren een resultaatgarantie.",
    },
    {
      question: "Kan ik eerst vrijblijvend kennismaken?",
      answer: "Zeker. Je eerste intake is gratis en verplicht tot niets.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Wat zijn de meest gestelde vragen over Gromotion?
          </p>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center py-8 text-left hover:bg-gray-50 transition-colors group"
              >
                <h3 className="text-2xl font-bold text-gray-800 pr-8">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-[#85c263] transition-transform flex-shrink-0 ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="pb-8 -mt-2">
                  <p className="text-gray-700 text-lg leading-relaxed max-w-4xl">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
