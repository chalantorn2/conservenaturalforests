export default function BiodiversitySection() {
  return (
    <section id="biodiversity" className="relative" data-aos="fade-up" style={{ padding: 0 }}>
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(/Ecosystem_Services/Roots.jpg.jpeg)" }}
      />

      <div
        className="max-w-[1080px] mx-auto px-6 relative"
        style={{ paddingBottom: "27px" }}
      >
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.71)",
            borderRadius: "6px",
            overflow: "hidden",
            padding: "25px 20px",
            marginTop: "50px",
            color: "#fff",
            fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
            fontSize: "16px",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontWeight: 700,
              fontSize: "26px",
              lineHeight: "1.5em",
              marginBottom: "16px",
            }}
          >
            FUNCTIONAL BIODIVERSITY
          </h1>
          <p style={{ textAlign: "justify" }}>
            Biodiversity is the foundation of a healthy ecosystem. The Framework
            Species Method is rooted in the enhancement of functional diversity.
            By planting a mixture of species with certain functional traits, we
            aim to diversify forest structure, foster complex food web
            interactions, maximize resource exploitation through niche
            partitioning, and self-regulate ecosystem processes.
          </p>

          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "40px",
              marginTop: "16px",
              marginBottom: "16px",
            }}
          >
            <li style={{ textAlign: "justify", marginBottom: "12px" }}>
              Variations in height and rooting depth stratify the aboveground and
              belowground forest structure, allowing the consumption of water,
              nutrients, and light at multiple levels. This diversity also
              maximizes carbon sequestration and storage in the long term.
            </li>
            <li style={{ textAlign: "justify", marginBottom: "12px" }}>
              Other traits &ndash; including nitrogen-fixation, rooting depth,
              seed size, dispersal mechanism, and more &ndash; are represented by
              multiple species to improve functional redundancy and increase the
              resilience of the ecosystem.
            </li>
            <li style={{ textAlign: "justify", marginBottom: "12px" }}>
              Improved habitat and the planting of fruiting and flowering trees
              are meant to extend and strengthen trophic structures, first by
              attracting pollinators such as fig wasps, followed by other
              heterotrophs at each tier. Multiple seed sizes attract different
              dispersers, including birds, bats, insects, and even larger mammals
              for large fruits like durian or mango.
            </li>
            <li style={{ textAlign: "justify" }}>
              The species we plant are not only meant to capture a fraction of
              the surrounding forest composition, but also depend upon attracting
              seed dispersers for further species recruitment.
            </li>
          </ul>

          <p style={{ textAlign: "justify" }}>
            Thailand is a biodiversity hotspot and we would like to keep it that
            way! There are some things that cannot be measured in money, and
            biodiversity is one of them. Truly priceless.
          </p>
        </div>
      </div>
    </section>
  );
}
