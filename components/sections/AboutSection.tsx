"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
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

  return (
    <section className="w-full mt-16 lg:mt-32 bg-[#fffffa] rounded-xl py-8 lg:py-16 px-4 sm:px-6 lg:px-16 shadow-inner">
      <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 max-w-7xl mx-auto">
        {/* Image - Order 1 on mobile, Order 1 on desktop */}
        <div className="w-full lg:w-auto flex justify-center order-1">
          <Image
            className="w-full max-w-sm sm:max-w-md lg:max-w-none lg:w-[500px] xl:w-[600px] h-auto lg:h-[550px] xl:h-[650px] object-cover rounded-xl shadow-lg"
            alt="Professional physiotherapist"
            src="/gromotion2.svg"
            width={600}
            height={650}
            priority
          />
        </div>

        {/* Content - Order 2 on mobile, Order 2 on desktop */}
        <div className="flex flex-col w-full lg:w-[600px] items-start gap-8 lg:gap-12 order-2">
          <div className="flex flex-col items-start gap-6 lg:gap-6 w-full">
            {/* Main Title and Description */}
            <div className="flex flex-col items-start gap-4 w-full">
              <h2 className="font-poppins font-bold text-[#292d32] text-2xl lg:text-3xl">
                Wie zijn we?
              </h2>
              <p className="font-poppins font-medium text-[#262b31] text-base lg:text-lg leading-relaxed">
                Welkom bij onze fysiotherapiepraktijk, opgericht door Hans Groos
                in 1981 te Hendrik-Ido-Ambacht. Na een succesvolle carrière
                heeft Groos in 2020 zijn welverdiende pensioen bereikt, en zijn
                praktijk is nu in handen van Pim Groenendijk.
              </p>
            </div>

            {/* Feature Sections */}
            <div className="flex flex-col w-full items-start gap-6">
              <div className="flex flex-col items-start gap-2 lg:gap-2 w-full">
                <h3 className="font-poppins font-semibold text-[#292d32] text-lg lg:text-xl">
                  Professionele Zorg bij Pijnklachten
                </h3>
                <p className="font-poppins font-medium text-[#262b31] text-base lg:text-lg leading-relaxed">
                  Bij onze praktijk staat het verminderen van pijnklachten
                  centraal, en we hanteren een professionele aanpak die
                  gebruikmaakt van diverse methoden.
                </p>
              </div>

              <div className="flex flex-col items-start gap-2 lg:gap-2 w-full">
                <h3 className="font-poppins font-semibold text-[#292d32] text-lg lg:text-xl">
                  Jij staat centraal, niet je dossier
                </h3>
                <p className="font-poppins font-medium text-[#262b31] text-base lg:text-lg leading-relaxed">
                  Wij bieden geen snelle oplossingen, maar een zorgvuldige
                  behandeling die jouw pijn begrijpt en effectief aanpakt. Bij
                  ons ben je geen nummer, maar een individu met unieke behoeften
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            className="group w-full sm:w-64 h-12 lg:h-14 bg-[#85c263] hover:bg-[#6ba84a] rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 overflow-hidden relative cursor-pointer"
          >
            <span className="font-poppins font-semibold text-white text-base lg:text-lg relative z-10">
              Ik wil aan de slag
            </span>
            <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 relative z-10 rotate-[-45deg]" />

            {/* Subtle shine animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
