import Image from "next/image";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="w-full mt-[280px] bg-[#fffffa] rounded-2xl py-24 px-24 shadow-inner">
      <div className="flex items-center gap-12 max-w-7xl mx-auto">
        <Image
          className="w-[772px] h-[832px] object-cover rounded-2xl shadow-lg"
          alt="Professional physiotherapist"
          src="/20250617-1449-darker-green-clothes-remix-01jxyyxnq7epfvpmg4d755a.png"
          width={772}
          height={832}
        />

        <div className="flex flex-col w-[716px] items-start gap-20">
          <div className="flex flex-col items-start gap-8 w-full">
            <div className="flex flex-col items-start gap-6 w-full">
              <h2 className="font-poppins font-bold text-[#292d32] text-5xl">
                Wie zijn we?
              </h2>
              <p className="font-poppins font-medium text-[#262b31] text-2xl leading-relaxed">
                Welkom bij onze fysiotherapiepraktijk, opgericht door Hans Groos
                in 1981 te Hendrik-Ido-Ambacht. Na een succesvolle carrière
                heeft Groos in 2020 zijn welverdiende pensioen bereikt, en zijn
                praktijk is nu in handen van Pim Groenendijk.
              </p>
            </div>

            <div className="flex flex-col w-[648px] items-start gap-4">
              <div className="flex flex-col items-start gap-2 w-full">
                <h3 className="font-poppins font-semibold text-[#292d32] text-[32px]">
                  Professionele Zorg bij Pijnklachten
                </h3>
                <p className="font-poppins font-medium text-[#262b31] text-2xl leading-relaxed">
                  Bij onze praktijk staat het verminderen van pijnklachten
                  centraal, en we hanteren een professionele aanpak die
                  gebruikmaakt van diverse methoden.
                </p>
              </div>

              <div className="flex flex-col items-start gap-2 w-full">
                <h3 className="font-poppins font-semibold text-[#292d32] text-[32px]">
                  Jij staat centraal, niet je dossier
                </h3>
                <p className="font-poppins font-medium text-[#262b31] text-2xl leading-relaxed">
                  Wij bieden geen snelle oplossingen, maar een zorgvuldige
                  behandeling die jouw pijn begrijpt en effectief aanpakt. Bij
                  ons ben je geen nummer, maar een individu met unieke behoeften
                </p>
              </div>
            </div>
          </div>

          <Button className="w-[300px] h-20 bg-[#85c263] hover:bg-[#6ba84a] rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl">
            <span className="font-poppins font-bold text-white text-2xl">
              Ik wil aan de slag
            </span>
            <Image
              className="w-8 h-8 ml-2"
              alt="Arrow icon"
              src="/lsicon-arrow-left-filled.svg"
              width={32}
              height={32}
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
