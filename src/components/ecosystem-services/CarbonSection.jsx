import { useState, useEffect } from "react";

const textStyle = {
  fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
  fontSize: "16px",
  lineHeight: "2em",
  color: "#000",
};

const rowPadding = { paddingTop: "9px", paddingBottom: "42px" };

const slides = [
  "/Ecosystem_Services/Slide-1.jpg.jpeg",
  "/Ecosystem_Services/Slide-2.jpg.jpeg",
  "/Ecosystem_Services/Slide-3.jpg.jpeg",
];

export default function CarbonSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section id="carbon" data-aos="fade-up">
      {/* Title + intro paragraph */}
      <div className="max-w-[1080px] mx-auto px-6" style={rowPadding}>
        <div style={textStyle}>
          <h1
            style={{
              fontWeight: 700,
              fontSize: "26px",
              lineHeight: "1.5em",
              marginBottom: "16px",
            }}
          >
            CLIMATE CHANGE MITIGATION: CARBON SEQUESTRATION &amp; STORAGE
          </h1>
          <p style={{ textAlign: "justify" }}>
            We believe that climate change is the most pressing issue of our
            time. Greenhouse gas (GHG) emissions were the highest in human
            history between 2000 and 2010 at 49 GtCO2eq/yr. That&rsquo;s 49
            billion tons per year, and this astronomical number is rising. Carbon
            dioxide accounts for 76% of GHG emissions, which is mainly released
            by burning fossil fuels. The average American car releases 4,700
            kilos of CO2 per year. The average American home produces 7,500 of
            CO2 per year. A one-way flight from San Francisco to Bangkok is
            equivalent to 2,670 kilos of CO2 per passenger. Numbers like these
            are enough to diminish hope and discourage change. What can be done
            against such overwhelming odds?
          </p>
        </div>
      </div>

      {/* 2-column: text + gallery */}
      <div className="max-w-[1080px] mx-auto px-6" style={rowPadding}>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2" style={textStyle}>
            <p style={{ textAlign: "justify" }}>
              One answer: Plant trees! Here at CNF, we believe that every little
              effort makes a difference. Or in this case, every little tree. With
              enough trees we have a forest, and forests provide a wealth of
              critical resources to our world, including medicines, timber, food,
              and clean water. They also function as carbon sinks, meaning they
              pull carbon from the atmosphere and store it in their trunks,
              branches, leaves, and roots for decades or even centuries. Carbon
              is the basis for 50% of the dry weight of most trees. Every gram
              of carbon stored in trees as they grow is a gram that is not
              released back into the atmosphere. And trees are the gifts that
              keep on giving. Imagine reducing your carbon footprint and
              restoring a beautiful ecosystem at the same time. We estimate our
              carbon sequestration rates using IPCC best practice guidelines and
              site-specific field data we obtain during our annual or bi-annual
              site assessments.
            </p>
          </div>
          <div className="lg:w-1/2" style={{ marginTop: "60px" }}>
            <div className="relative overflow-hidden" style={{ borderRadius: "6px" }}>
              {slides.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`Carbon sequestration ${i + 1}`}
                  className="w-full"
                  style={{
                    display: i === current ? "block" : "none",
                  }}
                />
              ))}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className="rounded-full"
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: i === current ? "#78c922" : "rgba(255,255,255,0.6)",
                      border: "none",
                      cursor: "pointer",
                      transition: "background-color 300ms",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continuation text */}
      <div className="max-w-[1080px] mx-auto px-6" style={rowPadding}>
        <div style={textStyle}>
          <p style={{ textAlign: "justify" }}>
            Most scientists agree that a certain amount of global warming is
            already locked in, and we must prepare for change. The most important
            consideration of warming temperatures is the disruption of the
            Intertropical Convergence Zone (ITCZ) and monsoon weather systems.
            Current climate change models predict less frequent but more intense
            precipitation as temperature increases, translating to prolonged
            droughts and higher risk of flooding. The delayed onset of the rainy
            season may contribute to more frequent and more intense wildfires.
          </p>
          <p style={{ textAlign: "justify" }}>
            We select for hardy, drought-tolerant species in anticipation of
            climate change, but these predictions increase the urgency of
            landscape-based approaches to conservation and restoration. In
            particular, we must try to estimate how forest restoration will
            interact with climate change to affect local water supply and
            mitigate natural disaster risk. More information is also needed on
            how climate change will affect species dispersal and migrations.
            Increased fire risk underlines the importance of policies that
            address unsustainable fire practices in Thailand while also
            integrating fire as an essential part of the natural disturbance
            regime. Conserve Natural Forests recognizes the grave threat we all
            face with climate change, and we are ready to face it head on with
            your help!
          </p>
        </div>
      </div>
    </section>
  );
}
