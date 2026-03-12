import { Link } from "react-router-dom";

export default function EcoTourSection() {
  return (
    <section className="relative" style={{ padding: "0" }}>
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(/Wildlife_Conservation/Kamee-Behind.jpg.jpeg)" }}
      />

      <div className="relative max-w-[1080px] mx-auto px-6" style={{ paddingBottom: "27px" }}>
        <div
          className="text-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.71)",
            borderRadius: "6px",
            padding: "40px 20px",
            marginTop: "57px",
          }}
        >
          <h2
            style={{
              fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
              fontWeight: 700,
              fontSize: "30px",
              color: "#fff",
              lineHeight: "1.2em",
              marginBottom: "16px",
            }}
          >
            BOOK AN ECO-TOUR
          </h2>
          <div
            style={{
              fontFamily:
                '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
              fontSize: "16px",
              color: "#fff",
            }}
          >
            <p style={{ textAlign: "justify" }}>
              We host daily eco-tours for anyone who would like to visit and
              learn more about topics ranging from reforestation, wildlife
              conservation, sustainable tourism, and more. If you are interested
              and would like to experience the beauty of Thailand&rsquo;s
              mountain forests, please visit us!
            </p>
          </div>
          <div className="mt-6">
            <Link
              to="/visit-us"
              style={{
                fontFamily:
                  '"Lato", Helvetica, Arial, Lucida, sans-serif',
                fontWeight: 700,
                fontSize: "20px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#fff",
                border: "2px solid #78c922",
                borderRadius: "6px",
                backgroundColor: "rgba(2,2,2,0.76)",
                padding: "0.3em 1em",
                textDecoration: "none",
                display: "inline-block",
                transition:
                  "font-size 300ms ease, background-color 300ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#78c922";
                e.currentTarget.style.fontSize = "22px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(2,2,2,0.76)";
                e.currentTarget.style.fontSize = "20px";
              }}
            >
              FIND OUT MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
