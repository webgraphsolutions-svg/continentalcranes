import { useState } from "react";
import { MapPin, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
    { id: "infrastructure", label: "Infrastructure" },
  ];

  const projects = [
    {
      id: 1,
      title: "Metro City Tower",
      category: "commercial",
      location: "New York, NY",
      year: "2024",
      description: "50-story commercial tower construction requiring precision tower crane operations.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80",
    },
    {
      id: 2,
      title: "Harbor Bridge Expansion",
      category: "infrastructure",
      location: "San Francisco, CA",
      year: "2023",
      description: "Major bridge expansion project with complex heavy lifting requirements.",
      image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=600&q=80",
    },
    {
      id: 3,
      title: "Industrial Complex",
      category: "industrial",
      location: "Houston, TX",
      year: "2024",
      description: "Large-scale industrial facility construction with multiple crane deployments.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
    },
    {
      id: 4,
      title: "Downtown Plaza",
      category: "commercial",
      location: "Chicago, IL",
      year: "2023",
      description: "Mixed-use development requiring coordinated crane operations.",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80",
    },
    {
      id: 5,
      title: "Power Plant Upgrade",
      category: "industrial",
      location: "Denver, CO",
      year: "2024",
      description: "Critical infrastructure upgrade with specialized heavy rigging solutions.",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80",
    },
    {
      id: 6,
      title: "Highway Overpass",
      category: "infrastructure",
      location: "Miami, FL",
      year: "2023",
      description: "Highway expansion project with traffic-managed crane operations.",
      image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=600&q=80",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground font-semibold text-sm rounded-full mb-4">
            Our Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-primary">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our portfolio of successful projects across various industries and scales.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className={activeFilter === filter.id 
                ? "bg-primary text-primary-foreground" 
                : "border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
              }
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-background rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block px-2 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded capitalize">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
