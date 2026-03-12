export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center text-center text-white"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/Ecosystem_Services/Ecosystem-Banner1.jpg.jpeg)" }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#7ebec5", mixBlendMode: "multiply" }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.48)" }}
      />
      <div className="relative z-10 px-6" style={{ maxWidth: "800px" }}>
        <h1
          style={{
            fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
            fontWeight: 700,
            fontSize: "clamp(28px, 5vw, 52px)",
            letterSpacing: "2px",
            lineHeight: "1.1em",
            textShadow: "0 0.1em 0.1em rgba(0,0,0,0.4)",
          }}
        >
          INTEGRATED MANAGEMENT &amp; ECOSYSTEM SERVICES
        </h1>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#intro" style={{ color: "#78c922", fontSize: "32px" }}>
          &#x25BC;
        </a>
      </div>
    </section>
  );
}
