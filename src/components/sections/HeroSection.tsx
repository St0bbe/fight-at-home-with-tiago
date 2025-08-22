import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-fight.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-combat-red/10 rounded-full blur-3xl animate-pulse-energy"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-combat-orange/5 rounded-full blur-3xl animate-pulse-energy delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-impact font-black mb-6 leading-none">
            <span className="block text-combat-gradient">PERSONAL</span>
            <span className="block text-foreground">FIGHT</span>
          </h1>
          
          <div className="mb-8">
            <p className="text-xl md:text-2xl lg:text-3xl font-combat font-semibold text-secondary mb-2">
              COM PROFESSOR TIAGO
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Treinos de combate personalizados — <span className="text-combat-orange font-semibold">onde você estiver</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="btn-combat group"
            >
              <span>Agende sua Aula</span>
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={scrollToServices}
              className="flex items-center space-x-3 text-foreground hover:text-combat-orange transition-colors duration-300 font-combat font-semibold"
            >
              <div className="w-12 h-12 border-2 border-current rounded-full flex items-center justify-center hover:bg-current hover:text-background transition-all duration-300">
                <Play size={16} />
              </div>
              <span>Veja os Planos</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-combat-orange rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;