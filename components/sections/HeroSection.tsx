import Image from "next/image";
import { PhoneCallIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  const patientProfiles = [
    { src: "/person2.jpg", alt: "Patient profile 1" },
    { src: "/persone1.jpg", alt: "Patient profile 2" },
    { src: "/persone4.jpg", alt: "Patient profile 3" },
  ];

  return (
    <section className="pt-20 lg:pt-32 px-4 sm:px-6 lg:px-8 xl:px-16 max-w-7xl mx-auto min-h-screen">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Left Content */}
        <div className="flex flex-col w-full lg:w-[740px] items-start gap-8 lg:gap-12 order-2 lg:order-1">
          <div className="flex flex-col items-start gap-8 lg:gap-12 w-full">
            <div className="flex flex-col items-start gap-4 lg:gap-6 w-full">
              <h1 className="font-raleway font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
                <span className="text-[#85c263]">
                  &quot;Verlichting Begint Hier.
                </span>
                <span className="text-[#262b31]"> Beweeg Beter</span>
                <span className="text-[#85c263]">, Voel je Beter&quot;</span>
              </h1>

              <p className="font-poppins font-medium text-[#292d32] text-lg lg:text-xl leading-relaxed max-w-full lg:max-w-[600px]">
                Een professionele aanpak die natuurlijke beweegpatronen en
                biologische principes combineert om pijn bij de kern aan te
                pakken. We focussen op duurzame gezondheid en optimale
                lichaamsfunctie.
              </p>
            </div>

            <div className="flex items-start gap-7 w-full">
              <Button className="flex h-12 lg:h-14 w-full sm:w-64 items-center justify-center gap-3 bg-[#262b31] hover:bg-[#1a1e23] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                <PhoneCallIcon className="w-5 h-5 lg:w-6 lg:h-6" />
                <span className="font-poppins font-semibold text-white text-base lg:text-lg">
                  Advies gesprek
                </span>
              </Button>
            </div>
          </div>

          {/* Patient Stats */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
            <div className="flex items-center">
              {patientProfiles.map((profile, index) => (
                <Image
                  key={index}
                  className={`w-10 h-10 lg:w-12 lg:h-12 relative object-cover rounded-full border-3 border-white shadow-md ${
                    index > 0 ? "-ml-2" : ""
                  }`}
                  alt={profile.alt}
                  src={profile.src}
                  width={48}
                  height={48}
                />
              ))}
            </div>

            <p className="font-poppins font-semibold text-black text-lg lg:text-2xl">
              +560 Behandelde Patiënten
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center w-full order-1 lg:order-2">
          <div className="w-full max-w-md lg:max-w-none lg:w-[600px] h-96 sm:h-[450px] lg:h-[700px] bg-[#fbfdf7] rounded-2xl overflow-hidden shadow-xl relative">
            <Image
              src="/Herosection.png"
              alt="Active physiotherapy session"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Doctor Card - Hidden on small screens, visible on larger screens */}
            <Card className="absolute w-64 lg:w-[300px] h-20 lg:h-[90px] bottom-4 lg:bottom-8 left-4 lg:left-8 bg-[#fbfdf7] rounded-2xl shadow-lg hidden sm:block">
              <CardContent className="p-3 lg:p-4 flex items-center gap-3 h-full">
                <Image
                  className="w-10 h-10 lg:w-12 lg:h-12 object-cover rounded-full flex-shrink-0"
                  alt="Dr Pim Groenendijk"
                  src="/person3.png"
                  width={48}
                  height={48}
                />
                <div className="flex flex-col justify-center min-w-0 flex-1">
                  <h3 className="font-poppins font-bold text-black text-sm lg:text-lg leading-tight">
                    Dr Pim Groenendijk
                  </h3>
                  <p className="font-poppins font-medium text-black text-xs lg:text-sm leading-tight">
                    Chiropractor
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Doctor Card for mobile - shown below image */}
      <div className="sm:hidden mt-6">
        <Card className="w-full bg-[#fbfdf7] rounded-2xl shadow-lg">
          <CardContent className="p-4 flex items-center gap-3 h-full">
            <Image
              className="w-12 h-12 object-cover rounded-full flex-shrink-0"
              alt="Dr Pim Groenendijk"
              src="/person3.png"
              width={48}
              height={48}
            />
            <div className="flex flex-col justify-center min-w-0 flex-1">
              <h3 className="font-poppins font-bold text-black text-lg leading-tight">
                Dr Pim Groenendijk
              </h3>
              <p className="font-poppins font-medium text-black text-sm leading-tight">
                Chiropractor
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;
