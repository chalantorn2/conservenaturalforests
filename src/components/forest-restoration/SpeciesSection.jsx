import { useState } from "react";

const species = [
  {
    name: "Benjamin's Fig",
    scientific: "Ficus benjamina",
    thai: "Ton Sai Yooi Bai Lehm / \u0e15\u0e49\u0e19\u0e44\u0e17\u0e23\u0e22\u0e49\u0e2d\u0e22\u0e43\u0e1a\u0e41\u0e2b\u0e25\u0e21",
    image: "/Forest_Restoration/Benjamins-Fig.png",
    facts: [
      "Fruits attract birds, bats, and fig wasps",
      "Often used as houseplants",
      "Medicinal use: root and leaves boiled in oil and applied on wounds and bruises",
      "Official tree of Bangkok",
    ],
  },
  {
    name: "Burmese Pink Cassia",
    scientific: "Cassia reginera",
    thai: "Kan-la-pa-pruek / \u0e01\u0e31\u0e25\u0e1b\u0e1e\u0e24\u0e01\u0e29",
    image: "/Forest_Restoration/Burmese-Pink-Cassia.png",
    facts: [
      "One of Thailand's Nine Auspicious Trees",
      "Said to be a source of good luck",
      "Attracts pollinators",
    ],
  },
  {
    name: "Burmese Rosewood",
    scientific: "Dalbergia oliveri",
    thai: "Rang-dang / \u0e23\u0e31\u0e07\u0e41\u0e14\u0e07",
    image: "/Forest_Restoration/Burmese-Rosewood.png",
    facts: [
      "Critically endangered",
      "Once worth more than gold per ounce",
      "Beautiful, strong timber",
      "Attracts pollinators",
    ],
  },
  {
    name: "Cluster Fig",
    scientific: "Ficus racemosa",
    thai: "Ma Dua U Tum Pon / \u0e15\u0e49\u0e19\u0e21\u0e30\u0e40\u0e14\u0e37\u0e48\u0e2d\u0e2d\u0e38\u0e17\u0e38\u0e21\u0e1e\u0e23",
    image: "/Forest_Restoration/Cluster-Fig.png",
    facts: [
      "Fire-resilient",
      "Attracts birds and other seed dispersers",
      "Edible fruit, leaves, roots",
      "Medicinal use: anti-inflammatory, digestive",
    ],
  },
  {
    name: "Ebony (Ceylon)",
    scientific: "Diospyrus ebenum",
    thai: "Ma-kluea / \u0e21\u0e30\u0e40\u0e01\u0e25\u0e37\u0e2d",
    image: "/Forest_Restoration/Ebony-Ceylon.png",
    facts: [
      "Extremely dense wood - sinks in water",
      "Durable, valuable timber",
      "Food source for many animals, including elephants",
    ],
  },
  {
    name: "Golden Shower",
    scientific: "Cassia fistula",
    thai: "Ton-koon / \u0e15\u0e19\u0e04\u0e39\u0e19",
    image: "/Forest_Restoration/Golden-Shower.png",
    facts: [
      "National tree of Thailand",
      "National flower of Thailand",
      "Nitrogen-fixer",
      "Drought-tolerant",
    ],
  },
  {
    name: "Golden Teak",
    scientific: "Tectona grandis",
    thai: "Ton Sak / \u0e15\u0e49\u0e19\u0e2a\u0e31\u0e01",
    image: "/Forest_Restoration/Golden-Teak3.png",
    facts: [
      "Attracts bees and other pollinators",
      "Wide crown; fast-growing",
      "Timber highly valued for its beauty, durability and resistance to warping, termites, and fungi",
      "Used for boat building, exterior construction, furniture",
    ],
  },
  {
    name: "Gurjan",
    scientific: "Dipterocarpus turbinatus",
    thai: "Ton-yang-na / \u0e15\u0e49\u0e19\u0e22\u0e32\u0e07\u0e19\u0e32",
    image: "/Forest_Restoration/Gurjan.png",
    facts: [
      "Critically endangered",
      "Valuable timber",
      "50-60 meters in height",
    ],
  },
  {
    name: "Hairy Fig",
    scientific: "Ficus hispida",
    thai: "Ma Dua Pong / \u0e15\u0e49\u0e19\u0e21\u0e30\u0e40\u0e14\u0e37\u0e48\u0e2d\u0e1b\u0e25\u0e49\u0e2d\u0e07",
    image: "/Forest_Restoration/Hairy-Fig.png",
    facts: [
      "Drought and frost tolerant",
      "Grows in poor soils",
      "Attracts birds, bats, and pollinators",
      "Juice from root used to treat fevers",
    ],
  },
  {
    name: "Himalayan Cherry",
    scientific: "Prunus cerasoides",
    thai: "Naang Payah Sua Krong / \u0e15\u0e49\u0e19\u0e19\u0e32\u0e07\u0e1e\u0e0d\u0e32\u0e40\u0e2a\u0e37\u0e2d\u0e42\u0e04\u0e23\u0e48\u0e07",
    image: "/Forest_Restoration/Himalayan-Cherry.png",
    facts: [
      "Dense, weed-suppressing crowns",
      "Grows fast in poor areas",
      "Drought and frost tolerant",
      "Attracts pollinators and seed dispersers",
    ],
  },
  {
    name: "Indian Oak",
    scientific: "Barringtonia acutangula",
    thai: "Jik-nam / \u0e08\u0e34\u0e01\u0e19\u0e49\u0e32",
    image: "/Forest_Restoration/Indian-Oak.png",
    facts: [
      "Medicinal properties",
      "Antifungal",
      "Antibiotic",
      "Young leaves eaten fresh",
    ],
  },
  {
    name: "Jackfruit",
    scientific: "Artocarpus heterophyllus",
    thai: "Ka-nun / \u0e02\u0e19\u0e38\u0e19",
    image: "/Forest_Restoration/Jackfruit.png",
    facts: [
      "Largest tree-borne fruit: up to 55 kgs!",
      "Fast-growing",
      "Medicinal uses",
      "Wind-tolerant",
    ],
  },
  {
    name: "Java Plum",
    scientific: "Syzygium cumini",
    thai: "Ton Wah / \u0e15\u0e49\u0e19\u0e2b\u0e27\u0e49\u0e32",
    image: "/Forest_Restoration/Java-Plum.png",
    facts: [
      "Fire-resilient",
      "Drought and frost-tolerant",
      "Edible fruit, leaves, and roots",
      "Attracts birds and other seed dispersers",
    ],
  },
  {
    name: "Lady Ta-Khian Tree",
    scientific: "Hopea odorata",
    thai: "Ta-kian-thong / \u0e15\u0e30\u0e40\u0e04\u0e35\u0e22\u0e19\u0e17\u0e2d\u0e07",
    image: "/Forest_Restoration/Lady-Ta-Khian-Tree.png",
    facts: [
      "Believed to house the spirit of Lady Ta-Khian",
      "Valued for tannins and timber",
      "Vulnerable species",
      "Highest increment of any dipterocarp",
    ],
  },
  {
    name: "Longan",
    scientific: "Dimocarpus longan",
    thai: "Lam Yai / \u0e15\u0e49\u0e19\u0e25\u0e33\u0e43\u0e22",
    image: "/Forest_Restoration/Longan.png",
    facts: [
      "Edible Fruit",
      'Also known as "Dragon\'s Eyes"',
      "Strong hardy wood used for furniture",
      "Medicinal uses: Anti-inflammatory",
    ],
  },
  {
    name: "Lychee",
    scientific: "Litchi chinensis",
    thai: "Lynjee / \u0e25\u0e34\u0e49\u0e19\u0e08\u0e35",
    image: "/Forest_Restoration/Lychee.png",
    facts: ["Widely eaten fruits", "Drought tolerant", "Fast-growing"],
  },
  {
    name: "Makha",
    scientific: "Azfelia xylocarpa",
    thai: "Ma Kah / \u0e15\u0e49\u0e19\u0e21\u0e30\u0e04\u0e48\u0e32",
    image: "/Forest_Restoration/Makha.png",
    facts: [
      "Nitrogen-fixer",
      "Drought tolerant",
      "Endangered",
      "Wood used for instruments",
    ],
  },
  {
    name: "Mango",
    scientific: "Mangifera indica",
    thai: "Ma Muang / \u0e15\u0e49\u0e19\u0e21\u0e30\u0e21\u0e48\u0e27\u0e07",
    image: "/Forest_Restoration/Mango.png",
    facts: [
      "Edible fruit",
      "Attracts wildlife",
      "Long-lived (300+ years)",
      "Drought tolerant",
    ],
  },
  {
    name: "Neem",
    scientific: "Azadirachta indica",
    thai: "Sadao / \u0e15\u0e49\u0e19\u0e2a\u0e30\u0e40\u0e14\u0e32",
    image: "/Forest_Restoration/Neem.png",
    facts: [
      'Also known as the "Miracle Tree"',
      "Wide variety of medicinal uses",
      "Twigs used for dental hygiene",
      "Deep-rooted and drought-tolerant",
    ],
  },
  {
    name: "Orchid Tree",
    scientific: "Bauhinia purpurea",
    thai: "Ton Chong Koh / \u0e15\u0e49\u0e19\u0e0a\u0e07\u0e42\u0e04",
    image: "/Forest_Restoration/Orchid-Tree.png",
    facts: [
      "Drought and frost tolerant",
      "Deep root system",
      "Edible leaves and flowers",
      "Medicinal uses: reduces swelling and bruises",
    ],
  },
  {
    name: "Sappan",
    scientific: "Caesalpinia sappan",
    thai: "Ton-fhang / \u0e15\u0e49\u0e19\u0e1d\u0e32\u0e07",
    image: "/Forest_Restoration/Sappan.png",
    facts: [
      "Famous for its red dye brazilin",
      "Antibacterial",
      "Anticoagulant",
    ],
  },
  {
    name: "Taengwood",
    scientific: "Shorea obtusa",
    thai: "Ton-taeng / \u0e15\u0e49\u0e19\u0e41\u0e15\u0e07",
    image: "/Forest_Restoration/Taengwood.png",
    facts: ["Valuable timber", "Fire-resilient", "Drought tolerant"],
  },
  {
    name: "Tropical Almond",
    scientific: "Terminalia catappa",
    thai: "Ton Hu Kwang / \u0e15\u0e49\u0e19\u0e2b\u0e39\u0e01\u0e27\u0e32\u0e07",
    image: "/Forest_Restoration/Tropical-Almond.png",
    facts: [
      "Fast-growing",
      "Edible seeds",
      "Drought tolerant",
      "Coastal species",
    ],
  },
  {
    name: "Tummy Wood",
    scientific: "Toona ciliata",
    thai: "Ton Yom Hom / \u0e15\u0e49\u0e19\u0e22\u0e21\u0e2b\u0e2d\u0e21",
    image: "/Forest_Restoration/Tummy-Wood.png",
    facts: ["Valuable timber", "Fast-growing", "Attracts pollinators"],
  },
];

