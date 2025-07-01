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
    <header className="fixed w-full h-[80px] top-0 left-0 bg-[#fbfdf7] border-b border-[#adadab] z-50">
      <div className="flex items-center justify-between px-24 h-full max-w-7xl mx-auto">
        <Image
          className="w-48 h-12"
          alt="Gromotion Logo"
          src="/frame-1050.svg"
          width={180}
          height={48}
        />

        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-8">
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink className="font-poppins font-medium text-black text-lg hover:text-[#85c263] transition-colors cursor-pointer">
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button className="h-12 px-6 py-2 bg-[#85c263] hover:bg-[#6ba84a] rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
          <span className="font-poppins font-semibold text-white text-lg">
            Advies gesprek
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
    </header>
  );
};

export default Header;
