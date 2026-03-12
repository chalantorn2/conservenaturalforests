export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center text-center text-white"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/Local_Livelihoods/Hippo-and-Kids-Forest.jpg)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "#7ebec5", mixBlendMode: "multiply" }}
      />
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.31)" }}
      />
      <div className="relative z-10 px-6">
        <h1
          style={{
            fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
            fontWeight: 700,
            fontSize: "clamp(35px, 5vw, 66px)",
            letterSpacing: "2px",
            lineHeight: "1.1em",
            textShadow: "0 0.1em 0.1em rgba(0,0,0,0.4)",
          }}
        >
          LOCAL LIVELIHOODS
        </h1>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#education" style={{ color: "#78c922", fontSize: "32px" }}>
          &#x25BC;
        </a>
      </div>
    </section>
  );
}
