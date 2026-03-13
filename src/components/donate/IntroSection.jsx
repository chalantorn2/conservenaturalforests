const textStyle = {
  fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
  fontSize: "16px",
  lineHeight: "2em",
  color: "#000",
};

export default function IntroSection() {
  return (
    <section
      id="donate-intro"
      data-aos="fade-up"
      style={{ paddingTop: "40px", paddingBottom: "40px" }}
    >
      <div className="max-w-[1080px] mx-auto px-6">
        <div style={textStyle}>
          <p style={{ textAlign: "justify" }}>
            There are so many people around the world who want to see change
            but don&rsquo;t know where to start. Let us help! We are here to
            be the conduit between your goodwill and positive impacts on the
            ground. As the old proverb goes: &ldquo;The best time to plant a
            tree was 20 years ago. The second best time is now.&rdquo; CNF
            takes a holistic approach to forest landscape restoration. If you
            would like to learn more about our work, we encourage you to
            explore our site!
          </p>
        </div>
      </div>
    </section>
  );
}
