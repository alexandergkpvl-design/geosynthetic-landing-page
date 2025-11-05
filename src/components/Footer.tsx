import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
            <div className="space-y-3">
              <a href="tel:+79991416580" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Icon name="Phone" size={18} />
                <span>+7 (999) 141-65-80</span>
              </a>
              <a href="mailto:TD.Povolzhje@yandex.ru" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Icon name="Mail" size={18} />
                <span>TD.Povolzhje@yandex.ru</span>
              </a>
              <a href="https://wa.me/79991416580" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/80 hover:text-accent transition-colors">
                <Icon name="MessageCircle" size={18} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} ГК "ПОВОЛЖЬЕ". Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;