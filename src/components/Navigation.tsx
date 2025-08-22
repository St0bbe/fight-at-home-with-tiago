import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Início", href: "#hero" },
    { label: "Sobre", href: "#about" },
    { label: "Serviços", href: "#services" },
    { label: "Como Funciona", href: "#process" },
    { label: "Depoimentos", href: "#testimonials" },
    { label: "Galeria", href: "#gallery" },
    { label: "Contato", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-combat rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <span className="text-xl font-combat font-bold text-combat-gradient">
              PROFESSOR TIAGO
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-200 font-combat font-semibold uppercase text-sm tracking-wide"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact")}
              className="btn-combat !py-2 !px-6 !text-sm"
            >
              Agendar Aula
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card/95 backdrop-blur-md border border-border rounded-lg mt-2 p-4">
            <div className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-primary transition-colors font-combat font-semibold uppercase text-sm tracking-wide"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("#contact")}
                className="btn-combat !py-2 !px-6 !text-sm"
              >
                Agendar Aula
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;