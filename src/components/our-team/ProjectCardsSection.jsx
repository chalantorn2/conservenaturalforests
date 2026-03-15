import { Link } from "react-router-dom";

const projects = [
  {
    name: "FOREST RESTORATION",
    to: "/forest-restoration",
    image: "/Our_Team/Topdown-Nursery.jpg.jpeg",
  },
  {
    name: "LOCAL LIVELIHOODS",
    to: "/local-livelihoods",
    image: "/Our_Team/Kids-Learning.jpg.jpeg",
  },
  {
    name: "WILDLIFE CONSERVATION",
    to: "/wildlife-conservation",
    image: "/Our_Team/Steady-Tortoise.jpg.jpeg",
  },
  {
    name: "ECOSYSTEM SERVICES",
    to: "/ecosystem-services",
    image: "/Our_Team/Waterfall.jpg.jpeg",
  },
];

export default function ProjectCardsSection() {
  return (
    <section
      data-aos="fade-up"
      style={{ paddingTop: "29px", paddingBottom: "29px" }}
    >
      <div className="max-w-[1080px] mx-auto px-6">
        {/* Title */}
        <h1
          className="text-center"
          style={{
            fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
            fontWeight: 700,
            fontSize: "40px",
            color: "#333",
            marginBottom: "40px",
          }}
        >
          GET TO KNOW US BETTER
        </h1>
        {/* Divider */}
        <div
          className="mx-auto"
          style={{ maxWidth: "10%", height: "5px", marginBottom: "50px" }}
        >
          <div style={{ borderTop: "5px solid #78c922", width: "100%" }} />
        </div>

        {/* 4 Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div
                style={{
                  borderRadius: "6px",
                  overflow: "hidden",
                  boxShadow: "6px 6px 18px 0 rgba(0,0,0,0.58)",
                  marginBottom: "16px",
                  width: "100%",
                }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  style={{
                    width: "100%",
                    aspectRatio: "510/340",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <Link
                to={project.to}
                style={{
                  fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
                  fontWeight: 700,
                  color: "#000",
                  border: "2px solid #78c922",
                  borderRadius: "6px",
                  padding: "0.3em 1em",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "all 300ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#78c922";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#000";
                }}
              >
                {project.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
