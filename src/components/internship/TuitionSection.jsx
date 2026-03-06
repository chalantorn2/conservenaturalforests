export default function TuitionSection() {
  return (
    <section className="px-[30px] bg-white">
      <div className="max-w-[1080px] mx-auto" style={{ paddingBottom: "27px" }}>
        <div style={{ marginTop: "40px" }}>
          <h1
            className="text-center"
            style={{
              fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
              fontSize: "37px",
              lineHeight: "1.5em",
              fontWeight: 700,
              color: "#000",
            }}
          >
            TUITION
          </h1>
          <p
            className="text-justify"
            style={{
              fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
              fontSize: "16px",
              lineHeight: "2em",
              color: "#000",
            }}
          >
            The fee for the internship is 900 euros per month. This includes food,
            accommodation, and one motorbike for every two interns. It also covers
            the costs for the necessary documents for applicants to acquire a visa
            abroad, as well as the costs associated with extending their stay past
            90 days. However, you have the option of arranging your own
            accommodation, as well as providing for your own meals and
            transportation.
          </p>
        </div>
      </div>
    </section>
  );
}
