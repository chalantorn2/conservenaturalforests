const textStyle = {
  fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
  fontSize: "16px",
  lineHeight: "2em",
  color: "#000",
};

export default function CarbonFootprintSection() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center"
      data-aos="fade-up"
      style={{
        backgroundImage: "url(/Donate/Ecosystems-Header.jpg.jpeg)",
        paddingTop: "66px",
        paddingBottom: "54px",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      />
      <div className="relative z-10 max-w-[1080px] mx-auto px-6">
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            borderRadius: "6px",
            overflow: "hidden",
            padding: "27px 20px",
          }}
        >
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left - Text */}
            <div
              className="lg:w-1/2"
              style={{
                ...textStyle,
                color: "#fff",
                marginTop: "0",
                paddingRight: "20px",
                paddingLeft: "20px",
              }}
            >
              <p style={{ textAlign: "justify" }}>
                Calculating your carbon footprint and the best way to reduce it
                can be very complicated. Reducing consumption and committing to
                sustainable alternatives are not only recommended &ndash; they
                are necessary and urgent. Some of these changes are relatively
                straightforward &ndash; carpooling, biking, electric cars, no
                wasted food, buying local, and more. Some are less
                straightforward, but arguably more important: contacting your
                political representatives, advocating policy change, organized
                demonstrations and protests, and especially voting. But despite
                our best efforts, we still live in a world that is highly
                dependent on fossil fuels (for now, at least). The heat in your
                home, lack of public transportation infrastructure, emergency
                flights &ndash; sometimes we have no choice.
              </p>
            </div>

            {/* Right - Embedded Carbon Footprint Calculator */}
            <div
              className="lg:w-1/2"
              style={{ paddingRight: "20px", paddingLeft: "20px" }}
            >
              <iframe
                src="https://calculator.carbonfootprint.com/calculator.aspx"
                title="Carbon Footprint Calculator"
                style={{
                  width: "100%",
                  height: "420px",
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: "grey",
                }}
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation-by-user-activation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
