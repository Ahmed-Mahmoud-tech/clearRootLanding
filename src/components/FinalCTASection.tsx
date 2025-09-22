import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section id="get-started" className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            Ready to Clear Your Roots?
          </h2>

          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Start cleaning your HubSpot CRM today and keep your data reliable.
            Join hundreds of businesses that trust Clear Roots.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-button" onClick={() => window.location.href = 'https://app.clearroot.cloud'}
            >
              Get Started Now
            </Button>
          </div>

          {/* Benefits list */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12 text-primary-foreground/90">
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary-foreground" />
              <span>30-day free trial</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary-foreground" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary-foreground" />
              <span>Setup in under 5 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;