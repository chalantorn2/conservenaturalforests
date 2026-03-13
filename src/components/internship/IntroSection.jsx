export default function IntroSection() {
  return (
    <section id="intro" className="py-10 px-[30px] bg-white" data-aos="fade-up">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left - Text */}
          <div className="md:w-1/2" style={{ marginTop: "50px" }}>
            <p
              className="text-justify"
              style={{
                fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                fontSize: "16px",
                lineHeight: "2em",
                color: "#000",
              }}
            >
              Our International Internship Program provides an opportunity for
              both undergraduate and graduate students from a variety of
              backgrounds to join our project and gain valuable experience
              working in the nonprofit NGO sector. This program will challenge
              its participants to further their professional development in
              their area of expertise, while also learning new skills in a
              dynamic environment.
            </p>
          </div>
          {/* Right - Gallery Placeholder */}
          <div className="md:w-1/2">
            <div
              className="relative overflow-hidden"
              style={{ borderRadius: "6px" }}
            >
              <img
                src="/Internship/Wesley-and-Kamee.jpg.jpeg"
                alt="Internship gallery"
                className="w-full h-auto"
                style={{ aspectRatio: "510/340" }}
              />
              {/* Gallery dots */}
              <div className="flex justify-center gap-2 py-3 bg-white">
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <span
                    key={n}
                    className="inline-block rounded-full"
                    style={{
                      width: "10px",
                      height: "10px",
                      backgroundColor: n === 1 ? "#78c922" : "#ddd",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
