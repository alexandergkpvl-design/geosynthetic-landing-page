import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Как быстро вы можете отгрузить товар?",
      answer: "При наличии товара на складе — отгрузка в день заказа. Если нужна доставка из других городов — от 2 до 5 рабочих дней.",
    },
    {
      question: "Вы работаете с юридическими лицами?",
      answer: "Да, работаем как с физическими, так и с юридическими лицами. Предоставляем полный пакет документов: договор, счет, накладную, сертификаты качества.",
    },
    {
      question: "Какие способы оплаты вы принимаете?",
      answer: "Принимаем оплату по безналичному расчету для юридических лиц, наличными, банковскими картами. Возможна отсрочка платежа для постоянных клиентов.",
    },
    {
      question: "Предоставляете ли вы скидки на оптовые заказы?",
      answer: "Да, мы предлагаем гибкую систему скидок в зависимости от объема заказа. Чем больше объем — тем выгоднее цена. Свяжитесь с нами для расчета индивидуального предложения.",
    },
    {
      question: "Как организована доставка по России?",
      answer: "Доставляем по всей России любыми транспортными компаниями на ваш выбор: ПЭК, Деловые Линии, СДЭК, Желдорэкспедиция и другие. Можем организовать доставку собственным транспортом.",
    },
    {
      question: "Можно ли получить консультацию по выбору материалов?",
      answer: "Конечно! Наши специалисты помогут подобрать оптимальные материалы под ваши задачи, рассчитают необходимое количество и проконсультируют по особенностям применения. Звоните +7 (999) 141-65-80.",
    },
    {
      question: "Есть ли гарантия на ваши материалы?",
      answer: "Все материалы имеют сертификаты соответствия и гарантию производителя. При правильном монтаже и эксплуатации срок службы геосинтетических материалов — более 50 лет.",
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Частые вопросы
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Ответы на самые популярные вопросы наших клиентов
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-2 rounded-lg px-6 bg-background"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;