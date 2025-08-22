import { ArrowRight, Zap } from "lucide-react";

const FinalCallSection = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const whatsappNumber = "5511999999999";
    const message = "Olá! Quero agendar uma aula de Personal Fight com Professor Tiago e transformar minha força!";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent to-muted"></div>
      
      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-combat-red/20 rounded-full blur-3xl animate-pulse-energy"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-combat-orange/10 rounded-full blur-3xl animate-pulse-energy delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-combat-red/10 rounded-full animate-pulse-energy"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headlines */}
          <div className="mb-12">
            <div className="inline-flex items-center space-x-3 bg-combat-red/20 text-combat-orange px-6 py-2 rounded-full font-combat font-semibold mb-8">
              <Zap size={20} />
              <span>TRANSFORME SUA FORÇA</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-impact font-black leading-none mb-8">
              <span className="block text-combat-gradient">DESPERTE</span>
              <span className="block text-foreground">O LUTADOR</span>
              <span className="block text-combat-gradient">EM VOCÊ</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Não espere mais para desenvolver sua <span className="text-combat-orange font-semibold">força interior</span>, 
              <span className="text-combat-orange font-semibold"> técnica apurada</span> e 
              <span className="text-combat-orange font-semibold"> confiança inabalável</span>. 
              O momento é agora!
            </p>
          </div>

          {/* Benefits Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-combat rounded-xl flex items-center justify-center mx-auto mb-4 shadow-energy animate-glow-pulse">
                <span className="text-2xl">🥊</span>
              </div>
              <h3 className="font-combat font-bold text-foreground mb-2">Técnica Profissional</h3>
              <p className="text-muted-foreground">Aprenda com 15+ anos de experiência</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-combat rounded-xl flex items-center justify-center mx-auto mb-4 shadow-energy animate-glow-pulse delay-300">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="font-combat font-bold text-foreground mb-2">Comodidade Total</h3>
              <p className="text-muted-foreground">Treine onde e quando quiser</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-combat rounded-xl flex items-center justify-center mx-auto mb-4 shadow-energy animate-glow-pulse delay-700">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-combat font-bold text-foreground mb-2">Resultados Rápidos</h3>
              <p className="text-muted-foreground">Veja a diferença em poucas semanas</p>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="card-combat bg-gradient-to-r from-combat-red/20 to-combat-orange/20 border border-combat-red/30 mb-8">
            <h3 className="text-2xl font-combat font-bold text-foreground mb-4">
              🔥 Oferta Limitada: Primeira Aula com 50% OFF
            </h3>
            <p className="text-muted-foreground mb-6">
              Experimente o Personal Fight sem compromisso. Agende hoje e descubra o método que já transformou mais de 200 pessoas!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openWhatsApp}
                className="btn-combat group text-lg px-10 py-5"
              >
                <span>Agendar Primeira Aula</span>
                <ArrowRight size={24} className="ml-3 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={scrollToContact}
                className="bg-transparent border-2 border-combat-orange text-combat-orange hover:bg-combat-orange hover:text-background px-8 py-4 rounded-lg font-combat font-bold tracking-wide uppercase transition-all duration-300"
              >
                Ver Informações
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-combat-orange rounded-full"></div>
              <span>Professor Certificado</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-combat-orange rounded-full"></div>
              <span>Equipamentos Inclusos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-combat-orange rounded-full"></div>
              <span>Horários Flexíveis</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-combat-orange rounded-full"></div>
              <span>98% de Satisfação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCallSection;