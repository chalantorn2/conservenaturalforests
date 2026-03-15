import { useState, useEffect, useCallback } from "react";

const galleryImages = [
  { src: "/Forest_Restoration/Digging.jpg.jpeg", alt: "Digging" },
  { src: "/Forest_Restoration/Holding-Banner.jpg.jpeg", alt: "Holding Banner" },
  { src: "/Forest_Restoration/Army-Planting-Day.jpg.jpeg", alt: "Army Planting Day" },
  { src: "/Forest_Restoration/Army-Listening.jpg.jpeg", alt: "Army Listening" },
  { src: "/Forest_Restoration/Miguel-in-Pickup.jpg.jpeg", alt: "Miguel in Pickup" },
  { src: "/Forest_Restoration/Army-with-Shovels.jpg.jpeg", alt: "Army with Shovels" },
  { src: "/Forest_Restoration/School-with-Banner.jpg.jpeg", alt: "School with Banner" },
];

export default function IntroGallerySection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % galleryImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      id="intro"
      data-aos="fade-up"
      style={{ paddingTop: "54px", paddingBottom: "54px" }}
    >
      <div
        className="max-w-[1080px] mx-auto px-6 flex flex-col lg:flex-row gap-8"
        style={{ paddingBottom: "0" }}
      >
        {/* Left: Intro Text */}
        <div className="lg:w-1/2">
          <div
            style={{
              fontFamily:
                '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "2em",
              color: "#000",
              marginTop: "75px",
              textAlign: "justify",
            }}
          >
            <p>
              CNF advocates a science-based holistic approach to forest
              landscape restoration. We employ a range of restoration
              strategies tailored to site characteristics, degradation level,
              disturbance regime, and the needs of the communities who stand to
              benefit the most from forest restoration. There are few
              one-size-fits-all solutions, and we believe that multifarious
              problems require multifaceted responses. In essence, we aim to
              plant the{" "}
              <span style={{ color: "#78c922" }}>
                <strong>right trees</strong>
              </span>{" "}
              in the{" "}
              <span style={{ color: "#78c922" }}>
                <strong>right place</strong>
              </span>{" "}
              at the{" "}
              <span style={{ color: "#78c922" }}>
                <strong>right time</strong>
              </span>
              .
            </p>
          </div>
        </div>

        {/* Right: Gallery Slider */}
        <div className="lg:w-1/2" style={{ marginTop: "20px" }}>
          <div
            style={{
              borderRadius: "6px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "510/340",
            }}
          >
            {galleryImages.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: idx === current ? 1 : 0,
                  transition: "opacity 600ms ease",
                }}
              />
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-3">
            {galleryImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  border: "none",
                  backgroundColor:
                    idx === current ? "#78c922" : "#ccc",
                  cursor: "pointer",
                  transition: "background-color 300ms",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
