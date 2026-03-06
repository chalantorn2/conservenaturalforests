import { useState } from "react";

const tabs = [
  {
    label: "Intervention Strategies Overview",
    description:
      "Overview of the landscape-level interventions toward which CNF aspires. Our main project site is located at the junction of three protected areas. A riparian corridor would provide multiple benefits: Improved aquatic habitat, water quality, water balance, and improved connectivity between three protected areas for dispersal and migration of both animal and plant species. Landslide and fire mitigation efforts are centered in areas of high exposure near Pai Town. Agroforestry systems are proposed in areas on the fringe of high-intensity agriculture. Headwater restoration for the Pai River may help attenuate flow and reduce flood risk as well as improving water quality.",
  },
  { label: "Elevation", description: "" },
  { label: "Land-use and Land-cover", description: "" },
  { label: "Watershed Basins", description: "" },
  { label: "Landslide Hazards", description: "" },
];

export default function MapsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section style={{ paddingTop: "7px", paddingBottom: "1px" }}>
      <div className="max-w-[1080px] mx-auto px-6">
        {/* Intro quote */}
        <div
          style={{
            fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
            fontSize: "16px",
            lineHeight: "2em",
            color: "#000",
            textAlign: "justify",
            marginBottom: "24px",
          }}
        >
          <p>
            <strong>
              &ldquo;If you stand too close to the elephant, you don&rsquo;t see
              the elephant.&rdquo; Sometimes we have to step back to see the
              whole picture. The maps below help us understand the broader impact
              of our restoration work.
            </strong>
          </p>
        </div>

        {/* Tabs */}
        <div
          style={{
            borderBottom: "1px solid #ddd",
            display: "flex",
            flexWrap: "wrap",
            gap: "0",
          }}
        >
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              style={{
                padding: "10px 16px",
                fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                fontSize: "14px",
                fontWeight: activeTab === idx ? 700 : 400,
                color: activeTab === idx ? "#78c922" : "#666",
                backgroundColor: activeTab === idx ? "#fff" : "transparent",
                border: activeTab === idx ? "1px solid #ddd" : "1px solid transparent",
                borderBottom: activeTab === idx ? "1px solid #fff" : "1px solid transparent",
                marginBottom: "-1px",
                cursor: "pointer",
                transition: "color 200ms ease",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div
          style={{
            padding: "24px 0",
            fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
            fontSize: "16px",
            lineHeight: "2em",
            color: "#000",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <img
              src="/waiting.jpg"
              alt={tabs[activeTab].label}
              style={{ maxWidth: "100%", borderRadius: "6px" }}
            />
          </div>
          {tabs[activeTab].description && (
            <p style={{ textAlign: "justify" }}>
              {tabs[activeTab].description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
