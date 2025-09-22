import { Target, MousePointer, Shield } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: Target,
      title: "Accurate Duplicate Detection",
      description: "Advanced algorithms identify duplicates across all contact fields with 99.5% accuracy."
    },
    {
      icon: MousePointer,
      title: "One-Click Cleanup",
      description: "Bulk deduplication with customizable rules and preview mode before making changes."
    },
    {
      icon: Shield,
      title: "Continuous Monitoring",
      description: "Automated monitoring keeps your CRM clean with real-time duplicate prevention."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How Clear Roots Fixes It
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our intelligent solution transforms your messy CRM into a reliable business asset
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 p-8 bg-card rounded-2xl shadow-card hover:shadow-soft transition-shadow group"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-10 h-10 text-primary" />
                </div>
              </div>
              
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-semibold text-foreground mb-3">
                  {solution.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;