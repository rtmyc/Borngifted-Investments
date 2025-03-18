
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  bgColor: string;
  features?: string[];
}

const ServiceCard = ({
  title,
  icon,
  description,
  bgColor,
  features,
}: ServiceCardProps) => {
  return (
    <div className={`rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 ${bgColor}`}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-3 text-white">{icon}</div>
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
        <p className="text-white/90 mb-4">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-white mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-white/90">{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
