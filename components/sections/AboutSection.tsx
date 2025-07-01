import Image from "next/image";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="w-full mt-32 bg-[#fffffa] rounded-xl py-16 px-16 shadow-inner">
      <div className="flex items-center gap-10 max-w-7xl mx-auto">
        <Image
          className="w-[600px] h-[650px] object-cover rounded-xl shadow-lg"
          alt="Professional physiotherapist"
          src="/20250617-1449-darker-green-clothes-remix-01jxyyxnq7epfvpmg4d755a.png"
          width={600}
          height={650}
        />

        <div className="flex flex-col w-[600px] items-start gap-12">
          <div className="flex flex-col items-start gap-6 w-full">
            <div className="flex flex-col items-start gap-4 w-full">
              <h2 className="font-poppins font-bold text-[#292d32] text-3xl">
                Wie zijn we?
              </h2>
              <p className="font-poppins font-medium text-[#262b31] text-lg leading-relaxed">
                Welkom bij onze fysiotherapiepraktijk, opgericht door Hans Groos
                in 1981 te Hendrik-Ido-Ambacht. Na een succesvolle carrière
                heeft Groos in 2020 zijn welverdiende pensioen bereikt, en zijn
                praktijk is nu in handen van Pim Groenendijk.
              </p>
            </div>

            <div className="flex flex-col w-full items-start gap-4">
              <div className="flex flex-col items-start gap-2 w-full">
                <h3 className="font-poppins font-semibold text-[#292d32] text-xl">
                  Professionele Zorg bij Pijnklachten
                </h3>
                <p className="font-poppins font-medium text-[#262b31] text-lg leading-relaxed">
                  Bij onze praktijk staat het verminderen van pijnklachten
                  centraal, en we hanteren een professionele aanpak die
                  gebruikmaakt van diverse methoden.
                </p>
              </div>

              <div className="flex flex-col items-start gap-2 w-full">
                <h3 className="font-poppins font-semibold text-[#292d32] text-xl">
                  Jij staat centraal, niet je dossier
                </h3>
                <p className="font-poppins font-medium text-[#262b31] text-lg leading-relaxed">
                  Wij bieden geen snelle oplossingen, maar een zorgvuldige
                  behandeling die jouw pijn begrijpt en effectief aanpakt. Bij
                  ons ben je geen nummer, maar een individu met unieke behoeften
                </p>
              </div>
            </div>
          </div>

          <Button className="w-64 h-14 bg-[#85c263] hover:bg-[#6ba84a] rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
            <span className="font-poppins font-semibold text-white text-lg">
              Ik wil aan de slag
            </span>
            <Image
              className="w-5 h-5 ml-2"
              alt="Arrow icon"
              src="/lsicon-arrow-left-filled.svg"
              width={20}
              height={20}
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
