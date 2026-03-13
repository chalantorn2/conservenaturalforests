export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center text-center text-white"
      style={{ minHeight: "100vh", clipPath: "inset(0)" }}
    >
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: "url(/Wildlife_Conservation/Fern.jpg.jpeg)",
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
        className="relative z-10 px-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1
          style={{
            fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
            fontWeight: 700,
            fontSize: "clamp(28px, 5vw, 66px)",
            letterSpacing: "2px",
            lineHeight: "1.1em",
            textShadow: "0 0.1em 0.1em rgba(0,0,0,0.4)",
          }}
        >
          WILDLIFE CONSERVATION
        </h1>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#intro" className="block animate-bounce" style={{ color: "#78c922", fontSize: "32px" }}>
          &#x25BC;
        </a>
      </div>
    </section>
  );
}
