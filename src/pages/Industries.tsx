import { Link } from "react-router-dom";
import { 
  Car, 
  Plane, 
  Factory, 
  Building2, 
  Ship, 
  Zap, 
  Droplets, 
  Pickaxe,
  ArrowRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Industries = () => {
  const industries = [
    {
      id: "construction",
      title: "Construction",
      icon: Building2,
      description: "High-rise buildings, commercial complexes, and infrastructure projects requiring precision tower crane operations and heavy lifting.",
    },
    {
      id: "oil-gas",
      title: "Oil & Gas",
      icon: Droplets,
      description: "Refineries, offshore platforms, and petrochemical facilities with specialized heavy rigging and safety requirements.",
    },
    {
      id: "power-energy",
      title: "Power & Energy",
      icon: Zap,
      description: "Power plants, substations, renewable energy installations, and grid infrastructure construction and maintenance.",
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      icon: Factory,
      description: "Heavy machinery installation, production line setup, and industrial equipment moves for manufacturing facilities.",
    },
    {
      id: "shipbuilding",
      title: "Shipbuilding",
      icon: Ship,
      description: "Shipyards, marine vessels, port facilities, and maritime construction with specialized marine lifting equipment.",
    },
    {
      id: "mining",
      title: "Mining",
      icon: Pickaxe,
      description: "Open-pit mines, underground operations, and processing plant construction with heavy-duty lifting solutions.",
    },
    {
      id: "automotive",
      title: "Automotive",
      icon: Car,
      description: "Assembly plants, testing facilities, and automotive manufacturing equipment installation and relocation.",
    },
    {
      id: "aerospace",
      title: "Aerospace",
      icon: Plane,
      description: "Aircraft hangars, space facilities, and aviation infrastructure requiring precision lifting operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 left-1/4 text-6xl md:text-8xl font-bold text-primary-foreground whitespace-nowrap">
              #Construction
            </div>
            <div className="absolute top-1/3 right-1/4 text-5xl md:text-7xl font-bold text-primary-foreground whitespace-nowrap">
              #Oil & Gas
            </div>
            <div className="absolute top-1/2 left-1/3 text-4xl md:text-6xl font-bold text-primary-foreground whitespace-nowrap">
              #Manufacturing
            </div>
            <div className="absolute top-2/3 right-1/3 text-5xl md:text-7xl font-bold text-primary-foreground whitespace-nowrap">
              #Shipbuilding
            </div>
            <div className="absolute bottom-1/4 left-1/2 text-4xl md:text-6xl font-bold text-primary-foreground whitespace-nowrap">
              #Mining
            </div>
          </div>
          <div className="relative container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              #ContinentalCranes
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 tracking-widest">
              E V E R Y W H E R E
            </p>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry) => {
                const IconComponent = industry.icon;
                return (
                  <Link
                    key={industry.id}
                    to={`/industries/${industry.id}`}
                    className="group bg-background rounded-lg p-8 border border-border hover:border-primary hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-24 h-24 mb-6 bg-secondary/20 rounded-lg flex items-center justify-center group-hover:bg-secondary transition-colors">
                        <IconComponent className="w-12 h-12 text-primary group-hover:text-secondary-foreground transition-colors" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {industry.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                        {industry.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Industries;
