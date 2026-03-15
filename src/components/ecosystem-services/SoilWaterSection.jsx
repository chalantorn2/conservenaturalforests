import { useState, useEffect } from "react";

const slides = [
  "/Ecosystem_Services/Pai-River.jpg.jpeg",
  "/Ecosystem_Services/Rice.jpg.jpeg",
  "/Ecosystem_Services/Roots.jpg.jpeg",
  "/Ecosystem_Services/Water-and-Roots.jpg.jpeg",
  "/Ecosystem_Services/Dirt-Track.jpg.jpeg",
  "/Ecosystem_Services/Jungle-Stream.jpg.jpeg",
];

const textStyle = {
  fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
  fontSize: "16px",
  fontWeight: 400,
  lineHeight: "2em",
  color: "#000",
};

export default function SoilWaterSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="soil"
      data-aos="fade-up"
      style={{ paddingTop: "10px", paddingBottom: "10px" }}
    >
      {/* 2-column: text + gallery */}
      <div
        className="max-w-[1080px] mx-auto px-6"
        style={{ paddingTop: "9px", paddingBottom: "26px" }}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2" style={textStyle}>
            <h1
              style={{
                textAlign: "center",
                fontWeight: 700,
                fontSize: "26px",
                lineHeight: "1.5em",
                marginBottom: "16px",
              }}
            >
              SOIL &amp; WATER
            </h1>
            <p style={{ textAlign: "justify" }}>
              The complex mountainous terrain and monsoonal precipitation regime
              that characterize the Pai District expose the local population to
              flooding and landslide risk. Reduced fallows and the annual
              burning season that immediately precedes the rainy season also
              exacerbate soil erosion and degradation. Water yield is
              constrained by the prolonged dry season and the loss of available
              water to evapotranspiration and the porous limestone-karst
              bedrock.
            </p>
            <p style={{ textAlign: "justify" }}>
              Conserve Natural Forests is a strong advocate for natural flood
              management. In an area where infrastructure and resources are
              lacking, upstream forest restoration combined with the protection
              of wetlands may help attenuate flow accumulation and desynchronize
              tributary contributions during flood events, reducing the flood
              peak and flood volume.
            </p>
          </div>
          <div className="lg:w-1/2" style={{ marginTop: "40px" }}>
            <div className="relative overflow-hidden" style={{ borderRadius: "6px" }}>
              {slides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Soil and water ${i + 1}`}
                  className="w-full"
                  style={{
                    display: i === current ? "block" : "none",
                  }}
                />
              ))}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="rounded-full"
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: i === current ? "#78c922" : "rgba(255,255,255,0.6)",
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 300ms",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continuation text */}
      <div
        className="max-w-[1080px] mx-auto px-6"
        style={{ paddingTop: "9px", paddingBottom: "26px" }}
      >
        <div style={textStyle}>
          <p style={{ textAlign: "justify" }}>
            Riparian corridors improve water quality by decoupling unsustainable
            and erosive agricultural practices from stream networks, reducing
            turbidity and excessive nutrient deposition while stabilizing
            streambanks and regulating microclimate conditions.
          </p>
          <p style={{ textAlign: "justify" }}>
            We also advocate some agricultural best management practices
            including the use of cover crops during fallow periods to reduce
            erosion and improve soil health. By planting a mix of 25-30 species
            with varying rooting depths, we expect our forest restoration
            projects to reduce the risk of shallow landslides (&lt;5m) compared
            to exposed soil or monocultures with uniform rooting depth.
          </p>
        </div>
      </div>
    </section>
  );
}
