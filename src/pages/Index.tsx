
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, Tractor, ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Honeymark Investments"
        subtitle="Quality Agriculture and Transport Services for Zimbabwe"
        buttonText="Explore Our Services"
        imageSrc="/lovable-uploads/f8c54092-d80d-4c5c-b9ff-0fa11935e81e.png"
        imageAlt="Honeymark Investments"
        bgColor="bg-honeymark-orange"
      />

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Welcome to Honeymark Investments</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-10">
            We operate under two trade names - Gifted Stud Breeders for quality livestock 
            farming and Honeymark Taxi and Transport Services for reliable transportation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {/* Gifted Stud Breeders */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="/lovable-uploads/bbf53e52-60a0-4041-98b1-a460aedaab0e.png" 
                alt="Gifted Stud Breeders" 
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-3">Gifted Stud Breeders</h3>
              <p className="text-gray-700 mb-5">
                "From Pasture to Profit: Unlock Your Farming Potential with Gifted Stud Breeders!"
              </p>
              <Link to="/services">
                <Button variant="outline" className="border-honeymark-orange text-honeymark-orange hover:bg-honeymark-orange hover:text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            {/* Honeymark Taxi */}
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <img 
                src="/lovable-uploads/69aeeb1a-6652-4c18-a28c-24889436a45c.png" 
                alt="Honeymark Taxi and Transport" 
                className="h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-3">Honeymark Taxi & Transport</h3>
              <p className="text-gray-700 mb-5">
                "Invest in Comfort – Choose Honeymark for Your Next Ride!"
              </p>
              <Link to="/services">
                <Button variant="outline" className="border-honeymark-green text-honeymark-green hover:bg-honeymark-green hover:text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We provide quality services in both agriculture and transportation sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              title="Breeding & Livestock"
              icon={<Tractor size={24} />}
              description="Quality breeds of Boer goats, Kalahari Reds, Merino sheep, and more."
              bgColor="bg-honeymark-orange"
              features={[
                "Breed Sales",
                "Meat Sales",
                "Consultancy",
                "Breeding Training"
              ]}
            />
            
            <ServiceCard
              title="Taxi Services"
              icon={<Truck size={24} />}
              description="Reliable and comfortable transportation services in Zimbabwe."
              bgColor="bg-honeymark-green"
              features={[
                "Taxi and Transport Services",
                "Fleet Management",
                "Consultancy"
              ]}
            />
            
            <div className="flex flex-col justify-center items-center p-8 bg-white rounded-lg shadow-md border border-gray-200">
              <h3 className="text-xl font-bold mb-4 text-center">Need Our Services?</h3>
              <p className="text-gray-700 mb-6 text-center">
                Contact us today to learn more about how we can assist you.
              </p>
              <Link to="/contact">
                <Button className="bg-honeymark-yellow text-white hover:bg-yellow-600">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-honeymark-green">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Whether you need quality livestock or reliable transportation, we're here to help.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-honeymark-green hover:bg-gray-100">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
