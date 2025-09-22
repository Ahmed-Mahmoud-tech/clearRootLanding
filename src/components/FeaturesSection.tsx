import { Search, Zap, Link, Eye } from "lucide-react";

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
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "Continuous background scanning prevents future duplicates from cluttering your clean CRM."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            What You Get with Clear Roots
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to keep your HubSpot CRM pristine and reliable
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 bg-card rounded-2xl shadow-card hover:shadow-soft transition-all duration-200 group hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
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