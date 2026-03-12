export default function DetailsSection() {
  return (
    <section className="relative py-8 px-[30px]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/Internship/Interns-in-Pickup.jpg.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />
      <div className="relative z-10 max-w-[1080px] mx-auto">
        <div
          className="text-white"
          style={{
            backgroundColor: "rgba(0,0,0,0.71)",
            borderRadius: "6px",
            padding: "25px 20px 0",
            fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
            fontSize: "16px",
            lineHeight: "2em",
          }}
        >
          <h1
            className="text-center mb-4"
            style={{
              fontWeight: 700,
              color: "#fff",
              fontSize: "30px",
              lineHeight: "1em",
            }}
          >
            WHO CAN APPLY?
          </h1>
          <p className="text-justify mb-6">
            Currently, CNF has interns specializing in Photography, Forest
            Management, Website Development, Social Media Marketing,
            Sustainability Management, and International Relations. If you think
            your background or experience can contribute to our work, we would
            love to hear how! Our only criteria are passion, dedication, and
            respect.
          </p>
          <h1
            className="text-center mb-4"
            style={{
              fontWeight: 700,
              color: "#fff",
              fontSize: "30px",
              lineHeight: "1em",
            }}
          >
            DETAILS
          </h1>
          <p className="text-justify mb-6">
            Our organization operates primarily in two locations: Pai, a small
            town in the Mae Hong Son province of northern Thailand, and Tarutao
            National Park, a southern island chain in the Satun Province.
            Housing, meals, and transportation are provided. We also assist new
            interns with the visa application process, which, in most cases,
            will allow individuals to stay in Thailand from ninety days up to
            one year. The minimum duration for an internship with CNF is at
            least one month.
          </p>
          <p className="text-justify mb-6">
            If you are interested in projects related to wildlife and
            environmental conservation and exploring a new culture and way of
            life, we invite you to apply for this internship! For more
            information please feel free to email us at:{" "}
            <a
              href="mailto:info@conservenaturalforests.org"
              style={{ color: "#78c922", textDecoration: "underline" }}
            >
              info@conservenaturalforests.org
            </a>
            . Don't forget to submit a resume and cover letter telling us how
            your background and education will contribute to our program.
          </p>
        </div>
      </div>
    </section>
  );
}
