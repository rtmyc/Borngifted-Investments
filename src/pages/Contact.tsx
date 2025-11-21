
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { COMPANY_INFO, BUSINESS_HOURS } from "@/constants";
import type { ContactInfo } from "@/types";

const Contact = () => {
  const [formData, setFormData] = useState<ContactInfo>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="animate-in fade-in duration-500">
      {/* Header with Animated Gradient */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-honeymark-yellow via-honeymark-orange to-honeymark-green animate-gradient-shift bg-[length:200%_200%]"></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto leading-relaxed">
            Get in touch with us for any inquiries about our services.
          </p>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-16 md:h-20 fill-current text-white" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Reach Us</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-honeymark-orange/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-honeymark-orange" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a 
                      href={`tel:${COMPANY_INFO.phones.primary}`}
                      className="text-gray-700 hover:text-honeymark-orange transition-colors block"
                    >
                      {COMPANY_INFO.phones.formatted.primary}
                    </a>
                    <a 
                      href={`tel:${COMPANY_INFO.phones.secondary}`}
                      className="text-gray-700 hover:text-honeymark-orange transition-colors block"
                    >
                      {COMPANY_INFO.phones.formatted.secondary}
                    </a>
                    <p className="text-gray-600 text-sm mt-1">Contact: Thomas</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-honeymark-green/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-honeymark-green" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a 
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-gray-700 hover:text-honeymark-orange transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-honeymark-yellow/10 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-honeymark-yellow" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Farm Location</h3>
                    <p className="text-gray-700">{COMPANY_INFO.location.address}</p>
                    <p className="text-gray-600 text-sm mt-1">Established on {COMPANY_INFO.location.established}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-xl font-bold mb-4">
                  <Clock className="h-5 w-5 inline mr-2 text-honeymark-green" />
                  Business Hours
                </h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="font-medium">Monday - Friday:</span>
                      <span>{BUSINESS_HOURS.weekday}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Saturday:</span>
                      <span>{BUSINESS_HOURS.saturday}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Sunday:</span>
                      <span>{BUSINESS_HOURS.sunday}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                    rows={5}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-honeymark-orange to-honeymark-green text-white hover:opacity-90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
