import { CheckCircle, Award, Shield, Users } from "lucide-react";
import aboutCrane from "@/assets/about-crane.jpg";

const AboutSection = () => {
  const features = [
    { icon: Award, title: "Industry Leaders", description: "25+ years of excellence in crane services" },
    { icon: Shield, title: "Safety First", description: "Zero-incident track record with certified operators" },
    { icon: Users, title: "Expert Team", description: "50+ trained professionals at your service" },
  ];

  const highlights = [
    "State-of-the-art crane fleet",
    "24/7 emergency support",
    "Competitive pricing",
    "Nationwide coverage",
    "Custom solutions",
    "ISO certified operations",
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={aboutCrane}
                alt="About Continental Cranes"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-secondary/20 rounded-lg -z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary rounded-lg -z-0" />
            
            {/* Experience badge */}
            <div className="absolute -bottom-4 -left-4 md:bottom-8 md:left-8 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg z-20">
              <div className="text-4xl md:text-5xl font-bold">25+</div>
              <div className="text-sm md:text-base opacity-90">Years of Excellence</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground font-semibold text-sm rounded-full mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Building Trust,{" "}
              <span className="text-primary">Lifting Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Continental Cranes has been at the forefront of the crane industry for over two decades. 
              We specialize in providing comprehensive crane rental services, heavy lifting solutions, 
              and expert consultation for projects of all scales. Our commitment to safety, reliability, 
              and customer satisfaction has made us the preferred choice for construction companies, 
              industrial facilities, and infrastructure developers across the nation.
            </p>

            {/* Feature cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-background p-4 rounded-lg border border-border">
                  <feature.icon className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
