import { Link } from "react-router-dom";
import { Construction, Package, Wrench, Settings } from "lucide-react";

const solutions = [
  {
    id: "overhead-cranes",
    title: "Overhead Cranes",
    icon: Construction,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop",
    description: "Double & Single Girder EOT Cranes for all industrial applications",
  },
  {
    id: "hoists",
    title: "Hoists",
    icon: Package,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
    description: "Electric Wire Rope & Chain Hoists for precise lifting operations",
  },
  {
    id: "material-handling",
    title: "Other Material Handling Equipment",
    icon: Settings,
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=400&fit=crop",
    description: "Gantry Cranes, Jib Cranes, and specialized lifting solutions",
  },
  {
    id: "services",
    title: "Services",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=400&fit=crop",
    description: "Installation, Maintenance, and After-Sales Support",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary/10 text-secondary-foreground font-semibold text-sm rounded-full mb-4">
            Our Solutions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive range of material handling equipment and services
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution) => (
            <Link
              key={solution.id}
              to={`/solutions/${solution.id}`}
              className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4 w-14 h-14 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                  <solution.icon className="w-7 h-7 text-secondary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {solution.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
