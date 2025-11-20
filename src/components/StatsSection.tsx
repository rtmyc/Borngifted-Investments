import { TrendingUp, Users, Award, MapPin } from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const stats = [
  {
    icon: <MapPin className="h-8 w-8" />,
    number: "125.5",
    label: "Hectares",
    suffix: "+",
    color: "bg-honeymark-green",
  },
  {
    icon: <Award className="h-8 w-8" />,
    number: "5",
    label: "Years Experience",
    suffix: "+",
    color: "bg-honeymark-orange",
  },
  {
    icon: <Users className="h-8 w-8" />,
    number: "2",
    label: "Business Divisions",
    suffix: "",
    color: "bg-honeymark-yellow",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    number: "10",
    label: "Target Fleet Size",
    suffix: "",
    color: "bg-honeymark-sage",
  },
];

const StatCard = ({ stat }: { stat: typeof stats[0] }) => {
  const { count, elementRef } = useCountUp({
    end: parseFloat(stat.number),
    duration: 2500,
    decimals: stat.number.includes(".") ? 1 : 0,
  });

  return (
    <div
      ref={elementRef}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
    >
      <div className={`${stat.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
        {stat.icon}
      </div>
      <div className="text-center">
        <p className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-1">
          {count}
          <span className="text-honeymark-orange">{stat.suffix}</span>
        </p>
        <p className="text-sm md:text-base text-gray-600 font-medium">
          {stat.label}
        </p>
      </div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-honeymark-cream to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-honeymark-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-honeymark-green rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building sustainable agriculture and reliable transport solutions for Zimbabwe
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
