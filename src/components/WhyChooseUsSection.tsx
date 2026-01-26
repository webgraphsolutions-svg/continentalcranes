import { Award, Headphones, Clock, ShieldCheck, Wrench, ClipboardCheck, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Award,
    iconBg: "bg-destructive",
    title: "25+ Years Experience",
    description: "Decades of expertise in crane manufacturing with deep understanding of industrial needs.",
    points: ["Industry Expertise", "Proven Track Record", "Trusted Partner"],
  },
  {
    icon: Headphones,
    iconBg: "bg-primary",
    title: "24/7 Support",
    description: "Round-the-clock technical support and maintenance services across India.",
    points: ["24/7 Availability", "Expert Technicians", "Pan India Service"],
  },
  {
    icon: Clock,
    iconBg: "bg-secondary",
    title: "On-Time Delivery",
    description: "Committed to project deadlines with efficient manufacturing and logistics.",
    points: ["Timely Delivery", "Project Management", "Efficient Process"],
  },
  {
    icon: ShieldCheck,
    iconBg: "bg-green-600",
    title: "Quality Assurance",
    description: "ISO certified manufacturing with rigorous quality control. Every crane undergoes comprehensive testing.",
    points: ["ISO 9001:2015 Certified", "100% Quality Tested", "3-Year Warranty"],
  },
  {
    icon: Wrench,
    iconBg: "bg-primary",
    title: "Customization Experts",
    description: "Tailored solutions designed to meet your specific requirements. No two projects are the same.",
    points: ["Custom Engineering", "Flexible Design", "Unique Solutions"],
  },
  {
    icon: ClipboardCheck,
    iconBg: "bg-emerald-500",
    title: "Certified Manufacturers",
    description: "Delivering High-Quality, Low-Maintenance Solutions You Can Trust.",
    points: ["Skilled Engineers", "Quality Specialists", "Expert Team"],
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground font-semibold text-sm rounded-full mb-6">
            <Award className="w-4 h-4" />
            Why Choose Continental Cranes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Trusted <span className="text-secondary">EOT Crane</span> Manufacturer & Supplier
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-3xl mx-auto">
            We design, manufacture, and supply robust EOT cranes engineered for heavy-duty industrial performance. 
            From factories and warehouses to steel plants and power projects, our cranes are built to deliver 
            maximum lifting efficiency, safety, and long service life with minimal maintenance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 border border-border shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${feature.iconBg} rounded-xl flex items-center justify-center mb-5`}>
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>

              {/* Description */}
              <p className="text-muted-foreground mb-4">{feature.description}</p>

              {/* Points */}
              <ul className="space-y-2">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
