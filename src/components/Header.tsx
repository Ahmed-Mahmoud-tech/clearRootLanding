import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/lovable-uploads/logo_2-05.png"
            alt="Clear Roots"
            className="h-12 w-auto"
          />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Pricing
          </a>
          <a
            href="#get-started"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Get Started
          </a>
        </nav>

        {/* CTA Button */}
        <Button variant="cta" size="lg" className="px-8 text-base font-semibold" onClick={() => window.open('https://app.clearroot.cloud/', '_blank')}
        >
          Start Free Scan
        </Button>
      </div>
    </header>
  );
};

export default Header;