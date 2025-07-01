import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const navItems = [
    "Home",
    "Over ons",
    "Diensten",
    "Reviews",
    "FAQs",
    "Contact",
  ];

  return (
    <header className="fixed w-full h-[132px] top-0 left-0 bg-[#fbfdf7] border-b border-[#adadab] z-50">
      <div className="flex items-center justify-between px-24 h-full max-w-7xl mx-auto">
        <Image
          className="w-64 h-20"
          alt="Gromotion Logo"
          src="/frame-1050.svg"
          width={256}
          height={80}
        />

        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-6">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink className="font-poppins font-medium text-black text-2xl hover:text-[#85c263] transition-colors cursor-pointer">
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="h-[75px] px-[38px] py-[19px] bg-gradient-to-r from-[#85c263] to-[#6ba84a] hover:from-[#6ba84a] hover:to-[#85c263] rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl">
          <span className="font-poppins font-bold text-white text-2xl">
            Advies gesprek
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
    </header>
  );
};

export default Header;
