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
    <section className="pt-[212px] px-24 flex items-center gap-8 max-w-7xl mx-auto">
      <div className="flex flex-col w-[740px] items-start gap-[54px]">
        <div className="flex flex-col items-start gap-[72px] w-full">
          <div className="flex flex-col items-start gap-4 w-full">
            <h1 className="font-raleway font-bold text-[104px] leading-tight">
              <span className="text-[#85c263]">
                &quot;Verlichting Begint Hier.
              </span>
              <span className="text-[#262b31]"> Beweeg Beter</span>
              <span className="text-[#85c263]">, Voel je Beter&quot;</span>
            </h1>

            <p className="font-poppins font-medium text-[#292d32] text-2xl leading-relaxed">
              Een professionele aanpak die natuurlijke beweegpatronen en
              biologische principes combineert om pijn bij de kern aan te
              pakken. We focussen op duurzame gezondheid en optimale
              lichaamsfunctie.
            </p>
          </div>

          <div className="flex items-start gap-7">
            <Button className="flex h-20 w-80 items-center justify-center gap-2.5 bg-[#262b31] hover:bg-[#1a1e23] rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl">
              <PhoneCallIcon className="w-8 h-8" />
              <span className="font-poppins font-bold text-white text-2xl">
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
                className={`w-16 h-16 relative object-cover rounded-full border-4 border-white shadow-md ${
                  index > 0 ? "-ml-2" : ""
                }`}
                alt={profile.alt}
                src={profile.src}
                width={64}
                height={64}
              />
            ))}
          </div>

          <p className="font-poppins font-semibold text-black text-[32px]">
            +560 Behandelde Patiënten
          </p>
        </div>
      </div>

      <Card className="w-[764px] h-[1020px] bg-[#fbfdf7] rounded-2xl overflow-hidden shadow-2xl">
        <CardContent className="p-0 h-full">
          <div className="h-full relative">
            <Image
              src="/actief.png"
              alt="Active physiotherapy session"
              fill
              className="object-cover"
            />
            <Card className="absolute w-[340px] h-[98px] bottom-[78px] left-10 bg-[#fbfdf7] rounded-3xl shadow-lg">
              <CardContent className="p-5 flex items-center gap-4">
                <Image
                  className="w-14 h-14 object-cover rounded-full"
                  alt="Dr Pim Groenendijk"
                  src="/ellipse-17.png"
                  width={56}
                  height={56}
                />
                <div className="flex flex-col w-52 items-start gap-1">
                  <h3 className="font-poppins font-bold text-black text-xl">
                    Dr Pim Groenendijk
                  </h3>
                  <p className="font-poppins font-medium text-black text-base">
                    Chiropractor
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default HeroSection;
