import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FloatingTelegramButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button
        size="lg"
        className="bg-[#0088cc] hover:bg-[#006699] text-white shadow-lg rounded-full w-14 h-14 p-0 transition-all hover:scale-110"
        asChild
      >
        <a
          href="https://t.me/+tNkgLYPWUm00NDli"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram канал"
        >
          <Icon name="Send" size={24} />
        </a>
      </Button>
      
      <Button
        size="lg"
        className="bg-[#25D366] hover:bg-[#1da851] text-white shadow-lg rounded-full w-14 h-14 p-0 transition-all hover:scale-110"
        asChild
      >
        <a
          href="https://wa.me/79991416580"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <Icon name="MessageCircle" size={24} />
        </a>
      </Button>
    </div>
  );
};

export default FloatingTelegramButton;
