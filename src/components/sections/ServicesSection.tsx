import { Shield, Zap, Target, Users2 } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "Defesa Pessoal",
      description: "Técnicas práticas e eficazes para situações reais do dia a dia",
      features: ["Autodefesa urbana", "Situações de risco", "Técnicas de escape", "Confiança pessoal"],
      price: "A partir de R$ 120/aula"
    },
    {
      icon: Zap,
      title: "Boxe & Muay Thai",
      description: "Treinamento técnico personalizado em artes marciais de striking",
      features: ["Técnica aprimorada", "Condicionamento físico", "Coordenação motora", "Disciplina mental"],
      price: "A partir de R$ 130/aula"
    },
    {
      icon: Target,
      title: "Condicionamento",
      description: "Preparação física focada em força, resistência e agilidade para combate",
      features: ["Força funcional", "Resistência anaeróbica", "Flexibilidade", "Core stability"],
      price: "A partir de R$ 110/aula"
    },
    {
      icon: Users2,
      title: "Aulas em Dupla",
      description: "Treinamento compartilhado com parceiro(a), amigo ou familiar",
      features: ["Custo dividido", "Motivação extra", "Treino dinâmico", "Interação social"],
      price: "A partir de R$ 80/pessoa"
    }
  ];

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="section-combat">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-impact font-black mb-6">
            <span className="text-combat-gradient">NOSSOS</span>
            <br />
            <span className="text-foreground">TREINOS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modalidades personalizadas para desenvolver sua força, técnica e confiança
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card-combat group hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-combat rounded-xl flex items-center justify-center mb-4 group-hover:animate-pulse-energy">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-combat font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-combat-orange rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 mt-auto">
                <p className="text-lg font-combat font-bold text-combat-orange mb-4">
                  {service.price}
                </p>
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-accent hover:bg-primary text-accent-foreground hover:text-primary-foreground py-3 rounded-lg font-combat font-semibold transition-all duration-300 hover:shadow-combat"
                >
                  Agendar no WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-combat max-w-4xl mx-auto bg-gradient-to-r from-accent to-card">
            <h3 className="text-3xl font-combat font-bold text-foreground mb-4">
              Não encontrou o que procura?
            </h3>
            <p className="text-muted-foreground mb-6">
              Criamos treinos 100% personalizados para seus objetivos específicos. 
              Entre em contato e vamos desenvolver o programa ideal para você!
            </p>
            <button 
              onClick={scrollToContact}
              className="btn-combat"
            >
              Falar com Professor Tiago
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;