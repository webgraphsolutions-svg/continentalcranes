import singleGirderCrane from "@/assets/products/single-girder-eot-crane.jpg";
import electricWireRopeHoist from "@/assets/products/electric-wire-rope-hoist.jpg";
import scissorLift from "@/assets/products/scissor-lift.jpg";
import doubleGirderCrane from "@/assets/products/double-girder-eot-crane.jpg";
import goliathGantryCrane from "@/assets/products/goliath-gantry-crane.jpg";
import underhungCrane from "@/assets/products/underhung-crane.jpg";
import handPalletTruck from "@/assets/products/hand-pallet-truck.jpg";
import stacker from "@/assets/products/stacker.jpg";
import hydraulicFloorCrane from "@/assets/products/hydraulic-floor-crane.jpg";
import drumHandling from "@/assets/products/drum-handling.jpg";
import liftTable from "@/assets/products/lift-table.jpg";
import forklift from "@/assets/products/forklift.jpg";
import chainHoist from "@/assets/products/chain-hoist.jpg";
import jibCrane from "@/assets/products/jib-crane.jpg";

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
  },
  {
    id: "hand-pallet-truck",
    title: "Hand Pallet Truck",
    shortDescription: "Essential warehouse equipment for efficient horizontal movement of palletized goods.",
    longDescription: "Hand Pallet Trucks are the backbone of warehouse operations, providing efficient and cost-effective horizontal transportation of palletized goods. Our range includes standard, weighing scale, and high-lift variants to suit various operational needs. Ergonomically designed for operator comfort with smooth hydraulic lifting mechanism.",
    image: handPalletTruck,
    features: [
      "Ergonomic handle design",
      "Smooth hydraulic lifting",
      "Durable steel construction",
      "Precision steering",
      "Low maintenance",
      "Various capacity options"
    ],
    specifications: [
      { label: "Capacity", value: "1 - 5 Tons" },
      { label: "Fork Length", value: "800mm - 1500mm" },
      { label: "Lifting Height", value: "85mm - 200mm" },
      { label: "Fork Width", value: "520mm - 685mm" },
      { label: "Type", value: "Standard / Weighing / High-Lift" }
    ],
    applications: [
      "Warehouses",
      "Distribution centers",
      "Retail stores",
      "Manufacturing plants",
      "Loading docks",
      "Cold storage facilities"
    ]
  },
  {
    id: "electric-stacker",
    title: "Electric Stacker",
    shortDescription: "Battery-powered vertical lifting solution for efficient stacking and retrieval of pallets.",
    longDescription: "Electric Stackers combine the functionality of a forklift with the maneuverability of a pallet truck. Available in walkie, rider, and reach variants, these machines are perfect for indoor warehouse operations. Battery-powered for zero emissions and quiet operation, with precise control for safe stacking at height.",
    image: stacker,
    features: [
      "Battery powered operation",
      "Zero emissions",
      "Precise lifting control",
      "Compact maneuvering",
      "Ergonomic controls",
      "Low noise operation"
    ],
    specifications: [
      { label: "Capacity", value: "1 - 2 Tons" },
      { label: "Lift Height", value: "Up to 5.5 meters" },
      { label: "Power", value: "24V / 48V Battery" },
      { label: "Type", value: "Walkie / Rider / Reach" },
      { label: "Control", value: "AC Motor Drive" }
    ],
    applications: [
      "Warehouses",
      "Distribution centers",
      "Manufacturing facilities",
      "Retail stockrooms",
      "Food processing",
      "Pharmaceutical storage"
    ]
  },
  {
    id: "hydraulic-floor-crane",
    title: "Hydraulic Floor Crane",
    shortDescription: "Mobile workshop crane for versatile lifting and positioning of heavy machinery and components.",
    longDescription: "Hydraulic Floor Cranes, also known as shop cranes or engine hoists, are essential tools for maintenance workshops and production floors. The telescopic boom provides adjustable reach and capacity, while the mobile base allows easy positioning. Ideal for lifting engines, motors, and heavy components during maintenance or assembly.",
    image: hydraulicFloorCrane,
    features: [
      "Telescopic boom design",
      "Adjustable capacity positions",
      "Mobile castor wheels",
      "Compact storage folding",
      "Heavy-duty construction",
      "Easy hydraulic operation"
    ],
    specifications: [
      { label: "Capacity", value: "0.5 - 3 Tons" },
      { label: "Boom Reach", value: "4 position adjustable" },
      { label: "Max Height", value: "Up to 2.4 meters" },
      { label: "Operation", value: "Hydraulic foot pump" },
      { label: "Mobility", value: "4 castors with brakes" }
    ],
    applications: [
      "Automotive workshops",
      "Machinery maintenance",
      "Production floors",
      "Assembly stations",
      "Tool rooms",
      "Equipment installation"
    ]
  },
  {
    id: "drum-handling-equipment",
    title: "Drum Handling Equipment",
    shortDescription: "Specialized equipment for safe handling, lifting, and tilting of industrial drums and barrels.",
    longDescription: "Our Drum Handling Equipment range provides safe and efficient solutions for lifting, moving, tilting, and dispensing from industrial drums. Available as manual or powered units, these specialized tools reduce operator strain and prevent spillage. Suitable for steel, plastic, and fiber drums in various sizes.",
    image: drumHandling,
    features: [
      "360° drum rotation",
      "Controlled tilting mechanism",
      "Multiple drum compatibility",
      "Secure grip design",
      "Manual or powered options",
      "Spill prevention features"
    ],
    specifications: [
      { label: "Capacity", value: "250 - 500 kg" },
      { label: "Drum Size", value: "210 liters (55 gallon)" },
      { label: "Lift Height", value: "Up to 1.5 meters" },
      { label: "Rotation", value: "360° continuous" },
      { label: "Type", value: "Lifter / Tilter / Rotator" }
    ],
    applications: [
      "Chemical plants",
      "Oil and lubricant facilities",
      "Food processing",
      "Pharmaceutical manufacturing",
      "Paint and coating industries",
      "Hazardous material handling"
    ]
  },
  {
    id: "lift-table",
    title: "Hydraulic Lift Table",
    shortDescription: "Versatile lifting platform for ergonomic work positioning and material transfer operations.",
    longDescription: "Hydraulic Lift Tables provide ergonomic lifting solutions for assembly, packaging, and material transfer operations. The scissor mechanism ensures stable, level lifting with high load capacity. Available in stationary, mobile, and tilting configurations to suit various industrial applications.",
    image: liftTable,
    features: [
      "Stable scissor mechanism",
      "Level platform lifting",
      "High load capacity",
      "Safety toe guards",
      "Maintenance-free design",
      "Multiple configurations"
    ],
    specifications: [
      { label: "Capacity", value: "500 kg - 5 Tons" },
      { label: "Platform Size", value: "Customizable" },
      { label: "Lift Height", value: "Up to 1.7 meters" },
      { label: "Power", value: "Electric / Hydraulic" },
      { label: "Type", value: "Fixed / Mobile / Tilting" }
    ],
    applications: [
      "Assembly lines",
      "Packaging stations",
      "Loading docks",
      "Die handling",
      "Ergonomic workstations",
      "Material transfer"
    ]
  },
  {
    id: "forklift",
    title: "Forklift Truck",
    shortDescription: "Powerful industrial vehicle for lifting, moving, and stacking heavy loads in warehouses and yards.",
    longDescription: "Forklift Trucks are the workhorses of material handling, capable of lifting, moving, and stacking heavy palletized loads efficiently. Our range includes diesel, electric, and LPG powered models in various capacities. Designed for demanding industrial environments with robust construction and operator comfort.",
    image: forklift,
    features: [
      "High lifting capacity",
      "Multiple power options",
      "Robust construction",
      "Operator comfort cabin",
      "Excellent visibility",
      "Low maintenance design"
    ],
    specifications: [
      { label: "Capacity", value: "1.5 - 10 Tons" },
      { label: "Lift Height", value: "Up to 6 meters" },
      { label: "Power", value: "Diesel / Electric / LPG" },
      { label: "Mast Type", value: "Duplex / Triplex" },
      { label: "Transmission", value: "Automatic / Manual" }
    ],
    applications: [
      "Warehouses",
      "Container yards",
      "Manufacturing plants",
      "Lumber yards",
      "Steel stockyards",
      "Distribution centers"
    ]
  },
  {
    id: "electric-chain-hoist",
    title: "Electric Chain Hoist",
    shortDescription: "Compact and reliable lifting solution for precise material handling in workshops and production lines.",
    longDescription: "Electric Chain Hoists provide reliable vertical lifting in a compact package. The load chain design offers precise control and durability, making these hoists ideal for production lines, assembly operations, and workshop applications. Available with various trolley options for horizontal movement along beams.",
    image: chainHoist,
    features: [
      "Compact design",
      "Precise speed control",
      "Durable load chain",
      "Overload protection",
      "Low headroom option",
      "Pendant or radio control"
    ],
    specifications: [
      { label: "Capacity", value: "0.25 - 5 Tons" },
      { label: "Lifting Speed", value: "Single / Dual speed" },
      { label: "Duty Class", value: "M3 to M5" },
      { label: "Standards", value: "IS 3938" },
      { label: "Control", value: "Pendant / Radio Remote" }
    ],
    applications: [
      "Assembly lines",
      "Workshops",
      "Production floors",
      "Maintenance bays",
      "Loading areas",
      "Tool rooms"
    ]
  },
  {
    id: "jib-crane",
    title: "Jib Crane",
    shortDescription: "Floor or wall mounted crane providing 180° to 360° rotation for localized material handling.",
    longDescription: "Jib Cranes provide efficient point-to-point material handling within a defined work area. Available as pillar mounted (360° rotation) or wall mounted (180° rotation) configurations. Perfect for machine loading, assembly operations, and workstation material handling where overhead cranes are not practical.",
    image: jibCrane,
    features: [
      "360° or 180° rotation",
      "Floor or wall mounting",
      "Manual or motorized slew",
      "Various boom lengths",
      "Space efficient design",
      "Easy installation"
    ],
    specifications: [
      { label: "Capacity", value: "0.25 - 5 Tons" },
      { label: "Boom Length", value: "Up to 8 meters" },
      { label: "Rotation", value: "180° / 360°" },
      { label: "Mounting", value: "Pillar / Wall / Ceiling" },
      { label: "Slewing", value: "Manual / Motorized" }
    ],
    applications: [
      "Machine loading",
      "Assembly workstations",
      "Loading docks",
      "Maintenance areas",
      "Die and mold handling",
      "Workshop applications"
    ]
  }
];
