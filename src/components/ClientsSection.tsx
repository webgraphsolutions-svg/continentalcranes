import heroLogo from "@/assets/clients/hero.jpg";
import sunPharma from "@/assets/clients/sun-pharma.jpg";
import marutiSuzuki from "@/assets/clients/maruti-suzuki.jpg";
import ltPower from "@/assets/clients/lt-power.jpg";
import denso from "@/assets/clients/denso.jpg";
import voltas from "@/assets/clients/voltas.jpg";
import mahindra from "@/assets/clients/mahindra.jpg";
import jindal from "@/assets/clients/jindal.jpg";
import ultratech from "@/assets/clients/ultratech.jpg";
import honda from "@/assets/clients/honda.jpg";

const clients = [
  { name: "Hero", logo: heroLogo },
  { name: "Sun Pharma", logo: sunPharma },
  { name: "Maruti Suzuki", logo: marutiSuzuki },
  { name: "L&T Power", logo: ltPower },
  { name: "Denso", logo: denso },
  { name: "Voltas Limited", logo: voltas },
  { name: "Mahindra", logo: mahindra },
  { name: "Jindal Steel & Power", logo: jindal },
  { name: "UltraTech Cement", logo: ultratech },
  { name: "Honda", logo: honda },
];

const ClientsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground font-semibold text-sm rounded-full mb-4">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Proudly serving India's leading companies across industries.
          </p>
        </div>
      </div>

      {/* Infinite scroll carousel */}
      <div className="relative">
        <div className="flex animate-scroll">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 mx-6 flex items-center justify-center"
            >
              <div className="bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow w-full h-28 flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 max-w-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
