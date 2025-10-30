import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How does the free scan work?",
      answer: "Simply connect your HubSpot account, and Clear Roots will automatically scan your entire CRM for duplicates. You'll get a detailed report showing exactly what duplicates exist, with no commitment required."
    },
    {
      question: "Will Clear Roots delete any of my data?",
      answer: "No! Clear Roots merges duplicates intelligently by combining all information into a single, complete record. You can preview every change before it's applied."
    },
    {
      question: "How long does the cleanup process take?",
      answer: "Most CRMs with up to 50,000 contacts can be scanned and cleaned in under 10 minutes. You can review changes in preview mode and apply them instantly with one click."
    },
    {
      question: "What happens after my 20 free merges?",
      answer: "After your initial 20 free merges, you can upgrade to a paid plan based on your CRM size. We offer flexible pricing with monthly or annual options, and you can cancel anytime."
    },
    {
      question: "Can I customize the duplicate detection rules?",
      answer: "Yes! Clear Roots comes with smart defaults that work for most teams, but you can customize matching rules based on email, phone, company, or any combination of fields to fit your specific needs."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about Clear Roots
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-8 py-2 shadow-card hover:shadow-soft transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg lg:text-xl font-semibold text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-lg leading-relaxed pt-2 pb-6">
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
