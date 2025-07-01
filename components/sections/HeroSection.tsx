import Image from "next/image";
import { PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  const patientProfiles = [
    { src: "/ellipse-22.png", alt: "Patient profile 1" },
    { src: "/ellipse-23.png", alt: "Patient profile 2" },
    { src: "/ellipse-24.png", alt: "Patient profile 3" },
  ];

  return (
    <section className="pt-[120px] px-24 flex items-center gap-8 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col w-[740px] items-start gap-12">
        <div className="flex flex-col items-start gap-12 w-full">
          <div className="flex flex-col items-start gap-6 w-full">
            <h1 className="font-raleway font-bold text-[72px] leading-tight">
              <span className="text-[#85c263]">
                &quot;Verlichting Begint Hier.
              </span>
              <span className="text-[#262b31]"> Beweeg Beter</span>
              <span className="text-[#85c263]">, Voel je Beter&quot;</span>
            </h1>

            <p className="font-poppins font-medium text-[#292d32] text-xl leading-relaxed max-w-[600px]">
              Een professionele aanpak die natuurlijke beweegpatronen en
              biologische principes combineert om pijn bij de kern aan te
              pakken. We focussen op duurzame gezondheid en optimale
              lichaamsfunctie.
            </p>
          </div>

          <div className="flex items-start gap-7">
            <Button className="flex h-14 w-64 items-center justify-center gap-3 bg-[#262b31] hover:bg-[#1a1e23] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
              <PhoneCallIcon className="w-6 h-6" />
              <span className="font-poppins font-semibold text-white text-lg">
                Advies gesprek
              </span>
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center">
            {patientProfiles.map((profile, index) => (
              <Image
                key={index}
                className={`w-12 h-12 relative object-cover rounded-full border-3 border-white shadow-md ${
                  index > 0 ? "-ml-2" : ""
                }`}
                alt={profile.alt}
                src={profile.src}
                width={48}
                height={48}
              />
            ))}
          </div>

          <p className="font-poppins font-semibold text-black text-2xl">
            +560 Behandelde Patiënten
          </p>
        </div>
      </div>

      <div className="flex-1 flex justify-center">
        <div className="w-[600px] h-[700px] bg-[#fbfdf7] rounded-2xl overflow-hidden shadow-xl relative">
          <Image
            src="/actief.png"
            alt="Active physiotherapy session"
            fill
            className="object-cover"
          />
          <Card className="absolute w-[300px] h-[80px] bottom-8 left-8 bg-[#fbfdf7] rounded-2xl shadow-lg">
            <CardContent className="p-4 flex items-center gap-3">
              <Image
                className="w-12 h-12 object-cover rounded-full"
                alt="Dr Pim Groenendijk"
                src="/ellipse-17.png"
                width={48}
                height={48}
              />
              <div className="flex flex-col items-start gap-1">
                <h3 className="font-poppins font-bold text-black text-lg">
                  Dr Pim Groenendijk
                </h3>
                <p className="font-poppins font-medium text-black text-sm">
                  Chiropractor
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
