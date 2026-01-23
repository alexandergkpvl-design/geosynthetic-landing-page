import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";

const ContactsSection = () => {
  const { openCart } = useCart();

  return (
    <section id="contacts" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Контакты</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Телефоны</h3>
                  <a href="tel:+79991413600" className="text-lg text-accent hover:underline block">
                    +7 (999) 141-36-00
                  </a>
                  <a href="tel:+79990741177" className="text-lg text-accent hover:underline block">
                    +7 (999) 074-11-77
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Звоните в любое время</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <a href="mailto:TD.Povolzhje@yandex.ru" className="text-lg text-accent hover:underline">
                    TD.Povolzhje@yandex.ru
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Send" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Telegram</h3>
                  <a href="https://t.me/+79991413600" className="text-lg text-accent hover:underline">
                    +7 (999) 141-36-00
                  </a>
                  <p className="text-sm text-muted-foreground mt-1">Быстрая связь в мессенджере</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">Готовы сделать заказ?</h3>
              <p className="text-muted-foreground mb-6">
                Заполните форму заказа или свяжитесь с нами удобным способом, 
                и наши специалисты проконсультируют вас по всем вопросам.
              </p>
              
              <div className="space-y-3">
                <Button 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90"
                  onClick={openCart}
                >
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Заказать товары
                </Button>

                <Button size="lg" variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                  <a href="tel:+79991413600">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (999) 141-36-00
                  </a>
                </Button>
                
                <Button size="lg" variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                  <a href="tel:+79990741177">
                    <Icon name="Phone" size={20} className="mr-2" />
                    +7 (999) 074-11-77
                  </a>
                </Button>
                
                <Button size="lg" variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                  <a href="mailto:TD.Povolzhje@yandex.ru">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Отправить email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center space-y-8">
          <Card className="border-2 max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-3 mb-3">
                <Icon name="Clock" size={24} className="text-accent" />
                <h3 className="text-xl font-bold">Режим работы</h3>
              </div>
              <p className="text-muted-foreground">
                Понедельник - Пятница: 09:00 - 16:00 по Москве<br />
                Суббота - Воскресенье: по договоренности
              </p>
            </CardContent>
          </Card>
          
          <Button size="lg" className="bg-[#0088cc] hover:bg-[#006699] text-white" asChild>
            <a href="https://t.me/+tNkgLYPWUm00NDli" target="_blank" rel="noopener noreferrer">
              <Icon name="Send" size={20} className="mr-2" />
              Наш канал в Telegram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;