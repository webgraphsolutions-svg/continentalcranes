import singleGirderCrane from "@/assets/products/single-girder-eot-crane.jpg";
import electricWireRopeHoist from "@/assets/products/electric-wire-rope-hoist.jpg";
import scissorLift from "@/assets/products/scissor-lift.jpg";
import doubleGirderCrane from "@/assets/products/double-girder-eot-crane.jpg";
import goliathGantryCrane from "@/assets/products/goliath-gantry-crane.jpg";
import underhungCrane from "@/assets/products/underhung-crane.jpg";

export interface Product {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  image: string;
  features: string[];
  specifications?: { label: string; value: string }[];
  applications?: string[];
}

export const productsData: Product[] = [
  {
    id: "single-girder-eot-crane",
    title: "Single Girder EOT Crane",
    shortDescription: "Perfect for light to medium duty applications with superior cost-effectiveness and reliability.",
    longDescription: "Our Single Girder EOT (Electric Overhead Traveling) Cranes are engineered for optimal performance in light to medium duty applications. These cranes offer an excellent balance of functionality, durability, and cost-effectiveness, making them ideal for warehouses, workshops, and manufacturing facilities.",
    image: singleGirderCrane,
    features: [
      "Cost-effective solution",
      "Easy maintenance",
      "Quick installation",
      "Reliable performance",
      "Smooth and precise operation",
      "Low headroom design"
    ],
    specifications: [
      { label: "Capacity", value: "1 - 20 Tons" },
      { label: "Span", value: "Up to 30 meters" },
      { label: "Lifting Height", value: "As per requirement" },
      { label: "Duty Class", value: "M3 to M6" },
      { label: "Control", value: "Pendant / Radio Remote" }
    ],
    applications: [
      "Manufacturing facilities",
      "Warehouses",
      "Assembly lines",
      "Workshops",
      "Loading/unloading areas"
    ]
  },
  {
    id: "electric-wire-rope-hoist",
    title: "Power Master Electric Wire Rope Hoist",
    shortDescription: "Designed as per IS 3938 – 1983 (R2012), suitable for light and medium-duty applications with heavy-duty fabricated structure.",
    longDescription: "Power Master Electric Wire Rope Hoists are designed as per IS 3938 – 1983 (R2012) and are suitable for light and medium-duty applications. Heavy-duty fabricated Structure for hoisting & trolley, Cast iron Gear Box Housings with High Precision-cut Oil Cooled Helical internal gears & Pinion makes this machine the most demanding Machine in the industry. All Standard models of Electric wire rope hoists are designed with M5 & M6 rated Gearboxes to improve machine performance. We also offer specially build M8 duty wire rope hoist for continuous usage.",
    image: electricWireRopeHoist,
    features: [
      "Heavy-duty fabricated structure",
      "Cast iron gear box housings",
      "High precision-cut oil cooled helical gears",
      "M5 & M6 rated gearboxes",
      "Available in M8 duty for continuous usage",
      "IS 3938 – 1983 (R2012) compliant"
    ],
    specifications: [
      { label: "Capacity", value: "0.5 - 20 Tons" },
      { label: "Lifting Speed", value: "As per requirement" },
      { label: "Duty Rating", value: "M5, M6, M8" },
      { label: "Standards", value: "IS 3938 – 1983 (R2012)" },
      { label: "Control", value: "Pendant / Radio Remote" }
    ],
    applications: [
      "Steel plants",
      "Foundries",
      "Heavy engineering works",
      "Manufacturing units",
      "Assembly shops"
    ]
  },
  {
    id: "scissor-lift",
    title: "Scissor Lifts",
    shortDescription: "High bearing capacity aerial work platform with excellent stability, low failure rate, and reliable operation.",
    longDescription: "Scissor Lifts, using the scissor's mechanical structure, with a special process of welding and become the high strength of connecting rod, the machine has high bearing capacity and excellent stability, given its solid structure, low failure rate, reliable operation, safety and efficiency, convenient maintenance and other advantages, the scissor lift is the most widely used worldwide aerial work platform. The scissor lifts are equipped with different working platforms of different sizes according to different models, which is suitable for multiple people to work at the same time. In actual working conditions, the scissor lifts have been widely used in industry, commerce, construction and other fields, including but not limited to shipyards, large buildings, power grid nuclear power plants, aerospace, logistics and warehousing, subway high-speed rail, tunnel construction, film and television shooting, indoor and outdoor decoration, urban construction, etc.",
    image: scissorLift,
    features: [
      "High bearing capacity",
      "Excellent stability",
      "Low failure rate",
      "Reliable operation",
      "Safe and efficient",
      "Convenient maintenance"
    ],
    specifications: [
      { label: "Platform Height", value: "4m - 18m" },
      { label: "Load Capacity", value: "300kg - 1000kg" },
      { label: "Power", value: "AC / DC / Diesel" },
      { label: "Platform Size", value: "Customizable" },
      { label: "Control", value: "Platform / Ground control" }
    ],
    applications: [
      "Shipyards",
      "Large buildings",
      "Power plants",
      "Aerospace",
      "Logistics and warehousing",
      "Construction sites",
      "Film and television",
      "Indoor and outdoor decoration"
    ]
  },
  {
    id: "double-girder-eot-crane",
    title: "Double Girder EOT Crane",
    shortDescription: "Heavy-duty industrial powerhouse designed for the most demanding lifting applications.",
    longDescription: "Our Double Girder EOT Cranes are engineered to handle the most demanding industrial lifting applications. With dual main beams, these cranes offer superior stability and maximum load capacity, making them ideal for heavy manufacturing, steel plants, and infrastructure projects. Built for continuous heavy-duty operation with exceptional durability.",
    image: doubleGirderCrane,
    features: [
      "Maximum capacity",
      "Superior stability",
      "Long working life",
      "Industrial grade",
      "Heavy-duty construction",
      "Precision control systems"
    ],
    specifications: [
      { label: "Capacity", value: "10 - 200 Tons" },
      { label: "Span", value: "Up to 35 meters" },
      { label: "Lifting Height", value: "As per requirement" },
      { label: "Duty Class", value: "M5 to M8" },
      { label: "Control", value: "Cabin / Radio Remote" }
    ],
    applications: [
      "Steel plants",
      "Heavy engineering works",
      "Power plants",
      "Foundries",
      "Shipyards",
      "Infrastructure projects"
    ]
  },
  {
    id: "goliath-gantry-crane",
    title: "Goliath / Gantry Crane",
    shortDescription: "Massive outdoor cranes designed for handling heavy loads in open yards, ports, and construction sites.",
    longDescription: "Goliath and Gantry Cranes are robust outdoor lifting solutions designed for heavy-duty applications in open environments. These cranes travel on ground-level rails, eliminating the need for building-mounted runways. Ideal for shipyards, container terminals, precast yards, and large construction projects where overhead support structures are not feasible.",
    image: goliathGantryCrane,
    features: [
      "Ground-level operation",
      "No building support required",
      "Heavy load capacity",
      "Outdoor weather resistant",
      "Long span capability",
      "Robust construction"
    ],
    specifications: [
      { label: "Capacity", value: "20 - 500 Tons" },
      { label: "Span", value: "Up to 50 meters" },
      { label: "Lifting Height", value: "As per requirement" },
      { label: "Duty Class", value: "M5 to M8" },
      { label: "Control", value: "Cabin / Radio Remote" }
    ],
    applications: [
      "Shipyards",
      "Container terminals",
      "Precast concrete yards",
      "Steel stockyards",
      "Power plant construction",
      "Heavy equipment assembly"
    ]
  },
  {
    id: "underhung-crane",
    title: "Underhung / Under Running Crane",
    shortDescription: "Space-saving crane solution that runs on the bottom flange of runway beams, maximizing floor space utilization.",
    longDescription: "Underhung or Under Running Cranes are specially designed to operate on the bottom flange of runway beams, providing maximum headroom and floor space utilization. These cranes are perfect for facilities with limited overhead clearance or where column-free floor space is critical. Ideal for assembly lines, machine shops, and maintenance areas.",
    image: underhungCrane,
    features: [
      "Maximum headroom utilization",
      "Space-saving design",
      "Flexible runway layout",
      "Smooth operation",
      "Easy installation",
      "Cost-effective solution"
    ],
    specifications: [
      { label: "Capacity", value: "0.5 - 10 Tons" },
      { label: "Span", value: "Up to 20 meters" },
      { label: "Lifting Height", value: "As per requirement" },
      { label: "Duty Class", value: "M3 to M5" },
      { label: "Control", value: "Pendant / Radio Remote" }
    ],
    applications: [
      "Assembly lines",
      "Machine shops",
      "Maintenance areas",
      "Warehouses",
      "Paint shops",
      "Clean room facilities"
    ]
  }
];
