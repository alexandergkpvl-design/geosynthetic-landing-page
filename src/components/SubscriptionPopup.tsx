import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";

const SubscriptionPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("hasSeenSubscriptionPopup");
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenSubscriptionPopup", "true");
  };

  const handleSubscribe = () => {
    if (!email && !phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, укажите email или телефон",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Спасибо за подписку! 🎉",
      description: "Мы отправим вам специальное предложение в ближайшее время",
    });

    handleClose();
  };

  const handleTelegramJoin = () => {
    window.open("https://t.me/+tNkgLYPWUm00NDli", "_blank");
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Получите скидку 10%! 🎁
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Подпишитесь на наш канал или оставьте контакты и получите специальное предложение
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <Button 
            size="lg" 
            className="w-full bg-[#0088cc] hover:bg-[#006699] text-white"
            onClick={handleTelegramJoin}
          >
            <Icon name="Send" size={20} className="mr-2" />
            Подписаться на Telegram канал
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Или оставьте контакты
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 999 123-45-67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <Button 
              size="lg" 
              className="w-full"
              onClick={handleSubscribe}
            >
              <Icon name="Gift" size={20} className="mr-2" />
              Получить скидку 10%
            </Button>
          </div>

          <div className="text-center">
            <button
              onClick={handleClose}
              className="text-sm text-muted-foreground hover:text-foreground underline"
            >
              Нет, спасибо
            </button>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex items-start gap-3 text-sm">
            <Icon name="Sparkles" size={20} className="text-accent flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Что вы получите:</p>
              <ul className="text-muted-foreground space-y-1 mt-1">
                <li>✓ Скидка 10% на первый заказ</li>
                <li>✓ Эксклюзивные предложения</li>
                <li>✓ Полезные советы по геосинтетике</li>
              </ul>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionPopup;
