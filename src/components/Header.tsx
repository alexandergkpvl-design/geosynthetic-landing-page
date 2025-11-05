import { Button } from "@/components/ui/button";

const Header = () => {
  return (
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
  );
};

export default Header;
