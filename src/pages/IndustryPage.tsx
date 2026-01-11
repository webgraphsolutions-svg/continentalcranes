import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const industriesData = {
  construction: {
    title: "Construction",
    icon: Building2,
    heroImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    description: "Continental Cranes provides comprehensive lifting solutions for the construction industry, from high-rise buildings to large-scale infrastructure projects.",
    longDescription: "Our construction sector services encompass everything from tower crane installation and operation to mobile crane rentals for various construction phases. We understand the unique challenges of construction sites and provide equipment and expertise that ensures projects stay on schedule and within budget.",
    services: [
      "Tower crane installation and dismantling",
      "Mobile crane rental for all project phases",
      "Heavy steel erection and placement",
      "Precast concrete panel installation",
      "HVAC equipment lifting and placement",
      "Material handling and logistics support",
    ],
    projects: [
      { name: "Metro City Tower", location: "New York, NY", type: "50-story commercial building" },
      { name: "Harbor View Complex", location: "Miami, FL", type: "Mixed-use development" },
      { name: "Downtown Plaza", location: "Chicago, IL", type: "Retail and office complex" },
    ],
  },
  "oil-gas": {
    title: "Oil & Gas",
    icon: Droplets,
    heroImage: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=1200&q=80",
    description: "Specialized heavy lifting and rigging solutions for the oil and gas industry, including refineries, offshore platforms, and petrochemical facilities.",
    longDescription: "Our oil and gas services are designed to meet the stringent safety and operational requirements of this demanding industry. We provide certified operators and equipment capable of handling the most challenging lifts in hazardous environments.",
    services: [
      "Refinery turnaround support",
      "Module and vessel installation",
      "Pipeline construction support",
      "Offshore platform equipment lifts",
      "Tank and reactor placement",
      "Emergency response lifting services",
    ],
    projects: [
      { name: "Gulf Coast Refinery", location: "Houston, TX", type: "Refinery expansion" },
      { name: "Permian Basin Operations", location: "Midland, TX", type: "Drilling operations" },
      { name: "LNG Terminal Project", location: "Freeport, TX", type: "Terminal construction" },
    ],
  },
  "power-energy": {
    title: "Power & Energy",
    icon: Zap,
    heroImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80",
    description: "Crane and rigging services for power generation facilities, including conventional plants, renewable energy, and grid infrastructure.",
    longDescription: "Continental Cranes supports the power and energy sector with specialized lifting solutions for turbine installation, transformer placement, and renewable energy projects. Our experience spans coal, natural gas, nuclear, wind, and solar installations.",
    services: [
      "Wind turbine installation and maintenance",
      "Solar panel array construction support",
      "Transformer and generator placement",
      "Cooling tower construction",
      "Transmission line support",
      "Power plant maintenance lifts",
    ],
    projects: [
      { name: "Wind Farm Project", location: "Amarillo, TX", type: "100+ turbine installation" },
      { name: "Solar Array Installation", location: "Phoenix, AZ", type: "Utility-scale solar" },
      { name: "Power Plant Upgrade", location: "Denver, CO", type: "Generator replacement" },
    ],
  },
  manufacturing: {
    title: "Manufacturing",
    icon: Factory,
    heroImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    description: "Industrial crane services for manufacturing facilities, including equipment installation, production line setup, and plant maintenance.",
    longDescription: "We provide precision lifting solutions for manufacturing facilities of all sizes. From installing new production equipment to relocating entire manufacturing lines, our team has the expertise and equipment to minimize downtime and maximize efficiency.",
    services: [
      "Heavy machinery installation",
      "Production line equipment moves",
      "Plant expansion support",
      "Equipment relocation services",
      "Precision placement operations",
      "Scheduled maintenance support",
    ],
    projects: [
      { name: "Automotive Plant Expansion", location: "Detroit, MI", type: "Assembly line installation" },
      { name: "Steel Mill Modernization", location: "Pittsburgh, PA", type: "Equipment upgrade" },
      { name: "Food Processing Facility", location: "Kansas City, MO", type: "New line installation" },
    ],
  },
  shipbuilding: {
    title: "Shipbuilding",
    icon: Ship,
    heroImage: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=1200&q=80",
    description: "Marine and shipyard crane services for vessel construction, repair, and port operations.",
    longDescription: "Continental Cranes provides specialized lifting solutions for the maritime industry. Our equipment and expertise support shipyards, port facilities, and marine construction projects with the precision and reliability required for these demanding applications.",
    services: [
      "Hull section assembly and placement",
      "Engine and propulsion system installation",
      "Ship repair and maintenance lifts",
      "Port equipment installation",
      "Barge loading and unloading",
      "Marine salvage support",
    ],
    projects: [
      { name: "Naval Shipyard Project", location: "Norfolk, VA", type: "Vessel construction" },
      { name: "Port Expansion", location: "Long Beach, CA", type: "Crane installation" },
      { name: "Cruise Ship Retrofit", location: "Fort Lauderdale, FL", type: "Major renovation" },
    ],
  },
  mining: {
    title: "Mining",
    icon: Pickaxe,
    heroImage: "https://images.unsplash.com/photo-1578496479531-32e296d5c6e1?w=1200&q=80",
    description: "Heavy lifting solutions for mining operations, including equipment installation, maintenance, and processing facility construction.",
    longDescription: "Our mining industry services are built around the unique challenges of remote locations and demanding operational requirements. We provide reliable crane services for surface and underground mining operations, processing facilities, and infrastructure development.",
    services: [
      "Dragline and excavator assembly",
      "Conveyor system installation",
      "Processing plant construction",
      "Haul truck maintenance support",
      "Crusher and mill installation",
      "Mine infrastructure development",
    ],
    projects: [
      { name: "Copper Mine Expansion", location: "Tucson, AZ", type: "Processing upgrade" },
      { name: "Coal Mining Operations", location: "Gillette, WY", type: "Equipment installation" },
      { name: "Gold Processing Facility", location: "Elko, NV", type: "New plant construction" },
    ],
  },
  automotive: {
    title: "Automotive",
    icon: Car,
    heroImage: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80",
    description: "Precision crane services for automotive manufacturing, including assembly plant construction and equipment installation.",
    longDescription: "Continental Cranes supports the automotive industry with precision lifting solutions designed to meet the exacting standards of modern manufacturing. From plant construction to equipment installation and maintenance, we deliver reliable service that keeps production moving.",
    services: [
      "Press line installation",
      "Robotic cell placement",
      "Paint booth equipment lifts",
      "Assembly line construction",
      "Stamping equipment moves",
      "Plant maintenance support",
    ],
    projects: [
      { name: "EV Battery Plant", location: "Nashville, TN", type: "New facility construction" },
      { name: "Assembly Plant Upgrade", location: "Louisville, KY", type: "Line modernization" },
      { name: "Testing Facility", location: "Ann Arbor, MI", type: "Equipment installation" },
    ],
  },
  aerospace: {
    title: "Aerospace",
    icon: Plane,
    heroImage: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&q=80",
    description: "Specialized lifting services for aerospace manufacturing, space facilities, and aviation infrastructure projects.",
    longDescription: "We provide precision crane services for the aerospace industry, where tolerances are tight and safety is paramount. Our experienced operators and specialized equipment handle everything from aircraft component manufacturing to space launch facility construction.",
    services: [
      "Aircraft assembly support",
      "Hangar construction lifts",
      "Engine and component installation",
      "Space launch infrastructure",
      "Satellite facility construction",
      "Aviation maintenance support",
    ],
    projects: [
      { name: "Spacecraft Assembly Building", location: "Cape Canaveral, FL", type: "Facility construction" },
      { name: "Aircraft Manufacturing Plant", location: "Wichita, KS", type: "Production expansion" },
      { name: "MRO Hangar Project", location: "Oklahoma City, OK", type: "New hangar construction" },
    ],
  },
};

