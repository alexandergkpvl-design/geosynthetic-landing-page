import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const FloatingMaxButton = () => {
  const maxLink = "https://max.horosho.app/79991413600";

  return (
    <Button
      size="lg"
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-2xl rounded-full w-16 h-16 p-0 transition-all hover:scale-110"
      asChild
    >
      <a
        href={maxLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="MAX мессенджер"
      >
        <Icon name="MessageSquare" size={28} />
      </a>
    </Button>
  );
};

export default FloatingMaxButton;
