import { useState, useEffect, useCallback } from "react";

const galleryImages = [
  { alt: "Burning Hills" },
  { alt: "Roadside Fire" },
  { alt: "Motorbike in Smoke" },
  { alt: "Burnt Ground" },
];

export default function FireManagementSection() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % galleryImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section style={{ paddingBottom: "20px" }}>
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
            COMMUNITY-BASED FIRE MANAGEMENT
          </h1>
          <p style={{ textAlign: "justify" }}>
            An average of 178 km² (~8% of the total district land area) in Pai
            is burned annually. The early onset of prescribed fire-setting
            combined with the hot, dry transition monsoons have contributed to
            extremely hazardous air quality conditions for several months of the
            year. An air quality sensor installed at Pai Hospital in 2013 shows
            that each year since, the Air Quality Index (AQI) – an index that
            normalizes measures of particulate matter PM2.5 and PM10, ozone
            (O₃), nitrogen dioxide (NO₂), Sulfur Dioxide (SO₂) and Carbon
            Monoxide (CO) emissions – has exceeded the maximum score of 500.
            Depending on the local climate patterns, especially wind speed, the
            Pai and Muang Paeng Valleys may be inundated with smog between
            February and June.
          </p>
        </div>
      </div>

      {/* Charts row */}
      <div
        className="max-w-[1080px] mx-auto px-6 hidden lg:flex gap-8"
        style={{ marginTop: "30px" }}
      >
        <div className="w-1/2">
          <img
            src="/waiting.jpg"
            alt="Particulate Matter Pai"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="w-1/2">
          <img
            src="/waiting.jpg"
            alt="Daily Fire Count"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* Body text */}
      <div className="max-w-[1080px] mx-auto px-6">
        <div
          style={{
            fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
            fontSize: "16px",
            lineHeight: "2em",
            color: "#000",
          }}
        >
          <p style={{ textAlign: "justify" }}>
            The myriad sources of widespread fires in Pai District locally and
            Southeast Asia broadly remain poorly understood. Due to the
            considerable complexity, uncertainty, and sensitivity of this topic,
            CNF is developing an engagement strategy to reveal the values (and
            costs) of fire practices in Pai District. Consisting of both a
            qualitative survey and a non-market valuation discrete choice
            experiment, we hope to capitalize on the trust we've been built with
            local communities to understand, in essence, who is burning and why.
          </p>
        </div>
      </div>

      {/* Two columns: Text with bullets + Gallery */}
      <div
        className="max-w-[1080px] mx-auto px-6 flex flex-col lg:flex-row gap-8"
        style={{ marginTop: "30px", paddingBottom: "27px" }}
      >
        {/* Left: Text with bullet points */}
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
              We hope that this data will help us coordinate the broader
              district community to develop participatory "burn smarter"
              policies and open avenues for community management with local RFD
              and DNP representatives, including:
            </p>
            <ul
              style={{
                paddingLeft: "20px",
                textAlign: "justify",
                marginTop: "8px",
              }}
            >
              <li style={{ marginBottom: "8px" }}>
                Community fire breaks and volunteer fire patrols.
              </li>
              <li style={{ marginBottom: "8px" }}>
                Desynchronized private land burnings coordinated with other
                smallholders and local weather conditions.
              </li>
              <li style={{ marginBottom: "8px" }}>
                The possibility of combining the values provided by forest fires
                (lucrative fire-adapted mushroom cultivation, hunting, cultural
                and traditional values) with the need for better public forest
                management to allow locals to set controlled fires in forests
                that need thinning and reduced fuel loads under the supervision
                of the RFD.
              </li>
            </ul>
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
