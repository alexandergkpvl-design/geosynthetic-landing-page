import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наши преимущества</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Award" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Высокое качество</h3>
              <p className="text-muted-foreground">
                Работаем только с проверенными производителями. Все материалы сертифицированы.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="TrendingDown" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Конкурентные цены</h3>
              <p className="text-muted-foreground">
                Прямые поставки от производителей без посредников. Гибкая система скидок.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Truck" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Быстрая отгрузка</h3>
              <p className="text-muted-foreground">
                Собственный склад. Отправка в течение 24 часов по всей территории РФ.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Users" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Экспертная поддержка</h3>
              <p className="text-muted-foreground">
                Консультации специалистов. Помощь в подборе материалов под ваш проект.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
