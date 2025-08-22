import { Award, Shield, Target, Users } from "lucide-react";
import professorImage from "@/assets/professor-tiago.jpg";

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "15+ Anos",
      description: "De experiência em artes marciais"
    },
    {
      icon: Shield,
      title: "Certificado",
      description: "Em defesa pessoal e combate"
    },
    {
      icon: Target,
      title: "Metodologia",
      description: "Personalizada e eficaz"
    },
    {
      icon: Users,
      title: "200+ Alunos",
      description: "Transformados e fortalecidos"
    }
  ];

  return (
    <section id="about" className="section-combat bg-gradient-power">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl md:text-6xl font-impact font-black mb-6 text-combat-gradient">
                PROFESSOR
                <br />
                <span className="text-foreground">TIAGO</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Especialista em artes marciais com mais de 15 anos de experiência, 
                o Professor Tiago revoluciona o treinamento de combate levando a 
                excelência até você.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-combat font-bold text-combat-orange mb-3">
                  Formações & Especialidades
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-combat-red rounded-full mr-3"></div>
                    Faixa Preta em Karatê Kyokushin
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-combat-red rounded-full mr-3"></div>
                    Instrutor Certificado de Muay Thai
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-combat-red rounded-full mr-3"></div>
                    Especialista em Defesa Pessoal Urbana
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-combat-red rounded-full mr-3"></div>
                    Treinador de Condicionamento para Combate
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-combat font-bold text-combat-orange mb-3">
                  Diferenciais
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <Shield className="text-combat-red mt-1 flex-shrink-0" size={20} />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Atendimento Personalizado:</span> 
                      Metodologia adaptada ao seu nível e objetivos
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Target className="text-combat-red mt-1 flex-shrink-0" size={20} />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Flexibilidade Total:</span> 
                      Treinos no horário e local que funciona para você
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Award className="text-combat-red mt-1 flex-shrink-0" size={20} />
                    <p className="text-muted-foreground">
                      <span className="font-semibold text-foreground">Resultados Comprovados:</span> 
                      Desenvolvimento de força, técnica e confiança
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="card-combat !p-4 text-center">
                  <achievement.icon className="mx-auto mb-3 text-combat-orange" size={32} />
                  <h4 className="font-combat font-bold text-foreground mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={professorImage}
                alt="Professor Tiago em posição de combate"
                className="w-full h-[600px] object-cover rounded-2xl shadow-elevated"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-2xl"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-combat-red/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-combat-orange/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;