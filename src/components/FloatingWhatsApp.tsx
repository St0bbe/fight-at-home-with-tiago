import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const whatsappNumber = "5511999999999"; // Replace with actual number
  const message = "Olá! Quero agendar uma aula de Personal Fight com Professor Tiago.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 btn-combat !rounded-full !p-4 animate-glow-pulse hover:scale-110 transition-all duration-300 shadow-energy"
      aria-label="Entrar em contato via WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default FloatingWhatsApp;