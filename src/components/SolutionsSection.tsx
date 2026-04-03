import { Link } from "react-router-dom";
import hoistImage from "@/assets/products/electric-wire-rope-hoist.jpg";
import servicesImage from "@/assets/products/services.jpeg";
import overheadCraneImage from "@/assets/products/overhead-crane.jpg";

const solutions = [
  {
    id: "overhead-cranes",
    title: "Overhead Cranes",
    image: overheadCraneImage,
  },
  {
    id: "hoists",
    title: "Hoist",
    image: hoistImage,
  },
  {
    id: "material-handling",
    title: "Other Material Handling Equipment",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=400&fit=crop",
  },
  {
    id: "services",
    title: "Services",
    image: servicesImage,
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <Link
              key={solution.id}
              to={`/solutions/${solution.id}`}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Title */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-primary group-hover:text-primary/80 transition-colors">
                  {solution.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
