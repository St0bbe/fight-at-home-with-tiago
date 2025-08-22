import { Play, ExternalLink } from "lucide-react";
import homeTrainingImage from "@/assets/home-training.jpg";

const GallerySection = () => {
  // Mock gallery items - in a real app, these would come from a CMS or API
  const galleryItems = [
    {
      type: "image",
      src: homeTrainingImage,
      alt: "Treino de Personal Fight em casa",
      title: "Treino Domiciliar"
    },
    {
      type: "video",
      src: homeTrainingImage, // Using same image as placeholder for video thumbnail
      alt: "Vídeo demonstrativo de técnicas",
      title: "Técnicas de Defesa"
    },
    {
      type: "image", 
      src: homeTrainingImage,
      alt: "Equipamentos de treino portáteis",
      title: "Equipamentos Profissionais"
    },
    {
      type: "image",
      src: homeTrainingImage,
      alt: "Aluno praticando Muay Thai",
      title: "Muay Thai Personalizado"
    },
    {
      type: "video",
      src: homeTrainingImage,
      alt: "Condicionamento físico para combate", 
      title: "Condicionamento"
    },
    {
      type: "image",
      src: homeTrainingImage,
      alt: "Treino em dupla",
      title: "Aulas em Dupla"
    }
  ];

  return (
    <section id="gallery" className="section-combat bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-impact font-black mb-6">
            <span className="text-foreground">TREINOS</span>
            <br />
            <span className="text-combat-gradient">EM AÇÃO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja como funciona na prática o Personal Fight em casa
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-xl bg-accent"
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Play button for videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-combat-red/90 rounded-full flex items-center justify-center group-hover:bg-combat-red group-hover:scale-110 transition-all duration-300 shadow-energy">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                )}

                {/* External link icon for images */}
                {item.type === "image" && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-background/80 rounded-full flex items-center justify-center">
                      <ExternalLink size={16} className="text-foreground" />
                    </div>
                  </div>
                )}
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-combat font-bold text-white text-lg drop-shadow-lg">
                  {item.title}
                </h3>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-combat-orange transition-all duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="card-combat max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-combat font-bold text-foreground mb-4">
              Quer ver mais conteúdo?
            </h3>
            <p className="text-muted-foreground mb-6">
              Siga nossas redes sociais para dicas diárias, técnicas exclusivas e muito mais conteúdo sobre Personal Fight!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com/professor_tiago_fight"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg font-combat font-semibold transition-all duration-300 hover:scale-105"
              >
                <span>📱</span>
                <span>Instagram</span>
              </a>
              <a
                href="https://youtube.com/@professor_tiago_fight"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg font-combat font-semibold transition-all duration-300 hover:scale-105"
              >
                <span>▶️</span>
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;