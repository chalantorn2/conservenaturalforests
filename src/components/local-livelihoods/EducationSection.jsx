import { useState, useEffect, useCallback } from "react";

const galleryImages = [
  { alt: "Kids Writing" },
  { alt: "Kids in Hut" },
  { alt: "Kids Watching Tortoises" },
  { alt: "Hippo and Kids with Tortoises" },
  { alt: "Hippo Kids Tour" },
  { alt: "Kids and Monk" },
  { alt: "Lady Collecting Leaves" },
  { alt: "Lady Selling Bananas" },
];

export default function EducationSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % galleryImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="education" style={{ paddingBottom: "20px" }}>
      {/* Title + Intro */}
      <div className="max-w-[1080px] mx-auto px-6">
        <div
          style={{
            fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
            fontSize: "16px",
            lineHeight: "2em",
            color: "#000",
            marginTop: "50px",
          }}
        >
          <h1
            className="text-center"
            style={{ fontWeight: 700, lineHeight: "1.5em" }}
          >
            EDUCATION
          </h1>
          <p style={{ textAlign: "justify" }}>
            The youth of today and tomorrow will carry the torch to a
            sustainable future – and bear the costs if we do not act. We run
            daily educational programs and organise field trips for local
            schoolchildren to help them understand the importance of
            sustainability and our connection to nature in appropriate terms. We
            also directly support several local schools by donating supplies,
            food, and teaching English.
          </p>
        </div>
      </div>

      {/* Two columns: Text + Gallery */}
      <div
        className="max-w-[1080px] mx-auto px-6 flex flex-col lg:flex-row gap-8"
        style={{ marginTop: "30px", paddingBottom: "27px" }}
      >
        {/* Left: Text */}
        <div className="lg:w-1/2">
          <div
            style={{
              fontFamily:
                '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
              fontSize: "16px",
              lineHeight: "2em",
              color: "#000",
              marginTop: "20px",
            }}
          >
            <p style={{ textAlign: "justify" }}>
              But learning is not just for kids! CNF donates a significant
              amount of our seedlings to locals free of charge, and more
              importantly, we work with them to understand the utility of each
              species and how it might suit their needs. We are also working to
              develop workshops at our tree nursery and restoration sites to
              help local landowners understand the potential value of
              multi-purpose trees and other agricultural best management
              practices. These dialogues are not one-way, but they also help us
              understand the history, culture, and priorities of our community
              and how we can best serve them.
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
                src="/waiting.jpg"
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
