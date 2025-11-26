import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import OrderForm from "./OrderForm";

const FloatingOrderButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Button
        size="lg"
        className="fixed bottom-6 right-6 z-40 rounded-full w-16 h-16 shadow-2xl bg-accent hover:bg-accent/90"
        onClick={() => setIsFormOpen(true)}
      >
        <Icon name="ShoppingCart" size={28} />
      </Button>

      <OrderForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default FloatingOrderButton;