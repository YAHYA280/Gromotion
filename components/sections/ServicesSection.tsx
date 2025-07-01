import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Spinal Adjustment",
      description:
        "Realigning vertebrae to relieve pain, improve function, and support the body's ability to heal itself.",
      bgColor: "bg-green-100",
    },
    {
      title: "Postural and Spinal Screenings",
      description:
        "Evaluation of posture and spinal alignment to detect issues early.",
      bgColor: "bg-white",
    },
    {
      title: "Soft Tissue Therapy",
      description:
        "Techniques like massage, myofascial release, or trigger point therapy to treat muscle tension and pain.",
      bgColor: "bg-green-100",
    },
    {
      title: "X-rays and Imaging Referrals",
      description:
        "Diagnostic imaging to get a clearer picture of structural issues.",
      bgColor: "bg-white",
    },
    {
      title: "Back and Neck Pain Treatment",
      description: "Specialized care for chronic or acute pain.",
      bgColor: "bg-green-100",
    },
    {
      title: "Sports Injury Rehabilitation",
      description:
        "Treating and preventing injuries related to physical activity.",
      bgColor: "bg-white",
    },
  ];

  return (
    <section className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Onze Diensten</h2>
          <p className="text-gray-300">Jaren van ervaring</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`${service.bgColor} p-6 rounded-2xl border-0`}
            >
              <CardContent className="p-0">
                <div
                  className={`${
                    service.bgColor === "bg-white" ? "bg-green-100" : "bg-white"
                  } w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                >
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  Advies gesprek{" "}
                  <ArrowRight className="inline-block w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
