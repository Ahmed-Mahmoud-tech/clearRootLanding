import { Link2, Settings, Workflow } from "lucide-react";

const SolutionSection = () => {
  const solutions = [
    {
      icon: Link2,
      title: "Step 1: Connect Your HubSpot",
      description: "Securely connect your HubSpot account in seconds. Clear Roots reads your CRM data safely through the official HubSpot API."
    },
    {
      icon: Settings,
      title: "Step 2: Set Your Rules",
      description: "Define the properties and conditions you want to check like email, phone, company name, or contact owner and decide how you want duplicates identified."
    },
    {
      icon: Workflow,
      title: "Step 3: Scan & Merge",
      description: "Run your scan to uncover all duplicates in your CRM. Then, either bulk merge automatically or go record by record selecting exactly which values to keep. You stay in control; Clear Roots does the heavy lifting."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            How Clear Roots Fixes It
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our intelligent solution transforms your messy CRM into a reliable business asset
          </p>
        </div>

        <div className="space-y-6 max-w-5xl mx-auto">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="flex flex-col md:flex-row items-center gap-8 lg:gap-10 p-8 lg:p-10 bg-card rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 group"
            >
              <div className="flex-shrink-0">
                <div className="w-24 h-24 lg:w-28 lg:h-28 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <solution.icon className="w-12 h-12 lg:w-14 lg:h-14 text-primary" />
                </div>
              </div>
              
              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                  {solution.title}
                </h3>
                
                <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
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