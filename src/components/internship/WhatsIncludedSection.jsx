const whatsIncluded = [
  "All expenses associated with the arrangement of the internship, including the necessary documents to gain visa approval and assistance with the visa application process.",
  "Your own private bungalow, fully equipped with your own bathroom and hot water for showers.",
  "Freshly prepared breakfast, lunch, and dinner customized to your liking and food preferences during the week. Saturdays and Sundays are yours to explore the delicious flavours around Pai!",
  "A motorbike for every two interns to use at your leisure.",
  "Transportation and accommodation during educational road trips.",
  "Transportation to your bungalow or hotel once you arrive in Pai.",
  "In-country support services for the duration of the internship.",
  "Free high-speed WiFi in your bungalow as well as the general living area.",
];

export default function WhatsIncludedSection() {
  return (
    <section className="relative py-10 px-[30px]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/Internship/Yellow-Banners.jpg.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="relative z-10 max-w-[1080px] mx-auto">
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.72)",
            borderRadius: "6px",
            paddingBottom: "27px",
          }}
        >
          <div style={{ marginTop: "40px", paddingTop: "20px" }}>
            <h1
              className="text-center"
              style={{
                fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
                fontSize: "37px",
                lineHeight: "1.5em",
                fontWeight: 700,
                color: "#fff",
              }}
            >
              WHAT'S INCLUDED
            </h1>
          </div>
          <div className="px-5">
            {whatsIncluded.map((item, idx) => (
              <div key={idx}>
                <p
                  className="text-center"
                  style={{
                    fontFamily:
                      '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                    fontSize: "16px",
                    lineHeight: "2em",
                    color: "#fff",
                    fontWeight: 700,
                    padding: "0 20px",
                  }}
                >
                  {item}
                </p>
                {idx < whatsIncluded.length - 1 && (
                  <div
                    className="mx-auto"
                    style={{
                      maxWidth: "10%",
                      borderTop: "2px solid #78c922",
                      margin: "16px auto",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
