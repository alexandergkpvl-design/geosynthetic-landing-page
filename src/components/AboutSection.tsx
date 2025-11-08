import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">О компании</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 mb-8">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed mb-6">
                <span className="font-bold text-accent">ГК "ПОВОЛЖЬЕ"</span> — надежный поставщик геосинтетических материалов 
                с многолетним опытом работы на российском рынке. Мы специализируемся на поставках 
                геотекстиля, геомембран, георешеток и других материалов для строительства и благоустройства.
              </p>
              <p className="text-lg leading-relaxed">
                Наша миссия — обеспечить строительные компании и частных заказчиков качественными 
                материалами по конкурентным ценам. Мы работаем напрямую с ведущими производителями, 
                что позволяет нам предлагать лучшие условия на рынке.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 hover:shadow-lg transition-all text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <p className="text-muted-foreground">Довольных клиентов</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-accent mb-2">10+</div>
                <p className="text-muted-foreground">Лет на рынке</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all text-center">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-accent mb-2">24ч</div>
                <p className="text-muted-foreground">Время отгрузки</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-2 border-accent mt-8">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Award" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Наши принципы</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Только сертифицированная продукция</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Честные цены без скрытых комиссий</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Индивидуальный подход к каждому клиенту</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                      <span>Техническая поддержка и консультации</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
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

export default AboutSection;