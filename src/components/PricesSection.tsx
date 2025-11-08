import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PricesSection = () => {
  return (
    <section id="prices" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">Цены и заказ</h2>
        <p className="text-center text-xl text-muted-foreground mb-16 max-w-3xl mx-auto">
          Цены зависят от объема и типа материала. Предоставим точный расчет после обсуждения деталей проекта.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MessageSquare" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Консультация</h3>
              <p className="text-muted-foreground mb-4">
                Обсудим ваши задачи и требования к материалам
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-all">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Calculator" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. Расчет стоимости</h3>
              <p className="text-muted-foreground mb-4">
                Подготовим коммерческое предложение с точными ценами
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-all">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Package" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Доставка</h3>
              <p className="text-muted-foreground mb-4">
                Организуем отгрузку и доставку в удобное время
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12 space-y-4">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8" asChild>
            <a href="https://wa.me/79991416580">Запросить расчет</a>
          </Button>
          
          <div>
            <Button size="lg" className="bg-[#0088cc] hover:bg-[#006699] text-white" asChild>
              <a href="https://t.me/+tNkgLYPWUm00NDli" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={20} className="mr-2" />
                Наш канал в Telegram
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricesSection;