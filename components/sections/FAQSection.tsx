"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";

const FAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Wat zijn de meest gestelde vragen over Gromotion?
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
