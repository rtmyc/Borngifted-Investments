
import { CheckCircle, MapPin, Calendar } from "lucide-react";

const About = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Header */}
      <section className="bg-honeymark-green py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">About Us</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Learn more about Honeymark Investments and our two business divisions.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <img 
              src="/lovable-uploads/69aeeb1a-6652-4c18-a28c-24889436a45c.png" 
              alt="Honeymark Investments Logo" 
              className="h-20 mx-auto mb-6"
            />
            <h2 className="text-3xl font-bold mb-6">Honeymark Investments</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Honeymark Investments is a diversified company operating in the agriculture 
              and transportation sectors in Zimbabwe. We operate under two trade names:
              Gifted Stud Breeders and Honeymark Taxi and Transport Services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            {/* Gifted Stud Breeders */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/364118eb-f298-4ef6-af21-4ddb78d09b61.png" 
                  alt="Gifted Stud Breeders" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src="/lovable-uploads/bbf53e52-60a0-4041-98b1-a460aedaab0e.png" 
                    alt="Gifted Stud Breeders Logo" 
                    className="h-12 mr-4"
                  />
                  <h3 className="text-2xl font-bold">Gifted Stud Breeders</h3>
                </div>
                
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-honeymark-orange mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Located on a 125.5-hectare farm in Troutbeck, Nyanga
                  </p>
                </div>
                
                <div className="flex items-start mb-6">
                  <Calendar className="h-5 w-5 text-honeymark-orange mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Established on the 12th of November 2020
                  </p>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Gifted Stud Breeders mainly focuses on Boer goats, Kalahari Reds, Merino sheep,
                  Meat Mater Sheep, local crossbreeds, chickens and piggery.
                </p>
                
                <p className="text-gray-700">
                  We aim to provide quality breeds and also meat locally and abroad. Our commitment
                  to excellence ensures the best products for our customers.
                </p>
              </div>
            </div>
            
            {/* Honeymark Taxi */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/lovable-uploads/f8c54092-d80d-4c5c-b9ff-0fa11935e81e.png" 
                  alt="Honeymark Taxi and Transport" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <img 
                    src="/lovable-uploads/69aeeb1a-6652-4c18-a28c-24889436a45c.png" 
                    alt="Honeymark Investments Logo" 
                    className="h-12 mr-4"
                  />
                  <h3 className="text-2xl font-bold">Honeymark Taxi and Transport</h3>
                </div>
                
                <div className="flex items-start mb-6">
                  <Calendar className="h-5 w-5 text-honeymark-green mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">
                    Established on 3 February 2024
                  </p>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Honeymark Taxi and Transport Services was established to help address the persistent
                  transport challenges faced by everyday Zimbabweans where taxi and e-hailing services 
                  have become a safer and more reliable mode of transportation.
                </p>
                
                <p className="text-gray-700 mb-6">
                  The goal is to consistently penetrate the market so that the business is able to 
                  acquire more vehicles either through leasing or on a cash basis before the end of 2025.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Our Vision & Goals</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At Honeymark Investments, we strive for excellence in everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Agriculture Goals */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-honeymark-orange">Gifted Stud Breeders</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-honeymark-orange mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Provide high-quality breeding stock to farmers
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-honeymark-orange mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Expand meat production and distribution networks
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-honeymark-orange mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Offer expert consultancy services to new and existing farmers
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-honeymark-orange mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    Develop comprehensive training programs for breeding excellence
                  </p>
                </li>
              </ul>
            </div>
            
            {/* Transport Goals */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-honeymark-green">Honeymark Taxi and Transport</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-honeymark-green mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    To achieve a total number of 10 vehicles by the end of 2026 through direct ownership and leasing.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-honeymark-green mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    To become a leading provider of both Taxi and Transport Services within the next 5 years.
                  </p>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-honeymark-green mr-3 flex-shrink-0" />
                  <p className="text-gray-700">
                    To expand our Taxi and Transport Services into South Africa by end of 2026.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
