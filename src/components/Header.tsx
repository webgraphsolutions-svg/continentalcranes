import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "/products" },
    { name: "Solutions", href: "#solutions" },
    { name: "Industries", href: "#industries" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">CC</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg text-foreground">Continental</span>
              <span className="font-bold text-lg text-primary ml-1">Cranes</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+919310167073" className="flex items-center gap-2 text-muted-foreground hover:text-primary">
              <Phone className="w-4 h-4" />
              <span className="font-medium">9310167073, 9319197973</span>
            </a>
            <Button variant="default" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Get a Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <a href="tel:+919310167073" className="flex items-center gap-2 text-muted-foreground mb-4">
                  <Phone className="w-4 h-4" />
                  <span>9310167073, 9319197973</span>
                </a>
                <Button variant="default" className="w-full bg-secondary text-secondary-foreground">
                  Get a Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
