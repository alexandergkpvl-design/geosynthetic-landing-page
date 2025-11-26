import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, updateComment, clearCart, isCartOpen, setIsCartOpen } = useCart();
  const { toast } = useToast();
  const [step, setStep] = useState<'cart' | 'checkout'>('cart');
  const [customerData, setCustomerData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    comment: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Корзина пуста",
        description: "Добавьте товары в корзину перед оформлением заказа",
        variant: "destructive",
      });
      return;
    }
    setStep('checkout');
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const orderData = {
        customer: customerData,
        items: items.map(item => ({
          name: item.name,
          quantity: item.quantity,
          comment: item.comment || "",
        })),
      };

      const response = await fetch('https://functions.poehali.dev/e055938b-ab1e-4ea7-ab85-ebc4c05b3f1c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: customerData.name,
          phone: customerData.phone,
          email: customerData.email,
          products: items.map(item => `${item.name} (${item.quantity} ед.)${item.comment ? ` - ${item.comment}` : ''}`).join(", "),
          comment: `Адрес доставки: ${customerData.address}\n\n${customerData.comment}`,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Заказ отправлен! 🎉",
          description: "Мы свяжемся с вами в ближайшее время",
        });
        
        if (data.whatsapp_url) {
          window.open(data.whatsapp_url, "_blank");
        }

        clearCart();
        setIsCartOpen(false);
        setStep('cart');
        setCustomerData({
          name: "",
          phone: "",
          email: "",
          address: "",
          comment: "",
        });
      } else {
        throw new Error('Failed to send order');
      }
    } catch (error) {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить заказ. Попробуйте позвонить нам.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsCartOpen(false);
    setStep('cart');
  };

  return (
    <Dialog open={isCartOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {step === 'cart' ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl flex items-center gap-2">
                <Icon name="ShoppingCart" size={24} />
                Корзина ({items.length})
              </DialogTitle>
              <DialogDescription>
                Проверьте товары и перейдите к оформлению заказа
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              {items.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <Icon name="ShoppingCart" size={48} className="mx-auto mb-4 opacity-50" />
                  <p>Корзина пуста</p>
                  <p className="text-sm mt-2">Добавьте товары из каталога</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.name}</h4>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Icon name="Trash2" size={18} />
                      </Button>
                    </div>

                    <div className="flex items-center gap-3">
                      <Label className="text-sm">Количество:</Label>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Icon name="Minus" size={16} />
                        </Button>
                        <Input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-20 text-center"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Icon name="Plus" size={16} />
                        </Button>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor={`comment-${item.id}`} className="text-sm">
                        Комментарий (опционально):
                      </Label>
                      <Input
                        id={`comment-${item.id}`}
                        placeholder="Плотность, размер, особые требования..."
                        value={item.comment || ""}
                        onChange={(e) => updateComment(item.id, e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="flex gap-3 pt-4 border-t">
              <Button
                onClick={handleCheckout}
                className="flex-1 bg-accent hover:bg-accent/90"
                disabled={items.length === 0}
              >
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Оформить заказ
              </Button>
              <Button variant="outline" onClick={handleClose}>
                Продолжить покупки
              </Button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Оформление заказа</DialogTitle>
              <DialogDescription>
                Заполните контактные данные для доставки
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmitOrder} className="space-y-4">
              <div className="border rounded-lg p-4 bg-secondary/30">
                <h4 className="font-semibold mb-2">Ваш заказ:</h4>
                {items.map((item) => (
                  <div key={item.id} className="text-sm py-1">
                    • {item.name} × {item.quantity}
                    {item.comment && <span className="text-muted-foreground"> ({item.comment})</span>}
                  </div>
                ))}
              </div>

              <div>
                <Label htmlFor="name">Имя *</Label>
                <Input
                  id="name"
                  value={customerData.name}
                  onChange={(e) => setCustomerData({ ...customerData, name: e.target.value })}
                  required
                  placeholder="Ваше имя"
                />
              </div>

              <div>
                <Label htmlFor="phone">Телефон *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={customerData.phone}
                  onChange={(e) => setCustomerData({ ...customerData, phone: e.target.value })}
                  required
                  placeholder="+7 (999) 123-45-67"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerData.email}
                  onChange={(e) => setCustomerData({ ...customerData, email: e.target.value })}
                  placeholder="example@mail.ru"
                />
              </div>

              <div>
                <Label htmlFor="address">Адрес доставки *</Label>
                <Input
                  id="address"
                  value={customerData.address}
                  onChange={(e) => setCustomerData({ ...customerData, address: e.target.value })}
                  required
                  placeholder="Город, улица, дом"
                />
              </div>

              <div>
                <Label htmlFor="comment">Комментарий к заказу</Label>
                <Textarea
                  id="comment"
                  value={customerData.comment}
                  onChange={(e) => setCustomerData({ ...customerData, comment: e.target.value })}
                  placeholder="Дополнительные пожелания или вопросы"
                  rows={3}
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep('cart')}
                >
                  <Icon name="ArrowLeft" size={20} className="mr-2" />
                  Назад
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-accent hover:bg-accent/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                      Отправка...
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={20} className="mr-2" />
                      Отправить заказ
                    </>
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default Cart;
