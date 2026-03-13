import { useState, useEffect } from "react";

const reviews = [
  {
    title: "Eco-conscious Local Conservation",
    quote:
      "\u201CConserve Natural Forest is a local conservation NGO that allows you to give back to nature by letting you plant seeds to grow the forest even further. Not only do they care for the plants, but the future for the animals in Thailand. Most importantly conservation is the basis for every project done here and therefore this is a must tourist stop for all types of groups.\u201D",
    author: "Emily H \u2013 February 2020",
  },
  {
    title: "Great Experience",
    quote:
      "\u201CIt was such a good experience to see this beautiful place and to learn about reforestation and wildlife conservation! During the tour you can even help to plant trees to offset your carbon footprint a little bit. In my opinion a great way to give something back to nature and to the country when traveling as a tourist.\u201D",
    author: "Marlene \u2013 January 2020",
  },
  {
    title: "Excellent Support, Brilliant Innovation, Wonderful Leader",
    quote:
      '\u201CWe were completely "wow"ed by the service and efficient running of the project, we were also incredibly grateful to receive so much support and communication from management during our fundraising and marketing of the initiative. This organisation is the best solution for companies trying to become more eco-conscious and would recommend getting in touch with them as soon as you can to join the movement of eco-conscious companies fighting climate change.\u201D',
    author: "Courtney \u2013 December 2019",
  },
  {
    title: "Fantastic Experience and Project",
    quote:
      "\u201CLearned so much about forestry, agriculture and sustainability from great staff who loved answering weird questions and showing me all their hard work! They made the tour feel really informal and natural and it\u2019s such a nice place to spend an afternoon. A really worthy cause!\u201D",
    author: "Sarah D \u2013 September 2019",
  },
  {
    title: "Highlight of My Trip",
    quote:
      "\u201CVisiting Conserve Natural Forests was one of the best trips I\u2019ve experienced so far in Thailand, out of five years of frequent visits to the country, and is a must-do for anyone hoping to find out more about the region\u2019s ecology while contributing to a worthwhile cause. The CNF team are extremely knowledgeable about both reforestation and wildlife conservation, and it\u2019s clear that the Pai community are proud to host such dedicated NPO in their town.\u201D",
    author: "James \u2013 April 2019",
  },
  {
    title: "Great Time at CNF!",
    quote:
      "\u201CThe drive in is absolutely scenic as you wind through jungle foliage, pass rice paddies and garlic farms, and make your way toward the Pai River where this organization owns a beautiful plot of land. We learned about the reforestation efforts and some of the history of this NGO. The site boasts 30 species of plants in their demonstration forest and walking through it was really an experience in and of itself. You don\u2019t really know what to expect until you\u2019re right in the middle of the thing.\u201D",
    author: "Mike R \u2013 July 2017",
  },
];

export default function ReviewsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      data-aos="fade-up"
      style={{ paddingTop: "22px", paddingBottom: "40px" }}
    >
      <div className="max-w-[1080px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Slider */}
          <div className="lg:w-3/5">
            <div
              style={{
                borderRadius: "6px",
                overflow: "hidden",
                backgroundColor: "#fff",
                border: "1px solid #eee",
                minHeight: "280px",
                position: "relative",
              }}
            >
              <div style={{ padding: "30px 35px" }}>
                <h2
                  style={{
                    fontFamily:
                      '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                    fontWeight: 600,
                    textTransform: "uppercase",
                    fontSize: "clamp(20px, 3vw, 31px)",
                    lineHeight: "1.2em",
                    color: "#78c922",
                    marginBottom: "16px",
                    textAlign: "center",
                  }}
                >
                  {reviews[currentSlide].title}
                </h2>
                <div
                  style={{
                    fontFamily:
                      '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                    fontSize: "16px",
                    color: "#000",
                    lineHeight: "1.7em",
                  }}
                >
                  <p style={{ textAlign: "justify" }}>
                    {reviews[currentSlide].quote}
                  </p>
                  <p className="mt-3" style={{ textAlign: "center" }}>
                    {reviews[currentSlide].author}
                  </p>
                </div>
              </div>

              {/* Arrows */}
              <button
                onClick={() =>
                  setCurrentSlide(
                    (prev) => (prev - 1 + reviews.length) % reviews.length,
                  )
                }
                className="absolute left-2 top-1/2 -translate-y-1/2"
                style={{
                  color: "#78c922",
                  fontSize: "36px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  lineHeight: 1,
                }}
                aria-label="Previous review"
              >
                &#8249;
              </button>
              <button
                onClick={() =>
                  setCurrentSlide((prev) => (prev + 1) % reviews.length)
                }
                className="absolute right-2 top-1/2 -translate-y-1/2"
                style={{
                  color: "#78c922",
                  fontSize: "36px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  lineHeight: 1,
                }}
                aria-label="Next review"
              >
                &#8250;
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 pb-3">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                      border: "none",
                      backgroundColor:
                        i === currentSlide ? "#78c922" : "rgba(0,0,0,0.2)",
                      cursor: "pointer",
                      transition: "background-color 300ms",
                    }}
                    aria-label={`Review ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* TripAdvisor badge */}
          <div className="lg:w-2/5 text-center">
            <a
              href="https://www.tripadvisor.co.uk/Attraction_Review-g303916-d10767548-Reviews-Conserve_Natural_Forests-Pai_Mae_Hong_Son_Province.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Visit-Us/TC_white_winner-gif_L_2024.gif"
                alt="Tripadvisor Traveller's Choice Awards 2024"
                style={{ maxWidth: "300px", margin: "0 auto" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
