const textStyle = {
  fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
  fontSize: "16px",
  lineHeight: "2em",
  color: "#000",
};

export default function MitigationSection() {
  return (
    <section style={{ paddingTop: "0", paddingBottom: "24px" }}>
      <div className="max-w-[1080px] mx-auto px-6">
        <div style={{ paddingBottom: "4px" }}>
          <h1
            className="text-center"
            style={{ fontWeight: 700, fontSize: "31px", color: "#333" }}
          >
            THE MITIGATION HIERARCHY
          </h1>
        </div>
        <div
          className="flex flex-col lg:flex-row gap-8 items-center"
          style={{ paddingTop: "48px" }}
        >
          <div className="lg:w-1/2" style={textStyle}>
            <p style={{ textAlign: "justify" }}>
              Don&rsquo;t get us wrong: We love planting trees. But it&rsquo;s
              important to recognize that there is no single solution to fix the
              problems that make planting trees so urgently needed today &ndash;
              unsustainable development, land degradation, and climate change
              are multifarious problems that require multi-faceted solutions.
              CNF is here to help you understand each step of the mitigation
              pyramid and how we can work together to leave the world a little
              better than we found it.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/Donate/Mitigation-Hierarchy-Template-1.jpg.jpeg"
              alt="Mitigation Hierarchy Pyramid"
              className="w-full"
              style={{ marginTop: "-30px", marginBottom: "-30px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
