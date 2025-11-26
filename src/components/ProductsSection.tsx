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
import { useCart } from "@/contexts/CartContext";
import { useToast } from "@/hooks/use-toast";

interface Product {
  name: string;
  desc: string;
  icon: string;
  images?: string[];
  details?: string;
  relatedProducts?: string[];
}

const ProductsSection = () => {
  const [openDialog, setOpenDialog] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<Record<number, number>>({});
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (productName: string) => {
    addToCart(productName);
    toast({
      title: "Добавлено в корзину",
      description: `${productName} добавлен в корзину`,
    });
  };

  const products: Product[] = [
    { 
      name: "Геотекстиль", 
      desc: "Нетканые и тканые материалы различной плотности", 
      icon: "Layers",
      images: [
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/75e39f14-0046-4909-b2a9-4d69bef84f5f.jpg",
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/4f7a2bb6-fc1f-4744-9742-ffb52371116a.jpg",
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/118f2bd4-29fc-4fd0-aa9c-0b619809f8d6.jpg"
      ],
      details: "Геотекстиль — это высокопрочный нетканый или тканый материал, применяемый в дорожном, промышленном и гражданском строительстве. Выполняет функции разделения, фильтрации, армирования и защиты грунтовых слоев. Доступны различные плотности от 100 до 600 г/м², что позволяет подобрать оптимальный вариант для любых задач. Материал устойчив к воздействию химических веществ, УФ-излучения и биологическому разложению."
    },
    { 
      name: "Геомембрана", 
      desc: "HDPE, LDPE мембраны для гидроизоляции", 
      icon: "Shield",
      images: [
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/288927b8-d4ad-444b-b941-8feee9e78c82.jpg",
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/0953f97b-6326-4166-9e2b-cfca9f61238a.jpg",
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/f22dafd0-e04d-42fd-9fc2-5af365dfa7de.jpg"
      ],
      details: "Геомембраны HDPE и LDPE — это полимерные водонепроницаемые пленки, обеспечивающие надежную гидроизоляцию. Применяются для защиты фундаментов, создания водоемов, полигонов ТБО, хранилищ жидких отходов. HDPE мембраны отличаются повышенной прочностью и химической стойкостью, LDPE — гибкостью и эластичностью. Толщина от 0.5 до 3.0 мм, срок службы более 50 лет."
    },
    { 
      name: "Георешетка", 
      desc: "Для укрепления грунтов и откосов", 
      icon: "Grid3x3",
      images: [
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/574edbde-44f5-4d1a-a7f6-230dafe2aea7.jpg",
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/c0d50593-c8ea-4f7a-b8dc-d556e314943e.jpg",
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/1cdbf9fe-b771-465b-a8b5-0d73bc3f8079.jpg"
      ],
      details: "Георешетка — это объемная ячеистая конструкция из полимерных лент, предназначенная для укрепления грунтов, откосов и склонов. Предотвращает эрозию почвы, распределяет нагрузки и повышает несущую способность основания. Идеально подходит для строительства дорог, парковок, подпорных стенок. Высота ячеек от 50 до 200 мм, размер ячейки 210×210 мм или 320×320 мм."
    },
    { 
      name: "Геосетка", 
      desc: "Армирование дорожных покрытий", 
      icon: "Network",
      images: [
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/5950c368-2a02-4ccb-a3ab-05179d1b6154.jpg",
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/6d6f694e-a555-47ed-877c-f6126289ccd0.jpg",
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/10e328e4-9e61-49bb-bf17-9c61a5f91088.jpg"
      ],
      details: "Геосетка — это плоская полимерная или стеклопластиковая сетка для армирования асфальтобетонных покрытий и оснований дорог. Повышает прочность и долговечность дорожного полотна, предотвращает образование трещин и деформаций. Стеклосетка выдерживает температуры от -70°C до +270°C, устойчива к щелочам и кислотам. Прочность на разрыв от 50 до 200 кН/м."
    },
    { 
      name: "Дренажные материалы", 
      desc: "Дренажные маты и композиты", 
      icon: "Droplets",
      images: [
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/db73083e-07a0-42ed-9f8b-2d15b88b2d20.jpg",
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/e5fb49fd-7f7e-4b83-8f25-7b52ee59c982.jpg",
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/7ce14359-6880-4ae0-b0c0-6301d5e61e34.jpg"
      ],
      details: "Дренажные маты и геокомпозиты обеспечивают эффективный отвод воды из конструкций. Состоят из объемного дренирующего ядра и фильтрующего слоя геотекстиля. Применяются для защиты фундаментов, подземных сооружений, кровель, спортивных площадок. Высокая водопропускная способность до 5 л/(с·м), толщина от 5 до 20 мм. Долговечность более 50 лет."
    },
    { 
      name: "Геокомпозиты", 
      desc: "Многофункциональные материалы", 
      icon: "Box",
      images: [
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/9a501c15-4476-4834-bd68-268bdf19f93d.jpg",
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/168cabdd-48a8-4373-b59c-b211b90a8caf.jpg"
      ],
      details: "Геокомпозиты — это многослойные материалы, сочетающие свойства различных геосинтетиков. Одновременно выполняют функции армирования, дренажа, фильтрации и защиты. Используются в дорожном строительстве, гидротехнике, ландшафтном дизайне. Снижают сроки монтажа и общую стоимость проекта. Индивидуальный подбор композита под конкретные задачи."
    },
    { 
      name: "Габионы", 
      desc: "Сетчатые конструкции для укрепления", 
      icon: "Boxes",
      images: [
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/e766c4f2-9573-4f4e-9070-7032ca756b5c.jpg",
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/20556322-710b-4b22-b316-69337747d3b9.jpg",
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/f783717f-2b8e-4de5-b93f-d3f0d3d33bc2.jpg"
      ],
      details: "Габионы — это прочные сетчатые контейнеры из оцинкованной проволоки с полимерным покрытием, заполняемые камнем. Используются для укрепления берегов, склонов, создания подпорных стенок и ландшафтного дизайна. Долговечны, экологичны, не требуют специального ухода. Со временем конструкция укрепляется естественным зарастанием растительности. Размеры от 1×1×0.5 м до 6×2×1 м."
    },
    { 
      name: "Сварка Мембраны", 
      desc: "Профессиональная сварка геомембран", 
      icon: "Flame", 
      details: "Мы предоставляем услуги профессиональной сварки геомембран с использованием современного оборудования. Гарантируем качественные и надежные швы, соответствующие всем стандартам. Опытные специалисты, выезд на объект, контроль качества на всех этапах работы." 
    },
    { 
      name: "Сетка против БПЛА", 
      desc: "Защитные сети от беспилотников", 
      icon: "Shield",
      images: [
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/a922f267-0dc4-4352-b511-79e0d3aeceea.jpg"
      ],
      details: "Специализированные защитные сети для перехвата беспилотных летательных аппаратов. Изготовлены из высокопрочного полимерного волокна с малой заметностью. Устойчивы к погодным условиям, УФ-излучению и механическим повреждениям. Размер ячейки подобран для эффективного задержания БПЛА различных типов. Легкий вес упрощает монтаж и транспортировку. Применяются для защиты стратегических объектов, промышленных предприятий, военных баз."
    },
    { 
      name: "Композитные анкеры", 
      desc: "Неметаллические крепежные элементы", 
      icon: "Anchor",
      images: [
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/fe79aeb3-5b0b-4914-838d-d56383038a2d.jpg"
      ],
      details: "Композитные анкеры из стеклопластика — это современная альтернатива металлическим крепежам. Не подвержены коррозии, диэлектричны, радиопрозрачны, не создают мостиков холода. Прочность на растяжение до 1000 МПа. Используются для крепления теплоизоляции, облицовки фасадов, укрепления бетонных конструкций. Диаметры от 4 до 16 мм, длина до 1000 мм. Легче стальных аналогов в 4 раза при той же прочности."
    },
    { 
      name: "Резиновая крошка", 
      desc: "Покрытия для спортивных площадок", 
      icon: "Circle",
      images: [
        "https://cdn.poehali.dev/projects/bafd65ba-226c-4c1a-bb60-cb4c832d8f51/files/2c2cf69c-067d-4445-bb63-4d7f27633155.jpg"
      ],
      details: "Резиновая крошка производится из переработанных автомобильных шин. Экологически чистый материал для создания травмобезопасных покрытий. Применяется на детских и спортивных площадках, беговых дорожках, в конюшнях. Обладает высокой износостойкостью, морозостойкостью до -45°C, не скользит во влажном состоянии. Фракции от 1 до 10 мм. Возможна окраска в любые цвета. Срок службы более 10 лет."
    },
    { 
      name: "Сопутствующие материалы", 
      desc: "Материалы для работы с геотекстилем", 
      icon: "Package",
      relatedProducts: [
        "Анкерные болты и крепежи для фиксации геотекстиля",
        "Клеевые составы и мастики для склейки полотен",
        "Защитные геоматы и прослойки",
        "Дренажные трубы и фитинги",
        "Геотекстильные шпильки и скобы",
        "Песок и щебень фракционный",
        "Бентонитовые маты для гидроизоляции",
        "Разметочные материалы и инструменты",
        "Защитные покрытия от УФ-излучения",
        "Комплектующие для монтажа дренажных систем"
      ]
    }
  ];

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Наша продукция</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <Card key={idx} className="hover:shadow-lg transition-all duration-300 border-2 hover:border-accent animate-fade-in flex flex-col" style={{ animationDelay: `${idx * 0.1}s` }}>
              <CardContent className="pt-6 flex flex-col flex-grow">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={product.icon as any} size={28} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{product.name}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{product.desc}</p>
                
                <Dialog open={openDialog === idx} onOpenChange={(open) => setOpenDialog(open ? idx : null)}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground mt-auto">
                      Подробнее
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[90vw] max-h-[90vh] overflow-y-auto">
                    <DialogHeader className="space-y-4">
                      <div className="flex justify-center">
                        <img 
                          src="https://cdn.poehali.dev/files/4c65673f-a700-4b83-819a-38c724187734.png" 
                          alt="ГК ПОВОЛЖЬЕ" 
                          className="h-12"
                        />
                      </div>
                      <DialogTitle className="text-center">{product.name}</DialogTitle>
                      {product.desc && <DialogDescription className="text-center">{product.desc}</DialogDescription>}
                    </DialogHeader>
                    
                    {product.images && product.images.length > 0 && (
                      <div className="relative mt-4">
                        <img 
                          src={product.images[currentImageIndex[idx] || 0]} 
                          alt={`${product.name} ${(currentImageIndex[idx] || 0) + 1}`}
                          className="w-full max-h-64 object-contain rounded-lg"
                        />
                        {product.images.length > 1 && (
                          <>
                            <button
                              onClick={() => setCurrentImageIndex(prev => ({
                                ...prev,
                                [idx]: ((prev[idx] || 0) - 1 + product.images!.length) % product.images!.length
                              }))}
                              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                            >
                              <Icon name="ChevronLeft" size={24} />
                            </button>
                            <button
                              onClick={() => setCurrentImageIndex(prev => ({
                                ...prev,
                                [idx]: ((prev[idx] || 0) + 1) % product.images!.length
                              }))}
                              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all"
                            >
                              <Icon name="ChevronRight" size={24} />
                            </button>
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                              {product.images.map((_, imgIdx) => (
                                <div
                                  key={imgIdx}
                                  className={`w-2 h-2 rounded-full transition-all ${
                                    imgIdx === (currentImageIndex[idx] || 0) ? 'bg-white w-8' : 'bg-white/50'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                    )}
                    
                    {product.details && (
                      <div className="py-4">
                        <p className="text-foreground leading-relaxed">{product.details}</p>
                      </div>
                    )}
                    
                    {product.relatedProducts && (
                      <div className="py-4">
                        <h4 className="font-semibold text-lg mb-3">Ассортимент:</h4>
                        <ul className="space-y-2">
                          {product.relatedProducts.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-2">
                              <Icon name="CheckCircle2" size={20} className="text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="pt-4 border-t space-y-3">
                      <Button 
                        className="w-full bg-accent hover:bg-accent/90"
                        onClick={() => {
                          handleAddToCart(product.name);
                          setOpenDialog(null);
                        }}
                      >
                        <Icon name="ShoppingCart" size={20} className="mr-2" />
                        Добавить в корзину
                      </Button>
                      <Button className="w-full bg-[#0088cc] hover:bg-[#006699] text-white" asChild>
                        <a href="https://t.me/+tNkgLYPWUm00NDli" target="_blank" rel="noopener noreferrer">
                          <Icon name="Send" size={20} className="mr-2" />
                          Наш канал в Telegram
                        </a>
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
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

export default ProductsSection;