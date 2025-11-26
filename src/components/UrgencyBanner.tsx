import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const UrgencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 px-4 relative">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm md:text-base font-semibold">
        <Icon name="Zap" size={20} className="animate-pulse" />
        <span>🔥 Скидка 15% на первый заказ! Успейте до конца недели!</span>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70"
          aria-label="Закрыть"
        >
          <Icon name="X" size={20} />
        </button>
      </div>
    </div>
  );
};

export default UrgencyBanner;