export default function SpeciesSection() {
  const [selected, setSelected] = useState(0);
  const current = species[selected];

  return (
    <section id="species" data-aos="fade-up" style={{ paddingTop: "54px", paddingBottom: "54px" }}>
      <div className="max-w-[1080px] mx-auto px-6">
        {/* Mobile: stacked */}
        <div className="flex flex-col gap-8 md:hidden">
          <div>
            <p
              style={{
                fontWeight: 700,
                fontSize: "20px",
                color: "#000",
                marginBottom: "16px",
              }}
            >
              Here you can learn about some of the species we plant &ndash; take
              a look!
            </p>

            <label
              htmlFor="species-select-mobile"
              style={{
                display: "block",
                fontWeight: 600,
                marginBottom: "8px",
                color: "#333",
              }}
            >
              Species
            </label>
            <select
              id="species-select-mobile"
              value={selected}
              onChange={(e) => setSelected(Number(e.target.value))}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "6px",
                border: "2px solid #78c922",
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "16px",
                backgroundColor: "#fff",
                color: "#333",
                cursor: "pointer",
                marginBottom: "16px",
              }}
            >
              {species.map((s, idx) => (
                <option key={idx} value={idx}>
                  {s.name}
                </option>
              ))}
            </select>

            <div
              style={{
                backgroundColor: "#f9f9f9",
                borderRadius: "6px",
                padding: "20px",
                border: "1px solid #e0e0e0",
              }}
            >
              <p>
                <strong>Scientific name:</strong> <em>{current.scientific}</em>
              </p>
              <p style={{ marginTop: "4px" }}>
                <strong>Thai name:</strong> {current.thai}
              </p>
              <p style={{ marginTop: "8px" }}>
                <strong>Description:</strong>
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "4px", listStyleType: "disc" }}>
                {current.facts.map((fact, idx) => (
                  <li key={idx} style={{ marginBottom: "4px" }}>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {current.image && (
            <div style={{ textAlign: "center" }}>
              <img
                src={current.image}
                alt={current.name}
                style={{
                  maxWidth: "100%",
                  borderRadius: "6px",
                  display: "inline-block",
                }}
              />
            </div>
          )}
        </div>

        {/* Desktop: image determines height, left scrolls */}
        <div className="hidden md:block relative">
          {/* Right image - normal flow, sets container height */}
          <div style={{ width: "50%", marginLeft: "auto", textAlign: "center" }}>
            {current.image && (
              <img
                src={current.image}
                alt={current.name}
                style={{
                  maxWidth: "100%",
                  borderRadius: "6px",
                  display: "inline-block",
                }}
              />
            )}
          </div>

          {/* Left info - absolute, constrained to image height */}
          <div
            className="absolute top-0 left-0 bottom-0 flex flex-col"
            style={{ width: "calc(50% - 2rem)" }}
          >
            <p
              style={{
                fontWeight: 700,
                fontSize: "20px",
                color: "#000",
                marginBottom: "16px",
                flexShrink: 0,
              }}
            >
              Here you can learn about some of the species we plant &ndash; take
              a look!
            </p>

            <label
              htmlFor="species-select"
              style={{
                display: "block",
                fontWeight: 600,
                marginBottom: "8px",
                color: "#333",
                flexShrink: 0,
              }}
            >
              Species
            </label>
            <select
              id="species-select"
              value={selected}
              onChange={(e) => setSelected(Number(e.target.value))}
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "6px",
                border: "2px solid #78c922",
                fontFamily: '"Open Sans", sans-serif',
                fontSize: "16px",
                backgroundColor: "#fff",
                color: "#333",
                cursor: "pointer",
                marginBottom: "16px",
                flexShrink: 0,
              }}
            >
              {species.map((s, idx) => (
                <option key={idx} value={idx}>
                  {s.name}
                </option>
              ))}
            </select>

            <div
              className="flex-1 overflow-y-auto"
              style={{
                backgroundColor: "#f9f9f9",
                borderRadius: "6px",
                padding: "20px",
                border: "1px solid #e0e0e0",
                minHeight: 0,
              }}
            >
              <p>
                <strong>Scientific name:</strong> <em>{current.scientific}</em>
              </p>
              <p style={{ marginTop: "4px" }}>
                <strong>Thai name:</strong> {current.thai}
              </p>
              <p style={{ marginTop: "8px" }}>
                <strong>Description:</strong>
              </p>
              <ul style={{ paddingLeft: "20px", marginTop: "4px", listStyleType: "disc" }}>
                {current.facts.map((fact, idx) => (
                  <li key={idx} style={{ marginBottom: "4px" }}>
                    {fact}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
