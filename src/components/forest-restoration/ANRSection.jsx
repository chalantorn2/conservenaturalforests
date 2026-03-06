export default function ANRSection() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url(/waiting.jpg)" }}
    >
      <div className="relative z-10 max-w-[1080px] mx-auto px-6 py-8">
        <div
          style={{
            fontFamily:
              '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
            fontSize: "16px",
            lineHeight: "2em",
            color: "#fff",
            backgroundColor: "rgba(0,0,0,0.71)",
            borderRadius: "6px",
            padding: "25px 10px 0",
            marginTop: "50px",
            textAlign: "justify",
          }}
        >
          <h1
            style={{
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            PROTECTED &amp; ASSISTED NATURAL REGENERATION (ANR)
          </h1>
          <p style={{ paddingBottom: "20px" }}>
            Removing barriers to natural regeneration includes reducing
            competition through weeding, mulching, and planting fast-growing
            species with wide crowns and large leaves to shade out herbaceous
            grasses and weeds. Strategies to reduce disturbances include
            protection from livestock grazing and establishing fire breaks to
            minimize risk during the annual burning season. We also attempt to
            augment multiple regenerative pathways by attracting seed dispersers
            with fruits, nectars, and shelter structures like bird perches, as
            well as selecting sites within 5km of natural forest to enhance
            seed rain and dispersal.
          </p>
        </div>
      </div>
    </section>
  );
}
