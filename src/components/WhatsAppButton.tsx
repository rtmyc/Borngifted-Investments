import { MessageCircle } from "lucide-react";
import type { WhatsAppButtonProps } from "@/types";

const WhatsAppButton = ({ 
  phoneNumber, 
  message = "Hi, I'd like to know more about your services" 
}: WhatsAppButtonProps) => {
  const handleClick = () => {
    const formattedNumber = phoneNumber.replace(/\s+/g, "").replace(/^0/, "263");
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" fill="currentColor" />
      <span className="sr-only">WhatsApp</span>
    </button>
  );
};

export default WhatsAppButton;
