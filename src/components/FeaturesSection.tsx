import { Search, Zap, Link } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Search,
      title: "Automatic Duplicate Detection",
      description: "Smart algorithms scan your entire HubSpot CRM to identify duplicates across multiple fields and data points."
    },
    {
      icon: Zap,
      title: "Bulk Deduplication & Preview Mode",
      description: "Process thousands of records at once with preview capabilities to review changes before they're applied."
    },
    {
      icon: Link,
      title: "Easy Integration with HubSpot",
      description: "Seamless setup with your existing HubSpot workflow. No technical expertise required."
    }
  ];

  return (
    <section id="features" className="py-24 lg:py-32 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What You Get with Clear Roots
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Powerful features designed to keep your HubSpot CRM pristine and reliable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 lg:p-10 bg-card rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 group hover:scale-[1.02] border border-border/50"
            >
              <div className="mb-8">
                <div className="w-16 h-16 lg:w-18 lg:h-18 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 lg:w-9 lg:h-9 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;