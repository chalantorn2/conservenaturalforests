import { Link } from "react-router-dom";

const textStyle = {
  fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
  fontSize: "16px",
  lineHeight: "2em",
  color: "#000",
};

const btnStyle = {
  fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
  fontWeight: 700,
  color: "#000",
  border: "2px solid #78c922",
  borderRadius: "6px",
  padding: "0.3em 1em",
  textDecoration: "none",
  display: "inline-block",
  textTransform: "uppercase",
  letterSpacing: "2px",
  transition: "all 300ms ease",
  cursor: "pointer",
  backgroundColor: "transparent",
};

export default function RestorationSitesSection() {
  const handleBtnHover = (e, enter) => {
    if (enter) {
      e.currentTarget.style.backgroundColor = "#78c922";
      e.currentTarget.style.color = "#fff";
    } else {
      e.currentTarget.style.backgroundColor = "transparent";
      e.currentTarget.style.color = "#000";
    }
  };

  return (
    <section style={{ paddingTop: "6px", paddingBottom: "9px" }}>
      <div className="max-w-[1080px] mx-auto px-6">
        <h1
          className="text-center"
          style={{ fontWeight: 700, fontSize: "31px", color: "#333" }}
        >
          OUR RESTORATION SITES
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ marginTop: "16px" }}>
          <div>
            <iframe
              src="https://www.google.com/maps/d/embed?mid=1KsOJ3BwwKLC7gZ4eijJBVVWy83Yi1A-5&ll=19.259129708488555%2C98.41725599999998&z=11"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: "6px" }}
              allowFullScreen
              loading="lazy"
              title="CNF Restoration Sites Map"
            />
          </div>
          <div>
            <div style={textStyle}>
              <p style={{ textAlign: "justify" }}>
                We plant trees all over Thailand! From the mountains to the
                mangroves, each forest provides different values based on the
                local context. If you would like to see some of the places where
                we will plant your trees, check out our interactive map. Simply
                click on each location or use the drop-down bar in the upper left
                corner of the map to explore. CNF plants a mixture of 20&ndash;30
                species at each site to maximize biodiversity and create healthy,
                self-regulating forests. If you would like to learn more about
                some of the species we plant or the methods we use, click on the
                button below.
              </p>
            </div>
            <div className="text-center mt-4">
              <Link
                to="/forest-restoration"
                style={btnStyle}
                onMouseEnter={(e) => handleBtnHover(e, true)}
                onMouseLeave={(e) => handleBtnHover(e, false)}
              >
                OUR SPECIES
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
