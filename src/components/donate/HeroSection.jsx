export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center text-center text-white"
      style={{ minHeight: "100vh", clipPath: "inset(0)" }}
    >
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: "url(/Donate/Donate-Header.jpg.jpeg)",
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
        style={{ maxWidth: "800px" }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
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
          GET INVOLVED
        </h1>
        <a
          href="#donate-section"
          className="inline-block mt-8"
          style={{
            fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
            fontWeight: 700,
            fontSize: "24px",
            color: "#fff",
            border: "2px solid #78c922",
            borderRadius: "6px",
            backgroundColor: "rgba(0,0,0,0.66)",
            padding: "0.3em 1em",
            textDecoration: "none",
            transition: "all 300ms ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#78c922")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.66)")
          }
        >
          DONATE NOW
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#donate-intro" className="block animate-bounce" style={{ color: "#78c922", fontSize: "32px" }}>
          &#x25BC;
        </a>
      </div>
    </section>
  );
}
