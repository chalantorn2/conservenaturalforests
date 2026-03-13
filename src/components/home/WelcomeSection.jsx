import { Link } from "react-router-dom";

export default function WelcomeSection() {
  return (
    <section className="py-20 px-[30px] bg-white" data-aos="fade-up">
      <div className="max-w-[1080px] mx-auto text-center">
        <h1
          className="mb-6 uppercase"
          style={{
            fontSize: "30px",
            fontWeight: 900,
            color: "#333",
            lineHeight: "1.4em",
          }}
        >
          Welcome to Conserve Natural Forests
        </h1>
        <p
          className="max-w-[900px] mx-auto mb-8"
          style={{
            fontSize: "16px",
            color: "#444",
            lineHeight: "1.7em",
            fontWeight: 400,
            fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
          }}
        >
          Conserve Natural Forests (CNF) is a dedicated non-profit organization
          rooted in the Pai District of Mae Hong Son in Northern Thailand, with
          a presence in Krabi in the South, and active planting sites spanning
          over nine provinces across Thailand. Our mission is to rejuvenate
          natural forest landscapes throughout Thailand, with a focus on
          safeguarding and enhancing biodiversity, maintaining the ecological
          balance, and fostering sustainable improvements in the livelihoods of
          local communities. Our achievements have been made possible through
          the unwavering support of local communities and the Thai government,
          alongside the contributions of like-minded individuals who have
          championed our cause over the years. We warmly invite you to learn
          more about our work by visiting our project sites or subscribing to
          our mailing list. Thank you for your interest in our mission!
        </p>
        <Link
          to="/our-team"
          className="btn-divi btn-divi-green no-arrow"
          style={{ fontSize: "20px" }}
        >
          ABOUT US
        </Link>
      </div>
    </section>
  );
}
