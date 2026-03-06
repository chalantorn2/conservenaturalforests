import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "IT STARTS WITH ONE TREE",
    buttonText: "FOREST RESTORATION",
    buttonLink: "/forest-restoration",
    bg: "/waiting.jpg",
  },
  {
    title: "FORESTS FOR THE PEOPLE",
    buttonText: "LOCAL LIVELIHOODS",
    buttonLink: "/local-livelihoods",
    bg: "/waiting.jpg",
  },
  {
    title: "PROTECTING WILDLIFE",
    buttonText: "WILDLIFE CONSERVATION",
    buttonLink: "/wildlife-conservation",
    bg: "/waiting.jpg",
  },
  {
    title: "NATURE'S SERVICES",
    buttonText: "ECOSYSTEM SERVICES",
    buttonLink: "/ecosystem-services",
    bg: "/waiting.jpg",
  },
  {
    title: "VISIT OUR FOREST",
    buttonText: "VISIT US",
    buttonLink: "/visit-us",
    bg: "/waiting.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [current, isTransitioning]
  );

  const nextSlide = useCallback(() => {
    goToSlide((current + 1) % slides.length);
  }, [current, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((current - 1 + slides.length) % slides.length);
  }, [current, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100vh", minHeight: "600px" }}>
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            opacity: idx === current ? 1 : 0,
            zIndex: idx === current ? 10 : 0,
            display: idx === current ? "list-item" : "none",
            listStyle: "none",
          }}
        >
          {/* Parallax Background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.41) 0%, rgba(0,0,0,0) 100%), url(${slide.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "50%",
              backgroundColor: "#c1c1c1",
            }}
          />

          {/* Content */}
          <div
            className="relative z-10 h-full flex items-center justify-center"
            style={{ paddingTop: "105px" }}
          >
            <div className="text-center text-white px-4 w-full max-w-[1080px] mx-auto">
              <h1
                style={{
                  fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
                  fontWeight: 700,
                  letterSpacing: "1px",
                  textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)",
                  fontSize: "clamp(40px, 5vw, 66px)",
                  color: "#ffffff",
                  marginBottom: "50px",
                }}
              >
                <Link
                  to={slide.buttonLink}
                  style={{ color: "#ffffff", textDecoration: "none" }}
                >
                  {slide.title}
                </Link>
              </h1>
              <div>
                <Link
                  to={slide.buttonLink}
                  className="btn-divi btn-divi-white"
                  style={{ fontSize: "20px" }}
                >
                  {slide.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Arrows - hidden by default, shown on hover */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 z-20 text-white cursor-pointer select-none transition-all duration-300 opacity-0 hover:opacity-100"
        style={{
          left: "0px",
          transform: "translateY(-50%)",
          fontSize: "50px",
          fontFamily: "ETmodules, sans-serif",
          background: "none",
          border: "none",
          padding: "10px 22px",
        }}
        aria-label="Previous slide"
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 z-20 text-white cursor-pointer select-none transition-all duration-300 opacity-0 hover:opacity-100"
        style={{
          right: "0px",
          transform: "translateY(-50%)",
          fontSize: "50px",
          fontFamily: "ETmodules, sans-serif",
          background: "none",
          border: "none",
          padding: "10px 22px",
        }}
        aria-label="Next slide"
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
      >
        &#8250;
      </button>

      {/* Dots / Controllers */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className="cursor-pointer transition-all border-0"
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: idx === current ? "#78c922" : "rgba(255,255,255,0.5)",
              transform: idx === current ? "scale(1.1)" : "scale(1)",
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Show arrows on section hover */}
      <style>{`
        section:hover button[aria-label="Previous slide"],
        section:hover button[aria-label="Next slide"] {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}
