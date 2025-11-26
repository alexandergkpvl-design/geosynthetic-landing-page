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
  const [timeLeft, setTimeLeft] = useState(600);
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

  useEffect(() => {
    if (!isOpen || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isOpen, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("hasSeenSubscriptionPopup", "true");
  };

  const handleSubscribe = async () => {
    if (!email && !phone) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, укажите email или телефон",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch('https://functions.poehali.dev/c7b3fd3b-995d-4a34-bc1f-211ee5a32ff1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, phone }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Спасибо за подписку! 🎉",
          description: "Мы отправим вам специальное предложение в ближайшее время",
        });
        handleClose();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заявку. Попробуйте позже или свяжитесь с нами напрямую.",
        variant: "destructive",
      });
    }
  };

  const handleTelegramJoin = () => {
    window.open("https://t.me/+tNkgLYPWUm00NDli", "_blank");
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="text-center mb-2">
            <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-semibold">
              Осталось {formatTime(timeLeft)} ⏰
            </div>
          </div>
          <DialogTitle className="text-2xl font-bold text-center">
            Скидка 10% на первый заказ! 🎁
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Подпишитесь сейчас и получите специальное предложение
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
          <div className="grid grid-cols-3 gap-3 text-center text-sm">
            <div>
              <div className="text-2xl font-bold text-accent">500+</div>
              <div className="text-muted-foreground">клиентов</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">10%</div>
              <div className="text-muted-foreground">скидка</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">24ч</div>
              <div className="text-muted-foreground">доставка</div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SubscriptionPopup;