export default function HeroSection() {
  return (
    <section
      className="relative w-full flex items-center justify-center"
      style={{
        minHeight: "625px",
        height: "100vh",
        backgroundImage: "url(/waiting.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "50%",
        backgroundColor: "#7ebec5",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.49)" }}
      />
      <div className="relative z-10 text-center px-4" style={{ maxWidth: "800px" }}>
        <h1
          style={{
            fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
            fontWeight: 700,
            fontSize: "clamp(35px, 5vw, 66px)",
            color: "#fff",
            letterSpacing: "2px",
            lineHeight: "1.1em",
            textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)",
          }}
        >
          CONTACT US
        </h1>
      </div>
      {/* Scroll down indicator */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#contact-content"
          className="text-[#78c922] text-4xl animate-bounce block"
        >
          &#x2193;
        </a>
      </div>
    </section>
  );
}
