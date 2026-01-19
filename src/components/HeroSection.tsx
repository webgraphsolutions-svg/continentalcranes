import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCrane from "@/assets/hero-crane.jpg";

const HeroSection = () => {
  const stats = [
    { value: "1-150", label: "Ton Capacity" },
    { value: "5-40m", label: "Span Range" },
    { value: "500+", label: "Projects Delivered" },
    { value: "25+", label: "Years Experience" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroCrane}
          alt="Double Girder EOT Crane"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          <span className="inline-block px-4 py-2 bg-secondary text-secondary-foreground font-semibold text-sm rounded-full mb-6">
            Leading EOT Crane Manufacturers & Exporters
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Double Girder{" "}
            <span className="text-secondary">EOT Cranes</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 max-w-3xl">
            High-performance overhead cranes designed for maximum stability, higher hook lift, 
            and zero downtime. Our Double Girder EOT Cranes are built with bolted design for 
            geometric reliability and easy maintenance.
          </p>
          
          <ul className="text-primary-foreground/80 mb-8 space-y-2 text-base md:text-lg">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              Capacity: 1 Ton to 150 Tons (Customizable up to 500T)
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              Span: 5 meters to 40 meters
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full"></span>
              Multiple speed selection & low maintenance
            </li>
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8"
            >
              Get Customized Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8"
            >
              <Play className="mr-2 w-5 h-5" />
              View Specifications
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-4 md:p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
