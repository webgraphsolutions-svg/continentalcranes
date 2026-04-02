import { ArrowUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "Tower Crane Rental", href: "#services" },
      { name: "Mobile Cranes", href: "#services" },
      { name: "Crane Maintenance", href: "#services" },
      { name: "Operator Training", href: "#services" },
      { name: "Heavy Rigging", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Projects", href: "#projects" },
      { name: "Careers", href: "#" },
      { name: "News & Updates", href: "#" },
      { name: "Contact", href: "#contact" },
    ],
    support: [
      { name: "Safety Guidelines", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Emergency Support", href: "#" },
      { name: "Request Quote", href: "#contact" },
    ],
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-xl">CC</span>
              </div>
              <div>
                <span className="font-bold text-lg">Continental</span>
                <span className="font-bold text-lg text-secondary ml-1">Cranes</span>
              </div>
            </a>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Your trusted partner for crane rental and heavy lifting solutions. 
              With over 25 years of experience, we deliver safe, efficient, and 
              reliable services for projects of all scales.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60 text-center md:text-left">
              © {currentYear} Continental Cranes. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-primary-foreground/60 hover:text-secondary transition-colors">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-secondary text-secondary-foreground rounded-lg flex items-center justify-center hover:bg-secondary/90 transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
