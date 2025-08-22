import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marina Silva",
      role: "Executiva",
      content: "O Professor Tiago transformou minha relação com o exercício. Os treinos de defesa pessoal me deram confiança que eu nunca imaginei ter. Além disso, a comodidade de treinar em casa é incomparável!",
      rating: 5,
      highlight: "Confiança e praticidade"
    },
    {
      name: "Carlos Eduardo",
      role: "Empresário", 
      content: "Excelente profissional! A metodologia personalizada fez toda diferença. Em 6 meses desenvolvendo técnicas de Muay Thai, meu condicionamento físico e disciplina mental melhoraram drasticamente.",
      rating: 5,
      highlight: "Resultados em 6 meses"
    },
    {
      name: "Ana & Roberto",
      role: "Casal",
      content: "Decidimos treinar juntos e foi a melhor decisão! O Tiago adapta os exercícios para nossos diferentes níveis. É motivador ter aulas em dupla e ainda economizamos dividindo o custo.",
      rating: 5,
      highlight: "Treino em casal"
    },
    {
      name: "Pedro Henrique",
      role: "Estudante",
      content: "Sempre tive receio de academias, mas com o Personal Fight me sinto totalmente à vontade. As técnicas de boxe que aprendi melhoraram minha autoestima e disciplina nos estudos.",
      rating: 5,
      highlight: "Superou receios"
    },
    {
      name: "Juliana Costa",
      role: "Médica",
      content: "Como profissional da saúde, valorizo muito a abordagem segura e técnica do Professor Tiago. Os treinos são intensos mas respeitam meus limites. Recomendo sem hesitação!",
      rating: 5,
      highlight: "Abordagem profissional"
    }
  ];

  return (
    <section id="testimonials" className="section-combat bg-gradient-power">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-impact font-black mb-6">
            <span className="text-combat-gradient">TRANSFORMAÇÕES</span>
            <br />
            <span className="text-foreground">REAIS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Histórias de alunos que descobriram sua força interior
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card-combat hover:scale-105 transition-all duration-300 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-10">
                <Quote size={48} className="text-combat-orange" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className="text-combat-orange fill-current" 
                  />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground mb-6 relative z-10 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-combat font-bold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-combat-orange/20 text-combat-orange px-3 py-1 rounded-full text-xs font-semibold">
                      {testimonial.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-impact font-black text-combat-gradient mb-2">
              200+
            </div>
            <p className="text-muted-foreground font-combat">Alunos Transformados</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-impact font-black text-combat-gradient mb-2">
              15+
            </div>
            <p className="text-muted-foreground font-combat">Anos de Experiência</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-impact font-black text-combat-gradient mb-2">
              98%
            </div>
            <p className="text-muted-foreground font-combat">Satisfação dos Clientes</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-impact font-black text-combat-gradient mb-2">
              24h
            </div>
            <p className="text-muted-foreground font-combat">Flexibilidade de Horários</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;