import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/lovable-uploads/ce4ea396-a3de-4666-a802-af12747ebab9.png"
            alt="Clear Roots"
            className="h-10 w-auto"
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
            href="#why-clear-roots"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Why Clear Roots
          </a>
          <a
            href="#get-started"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Get Started
          </a>
        </nav>

        {/* CTA Button */}
        <Button variant="cta" className="px-6 py-2 text-base" onClick={() => window.location.href = 'https://app.clearroot.cloud'}>
          Start Cleaning My CRM
        </Button>
      </div>
    </header>
  );
};

export default Header;