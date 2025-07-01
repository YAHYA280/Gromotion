import { Check, Star, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Check,
      title: "Uitgebreide intake",
      description:
        "We starten met een uitgebreide intake waarin we jouw klachten, leefstijl en doelen zorgvuldig in kaart brengen. Zo krijgen we een compleet beeld van je situatie.",
    },
    {
      icon: Star,
      title: "Persoonlijk plan",
      description:
        "We stellen een persoonlijk behandelplan op dat aansluit bij jouw doelen, waarbij we alle mogelijke behandelmethoden en hun effecten zorgvuldig afwegen.",
    },
    {
      icon: Users,
      title: "Intensieve begeleiding",
      description:
        "We zetten ons volledig in voor jouw herstel, met intensieve begeleiding en gerichte interventies — of dat nu in de behandelkamer is, tijdens training of in je dagelijks leven is.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
          Waarom ons kiezen?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-green-100 p-8 rounded-2xl border-0">
              <CardContent className="p-0">
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
