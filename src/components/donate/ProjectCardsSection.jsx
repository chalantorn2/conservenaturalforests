import { Link } from "react-router-dom";

const projectCards = [
  { title: "Forest Restoration", to: "/forest-restoration" },
  { title: "Local Livelihoods", to: "/local-livelihoods" },
  { title: "Wildlife Conservation", to: "/wildlife-conservation" },
  { title: "Ecosystem Services", to: "/ecosystem-services" },
];

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

export default function ProjectCardsSection() {
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
    <section style={{ paddingTop: "2px", paddingBottom: "2px" }}>
      <div
        className="max-w-[1080px] mx-auto px-6"
        style={{ paddingBottom: "27px" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectCards.map((card) => (
            <div key={card.title} className="text-center">
              <div
                style={{
                  borderRadius: "6px",
                  overflow: "hidden",
                  boxShadow: "6px 6px 18px 0px rgba(0,0,0,0.58)",
                  marginBottom: "16px",
                }}
              >
                <img
                  src="/waiting.jpg"
                  alt={card.title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <Link
                to={card.to}
                style={btnStyle}
                onMouseEnter={(e) => handleBtnHover(e, true)}
                onMouseLeave={(e) => handleBtnHover(e, false)}
              >
                {card.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
