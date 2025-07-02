import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      title: "Spinal Adjustment",
      description:
        "Realigning vertebrae to relieve pain, improve function, and support the body's ability to heal itself.",
      bgColor: "bg-[#c8e6a0]",
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
      bgColor: "bg-[#c8e6a0]",
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
      bgColor: "bg-[#c8e6a0]",
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
          <h2 className="text-5xl font-bold text-white mb-4">Onze Diensten</h2>
          <p className="text-gray-300 text-lg">Jaren van ervaring</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} p-10 rounded-[8px] border-0`}
            >
              <div
                className={`${
                  service.bgColor === "bg-white" ? "bg-[#c8e6a0]" : "bg-white"
                } w-16 h-16 rounded-lg flex items-center justify-center mb-6`}
              >
                <Star className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                {service.description}
              </p>
              <Button className="bg-[#85c263]  h-12 py-3 rounded-lg hover:bg-[#6ba84a] transition-colors text-black">
                Advies gesprek{" "}
                <ArrowRight className="inline-block w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
