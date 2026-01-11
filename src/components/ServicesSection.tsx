import { Construction, Truck, Wrench, HardHat, Building, Cog, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Construction,
      title: "Tower Crane Rental",
      description: "High-capacity tower cranes for construction projects of all sizes, from residential to commercial developments.",
      features: ["Up to 20-ton capacity", "Expert installation", "24/7 support"],
    },
    {
      icon: Truck,
      title: "Mobile Crane Services",
      description: "Flexible mobile crane solutions for projects requiring mobility and quick setup across multiple locations.",
      features: ["All-terrain capability", "Rapid deployment", "Various capacities"],
    },
    {
      icon: Wrench,
      title: "Crane Maintenance",
      description: "Comprehensive maintenance and repair services to keep your equipment operating at peak performance.",
      features: ["Preventive care", "Emergency repairs", "Parts supply"],
    },
    {
      icon: HardHat,
      title: "Operator Training",
      description: "Professional training programs for crane operators, ensuring safety and efficiency on every project.",
      features: ["Certified programs", "Hands-on training", "Safety focus"],
    },
    {
      icon: Building,
      title: "Project Consulting",
      description: "Expert consultation for complex lifting operations and project planning to ensure optimal outcomes.",
      features: ["Site assessment", "Lift planning", "Safety protocols"],
    },
    {
      icon: Cog,
      title: "Heavy Rigging",
      description: "Specialized rigging solutions for heavy and oversized loads requiring precision and expertise.",
      features: ["Custom rigging", "Load calculations", "Safe transport"],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground font-semibold text-sm rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive <span className="text-primary">Crane Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From rental and operation to maintenance and training, we provide end-to-end 
            crane services tailored to meet your project requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-muted border border-border rounded-lg p-6 hover:bg-primary hover:border-primary transition-all duration-300"
            >
              <div className="w-14 h-14 bg-secondary/20 group-hover:bg-secondary rounded-lg flex items-center justify-center mb-6 transition-colors">
                <service.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary-foreground mb-3 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground group-hover:text-primary-foreground/80 mb-4 transition-colors">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-primary-foreground/70 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant="ghost"
                className="p-0 h-auto text-primary group-hover:text-secondary font-semibold transition-colors"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Need a custom solution for your project?
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Contact Our Experts
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
