"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const TreatmentPlansSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const plans = [
    {
      title: "Gratis Intakegesprek",
      features: [
        "50 minuten intake gesprek",
        "Invullen van een vragenlijst",
        "Gericht gesprek over jouw klachten",
        "Kijken of de behandeling bij je past",
        "Een persoonlijk advies of vervolgstap",
        "Advies over Bodyscan/Loopanalyse",
      ],
      highlighted: true,
      bgColor: "bg-white",
      borderColor: "border-[#85c263]",
    },
    {
      title: "Bodyscan/ Loopanalyse",
      features: [
        "Analyse van houding en bewegingspatronen",
        "Statische en dynamische video-opnames",
        "Inzicht in aanwezige compensatiepatronen",
        "Opstellen van een persoonlijk plan van aanpak (PVA)",
        "Advies over wat het 1-op-1 traject kan betekenen",
      ],
      highlighted: false,
      bgColor: "bg-white",
      borderColor: "border-gray-200",
    },
    {
      title: "1-op-1 Traject: Pijnvrij Bewegen",
      features: [
        "Minimaal 12 sessies van 90+ minuten",
        "Begeleiding op maat bij biomechanische klachten",
        "Start op basis van resultaten uit de bodyscan",
        "Niet-goed-geld-terug-garantie",
        "Inclusief huiswerkoefeningen, literatuur en klein materiaal",
        "Focus op leefstijl, beweging en gezondheidsoptimalisatie",
        "Veel educatie tijdens het traject",
        "Advies over functioneel trainingsabonnement",
      ],
      highlighted: false,
      bgColor: "bg-white",
      borderColor: "border-gray-200",
    },
    {
      title: "Strippenkaart: 6 / 12 / 24 Sessies",
      features: [
        "Sessies van 90 minuten",
        "Voortzetten van training",
        "Vergeten van duurzaamheid",
        "Deelname functioneel trainingsabonnement",
        "Blijvende begeleiding",
        "Progressie na het traject",
      ],
      highlighted: false,
      bgColor: "bg-white",
      borderColor: "border-gray-200",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
          <div className="flex-1">
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Zo ziet het traject eruit
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Onze trajecten zijn zorgvuldig samengesteld om aan te sluiten bij
              wat bij jou past.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/aniamatedForm.gif"
              alt="Animated form demonstration"
              width={180}
              height={120}
              className="rounded-xl shadow-lg"
              unoptimized
            />
          </div>
        </div>
      </div>

      {/* Full-width background with SVG for cards */}
      <div
        className="py-16 relative overflow-hidden"
        style={{
          backgroundImage: "url('/background.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Background decorative circles */}
        <div className="absolute top-8 right-8 w-24 h-24 bg-green-500 rounded-full opacity-80"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 bg-green-400 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-green-300 rounded-full opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`${plan.bgColor} p-8 rounded-[32px] border-2 border-gray-200
                  transition-all duration-300 ease-in-out transform
                  hover:scale-105 hover:shadow-2xl hover:border-[#85c263] hover:-translate-y-2
                  cursor-pointer group relative overflow-hidden`}
              >
                {/* Highlight indicator for first card */}
                {plan.highlighted && (
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full"></div>
                )}

                {/* Hover background effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#85c263]/5 to-[#85c263]/10 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[32px]"
                ></div>

                <div className="relative z-10">
                  <h3
                    className="text-xl font-bold text-gray-800 mb-6 leading-tight
                    group-hover:text-[#85c263] transition-colors duration-300"
                  >
                    {plan.title}
                  </h3>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-3"
                      >
                        <div
                          className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center mt-0.5 flex-shrink-0
                          group-hover:bg-[#85c263] transition-colors duration-300"
                        >
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span
                          className="text-sm text-gray-700 leading-relaxed
                          group-hover:text-gray-800 transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToContact}
                    className="group/button w-full h-11 bg-[#85c263] text-white py-3 rounded-lg 
                    hover:bg-[#6ba84a] hover:shadow-lg transition-all duration-300 
                    font-semibold transform hover:scale-105 active:scale-95 overflow-hidden relative cursor-pointer"
                  >
                    <span className="relative z-10">Kies plan</span>

                    {/* Subtle shine animation */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/button:translate-x-full transition-transform duration-700 ease-out"></div>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentPlansSection;
