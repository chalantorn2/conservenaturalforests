export default function HeroSection() {
  return (
    <section
      className="relative w-full flex items-center justify-center"
      style={{
        minHeight: "625px",
        height: "100vh",
        clipPath: "inset(0)",
      }}
    >
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: "url(/Internship/Internship-Header.jpg.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center 5%",
          backgroundColor: "#7ebec5",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.42)" }}
      />
      <div
        className="relative z-10 text-center px-4"
        style={{ maxWidth: "800px" }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1
          style={{
            fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
            fontWeight: 700,
            fontSize: "clamp(34px, 5vw, 55px)",
            color: "#fff",
            letterSpacing: "2px",
            lineHeight: "1.1em",
            textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)",
          }}
        >
          APPLY FOR AN INTERNSHIP
        </h1>
        <div className="mt-8">
          <a
            href="#apply"
            className="btn-divi inline-block"
            style={{
              color: "#fff",
              borderColor: "#78c922",
              borderRadius: "6px",
              fontSize: "20px",
              fontWeight: 600,
              textTransform: "uppercase",
              backgroundColor: "rgba(0,0,0,0.77)",
              textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#78c922";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.77)";
            }}
          >
            Apply Now
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#intro" className="block animate-bounce" style={{ color: "#78c922", fontSize: "32px" }}>
          &#x25BC;
        </a>
      </div>
    </section>
  );
}
