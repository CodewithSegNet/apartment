import React from "react";
import WizardLayout from "../../components/wizard/WizardLayout";
import AmenityGrid from "../../components/wizard/AmenityGrid";
import { useWizard } from "../../context/WizardContext";
import { useNavigate } from "react-router-dom";
import { Tv, Fan, WashingMachine, Coffee, Wifi, Refrigerator, Bath, ShowerHead, CupSoda, Radio } from "lucide-react";

const ALL_AMENITIES = [
  { key: "free_parking", label: "Free Parking", icon: <Radio size={16} /> },
  { key: "hot_water", label: "Hot Water", icon: <ShowerHead size={16} /> },
  { key: "water_kettle", label: "Water Kettle", icon: <CupSoda size={16} /> },
  { key: "swimming_pool", label: "Swimming Pool", icon: <Bath size={16} /> },
  { key: "washing_machine", label: "Washing Machine", icon: <WashingMachine size={16} /> },
  { key: "oven", label: "Oven", icon: <Bath size={16} /> },
  { key: "towels", label: "Towels", icon: <Bath size={16} /> },
  { key: "balcony", label: "Balcony", icon: <Bath size={16} /> },
  { key: "fan", label: "Fan", icon: <Fan size={16} /> },
  { key: "sweeper", label: "Sweeper", icon: <Bath size={16} /> },
  { key: "toaster", label: "Toaster", icon: <Bath size={16} /> },
  { key: "soap", label: "Soap", icon: <Bath size={16} /> },
  { key: "smart_tv", label: "Smart TV", icon: <Tv size={16} /> },
  { key: "hair_dryer", label: "Hair Dryer", icon: <Bath size={16} /> },
  { key: "microwave", label: "Microwave", icon: <Bath size={16} /> },
  { key: "coffee_maker", label: "Coffee Maker", icon: <Coffee size={16} /> },
  { key: "essentials", label: "Essentials", icon: <Bath size={16} /> },
  { key: "wifi", label: "Wifi", icon: <Wifi size={16} /> },
  { key: "fridge", label: "Fridge", icon: <Refrigerator size={16} /> },
  { key: "blender", label: "Blender", icon: <Bath size={16} /> },
  { key: "hangers", label: "Hangers", icon: <Bath size={16} /> },
  { key: "tissue", label: "Tissue", icon: <Bath size={16} /> },
  { key: "cutlery", label: "Cutlery", icon: <Bath size={16} /> },
  { key: "wine_glasses", label: "Wine Glasses", icon: <Bath size={16} /> },
  { key: "plates", label: "Plates", icon: <Bath size={16} /> },
  { key: "wardrobe", label: "Wardrobe", icon: <Bath size={16} /> },
  { key: "air_conditioner", label: "Air Conditioner", icon: <Fan size={16} /> },
  { key: "electric_cooker", label: "Electric Cooker", icon: <Bath size={16} /> },
  { key: "fire_extinguisher", label: "Fire Extinguisher", icon: <Bath size={16} /> },
  { key: "tea_cups", label: "Tea Cups", icon: <CupSoda size={16} /> },
];

export default function Features() {
  const { state, dispatch } = useWizard();
  const navigate = useNavigate();
  const [tab, setTab] = React.useState("All");

  function next() { navigate("/upload/review"); }

  const categories = {
    All: ALL_AMENITIES,
    Electronics: ALL_AMENITIES.filter(a => ["smart_tv","microwave","fridge","wifi","fan","air_conditioner"].includes(a.key)),
    Toiletries: ALL_AMENITIES.filter(a => ["towels","soap","tissue","hair_dryer"].includes(a.key)),
    Utensils: ALL_AMENITIES.filter(a => ["toaster","coffee_maker","blender","cutlery","plates","wine_glasses","tea_cups"].includes(a.key)),
    Safety: ALL_AMENITIES.filter(a => ["fire_extinguisher"].includes(a.key)),
    More: ALL_AMENITIES.filter(a => ["balcony","wardrobe","essentials","hangers","sweeper","washing_machine","oven","free_parking","hot_water","water_kettle","swimming_pool","electric_cooker"].includes(a.key)),
  };
  const tabs = Object.keys(categories);

  return (
    <WizardLayout
      title="Showcase Its Best Features"
      subtitle="Capture your space's best angles with at least five high-quality photos. Then, add some amenities that make it special. We'll guide you every step of the way."
      rightCta={<button onClick={next} className="rounded-full bg-orange-400 text-white px-5 py-2.5 text-sm hover:bg-orange-500">Next Stage</button>}
    >
      <div className="max-w-[500px] mx-auto">
        <p className="text-base font-medium text-gray-700 mb-4">Add Stay Amenities</p>
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {tabs.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={`px-1 py-1.5 text-xs transition ${tab===t ? " text-[#FF7D01] font-semibold" : " text-[#333333]/50 font-light"}`}
            >
              {t}
            </button>
          ))}
        </div>
        <AmenityGrid
          items={categories[tab]}
          value={state.features}
          onChange={(val)=>dispatch({type:"SET_FEATURES", payload: val})}
        />
      </div>
    </WizardLayout>
  );
}



