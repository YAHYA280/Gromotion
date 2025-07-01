import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
      highlighted: true,
    },
    {
      title: "Bodyscan/ Loopanalyse",
      features: [
        "Analyse van houding en bewegpatronen",
        "Statische en dynamische video-opnames",
        "Inzicht in aanwezige compensatiepatronen",
        "Opstellen van een persoonlijk plan van aanpak (PVA)",
        "Advies over wat het 1-op-1 traject kan betekenen",
      ],
      highlighted: false,
    },
    {
      title: "1-op-1 Traject: Pijnvrij Bewegen",
      features: [
        "Minimaal 12 sessies van 60+ minuten",
        "Begeleiding op maat bij bewegmethoden klachten",
        "Start op basis van resultaten uit de bodyscan",
        "Niet-goed-geld-terug-garantie",
        "Inclusief huiswerkorieningen, literatuur en klein materiaal",
        "Focus op leefstijl, beweging en gezondheidsoptimalisatie",
        "Veel educatie tijdens het traject",
        "Advies over functioneel trainingsabonnement",
      ],
      highlighted: false,
    },
    {
      title: "Strippenkaart: 6 / 12 / 24 Sessies",
      features: [
        "Sessies van 50 minuten",
        "Voortzetten van training",
        "Vergroten van duurzaamheid",
        "Deelname functioneel trainingsabonnement",
        "Blijvende begeleiding",
        "Progressie na het traject",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Zo ziet het traject eruit
          </h2>
          <p className="text-gray-300">
            Onze trajecten zijn zorgvuldig samengesteld om aan te sluiten bij
            wat bij jou past.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`bg-white p-6 rounded-2xl ${
                plan.highlighted ? "border-4 border-green-400" : "border-0"
              }`}
            >
              <CardContent className="p-0">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {plan.title}
                </h3>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-2"
                    >
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                  Kies plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentPlansSection;
