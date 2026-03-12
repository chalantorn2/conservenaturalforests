export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center text-center text-white"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/Our_Team/About-Us-Header.jpg.jpeg)" }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#7ebec5", mixBlendMode: "multiply" }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
      />
      <div className="relative z-10 px-6">
        <h1
          style={{
            fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
            fontWeight: 700,
            fontSize: "clamp(42px, 5vw, 66px)",
            letterSpacing: "2px",
            lineHeight: "1.1em",
            textShadow: "0 0.1em 0.1em rgba(0,0,0,0.4)",
          }}
        >
          OUR TEAM
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
