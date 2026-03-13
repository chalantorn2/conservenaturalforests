import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const galleryImages = [
  { src: "/Wildlife_Conservation/Kamee-and-Mahout.jpg.jpeg", alt: "Kamee and Mahout" },
  { src: "/Wildlife_Conservation/Kamee-Behind.jpg.jpeg", alt: "Kamee Behind" },
  { src: "/Wildlife_Conservation/Kamee-Closeup.jpg.jpeg", alt: "Kamee Closeup" },
  { src: "/Wildlife_Conservation/vt.jpeg", alt: "Kamee Front" },
];

export default function ElephantDetailSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % galleryImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section data-aos="fade-up" style={{ paddingTop: "55px" }}>
      {/* Two columns: Gallery + Text */}
      <div
        className="max-w-[1080px] mx-auto px-6 flex flex-col lg:flex-row gap-8"
        style={{ paddingBottom: "42px" }}
      >
        {/* Left: Gallery Slider */}
        <div className="lg:w-1/2" style={{ marginTop: "40px" }}>
          <div
            style={{
              borderRadius: "6px",
              overflow: "hidden",
              position: "relative",
              aspectRatio: "510/340",
              boxShadow: "6px 6px 18px 0px rgba(0,0,0,0.71)",
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

        {/* Right: Text */}
        <div className="lg:w-1/2">
          <div
            style={{
              fontFamily:
                '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
              fontSize: "16px",
              lineHeight: "2em",
              color: "#000",
              marginTop: "12px",
            }}
          >
            <p style={{ textAlign: "justify" }}>
              The most reliable estimates of the national elephant population
              suggest there are ~6500 elephants remaining in total. Of this
              population, over half (3500-4000) of the remaining elephants are
              raised in captivity, mainly in the tourism and forestry sectors.
              Conservative estimates suggest that there are only 1300-1700 wild
              elephants remaining in protected areas. More generous estimates
              propose a range of 2100-3000 wild elephants throughout the entire
              country. Recently, the Department of Parks, Wildlife and Plant
              Conservation announced that the wild elephant population in some
              protected areas in Thailand is increasing at a rate of 7% per
              year, suggesting that there are viable habitats to support more
              wild elephants.
            </p>
          </div>
        </div>
      </div>

      {/* Full-width reintroduction text */}
      <div className="max-w-[1080px] mx-auto px-6">
        <div
          style={{
            fontFamily:
              '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
            fontSize: "16px",
            lineHeight: "2em",
            color: "#000",
            paddingBottom: "0",
            marginBottom: "1px",
          }}
        >
          <p style={{ textAlign: "justify" }}>
            We believe as many elephants as possible should return to the forest.
            To date, there have only been two well-documented cases of
            successful reintroduction in Asia. The Elephant Reintroduction
            Foundation in Thailand has released over 100 elephants since they
            began their project in 1996. By all accounts, the project has been
            very successful: the cows have organized themselves into herds and
            many have mated with wild bulls and reproduced. Interestingly, these
            herds seem to have formed based not on inter-relatedness, but by the
            presence of a calf. Genetic diversity remained high after 20 years
            of monitoring, which suggests low occurrences of inbreeding and
            adequate genetic diversity for long-term success. The protected
            areas where these elephants were released – Sublanka and Doi Pha
            Muang – are large and well-protected, and human-elephant conflict in
            these areas remains minimal compared to other areas further south.
            The demonstrated success of this project should encourage other
            organizations to follow suit before the wild Asian elephant has been
            extirpated from Thailand entirely.
          </p>
          <p style={{ textAlign: "justify" }}>
            This work will not be easy and it will require cooperation from many
            different stakeholders. CNF wants to replant trees and reforest
            areas that can sustain large wild elephant herds and reduce
            human-elephant conflict.
          </p>
        </div>

        {/* HOW CAN I HELP? Button */}
        <div className="text-center" style={{ marginTop: "20px", marginBottom: "30px" }}>
          <Link
            to="/donate"
            style={{
              fontFamily:
                '"Lato", Helvetica, Arial, Lucida, sans-serif',
              fontWeight: 700,
              fontSize: "20px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#000",
              border: "2px solid #78c922",
              borderRadius: "6px",
              backgroundColor: "transparent",
              padding: "0.3em 1em",
              textDecoration: "none",
              display: "inline-block",
              transition:
                "color 300ms ease, font-size 300ms ease, background-color 300ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#78c922";
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.fontSize = "22px";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#000";
              e.currentTarget.style.fontSize = "20px";
            }}
          >
            HOW CAN I HELP?
          </Link>
        </div>
      </div>
    </section>
  );
}
