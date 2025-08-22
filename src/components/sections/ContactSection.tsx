import { MapPin, Phone, Mail, Clock, Instagram, Youtube } from "lucide-react";

const ContactSection = () => {
  const openWhatsApp = () => {
    const whatsappNumber = "5511999999999";
    const message = "Olá! Quero agendar uma aula de Personal Fight com Professor Tiago.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      info: "(11) 99999-9999",
      description: "Resposta rápida todos os dias",
      action: openWhatsApp
    },
    {
      icon: Mail,
      title: "E-mail",
      info: "contato@professortiago.com",
      description: "Para dúvidas e informações",
      action: () => window.open("mailto:contato@professortiago.com")
    },
    {
      icon: MapPin,
      title: "Área de Atendimento",
      info: "São Paulo - Capital e Grande SP",
      description: "Atendemos em domicílio",
      action: null
    },
    {
      icon: Clock,
      title: "Horários",
      info: "Segunda a Sábado",
      description: "6h às 22h | Domingo: 8h às 18h",
      action: null
    }
  ];

  return (
    <section id="contact" className="section-combat bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-impact font-black mb-6">
            <span className="text-foreground">VAMOS</span>
            <br />
            <span className="text-combat-gradient">TREINAR?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Entre em contato e agende sua primeira aula. Estamos prontos para levar o Personal Fight até você!
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className={`card-combat text-center group ${contact.action ? 'cursor-pointer hover:scale-105' : ''} transition-all duration-300`}
              onClick={contact.action || undefined}
            >
              <div className="w-16 h-16 bg-gradient-combat rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-energy">
                <contact.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl font-combat font-bold text-foreground mb-2">
                {contact.title}
              </h3>
              
              <p className="text-lg font-semibold text-combat-orange mb-2">
                {contact.info}
              </p>
              
              <p className="text-sm text-muted-foreground">
                {contact.description}
              </p>
            </div>
          ))}
        </div>

        {/* Main CTA */}
        <div className="text-center mb-16">
          <div className="card-combat max-w-2xl mx-auto bg-gradient-to-r from-accent to-card border border-combat-red/30">
            <h3 className="text-3xl font-combat font-bold text-foreground mb-4">
              Pronto para começar sua transformação?
            </h3>
            <p className="text-muted-foreground mb-8">
              Clique no botão abaixo e será direcionado diretamente para o WhatsApp com uma mensagem pré-definida. 
              Vamos conversar sobre seus objetivos!
            </p>
            <button
              onClick={openWhatsApp}
              className="btn-combat text-xl px-12 py-5 shadow-energy hover:shadow-combat"
            >
              <Phone size={24} className="mr-3" />
              Agendar no WhatsApp
            </button>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-border pt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-combat font-bold text-foreground mb-4">
              Siga nas Redes Sociais
            </h3>
            <p className="text-muted-foreground">
              Conteúdo exclusivo, dicas de treino e técnicas de combate
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://instagram.com/professor_tiago_fight"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-combat font-semibold hover:scale-105 transition-all duration-300"
            >
              <Instagram size={20} />
              <span>@professor_tiago_fight</span>
            </a>
            <a
              href="https://youtube.com/@professor_tiago_fight"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 bg-red-600 text-white px-6 py-3 rounded-lg font-combat font-semibold hover:scale-105 transition-all duration-300"
            >
              <Youtube size={20} />
              <span>Professor Tiago Fight</span>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-combat rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <span className="font-combat font-bold text-foreground">
                Personal Fight - Professor Tiago
              </span>
            </div>
            
            <div className="text-center md:text-right text-muted-foreground text-sm">
              <p>&copy; 2024 Personal Fight. Todos os direitos reservados.</p>
              <p className="mt-1">Desenvolvendo força, técnica e confiança há mais de 15 anos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;