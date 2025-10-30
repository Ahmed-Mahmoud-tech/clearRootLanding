import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section id="get-started" className="py-24 lg:py-32 bg-gradient-primary">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Ready to Clear Your Roots?
          </h2>

          <p className="text-xl lg:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            <span className="block text-3xl lg:text-4xl font-bold text-primary-foreground">Get a free scan + 20 merges free!</span>
            <span className="block mt-3 text-lg lg:text-xl text-primary-foreground/80">Limited time offer - Start today</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              variant="accent"
              size="lg"
              className="text-xl px-12 py-6 h-auto shadow-button font-semibold"
              onClick={() => window.open('https://app.clearroot.cloud/', '_blank')}
            >
              Start Free Scan
            </Button>
          </div>

          {/* Benefits list */}
          <div className="grid sm:grid-cols-2 gap-8 mt-16 text-primary-foreground/90 max-w-2xl mx-auto text-lg">
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-primary-foreground flex-shrink-0" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <CheckCircle className="w-6 h-6 text-primary-foreground flex-shrink-0" />
              <span>Setup in under 5 minutes</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;