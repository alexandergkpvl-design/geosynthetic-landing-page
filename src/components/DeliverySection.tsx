import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const DeliverySection = () => {
  return (
    <section id="delivery" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Доставка по всей России</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="border-2 hover:shadow-lg transition-all">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Truck" size={24} className="text-accent" />
              </div>
              <h3 className="font-bold mb-2">Автотранспорт</h3>
              <p className="text-sm text-muted-foreground">Собственный и наемный транспорт</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-all">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Train" size={24} className="text-accent" />
              </div>
              <h3 className="font-bold mb-2">ЖД доставка</h3>
              <p className="text-sm text-muted-foreground">Для крупных партий грузов</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-all">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Package" size={24} className="text-accent" />
              </div>
              <h3 className="font-bold mb-2">ТК и курьер</h3>
              <p className="text-sm text-muted-foreground">Через транспортные компании</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-all">
            <CardContent className="pt-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="Warehouse" size={24} className="text-accent" />
              </div>
              <h3 className="font-bold mb-2">Самовывоз</h3>
              <p className="text-sm text-muted-foreground">С нашего склада</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="border-2 border-accent">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">География поставок</h3>
                  <p className="text-muted-foreground">
                    Работаем со всеми регионами России. Особенно часто поставляем материалы в Москву, 
                    Санкт-Петербург, Казань, Нижний Новгород, Самару, Екатеринбург, Новосибирск и другие города.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
