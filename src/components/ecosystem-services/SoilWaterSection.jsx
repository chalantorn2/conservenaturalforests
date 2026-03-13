const textStyle = {
  fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
  fontSize: "16px",
  lineHeight: "2em",
  color: "#000",
};

export default function SoilWaterSection() {
  return (
    <section id="soil" data-aos="fade-up" style={{ paddingTop: "10px", paddingBottom: "10px" }}>
      {/* 2-column: text + gallery */}
      <div
        className="max-w-[1080px] mx-auto px-6"
        style={{ paddingTop: "9px", paddingBottom: "26px" }}
      >
        <div style={textStyle}>
          <h1
            style={{
              fontWeight: 700,
              fontSize: "26px",
              lineHeight: "1.5em",
              marginBottom: "16px",
            }}
          >
            SOIL &amp; WATER
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2" style={textStyle}>
            <p style={{ textAlign: "justify" }}>
              The complex mountainous terrain and monsoonal precipitation regime
              that characterize the Pai District expose the local population to
              flooding and landslide risk. Reduced fallows and the annual burning
              season that immediately precedes the rainy season also exacerbate
              soil erosion and degradation. Water yield is constrained by the
              prolonged dry season and the loss of available water to
              evapotranspiration and the porous limestone-karst bedrock.
            </p>
            <p style={{ textAlign: "justify" }}>
              Conserve Natural Forests is a strong advocate for natural flood
              management. In an area where infrastructure and resources are
              lacking, upstream forest restoration combined with the protection
              of wetlands may help attenuate flow accumulation and
              desynchronize tributary contributions during flood events, reducing
              the flood peak and flood volume.
            </p>
          </div>
          <div className="lg:w-1/2" style={{ marginTop: "80px" }}>
            <img
              src="/Ecosystem_Services/Pai-River.jpg.jpeg"
              alt="Soil and water conservation"
              className="w-full"
              style={{ borderRadius: "6px" }}
            />
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
