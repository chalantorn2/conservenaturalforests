export default function ExploreSection() {
  return (
    <section data-aos="fade-up" style={{ paddingTop: "54px", paddingBottom: "54px" }}>
      <div className="max-w-[1080px] mx-auto px-6">
        <h1
          style={{
            textAlign: "center",
            fontSize: "34px",
            fontWeight: 700,
            color: "#333",
            marginBottom: "24px",
          }}
        >
          EXPLORE THE CONTEXT IN WHICH WE WORK
        </h1>
        <div
          style={{
            width: "100%",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          <iframe
            title="ArcGIS Map - Conserve Natural Forests"
            src="https://www.arcgis.com/apps/mapviewer/index.html?configurableview=true&webmap=f4f6e81c4d994cdb8e613fbfb9ef5157&theme=light&center=106.93792849266306,12.43964694432577&scale=18489297.737236"
            style={{
              width: "100%",
              height: "500px",
              border: 0,
            }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
