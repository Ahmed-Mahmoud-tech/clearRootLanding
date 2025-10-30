import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      priceDetail: "",
      included: "Scan your entire HubSpot CRM and merge up to 20 duplicates.",
      features: [
        "Full CRM scan",
        "Up to 20 merges",
        "No credit card required"
      ],
      cta: "Start Free Scan"
    },
    {
      name: "Monthly Subscription",
      price: "$1",
      priceDetail: "per **1,000** contacts",
      included: "Continue merging after your free limit.",
      features: [
        "Everything in Free",
        "Pay as you go — $1 per **1,000** contacts",
        "Cancel anytime"
      ],
      cta: "Start Cleaning"
    },
    {
      name: "Yearly Subscription",
      price: "$1",
      priceDetail: "per **2,000** contacts",
      included: "Get double the value and keep your CRM clean all year long.",
      features: [
        "Everything in Monthly",
        "2X more value for the same price",
        "Priority support",
        "Annual billing"
      ],
      tag: "Best Value",
      cta: "Start Cleaning",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Start free, then pay only for what you clean. No surprises, no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 pb-0 bg-card rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 ${plan.popular ? 'ring-2 ring-primary scale-105' : ''
                }`}
            >
              {plan.tag && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  {plan.tag}
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-xl font-normal text-foreground">{plan.price}</span>
                  {plan.priceDetail && (
                    <span
                      className="text-xl text-muted-foreground ml-2"
                      dangerouslySetInnerHTML={{
                        __html: plan.priceDetail.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-bold text-3xl">$1</strong>')
                      }}
                    />
                  )}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {plan.included}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground" dangerouslySetInnerHTML={{
                      __html: feature.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    }} />
                  </li>
                ))}
              </ul>
              {/* 
              <Button 
                variant={plan.popular ? "cta" : "outline"} 
                size="lg" 
                className="w-full"
              >
                {plan.cta}
              </Button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;