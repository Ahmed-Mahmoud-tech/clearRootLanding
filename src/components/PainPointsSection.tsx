import { AlertTriangle, Clock, Users } from "lucide-react";

const PainPointsSection = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Missed Opportunities",
      description: "Duplicates cause lost leads, double emails, and inaccurate reports that hurt your bottom line."
    },
    {
      icon: Clock,
      title: "Time Wasted",
      description: "Teams spend 4-6 hours weekly manually cleaning data instead of closing deals."
    },
    {
      icon: Users,
      title: "Workflow Confusion",
      description: "Reps call the same lead twice, use outdated info, and disrupt sales pipelines."
    }
  ];

  return (
    <section id="why-clean-data" className="py-24 lg:py-32 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Clean Data Matters
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dirty data doesn't just slow you down—it actively hurts your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-8 flex justify-center">
                <div className="w-20 h-20 lg:w-24 lg:h-24 bg-destructive/10 rounded-full flex items-center justify-center group-hover:bg-destructive/20 transition-colors">
                  <point.icon className="w-10 h-10 lg:w-12 lg:h-12 text-destructive" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {point.title}
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;