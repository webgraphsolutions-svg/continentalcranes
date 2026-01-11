import { Link } from "react-router-dom";
import { 
  Car, 
  Plane, 
  Factory, 
  Building2, 
  Ship, 
  Zap, 
  Droplets, 
  Pickaxe 
} from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      id: "construction",
      title: "Construction",
      icon: Building2,
      description: "High-rise buildings, commercial complexes, and infrastructure projects.",
    },
    {
      id: "oil-gas",
      title: "Oil & Gas",
      icon: Droplets,
      description: "Refineries, offshore platforms, and petrochemical facilities.",
    },
    {
      id: "power-energy",
      title: "Power & Energy",
      icon: Zap,
      description: "Power plants, substations, and renewable energy installations.",
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      icon: Factory,
      description: "Heavy machinery, production lines, and industrial equipment.",
    },
    {
      id: "shipbuilding",
      title: "Shipbuilding",
      icon: Ship,
      description: "Shipyards, marine vessels, and port facilities.",
    },
    {
      id: "mining",
      title: "Mining",
      icon: Pickaxe,
      description: "Open-pit mines, underground operations, and processing plants.",
    },
    {
      id: "automotive",
      title: "Automotive",
      icon: Car,
      description: "Assembly plants, testing facilities, and automotive manufacturing.",
    },
    {
      id: "aerospace",
      title: "Aerospace",
      icon: Plane,
      description: "Aircraft hangars, space facilities, and aviation infrastructure.",
    },
  ];

  return (
    <section id="industries" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground font-semibold text-sm rounded-full mb-4">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Lifting Solutions for <span className="text-primary">Every Sector</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We provide specialized crane and rigging services across diverse industries, 
            delivering safe and efficient heavy lifting solutions.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry) => {
            const IconComponent = industry.icon;
            return (
              <Link
                key={industry.id}
                to={`/industries/${industry.id}`}
                className="group bg-background rounded-lg p-6 border border-border hover:border-primary hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {industry.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
