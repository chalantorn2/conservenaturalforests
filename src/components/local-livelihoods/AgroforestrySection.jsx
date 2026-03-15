export default function AgroforestrySection() {
  return (
    <section
      className="relative"
      data-aos="fade-up"
      style={{ paddingTop: "32px", paddingBottom: "32px" }}
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url(/Local_Livelihoods/Ecosystems-Header.jpg.jpeg)",
        }}
      />

      <div className="relative max-w-[1080px] mx-auto px-6">
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.71)",
            borderRadius: "6px",
            overflow: "hidden",
            padding: "25px 20px 0",
            marginTop: "50px",
            fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "2em",
            color: "#fff",
          }}
        >
          <h1
            className="text-center"
            style={{
              fontWeight: 700,
              fontSize: "32px",
              color: "#fff",
              marginBottom: "16px",
            }}
          >
            AGROFORESTRY SYSTEMS (AFS)
          </h1>
          <p style={{ textAlign: "justify" }}>
            Agroforestry is an ancient and widely implemented system in the Thai
            highlands. Several types of agroforestry systems – living fences,
            taungya, forest gardens, home gardens, and successional agroforestry
            – may be applied depending on the driver of degradation and the
            interest or investment of local landowners.
          </p>
          <ul
            className="list-disc"
            style={{
              paddingLeft: "20px",
              textAlign: "justify",
              marginTop: "8px",
              marginBottom: "16px",
            }}
          >
            <li style={{ marginBottom: "8px" }}>
              Taungya systems combining teak (<em>Tectona grandis</em>) and
              upland rice have been demonstrated to improve fallows and
              diversify income.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Alley cropping in 5mx5m systems with mangos (Mangifera indica) and
              rice, tobacco, or maize have already been successfully implemented
              in the Northern Thai highlands.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Successional agroforestry may be applied at the edges of
              agricultural areas with multi-purpose trees aimed toward erosion
              control, mitigating landslide risk, and nitrogen fixation (
              <em>Cassia fistula, Bauhinia purpurea</em>) or bearing fruit (
              <em>
                Mangifera indica, Dimocarpus longan, Litchi chinensis,
                Artocarpus heterophyllus
              </em>
              ). These systems would work best on land with high potential of
              abandonment to transition land back toward natural forest cover
              while providing benefit to local smallholders.
            </li>
            <li style={{ marginBottom: "8px" }}>
              Any of these multi-purpose trees may also be planted as living
              fences or in home-gardens.
            </li>
          </ul>
          <p style={{ textAlign: "justify", paddingBottom: "20px" }}>
            Another way to address land degradation related to excess
            anthropogenic fire is improved access to natural forests by locals
            for the cultivation of <em>Pa miang</em> or "jungle tea" or the
            harvesting of lucrative wild mushrooms called <em>Hed thob</em> (
            <em>Astraeus hygrometricus</em>). Many fires are set to make these
            mushrooms easier to locate – Forest gardens may be established to
            sustainably harvest mushroom species without the need to set fire in
            the forest.
          </p>
        </div>
      </div>
    </section>
  );
}
