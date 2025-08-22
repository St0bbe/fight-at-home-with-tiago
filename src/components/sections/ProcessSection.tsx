import { MessageSquare, MapPin, Zap, TrendingUp } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "Preencha o Contato",
      description: "Entre em contato pelo WhatsApp e conte seus objetivos. Vamos conversar sobre suas necessidades e expectativas."
    },
    {
      icon: MapPin,
      number: "02", 
      title: "Definimos Local & Horário",
      description: "Escolhemos juntos o melhor local (sua casa, condomínio, parque) e horário que se encaixa na sua rotina."
    },
    {
      icon: Zap,
      number: "03",
      title: "Personal Fight em Casa", 
      description: "Chegamos com todo equipamento necessário e realizamos seu treino personalizado onde você estiver."
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Acompanhamento & Evolução",
      description: "Monitoramos seu progresso, ajustamos o treino e celebramos cada conquista no seu desenvolvimento."
    }
  ];

  return (
    <section id="process" className="section-combat bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-impact font-black mb-6">
            <span className="text-foreground">COMO</span>
            <br />
            <span className="text-combat-gradient">FUNCIONA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um processo simples e direto para começar sua transformação
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-combat-red via-combat-orange to-combat-red opacity-30"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Step Card */}
                <div className="card-combat text-center hover:scale-105 transition-all duration-300">
                  {/* Step Number */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-combat rounded-full flex items-center justify-center mx-auto mb-4 shadow-energy group-hover:animate-glow-pulse">
                      <span className="text-2xl font-impact font-black text-white">
                        {step.number}
                      </span>
                    </div>
                    
                    {/* Icon */}
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto -mt-2 shadow-elevated">
                      <step.icon className="text-accent-foreground" size={24} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-combat font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 z-10">
                    <div className="w-8 h-8 bg-background rounded-full flex items-center justify-center border-2 border-combat-orange">
                      <div className="w-0 h-0 border-l-4 border-l-combat-orange border-y-4 border-y-transparent"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 p-6 bg-gradient-to-r from-accent to-muted rounded-2xl">
            <Zap className="text-combat-orange animate-pulse" size={32} />
            <div className="text-left">
              <h4 className="font-combat font-bold text-foreground mb-1">
                Pronto para começar?
              </h4>
              <p className="text-muted-foreground text-sm">
                Sua primeira aula pode ser hoje mesmo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;