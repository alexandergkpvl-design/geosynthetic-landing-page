import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const Index = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-primary/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="https://geosynthetic-landing-page--preview.poehali.dev/" className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity">
            <div className="text-xs font-semibold text-primary-foreground border-b-2 border-accent pb-0.5">
              ГРУППА КОМПАНИЙ "ПОВОЛЖЬЕ"
            </div>
            <img src="https://cdn.poehali.dev/files/4c65673f-a700-4b83-819a-38c724187734.png" alt="ГК ПОВОЛЖЬЕ" className="h-10" />
          </a>
          <nav className="hidden md:flex gap-6">
            <a href="#advantages" className="text-primary-foreground hover:text-accent transition-colors">Преимущества</a>
            <a href="#products" className="text-primary-foreground hover:text-accent transition-colors">Продукция</a>
            <a href="#prices" className="text-primary-foreground hover:text-accent transition-colors">Цены</a>
            <a href="#delivery" className="text-primary-foreground hover:text-accent transition-colors">Доставка</a>
            <a href="#about" className="text-primary-foreground hover:text-accent transition-colors">О компании</a>
            <a href="#contacts" className="text-primary-foreground hover:text-accent transition-colors">Контакты</a>
          </nav>
          <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
            <a href="https://wa.me/79991416580" target="_blank" rel="noopener noreferrer">ONLINE</a>
          </Button>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center pt-20">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/3e6b5e2d-7288-4a49-b42a-c8c3147be8a9.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
              Поставки геосинтетики по всей России
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8">
              Качественные материалы, конкурентные цены и быстрая отгрузка в любую точку РФ
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8" asChild>
                <a href="tel:+79991416580">Получить консультацию</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

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

      <section id="products" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наша продукция</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Геотекстиль", 
                desc: "Нетканые и тканые материалы различной плотности", 
                icon: "Layers",
                images: [
                  "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/75e39f14-0046-4909-b2a9-4d69bef84f5f.jpg"
                ]
              },
              { 
                name: "Геомембрана", 
                desc: "HDPE, LDPE мембраны для гидроизоляции", 
                icon: "Shield",
                images: [
                  "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/288927b8-d4ad-444b-b941-8feee9e78c82.jpg"
                ]
              },
              { 
                name: "Георешетка", 
                desc: "Для укрепления грунтов и откосов", 
                icon: "Grid3x3",
                images: [
                  "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/574edbde-44f5-4d1a-a7f6-230dafe2aea7.jpg"
                ]
              },
              { 
                name: "Геосетка", 
                desc: "Армирование дорожных покрытий", 
                icon: "Network",
                images: [
                  "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/5950c368-2a02-4ccb-a3ab-05179d1b6154.jpg"
                ]
              },
              { 
                name: "Дренажные материалы", 
                desc: "Дренажные маты и композиты", 
                icon: "Droplets",
                images: [
                  "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/db73083e-07a0-42ed-9f8b-2d15b88b2d20.jpg"
                ]
              },
              { 
                name: "Геокомпозиты", 
                desc: "Многофункциональные материалы", 
                icon: "Box",
                images: [
                  "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/9a501c15-4476-4834-bd68-268bdf19f93d.jpg"
                ]
              },
              { 
                name: "Габионы", 
                desc: "Сетчатые конструкции для укрепления", 
                icon: "Boxes",
                images: [
                  "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/e766c4f2-9573-4f4e-9070-7032ca756b5c.jpg"
                ]
              },
              { 
                name: "Сварка Мембраны", 
                desc: "Профессиональная сварка геомембран", 
                icon: "Flame", 
                details: "Мы предоставляем услуги профессиональной сварки геомембран с использованием современного оборудования. Гарантируем качественные и надежные швы, соответствующие всем стандартам. Опытные специалисты, выезд на объект, контроль качества на всех этапах работы." 
              }
            ].map((product, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-accent animate-fade-in" style={{ animationDelay: `${idx * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={product.icon as any} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.desc}</p>
                  {product.details || product.images ? (
                    <Dialog open={openDialog === idx} onOpenChange={(open) => setOpenDialog(open ? idx : null)}>
                      <DialogTrigger asChild>
                        <Button variant="link" className="text-accent p-0 h-auto">
                          Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{product.name}</DialogTitle>
                          {product.details && (
                            <DialogDescription className="text-base pt-4">
                              {product.details}
                            </DialogDescription>
                          )}
                        </DialogHeader>
                        {product.images && (
                          <div className="grid grid-cols-1 gap-4 mt-4">
                            {product.images.map((img, imgIdx) => (
                              <img 
                                key={imgIdx} 
                                src={img} 
                                alt={`${product.name} ${imgIdx + 1}`}
                                className="w-full h-auto rounded-lg object-cover"
                              />
                            ))}
                          </div>
                        )}
                      </DialogContent>
                    </Dialog>
                  ) : (
                    <Button variant="link" className="text-accent p-0 h-auto">
                      Подробнее <Icon name="ArrowRight" size={16} className="ml-1" />
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Цены и условия</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Предлагаем конкурентные цены и гибкие условия сотрудничества
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2">
                <CardContent className="pt-6 text-center">
                  <Icon name="Package" size={40} className="text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Оптовые поставки</h3>
                  <p className="text-muted-foreground text-sm">От 500 м² - скидка 5%</p>
                </CardContent>
              </Card>

              <Card className="border-2 border-accent">
                <CardContent className="pt-6 text-center">
                  <Icon name="Percent" size={40} className="text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Крупный опт</h3>
                  <p className="text-muted-foreground text-sm">От 2000 м² - скидка до 15%</p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6 text-center">
                  <Icon name="HandshakeIcon" size={40} className="text-accent mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Для постоянных клиентов</h3>
                  <p className="text-muted-foreground text-sm">Индивидуальные условия</p>
                </CardContent>
              </Card>
            </div>

            <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg px-8" asChild>Прайс-лист по запросу</Button>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Доставка по всей России</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="MapPin" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">География поставок</h3>
                <p className="text-primary-foreground/80">
                  Доставляем во все регионы РФ: от Калининграда до Владивостока
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Clock" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Сроки доставки</h3>
                <p className="text-primary-foreground/80">
                  Отправка в течение 24 часов. Доставка 2-7 дней в зависимости от региона
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Truck" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Способы доставки</h3>
                <p className="text-primary-foreground/80">
                  Транспортными компаниями, собственным транспортом, самовывоз со склада
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="PackageCheck" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Гарантии качества</h3>
                <p className="text-primary-foreground/80">
                  Надежная упаковка, страхование груза, проверка перед отправкой
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">О компании</h2>
            
            <div className="space-y-6 text-lg text-muted-foreground mb-12">
              <p>
                <span className="font-bold text-foreground">ГК "Поволжье"</span> — надежный поставщик геосинтетических материалов с многолетним опытом работы на российском рынке.
              </p>
              <p>
                Мы специализируемся на комплексных поставках геосинтетики для дорожного строительства, гидротехнических сооружений, ландшафтного дизайна и промышленного строительства.
              </p>
              <p>
                Наша миссия — обеспечить строительные компании качественными материалами по конкурентным ценам с быстрой доставкой в любую точку России.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-2">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-accent mb-2">10+</div>
                  <p className="text-muted-foreground">лет на рынке</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-accent mb-2">500+</div>
                  <p className="text-muted-foreground">постоянных клиентов</p>
                </CardContent>
              </Card>

              <Card className="text-center border-2">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-accent mb-2">10000+</div>
                  <p className="text-muted-foreground">реализованных проектов</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Контакты</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Телефон/WhatsApp</h3>
                  <a href="https://wa.me/79991416580" target="_blank" rel="noopener noreferrer" className="text-xl text-accent hover:underline">+7 (999) 141-65-80</a>
                  <p className="text-sm text-muted-foreground"></p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Email</h3>
                  <a href="mailto:TD.Povolzhje@yandex.ru" className="text-xl text-accent hover:underline">TD.Povolzhje@yandex.ru</a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Офис</h3>
                  <a 
                    href="https://yandex.ru/maps/?text=603032, г. Н.Новгород, ул. Памирская, дом 11А" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    603032, г. Н.Новгород, ул. Памирская, дом  11А, помещение П2, офис 307
                  </a>
                </div>
              </div>
            </div>

            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-6">Оставьте заявку</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border"
                  />
                  <input 
                    type="tel" 
                    placeholder="Телефон"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border"
                  />
                  <input 
                    type="email" 
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border"
                  />
                  <textarea 
                    placeholder="Ваш вопрос"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border"
                  ></textarea>
                  <Button className="w-full bg-accent hover:bg-accent/90" size="lg" asChild>
                    <a href="mailto:TD.Povolzhje@yandex.ru">Отправить заявку</a>
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex flex-col items-start gap-2 mb-4">
                <div className="text-xs font-semibold text-primary-foreground border-b-2 border-accent pb-0.5">
                  ГРУППА КОМПАНИЙ "ПОВОЛЖЬЕ"
                </div>
                <img src="https://cdn.poehali.dev/files/4c65673f-a700-4b83-819a-38c724187734.png" alt="ГК ПОВОЛЖЬЕ" className="h-10" />
              </div>
              <p className="text-primary-foreground/80">
                Поставки геосинтетики по всей России. Качество, скорость, надежность.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <div className="space-y-2">
                <a href="#advantages" className="block text-primary-foreground/80 hover:text-accent transition-colors">Преимущества</a>
                <a href="#products" className="block text-primary-foreground/80 hover:text-accent transition-colors">Продукция</a>
                <a href="#prices" className="block text-primary-foreground/80 hover:text-accent transition-colors">Цены</a>
                <a href="#delivery" className="block text-primary-foreground/80 hover:text-accent transition-colors">Доставка</a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-primary-foreground/80">
                <p>+7 (999) 141-65-80</p>
                <p>TD.Povolzhje@yandex.ru</p>
                <p>603032, г. Н.Новгород, ул. Памирская, дом  11А, помещение П2, офис 307</p>
              </div>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
            <p>© 2013-2025 ГК "ПОВОЛЖЬЕ". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;