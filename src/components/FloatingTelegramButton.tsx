import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import OrderForm from "./OrderForm";

const FloatingTelegramButton = () => {
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        <Button
          size="lg"
          className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-2xl rounded-full w-16 h-16 p-0 transition-all hover:scale-110 animate-pulse"
          onClick={() => setIsOrderFormOpen(true)}
        >
          <Icon name="ShoppingCart" size={28} />
        </Button>

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
        

      </div>

      <OrderForm isOpen={isOrderFormOpen} onClose={() => setIsOrderFormOpen(false)} />
    </>
  );
};

export default FloatingTelegramButton;