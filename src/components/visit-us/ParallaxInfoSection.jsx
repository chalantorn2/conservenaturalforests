const textStyle = {
  fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "2em",
  color: "#000",
};

const darkBoxStyle = {
  ...textStyle,
  color: "#fff",
  backgroundColor: "rgba(0,0,0,0.71)",
  borderRadius: "6px",
  padding: "25px 20px 0",
};

const headingInDark = {
  fontWeight: 800,
  fontSize: "24px",
  textAlign: "center",
  color: "#fff",
  marginBottom: "12px",
};

export default function ParallaxInfoSection() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center"
      data-aos="fade-in"
      style={{
        backgroundImage: "url(/Visit-Us/Fruit-Spread.jpg.jpeg)",
        padding: "0",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
      />
      <div className="relative z-10 max-w-[1080px] mx-auto px-6 py-12">
        {/* PRICE */}
        <div
          style={{ ...darkBoxStyle, marginTop: "50px", paddingBottom: "20px" }}
        >
          <h1 style={headingInDark}>PRICE</h1>
          <p style={{ textAlign: "justify" }}>
            We ask for a minimum 1000 baht per person for the day. CNF is a
            non-profit foundation and your donation directly supports
            tree-planting and improving local livelihoods all over Pai District.
            Please note that the minimum donation is non-negotiable, but it is
            one-time only: You can return as many times as you want during your
            stay in Pai for no extra charge!
          </p>
        </div>

        {/* WHAT WE HAVE FOR YOU + WHAT YOU NEED TO BRING (side by side) */}
        <div
          className="flex flex-col lg:flex-row gap-6"
          style={{ marginTop: "24px" }}
        >
          <div
            className="lg:w-1/2"
            style={{
              ...darkBoxStyle,
              paddingBottom: "20px",
            }}
          >
            <h1 style={headingInDark}>WHAT WE HAVE FOR YOU</h1>
            <p style={{ textAlign: "justify" }}>
              We have drinking water on-site free of charge. In addition, we
              have several delicious food options available for purchase
              throughout the day, prepared-to-order by our (extremely) talented
              staff using fresh ingredients we get from the market daily! We try
              to accommodate any dietary restrictions or preferences. There are
              also several options for cold beverages.
            </p>
          </div>

          <div
            className="lg:w-1/2"
            style={{
              ...darkBoxStyle,
              paddingBottom: "20px",
            }}
          >
            <h1 style={headingInDark}>WHAT YOU NEED TO BRING</h1>
            <ul className="list-disc pl-5 space-y-1">
              <li>Comfortable, rugged clothes</li>
              <li>
                Good shoes and sandals/flip-flops &ndash; you might need to
                cross the river!
              </li>
              <li>Sunscreen</li>
              <li>Sunglasses</li>
              <li>Rain jacket</li>
              <li>Camera</li>
              <li>An open mind</li>
              <li>A willingness to learn</li>
            </ul>
            <p className="mt-3">
              During the warm, dry months don&rsquo;t forget your swimsuit!
            </p>
          </div>
        </div>

        {/* MEETING POINT & TRANSPORTATION + Google Maps (side by side) */}
        <div
          className="flex flex-col lg:flex-row gap-6 items-stretch"
          style={{ marginTop: "50px", marginBottom: "32px" }}
        >
          {/* Left: Text */}
          <div
            className="lg:w-1/2"
            style={{
              ...darkBoxStyle,
              paddingBottom: "20px",
            }}
          >
            <h1 style={headingInDark}>MEETING POINT &amp; TRANSPORTATION</h1>
            <p style={{ textAlign: "justify" }}>
              Travellers will meet at our pick up point outside Ped&rsquo;s Pai
              Pizza by the Rim Pai Market (Wednesday Market) at 13:00, and head
              towards our project site (17kms from Pai town). Transportation
              will be provided at no additional cost. Alternatively, you can
              follow our truck on your motorbike, or directly reach the land at
              13:30. The truck heads back to town around 17:00.
            </p>
            <h1 style={{ ...headingInDark, marginTop: "20px" }}>RSVP</h1>
            <p style={{ textAlign: "justify" }}>
              To RSVP, please book online at least 24 hours prior to your visit.
              For same day bookings, please book online and send us a message on{" "}
              <a
                href="https://facebook.com/conservenaturalforests"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#78c922", fontWeight: 700 }}
              >
                Facebook
              </a>{" "}
              or email us at{" "}
              <a
                href="mailto:noreply@conservenaturalforests.org"
                style={{ color: "#78c922", fontWeight: 700 }}
              >
                noreply@conservenaturalforests.org
              </a>{" "}
              to confirm. If you have any other questions or require further
              clarification regarding our visitor policy &ndash; don&rsquo;t
              hesitate to message us!
            </p>
          </div>

          {/* Right: Google Maps */}
          <div className="lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.530688187357!2d98.44596541497846!3d19.259274786983084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da87239b0caed9%3A0x87df33d7cdd6426f!2sConserve%20Natural%20Forest!5e0!3m2!1sen!2suk!4v1575918651155!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "6px", minHeight: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CNF Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
