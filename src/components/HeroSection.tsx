import { Button } from "@/components/ui/button";
import heroImage from "@/assets/clean-crm-hero.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-hero flex items-center py-24 lg:py-32"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Content */}
        <div className="space-y-10 text-center lg:text-left">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] text-foreground">
              Keep Your HubSpot CRM{" "}
              <span className="text-accent">Clean & Reliable</span>{" "}
              with Clear Roots
            </h1>

            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              Eliminate duplicates, merge efficiently, and maintain a single source of truth for your data.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button variant="cta" size="lg" className="text-lg px-12 py-6 h-auto font-semibold" onClick={() => window.open('https://app.clearroot.cloud/', '_blank')}
            >
              Start Free Scan
            </Button>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-soft">
            <img
              src={heroImage}
              alt="Clean and organized HubSpot CRM interface showing contact management and data organization"
              className="w-full h-auto"
            />
          </div>

          {/* Floating elements for visual appeal */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;