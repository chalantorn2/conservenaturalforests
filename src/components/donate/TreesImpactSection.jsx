const textStyle = {
  fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
  fontSize: "16px",
  lineHeight: "2em",
  color: "#000",
};

export default function TreesImpactSection() {
  return (
    <section style={{ paddingTop: "13px", paddingBottom: "14px" }}>
      <div className="max-w-[1080px] mx-auto px-6">
        <div style={{ ...textStyle, marginTop: "2px" }}>
          <p style={{ textAlign: "justify" }}>
            We have compiled data from partner organizations along with our
            own research to estimate how many trees you would need to plant to
            make a positive impact. Whether you are concerned about climate
            change or global deforestation and biodiversity loss, planting
            trees is a cost-effective solution with multiple benefits. So get
            out and vote, ride a bike, and let&rsquo;s plant some trees!
          </p>
          <p className="mt-4" style={{ textAlign: "justify" }}>
            If you are an organization who is interested in making a
            climate-positive impact, please contact us{" "}
            <a
              href="/contact"
              style={{ color: "#78c922", fontWeight: 700 }}
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
