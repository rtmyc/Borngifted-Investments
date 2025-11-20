import { Tractor, Car, BadgeCheck, Leaf, Users, LineChart, CheckCircle2 } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { IMAGES } from "@/constants";

const giftedStudImages = [
  "https://images.unsplash.com/photo-1570824104453-508955ab713e?q=80&w=1000", // Goat
  "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?q=80&w=1000", // Sheep 
  "https://images.unsplash.com/photo-1567201080580-bfcc97dae346?q=80&w=1000", // Farm
  "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=1000", // Agricultural landscape
];

const transportImages = [
  "https://images.unsplash.com/photo-1590009617786-6d054a2a3c7c?q=80&w=1000", // Taxi
  "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000", // Transport
  "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1000", // Driving
  "https://images.unsplash.com/photo-1511886929837-354d654373b3?q=80&w=1000", // Car lights
];

const ImageGallery = ({ images, title }: { images: string[], title: string }) => {
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-heading font-bold mb-6 text-center">{title}</h3>
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((src, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-2">
                <div className="overflow-hidden rounded-2xl border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <AspectRatio ratio={4/3} className="bg-gray-100">
                    <img
                      src={src}
                      alt={`${title} image ${index + 1}`}
                      className="h-full w-full object-cover transition-all group-hover:scale-110 duration-500"
                      loading="lazy"
                    />
                  </AspectRatio>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-3 mt-6">
          <CarouselPrevious className="relative static left-0 right-0 translate-y-0 bg-white border-2 border-honeymark-orange text-honeymark-orange hover:bg-honeymark-orange hover:text-white transition-all duration-300" />
          <CarouselNext className="relative static left-0 right-0 translate-y-0 bg-white border-2 border-honeymark-orange text-honeymark-orange hover:bg-honeymark-orange hover:text-white transition-all duration-300" />
        </div>
      </Carousel>
    </div>
  );
};

const Services = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Modern Header with Gradient */}
      <section className="relative bg-gradient-to-br from-honeymark-orange via-honeymark-yellow to-honeymark-green py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
            Quality services through our two trade names: Gifted Stud Breeders and Honeymark Taxi & Transport Services.
          </p>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 md:h-20 fill-current text-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Gifted Stud Breeders Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-honeymark-orange to-honeymark-yellow rounded-3xl blur-2xl opacity-20"></div>
                <img 
                  src={IMAGES.logos.official}
                  alt="Gifted Stud Breeders" 
                  className="relative h-40 md:h-48 w-auto drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
                Gifted Stud Breeders
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Operating on a <span className="font-bold text-honeymark-orange">125.5-hectare farm</span> in Troutbeck, Nyanga since November 2020. We specialize in Boer goats, Kalahari Reds, Merino sheep, Meat Mater Sheep, local crossbreeds, chickens, and piggery.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Service Cards */}
            {[
              {
                icon: <BadgeCheck className="h-8 w-8" />,
                title: "Breed Sales",
                description: "High-quality breeds including Kalahari Bucks, Boer Does, and Boer Goat Studs. Our animals are carefully selected and raised to ensure the best genetics for your farming needs.",
                color: "honeymark-orange"
              },
              {
                icon: <Leaf className="h-8 w-8" />,
                title: "Meat Sales",
                description: "Quality meat products from our farm to local markets and abroad. Our animals are raised in a natural environment, ensuring the best meat quality and taste.",
                color: "honeymark-green"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Consultancy",
                description: "Expert advice on livestock farming, breed selection, and farm management. We share our knowledge and experience to help other farmers succeed and grow their operations.",
                color: "honeymark-yellow"
              },
              {
                icon: <Tractor className="h-8 w-8" />,
                title: "Breeding Training",
                description: "Comprehensive training programs for farmers who want to learn about proper breeding techniques, animal husbandry, and sustainable farming practices for long-term success.",
                color: "honeymark-sage"
              }
            ].map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-honeymark-orange">
                <div className={`bg-${service.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Image Gallery for Gifted Stud Breeders */}
          <ImageGallery 
            images={giftedStudImages} 
            title="Gifted Stud Breeders Gallery" 
          />
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="h-3 bg-gradient-to-r from-honeymark-orange via-honeymark-yellow to-honeymark-green"></div>

      {/* Honeymark Taxi Services */}
      <section className="py-20 bg-gradient-to-br from-honeymark-cream to-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-honeymark-green to-honeymark-sage rounded-3xl blur-2xl opacity-20"></div>
                <img 
                  src={IMAGES.logos.honeymark}
                  alt="Honeymark Taxi and Transport" 
                  className="relative h-40 md:h-48 w-auto drop-shadow-2xl"
                />
              </div>
            </div>
            <div className="lg:w-2/3 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
                Honeymark Taxi and Transport Services
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Established on <span className="font-bold text-honeymark-green">3 February 2024</span> to address the persistent transport challenges faced by everyday Zimbabweans, providing safer and more reliable taxi and e-hailing services.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Service Cards */}
            {[
              {
                icon: <Car className="h-8 w-8" />,
                title: "Taxi and Transport Services",
                description: "Reliable and comfortable taxi services for local transportation. Our vehicles are well-maintained and our drivers are professional, ensuring your safety and comfort throughout your journey.",
                color: "honeymark-green"
              },
              {
                icon: <LineChart className="h-8 w-8" />,
                title: "Fleet Management & Consultancy",
                description: "Comprehensive fleet management services and consultancy for businesses and individuals looking to establish their own transport services. We share our expertise to help you succeed.",
                color: "honeymark-sage"
              }
            ].map((service, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-honeymark-green">
                <div className={`bg-${service.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-heading font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Image Gallery for Transport */}
          <ImageGallery 
            images={transportImages} 
            title="Honeymark Taxi and Transport Gallery" 
          />
        </div>
      </section>
    </div>
  );
};

export default Services;
