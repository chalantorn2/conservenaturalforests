import { Link } from "react-router-dom";

export default function DonateCtaSection() {
  return (
    <section className="relative py-20 px-[30px]" data-aos="fade-up">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/Contact/Greenhouse.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="relative z-10 max-w-[1080px] mx-auto">
        <div
          className="text-center text-white"
          style={{
            backgroundColor: "rgba(0,0,0,0.71)",
            borderRadius: "6px",
            padding: "0 0 27px 0",
          }}
        >
          <div className="py-10 px-8">
            <h2
              className="mb-4"
              style={{
                fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "1.2em",
              }}
            >
              Want to contribute to our cause?
            </h2>
            <p
              className="text-justify mb-8 max-w-[800px] mx-auto"
              style={{
                fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                fontSize: "16px",
                lineHeight: "1.7em",
              }}
            >
              Conserve Natural Forests was built and continues to grow thanks to
              the generosity of like-minded people who support our work. We
              would not be where we are today without their help. If you would
              like to know more about how you can contribute toward restoring
              Thailand's beautiful ecosystems and saving endangered species,
              please consider donating to one of our projects.
            </p>
            <Link
              to="/donate"
              className="btn-divi"
              style={{
                color: "#fff",
                borderColor: "#78c922",
                borderRadius: "6px",
                letterSpacing: "2px",
                fontSize: "18px",
                fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
                fontWeight: 700,
                textTransform: "uppercase",
                backgroundColor: "rgba(0,0,0,0.45)",
                textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#78c922";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.45)";
              }}
            >
              DONATE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
