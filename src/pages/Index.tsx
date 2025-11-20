
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, Tractor, ArrowRight, Leaf, Award } from "lucide-react";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsSection from "@/components/StatsSection";
import { IMAGES } from "@/constants";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen animate-in fade-in duration-500">
      {/* Modern Hero Section - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-honeymark-orange via-honeymark-yellow to-honeymark-green overflow-hidden animate-in slide-in-from-top duration-700">
        {/* Decorative Shapes */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src={IMAGES.logos.official}
                alt="Honeymark Investments Official Logo" 
                className="h-24 sm:h-32 md:h-40 w-auto drop-shadow-2xl"
                loading="eager"
              />
            </div>
            
            {/* Text Content */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              Honeymark Investments
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-medium px-4">
              Quality Agriculture and Transport Services for Zimbabwe
            </p>
            <p className="text-base sm:text-lg text-white/85 max-w-2xl mx-auto px-4">
              From our 125.5-hectare farm in Troutbeck, Nyanga to reliable transportation across the nation
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 px-4">
              <Link to="/services">
                <Button size="lg" className="w-full sm:w-auto bg-white text-honeymark-green hover:bg-gray-100 font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-xl">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-honeymark-green font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl transition-all duration-300">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="relative">
          <svg className="w-full h-12 sm:h-16 md:h-20 fill-current text-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Our Divisions Section - Simplified for Mobile */}
      <section className="py-12 sm:py-16 md:py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle, #1B5E20 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-3 sm:mb-4">
              Our Business Divisions
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              Two complementary businesses serving Zimbabwe's agricultural and transport needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Gifted Stud Breeders Card */}
            <div className="group relative bg-gradient-to-br from-honeymark-orange to-honeymark-yellow rounded-2xl sm:rounded-3xl p-1 hover:scale-[1.02] transition-all duration-300">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 h-full">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4 sm:mb-6">
                  <div className="bg-gradient-to-br from-honeymark-orange to-honeymark-yellow w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Tractor className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gray-900">
                      Gifted Stud Breeders
                    </h3>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 italic text-center sm:text-left">
                  "From Pasture to Profit: Unlock Your Farming Potential!"
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {["Boer Goats & Kalahari Reds", "Merino & Meat Mater Sheep", "Expert Consultancy", "Breeding Training Programs"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 rounded-full bg-honeymark-orange flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services">
                  <Button className="w-full bg-gradient-to-r from-honeymark-orange to-honeymark-yellow text-white hover:opacity-90 font-semibold py-5 sm:py-6 rounded-xl text-base sm:text-lg">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Honeymark Taxi Card */}
            <div className="group relative bg-gradient-to-br from-honeymark-green to-honeymark-sage rounded-2xl sm:rounded-3xl p-1 hover:scale-[1.02] transition-all duration-300">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 h-full">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4 sm:mb-6">
                  <div className="bg-gradient-to-br from-honeymark-green to-honeymark-sage w-16 h-16 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <Truck className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-gray-900">
                      Honeymark Taxi & Transport
                    </h3>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 italic text-center sm:text-left">
                  "Invest in Comfort – Choose Honeymark for Your Next Ride!"
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {["Reliable Taxi Services", "Well-Maintained Fleet", "Professional Drivers", "Fleet Management Consultancy"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 rounded-full bg-honeymark-green flex-shrink-0"></div>
                      <span className="text-sm sm:text-base text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services">
                  <Button className="w-full bg-gradient-to-r from-honeymark-green to-honeymark-sage text-white hover:opacity-90 font-semibold py-5 sm:py-6 rounded-xl text-base sm:text-lg">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Full-Width CTA - Mobile Optimized */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Background with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-honeymark-green via-honeymark-green/95 to-honeymark-sage z-10"></div>
          <img 
            src="/lovable-uploads/364118eb-f298-4ef6-af21-4ddb78d09b61.png"
            alt="Background"
            className="w-full h-full object-cover opacity-20"
            loading="lazy"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-20">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-4 sm:mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-10 leading-relaxed px-4">
              Whether you need quality livestock for your farm or reliable transportation across Zimbabwe, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto bg-white text-honeymark-green hover:bg-gray-100 font-semibold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-7 rounded-xl shadow-xl">
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent border-2 border-white text-white hover:bg-white hover:text-honeymark-green font-semibold text-base sm:text-lg px-8 sm:px-10 py-5 sm:py-7 rounded-xl transition-all duration-300">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
