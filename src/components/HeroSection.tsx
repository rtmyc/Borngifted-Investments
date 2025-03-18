
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
}

const HeroSection = ({
  title,
  subtitle,
  buttonText,
  buttonLink = "/services",
  imageSrc,
  imageAlt,
  bgColor,
}: HeroSectionProps) => {
  return (
    <section className={`${bgColor} py-16 md:py-24`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
                {subtitle}
              </p>
            )}
            {buttonText && (
              <Link to={buttonLink}>
                <Button 
                  className="bg-white text-honeymark-brown hover:bg-gray-100 font-medium"
                >
                  {buttonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            )}
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-lg shadow-lg max-w-full h-auto object-cover"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
