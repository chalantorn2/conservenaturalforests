import { useState, useEffect, useCallback } from "react";

const textStyle = {
  fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
  fontSize: "16px",
  lineHeight: "2em",
  color: "#000",
};

const galleryImages = [
  { src: "/Visit-Us/Vistors-Planting.jpg.jpeg", alt: "Visitors Planting" },
  { src: "/Visit-Us/Hippo-Cooking.jpg.jpeg", alt: "Hippo Cooking" },
  { src: "/Visit-Us/Passionfruit.jpg.jpeg", alt: "Passionfruit" },
  { src: "/Visit-Us/Fruit-on-Table-480x320.jpg.jpeg", alt: "Fruit on Table" },
  { src: "/Visit-Us/Gin-Tray.jpg.jpeg", alt: "Gin Tray" },
  { src: "/Visit-Us/Noodles.jpg.jpeg", alt: "Noodles" },
];

export default function AboutVisitSection() {
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
      id="about-visit"
      data-aos="fade-up"
      style={{ paddingTop: "29px", paddingBottom: "43px" }}
    >
      <div
        className="max-w-[1080px] mx-auto px-6"
        style={{ paddingTop: "40px" }}
      >
        {/* Intro text + Gallery row */}
        <div
          className="flex flex-col lg:flex-row gap-8 items-start"
          style={{ marginTop: "10px" }}
        >
          {/* Left: Title + Divider + Text */}
          <div className="lg:w-1/2">
            <h1
              style={{
                fontWeight: 700,
                fontSize: "31px",
                color: "#333",
                marginTop: "20px",
                marginBottom: "0",
                textAlign: "center",
              }}
            >
              ABOUT THE VISIT
            </h1>
            <div
              className="mx-auto"
              style={{
                borderTop: "2px solid #78c922",
                width: "17%",
                marginTop: "32px",
                marginBottom: "20px",
              }}
            />
            <p style={{ ...textStyle, textAlign: "justify" }}>
              Come join us for a day! Our original project site and tree nursery
              are tucked away in a quiet, beautiful valley with the Pai River
              running through it. CNF invites anyone who would like to learn
              more about tropical forests, ecological restoration, sustainable
              tourism, and Asian elephant conservation &ndash; and we believe
              the best way of learning is doing! From seed to tree, prepare to
              get your hands dirty doing the good work.
            </p>
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

        {/* Seasonal info */}
        <div style={{ ...textStyle, marginTop: "24px" }}>
          <p style={{ textAlign: "justify" }}>
            Please remember: This is an active project site, and there is a
            season for everything. During the dry, cool &ldquo;winter&rdquo;
            between November and January we are gathering seeds from the forest
            and propagating them in our nursery. As the temperature builds
            between February and May we are preparing new sites for planting.
            When the monsoon rains arrive, we plant our trees in the right place
            at the right time! This means that no matter when you visit, you
            will experience an essential part of the process. Like the Pai river
            &ndash; fast and strong during the monsoons, slow and lazy during
            the dry season &ndash; each time is important for different reasons.
          </p>
        </div>
      </div>

      {/* Tour details */}
      <div
        className="max-w-[1080px] mx-auto px-6 font-bold"
        style={{ paddingBottom: "1px" }}
      >
        <div style={{ ...textStyle, marginTop: "60px" }}>
          <p style={{ textAlign: "center" }}>
            Our tours run between 13:30 and 17:00 daily. While every day is
            different, the outline of the tour looks something like this:
          </p>
        </div>

        {/* Step 1 */}
        <div style={{ ...textStyle, marginTop: "24px" }}>
          <p style={{ textAlign: "justify" }}>
            We begin by picking up visitors from outside Ped&rsquo;s Pai Pizza
            by the Rim Pai Market (Wednesday Market) in Pai town at 13:00.
            Transportation is included at no additional cost. You can also
            follow the truck with your motorbike, or meet us at the land (17km
            south of Pai) around 13:30. It&rsquo;s an adventurous road &ndash;
            take your time and enjoy the beautiful mountain views!
          </p>
        </div>

        {/* Divider */}
        <div
          className="mx-auto my-6"
          style={{
            borderTop: "2px solid #78c922",
            maxWidth: "21%",
          }}
        />

        {/* Step 2 */}
        <div style={textStyle}>
          <p style={{ textAlign: "justify" }}>
            When you arrive at the project site, we will provide refreshments
            and spend a few minutes explaining our work and context &ndash; what
            we do and why we do it. This includes a brief history on forest and
            wildlife conservation in Thailand and the ecology of forest
            restoration &ndash; a forest is so much more than just the trees!
            Education is perhaps the most important part of this experience, and
            this introduction is meant to foster questions and robust discussion
            for the rest of the tour.
          </p>
        </div>

        {/* Divider */}
        <div
          className="mx-auto my-6"
          style={{
            borderTop: "2px solid #78c922",
            maxWidth: "21%",
          }}
        />

        {/* Step 3 */}
        <div style={textStyle}>
          <p style={{ textAlign: "justify" }}>
            Toward the end of the day, we gather everyone and head over to our
            on-site demonstration forest. Here we explain our methodology and
            ask everyone first to add a seed to our nursery and then to plant a
            seedling in the forest. This is the most important part of the day
            &ndash; it provides a way for tourists to give back to the
            environment and simultaneously enrich our demonstration forest.
            After the tree planting, we will answer any final questions and
            drive everyone back to the Rim Pai Market in Pai around 17:00.
          </p>
        </div>

        {/* Divider */}
        <div
          className="mx-auto my-6"
          style={{
            borderTop: "2px solid #78c922",
            maxWidth: "21%",
          }}
        />

        {/* Elephant note */}
        <div style={textStyle} className="font-normal">
          <p style={{ textAlign: "justify" }}>
            <strong>IMPORTANT NOTE:</strong> There is an adult female elephant
            named Kamee who is free to roam the land and do as she pleases. She
            was relocated to our site in 2017 after many years of hard work and
            she is now retired. You will likely see her feeding or bathing in
            the river during your visit, but we ask that you kindly give her
            space. She is not here to entertain guests, we will not compel her
            to join us, and interactions will be kept to minimum for her safety
            and well-being as well as ours.
          </p>
        </div>
      </div>
    </section>
  );
}
