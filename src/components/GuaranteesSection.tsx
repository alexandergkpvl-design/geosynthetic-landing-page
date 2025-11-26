import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const GuaranteesSection = () => {
  const guarantees = [
    {
      icon: "ShieldCheck",
      title: "Гарантия качества",
      description: "Все материалы сертифицированы и соответствуют ГОСТ",
    },
    {
      icon: "Truck",
      title: "Доставка по России",
      description: "Работаем со всеми транспортными компаниями",
    },
    {
      icon: "BadgePercent",
      title: "Лучшие цены",
      description: "Прямые поставки от производителей без наценок",
    },
    {
      icon: "Headphones",
      title: "Поддержка 24/7",
      description: "Консультации и помощь в подборе материалов",
    },
    {
      icon: "FileCheck",
      title: "Полный пакет документов",
      description: "Договор, счет, накладные, сертификаты",
    },
    {
      icon: "TrendingDown",
      title: "Оптовые скидки",
      description: "Чем больше заказ — тем выгоднее цена",
    },
  ];

  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Почему выбирают нас
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guarantees.map((item, index) => (
            <Card key={index} className="border-2 hover:border-accent transition-all hover:shadow-lg">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} size={32} className="text-accent" />
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
