export const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId);
  if (element) {
    const headerHeight = 80; // Account for fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

export const scrollToContact = () => {
  scrollToSection("#contact");
};
