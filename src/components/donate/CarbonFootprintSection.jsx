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
          <div
            style={{
              ...textStyle,
              color: "#fff",
              marginTop: "50px",
              paddingRight: "20px",
              paddingLeft: "20px",
            }}
          >
            <p style={{ textAlign: "justify" }}>
              Calculating your carbon footprint and the best way to reduce it
              can be very complicated. Reducing consumption and committing to
              sustainable alternatives are not only recommended &ndash; they are
              necessary and urgent. Some of these changes are relatively
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
            <p className="mt-4">
              <a
                href="https://calculator.carbonfootprint.com/calculator.aspx"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#78c922", fontWeight: 700 }}
              >
                Click here
              </a>{" "}
              to find a handy calculator you can use to work out your own carbon
              footprint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
