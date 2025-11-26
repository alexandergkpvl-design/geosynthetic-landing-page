import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";

const FloatingCartButton = () => {
  const { getTotalItems, openCart } = useCart();
  const totalItems = getTotalItems();

  if (totalItems === 0) return null;

  return (
    <Button
      onClick={openCart}
      size="lg"
      className="fixed bottom-[88px] right-6 z-50 rounded-full w-16 h-16 shadow-lg bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 animate-bounce"
    >
      <div className="relative">
        <Icon name="ShoppingCart" size={24} />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {totalItems}
        </span>
      </div>
    </Button>
  );
};

export default FloatingCartButton;