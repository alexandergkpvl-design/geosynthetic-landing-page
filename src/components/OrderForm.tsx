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
import { Checkbox } from "@/components/ui/checkbox";
import Icon from "@/components/ui/icon";

interface OrderFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderForm = ({ isOpen, onClose }: OrderFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
    selectedProducts: [] as string[],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const products = [
    "Геотекстиль",
    "Геомембрана",
    "Георешетка",
    "Геосетка",
    "Дренажные материалы",
    "Геокомпозиты",
    "Габионы",
    "Сварка Мембраны",
    "Сетка против БПЛА",
    "Композитные анкеры",
    "Резиновая крошка",
    "Геоматы",
  ];

  const handleProductToggle = (product: string) => {
    setFormData((prev) => ({
      ...prev,
      selectedProducts: prev.selectedProducts.includes(product)
        ? prev.selectedProducts.filter((p) => p !== product)
        : [...prev.selectedProducts, product],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("https://functions.poehali.dev/e055938b-ab1e-4ea7-ab85-ebc4c05b3f1c", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          products: formData.selectedProducts.join(", "),
          comment: formData.comment,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus("success");
        if (data.whatsapp_url) {
          window.open(data.whatsapp_url, "_blank");
        }
        setTimeout(() => {
          onClose();
          setFormData({
            name: "",
            phone: "",
            email: "",
            comment: "",
            selectedProducts: [],
          });
          setSubmitStatus("idle");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Order submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Оформить заказ</DialogTitle>
          <DialogDescription>
            Заполните форму, и мы свяжемся с вами в ближайшее время
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Имя *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                placeholder="Ваше имя"
              />
            </div>

            <div>
              <Label htmlFor="phone">Телефон *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                placeholder="+7 (999) 123-45-67"
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="example@mail.ru"
              />
            </div>

            <div>
              <Label className="mb-3 block">Выберите товары *</Label>
              <div className="grid grid-cols-2 gap-3 max-h-60 overflow-y-auto border rounded-lg p-4">
                {products.map((product) => (
                  <div key={product} className="flex items-center space-x-2">
                    <Checkbox
                      id={product}
                      checked={formData.selectedProducts.includes(product)}
                      onCheckedChange={() => handleProductToggle(product)}
                    />
                    <Label htmlFor={product} className="cursor-pointer text-sm">
                      {product}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label htmlFor="comment">Комментарий</Label>
              <Textarea
                id="comment"
                value={formData.comment}
                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                placeholder="Укажите количество, адрес доставки и другие пожелания"
                rows={4}
              />
            </div>
          </div>

          {submitStatus === "success" && (
            <div className="flex items-center gap-2 p-4 bg-green-50 text-green-800 rounded-lg">
              <Icon name="CheckCircle" size={20} />
              <span>Заявка успешно отправлена! Открываем WhatsApp...</span>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="flex items-center gap-2 p-4 bg-red-50 text-red-800 rounded-lg">
              <Icon name="XCircle" size={20} />
              <span>Ошибка отправки. Попробуйте позвонить по телефону.</span>
            </div>
          )}

          <div className="flex gap-3">
            <Button
              type="submit"
              className="flex-1 bg-accent hover:bg-accent/90"
              disabled={isSubmitting || formData.selectedProducts.length === 0}
            >
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" size={20} className="mr-2 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </>
              )}
            </Button>
            <Button type="button" variant="outline" onClick={onClose}>
              Отмена
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderForm;
