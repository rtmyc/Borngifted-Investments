import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TESTIMONIALS } from "@/constants";
import type { Testimonial } from "@/types";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="h-full border-2 hover:border-honeymark-orange transition-colors">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="h-5 w-5 text-honeymark-yellow fill-honeymark-yellow"
            />
          ))}
        </div>
        <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
        <div className="border-t pt-4">
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.location}</p>
          <p className="text-xs text-honeymark-green mt-1">{testimonial.service}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-honeymark-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {TESTIMONIALS.map((testimonial) => (
              <CarouselItem
                key={testimonial.id}
                className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <TestimonialCard testimonial={testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-2 mt-8">
            <CarouselPrevious className="relative static left-0 right-0 translate-y-0 bg-white border-honeymark-green text-honeymark-green hover:bg-honeymark-green hover:text-white" />
            <CarouselNext className="relative static left-0 right-0 translate-y-0 bg-white border-honeymark-green text-honeymark-green hover:bg-honeymark-green hover:text-white" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
