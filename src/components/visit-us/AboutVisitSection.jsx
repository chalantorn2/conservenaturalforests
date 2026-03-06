const textStyle = {
  fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
  fontSize: "16px",
  lineHeight: "2em",
  color: "#000",
};

export default function AboutVisitSection() {
  return (
    <section
      id="about-visit"
      style={{ paddingTop: "29px", paddingBottom: "43px" }}
    >
      <div className="max-w-[1080px] mx-auto px-6" style={{ paddingTop: "40px" }}>
        {/* Title + Divider */}
        <h1
          className="text-center"
          style={{
            fontWeight: 700,
            fontSize: "31px",
            color: "#333",
            marginTop: "20px",
          }}
        >
          ABOUT THE VISIT
        </h1>
        <div
          className="mx-auto"
          style={{
            borderTop: "2px solid #78c922",
            maxWidth: "10%",
            marginTop: "16px",
            marginBottom: "20px",
          }}
        />

        {/* Intro text + Gallery row */}
        <div
          className="flex flex-col lg:flex-row gap-8"
          style={{ marginTop: "50px" }}
        >
          <div className="lg:w-3/5" style={textStyle}>
            <p style={{ textAlign: "justify" }}>
              Come join us for a day! Our original project site and tree nursery
              are tucked away in a quiet, beautiful valley with the Pai River
              running through it. CNF invites anyone who would like to learn more
              about tropical forests, ecological restoration, sustainable
              tourism, and Asian elephant conservation &ndash; and we believe the
              best way of learning is doing! From seed to tree, prepare to get
              your hands dirty doing the good work.
            </p>
          </div>
          <div className="lg:w-2/5">
            {/* Gallery grid */}
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <img
                  key={i}
                  src="/waiting.jpg"
                  alt={`Gallery ${i}`}
                  className="w-full aspect-square object-cover"
                  style={{ borderRadius: "6px" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Seasonal info */}
        <div style={{ ...textStyle, marginTop: "24px" }}>
          <p style={{ textAlign: "justify" }}>
            Please remember: This is an active project site, and there is a
            season for everything. During the dry, cool &ldquo;winter&rdquo;
            between November and January we are gathering seeds from the forest
            and propagating them in our nursery. As the temperature builds
            between February and May we are preparing new sites for planting.
            When the monsoon rains arrive, we plant our trees in the right place
            at the right time! This means that no matter when you visit, you
            will experience an essential part of the process. Like the Pai river
            &ndash; fast and strong during the monsoons, slow and lazy during the
            dry season &ndash; each time is important for different reasons.
          </p>
        </div>
      </div>

      {/* Tour details */}
      <div
        className="max-w-[1080px] mx-auto px-6"
        style={{ paddingBottom: "1px" }}
      >
        <div style={{ ...textStyle, marginTop: "16px" }}>
          <p style={{ textAlign: "justify" }}>
            Our tours run between 13:30 and 17:00 daily. While every day is
            different, the outline of the tour looks something like this:
          </p>
        </div>

        {/* Step 1 */}
        <div className="flex flex-col lg:flex-row gap-8 mt-6">
          <div className="lg:w-3/5" style={textStyle}>
            <p style={{ textAlign: "justify" }}>
              We begin by picking up visitors from outside Ped&rsquo;s Pai Pizza
              by the Rim Pai Market (Wednesday Market) in Pai town at 13:00.
              Transportation is included at no additional cost. You can also
              follow the truck with your motorbike, or meet us at the land (17km
              south of Pai) around 13:30. It&rsquo;s an adventurous road &ndash;
              take your time and enjoy the beautiful mountain views!
            </p>
          </div>
          <div className="lg:w-2/5">
            <img
              src="/waiting.jpg"
              alt="Pick up point"
              className="w-full object-cover"
              style={{ borderRadius: "6px" }}
            />
          </div>
        </div>

        {/* Divider */}
        <div
          className="mx-auto my-6"
          style={{
            borderTop: "2px solid #78c922",
            maxWidth: "21%",
          }}
        />

        {/* Step 2 */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/5">
            <img
              src="/waiting.jpg"
              alt="Project site"
              className="w-full object-cover"
              style={{ borderRadius: "6px" }}
            />
          </div>
          <div className="lg:w-3/5" style={textStyle}>
            <p style={{ textAlign: "justify" }}>
              When you arrive at the project site, we will provide refreshments
              and spend a few minutes explaining our work and context &ndash;
              what we do and why we do it. This includes a brief history on
              forest and wildlife conservation in Thailand and the ecology of
              forest restoration &ndash; a forest is so much more than just the
              trees! Education is perhaps the most important part of this
              experience, and this introduction is meant to foster questions and
              robust discussion for the rest of the tour.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mx-auto my-6"
          style={{
            borderTop: "2px solid #78c922",
            maxWidth: "21%",
          }}
        />

        {/* Step 3 */}
        <div style={textStyle}>
          <p style={{ textAlign: "justify" }}>
            Toward the end of the day, we gather everyone and head over to our
            on-site demonstration forest. Here we explain our methodology and
            ask everyone first to add a seed to our nursery and then to plant a
            seedling in the forest. This is the most important part of the day
            &ndash; it provides a way for tourists to give back to the
            environment and simultaneously enrich our demonstration forest. After
            the tree planting, we will answer any final questions and drive
            everyone back to the Rim Pai Market in Pai around 17:00.
          </p>
        </div>

        {/* Divider */}
        <div
          className="mx-auto my-6"
          style={{
            borderTop: "2px solid #78c922",
            maxWidth: "21%",
          }}
        />

        {/* Elephant note */}
        <div style={textStyle}>
          <p style={{ textAlign: "justify" }}>
            <strong>IMPORTANT NOTE:</strong> There is an adult female elephant
            named Kamee who is free to roam the land and do as she pleases. She
            was relocated to our site in 2017 after many years of hard work and
            she is now retired. You will likely see her feeding or bathing in the
            river during your visit, but we ask that you kindly give her space.
            She is not here to entertain guests, we will not compel her to join
            us, and interactions will be kept to minimum for her safety and
            well-being as well as ours.
          </p>
        </div>
      </div>
    </section>
  );
}
