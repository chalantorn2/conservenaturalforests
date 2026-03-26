import { useState } from "react";

const tabs = [
  {
    label: "Intervention Strategies Overview",
    image: "/Ecosystem_Services/Intervention-Strategies-Overview.jpg.jpeg",
    description:
      "Overview of the landscape-level interventions toward which CNF aspires. Our main project site is located at the junction of three protected areas. A riparian corridor would provide multiple benefits: Improved aquatic habitat, water quality, water balance, and improved connectivity between three protected areas for dispersal and migration of both animal and plant species. Landslide and fire mitigation efforts are centered in areas of high exposure near Pai Town. Agroforestry systems are proposed in areas on the fringe of high-intensity agriculture. Headwater restoration for the Pai River may help attenuate flow and reduce flood risk as well as improving water quality.",
  },
  {
    label: "Elevation",
    image: "/Ecosystem_Services/Elevation.jpg.jpeg",
    description:
      "Digital Elevation Model for Pai District (Min 313m; Max 1993m; Range 1680m; Mean 969m) Data derived with QGIS and SRTM Global 1 arc second (~30m2 resolution). Most of our project sites are situated between 450-800 m a.s.l. Elevation is a strong control on species composition and land use (Figure 4). Lower elevations near the river select for dry dipterocarp forests, while higher elevations with a northern aspect select for tropical coniferous and evergreen deciduous species due to colder temperatures and higher rainfall. Middle elevation usually includes mixed deciduous forests dominated by teak, bamboo, rattan, and rosewood.",
  },
  {
    label: "Land-use and Land-cover",
    image: "/Ecosystem_Services/Land-use-and-Land-over.jpg.jpeg",
    description:
      "Land use and land cover derived from Copernicus LULC remote sensing data (100m2 resolution). Most agriculture – including cash crops like maize, rice, and soybean – occurs in the floodplains of the intermontane basins. Most coniferous forests are found on northern-facing slopes. This map highlights the complex mix of vegetation and how they are distributed spatially throughout Pai District. Most of our work occurs in the buffer areas between cropland and natural forests, primarily at elevations that select for mixed deciduous forest.",
  },
  {
    label: "Watershed Basins",
    image: "/Ecosystem_Services/Watershed-Basins-Pai-District.jpg.jpeg",
    description:
      "The Lum Nam Pai Watershed that drains the entire Pai District can be sub-divided into six sub-basins with drainage areas of at least 100km2. The source of the Pai River can be found in the Wiang Nuea sub-basin, with major contributions from the Mae Na Toeng, Pong Sa, Mae Hi, Mueang Paeng, and Thung Yao sub-basins. The river exits the Pai District at the junction between the Mueang Paeng and Thung Yao basins and flows west until it meets the Salawin River in Myanmar. The upper part of the Tham Lot basin is located within Pai District but drains elsewhere. Our project sites are located within the Mae Hi and Mueang Pang sub-basins, but we are eager to establish sites and design interventions at each step of the entire drainage network. Data derived from SRTM 1-arc-second dataset.",
  },
  {
    label: "Landslide Hazards",
    image: "/Ecosystem_Services/Landslide-Hazards.jpg.jpeg",
    description:
      "This map details all the areas in Pai District with high potential for landslides and increased erosion (Slope > 30 degrees). Landslide Risk = Hazard x Exposure x Vulnerability. All of our restoration sites are situated in areas of high risk, where hazardous areas overlap with small villages and cropland. Forest restoration in these areas is designed to increase surface roughness and decouple slopes from water sources and settlements.",
  },
];

export default function MapsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      data-aos="fade-up"
      style={{ paddingTop: "7px", paddingBottom: "1px" }}
    >
      <div className="max-w-[1080px] mx-auto px-6">
        {/* Intro quote */}
        <div
          style={{
            fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
            fontSize: "16px",
            fontWeight: 400,
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
              whole picture. The maps below help us understand the broader
              impact of our restoration work.
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
                fontSize: "16px",
                fontWeight: activeTab === idx ? 700 : 400,
                color: activeTab === idx ? "#78c922" : "#666",
                backgroundColor: activeTab === idx ? "#fff" : "transparent",
                border:
                  activeTab === idx
                    ? "1px solid #ddd"
                    : "1px solid transparent",
                borderBottom:
                  activeTab === idx
                    ? "1px solid #fff"
                    : "1px solid transparent",
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
          key={activeTab}
          className="map-tab-content"
          style={{
            padding: "24px 0",
            fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "2em",
            color: "#000",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].label}
              style={{
                maxWidth: "100%",
                maxHeight: "500px",
                objectFit: "contain",
                borderRadius: "6px",
                display: "block",
                margin: "0 auto",
              }}
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
