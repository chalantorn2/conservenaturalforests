import { useState, useEffect, useCallback } from "react";

const galleryImages = [
  { src: "/Wildlife_Conservation/Bee.jpg.jpeg", alt: "Bee" },
  { src: "/Wildlife_Conservation/Butterfly.jpg.jpeg", alt: "Butterfly" },
  { src: "/Wildlife_Conservation/Kamee-Closeup.jpg.jpeg", alt: "Kamee Front" },
  { src: "/Wildlife_Conservation/Steady-Tortoise.jpg.jpeg", alt: "Steady Tortoise" },
  { src: "/Wildlife_Conservation/Woodpecker.jpg.jpeg", alt: "Woodpecker" },
];

export default function IntroSection() {
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
      style={{ paddingTop: "27px", paddingBottom: "27px" }}
    >
      <div className="max-w-[1080px] mx-auto px-6 flex flex-col lg:flex-row gap-8">
        {/* Left: Text */}
        <div className="lg:w-1/2">
          <div
            style={{
              fontFamily:
                '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
              fontSize: "16px",
              lineHeight: "2em",
              color: "#000",
              marginTop: "40px",
            }}
          >
            <p style={{ textAlign: "justify" }}>
              A forest is more than just the trees. The health of a forest
              ecosystem depends on a vibrant and diverse animal community. CNF
              strives to conserve and enhance biodiversity by improving landscape
              connectivity through planting trees that attract animals and
              actively promoting immediate intervention to protect critically
              endangered species. Some of these – sometimes referred to as
              keystone species – have a disproportionate effect on the
              forest&rsquo;s well-being, such as earthworms, bees, and
              elephants.
            </p>
          </div>
        </div>

        {/* Right: Gallery Slider */}
        <div className="lg:w-1/2">
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
                  backgroundColor: idx === current ? "#78c922" : "#ccc",
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