const IndustryPage = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const industry = industryId ? industriesData[industryId as keyof typeof industriesData] : null;

  if (!industry) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Industry Not Found</h1>
            <p className="text-muted-foreground mb-8">The industry you're looking for doesn't exist.</p>
            <Link to="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = industry.icon;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-28">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${industry.heroImage})` }}
          >
            <div className="absolute inset-0 bg-foreground/80" />
          </div>
          <div className="relative container mx-auto px-4">
            <Link 
              to="/#industries" 
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-secondary mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Industries
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground">
                {industry.title}
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/90 max-w-3xl">
              {industry.description}
            </p>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Industry <span className="text-primary">Expertise</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {industry.longDescription}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/#contact">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Phone className="w-5 h-5 mr-2" />
                      Request Quote
                    </Button>
                  </Link>
                  <Link to="/#services">
                    <Button size="lg" variant="outline">
                      View All Services
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={industry.heroImage} 
                  alt={industry.title}
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg">
                  <div className="text-4xl font-bold">25+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Our {industry.title} <span className="text-primary">Services</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industry.services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-background p-6 rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-foreground font-medium">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {industry.projects.map((project, index) => (
                <div 
                  key={index}
                  className="bg-muted p-6 rounded-lg border border-border hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.name}</h3>
                  <p className="text-primary font-medium mb-2">{project.type}</p>
                  <p className="text-muted-foreground text-sm">{project.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Discuss Your {industry.title} Project?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Our team of experts is ready to help you with your next heavy lifting challenge.
            </p>
            <Link to="/#contact">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Get a Free Consultation
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default IndustryPage;
