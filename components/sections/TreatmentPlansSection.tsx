import { Button } from "@/components/ui/button";

const TreatmentPlansSection = () => {
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
      highlighted: false,
      bgColor: "bg-white",
    },
    {
      title: "Bodyscan/ Loopanalyse",
      features: [
        "Analyse van houding en bewegpatrronen",
        "Statische en dynamische video-opnames",
        "Inzicht in aanwezige compensatiepatronen",
        "Opstellen van een persoonlijk plan van aanpak (PVA)",
        "Advies over wat het 1-op-1 traject kan betekenen",
      ],
      highlighted: false,
      bgColor: "bg-white",
    },
    {
      title: "1-op-1 Traject: Pijnvrij Bewegen",
      features: [
        "Minimaal 12 sessies van 60+ minuten",
        "Begeleiding op maat bij bewegklachten",
        "Start op basis van resultaten uit de bodyscan",
        "Niet-goed-geld-terug-garantie",
        "Inclusief huiswerkoefeningen, literatuur en klein materiaal",
        "Focus op leefstijl, beweging en gezondheidsoptimalisatie",
        "Veel educatie tijdens het traject",
        "Advies over functioneel trainingsabonnement",
      ],
      highlighted: true,
      bgColor: "bg-white",
    },
    {
      title: "Strippenkaart: 6 / 12 / 24 Sessies",
      features: [
        "Sessies van 60 minuten",
        "Voortzetten van training",
        "Vergroten van duurzaamheid",
        "Deelname functioneel trainingsabonnement",
        "Blijvende begeleiding",
        "Progressie na het traject",
      ],
      highlighted: false,
      bgColor: "bg-white",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Zo ziet het traject eruit
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl">
            Onze trajecten zijn zorgvuldig samengesteld om aan te sluiten bij
            wat bij jou past.
          </p>
        </div>
      </div>

      {/* Full-width dark background for cards */}
      <div className="bg-gray-800 py-16 relative overflow-hidden">
        {/* Background decorative circles */}
        <div className="absolute top-8 right-8 w-24 h-24 bg-green-500 rounded-full opacity-80"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 bg-green-400 rounded-full opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-green-300 rounded-full opacity-40"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`${plan.bgColor} p-8 rounded-[32px] relative ${
                  plan.highlighted
                    ? "border-4 border-blue-400 shadow-[0_0_0_2px_rgba(59,130,246,0.3)]"
                    : "border-0"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3 -right-3 w-6 h-6 bg-green-500 rounded-full"></div>
                )}

                <h3 className="text-xl font-bold text-gray-800 mb-6 leading-tight">
                  {plan.title}
                </h3>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-5 h-5 rounded-full bg-gray-800 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-700 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#85c263] text-white py-3 rounded-lg hover:bg-[#6ba84a] transition-colors font-semibold">
                  Kies plan
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentPlansSection;
