import { Button } from "@/components/ui/button";
import heroImage from "@/assets/crm-cleaning-hero.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-hero flex items-center py-20"
    >
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Keep Your HubSpot CRM{" "}
              <span className="text-primary">Clean & Reliable</span>{" "}
              with Clear Roots
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Eliminate duplicates, merge efficiently, and maintain a single source of truth for your data.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4" onClick={() => window.location.href = 'https://app.clearroot.cloud'}>
              Start Cleaning My CRM
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Trusted by 500+ businesses</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>HubSpot Certified</span>
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl shadow-soft">
            <img
              src={heroImage}
              alt="Clean CRM dashboard showing duplicate detection and merging"
              className="w-full h-auto"
            />
          </div>

          {/* Floating elements for visual appeal */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;