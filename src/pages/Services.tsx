
import { Tractor, Car, BadgeCheck, Leaf, Users, LineChart } from "lucide-react";

const Services = () => {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-r from-honeymark-orange to-honeymark-green py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Honeymark Investments provides quality services through our two trade names:
            Gifted Stud Breeders and Honeymark Taxi and Transport Services.
          </p>
        </div>
      </section>

      {/* Gifted Stud Breeders Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <img 
                src="/lovable-uploads/bbf53e52-60a0-4041-98b1-a460aedaab0e.png" 
                alt="Gifted Stud Breeders" 
                className="h-24"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Gifted Stud Breeders</h2>
              <p className="text-lg text-gray-700">
                We operate on a 125.5-hectare farm in Troutbeck, Nyanga established on the 12th of
                November 2020. We mainly focus on Boer goats, Kalahari Reds, Merino sheep,
                Meat Mater Sheep, local crossbreeds, chickens and piggery.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-honeymark-orange w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <BadgeCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Breed Sales</h3>
              </div>
              <p className="text-gray-700">
                We offer high-quality breeds including Kalahari Bucks, Boer Does, and Boer Goat Studs.
                Our animals are carefully selected and raised to ensure the best genetics.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-honeymark-orange w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Meat Sales</h3>
              </div>
              <p className="text-gray-700">
                We provide quality meat products from our farm to local markets and abroad.
                Our animals are raised in a natural environment, ensuring the best meat quality.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-honeymark-orange w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Consultancy</h3>
              </div>
              <p className="text-gray-700">
                Our team provides expert advice on livestock farming, breed selection, and farm management.
                We share our knowledge to help other farmers succeed.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-honeymark-orange w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <Tractor className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Breeding Training</h3>
              </div>
              <p className="text-gray-700">
                We offer training programs for farmers who want to learn about proper breeding techniques,
                animal husbandry, and sustainable farming practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-2 bg-gradient-to-r from-honeymark-orange via-honeymark-yellow to-honeymark-green"></div>

      {/* Honeymark Taxi Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center mb-12">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <img 
                src="/lovable-uploads/69aeeb1a-6652-4c18-a28c-24889436a45c.png" 
                alt="Honeymark Taxi and Transport" 
                className="h-24"
              />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-4">Honeymark Taxi and Transport Services</h2>
              <p className="text-lg text-gray-700">
                Established on 3 February 2024 to help address the persistent transport challenges 
                faced by everyday Zimbabweans where taxi and e-hailing services have become a safer 
                and more reliable mode of transportation.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-honeymark-green w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Taxi and Transport Services</h3>
              </div>
              <p className="text-gray-700">
                We provide reliable and comfortable taxi services for local transportation.
                Our vehicles are well-maintained and our drivers are professional.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-honeymark-green w-10 h-10 rounded-full flex items-center justify-center mr-4">
                  <LineChart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold">Fleet Management and Consultancy</h3>
              </div>
              <p className="text-gray-700">
                We offer fleet management services and consultancy for businesses and individuals
                looking to establish their own transport services.
              </p>
            </div>
          </div>

          {/* Goals */}
          <div className="mt-16 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Our Transport Goals</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-honeymark-yellow rounded-full p-1 mr-3 mt-1">
                  <BadgeCheck className="h-5 w-5 text-white" />
                </div>
                <p>To achieve a total number of 10 vehicles by the end of 2026 through direct ownership and leasing.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-honeymark-yellow rounded-full p-1 mr-3 mt-1">
                  <BadgeCheck className="h-5 w-5 text-white" />
                </div>
                <p>To become a leading provider of both Taxi and Transport Services within the next 5 years.</p>
              </li>
              <li className="flex items-start">
                <div className="bg-honeymark-yellow rounded-full p-1 mr-3 mt-1">
                  <BadgeCheck className="h-5 w-5 text-white" />
                </div>
                <p>To expand our Taxi and Transport Services into South Africa by end of 2026.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
