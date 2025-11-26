import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

interface StatItemProps {
  end: number;
  label: string;
  icon: string;
  suffix?: string;
}

const StatItem = ({ end, label, icon, suffix = "" }: StatItemProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="text-center">
      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <Icon name={icon} size={32} className="text-accent" />
      </div>
      <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Нам доверяют
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem end={500} label="Довольных клиентов" icon="Users" suffix="+" />
          <StatItem end={12} label="Лет на рынке" icon="Calendar" suffix="+" />
          <StatItem end={50} label="Городов России" icon="MapPin" suffix="+" />
          <StatItem end={1000} label="Выполненных заказов" icon="PackageCheck" suffix="+" />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
