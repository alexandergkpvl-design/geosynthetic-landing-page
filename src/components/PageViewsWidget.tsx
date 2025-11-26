import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const PageViewsWidget = () => {
  const [views, setViews] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const getStoredViews = () => {
      const stored = localStorage.getItem('page_views');
      return stored ? parseInt(stored, 10) : 0;
    };

    const currentViews = getStoredViews();
    const newViews = currentViews + 1;
    
    localStorage.setItem('page_views', newViews.toString());
    setViews(newViews);

    setTimeout(() => setIsVisible(true), 500);

    if (typeof window !== 'undefined' && (window as any).ym) {
      (window as any).ym(101026698, 'hit', window.location.href);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <Card className="fixed bottom-6 left-6 z-40 bg-background/95 backdrop-blur-sm border border-accent/20 shadow-md p-2.5 animate-in slide-in-from-bottom-5 duration-500">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center">
          <Icon name="Eye" size={16} className="text-accent" />
        </div>
        <div>
          <p className="text-[10px] text-muted-foreground font-medium leading-tight">Просмотры</p>
          <p className="text-lg font-bold text-foreground tabular-nums leading-tight">
            {views.toLocaleString('ru-RU')}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PageViewsWidget;