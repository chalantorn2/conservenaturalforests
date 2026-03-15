import { useState } from "react";
import { Link } from "react-router-dom";

// variant: "dark-card" | "light"
export default function ContactDonateSection({ variant = "dark-card" }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const isDark = variant !== "light";
  const textColor = isDark ? "#fff" : "#000";
  const inputBg = isDark ? "rgba(0,0,0,0.74)" : "#fff";
  const submitBg = isDark ? "rgba(0,0,0,0.62)" : "transparent";
  const donateBtnBg = isDark ? "rgba(0,0,0,0.45)" : "transparent";
  const btnFontSize = isDark ? "18px" : "20px";

  const inputStyle = {
    padding: "16px",
    backgroundColor: inputBg,
    color: textColor,
    border: "2px solid #78c922",
    borderRadius: "6px",
    fontFamily: '"Open Sans", sans-serif',
    boxSizing: "border-box",
  };

  const btnBase = {
    fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
    fontWeight: 700,
    fontSize: btnFontSize,
    letterSpacing: "2px",
    textTransform: "uppercase",
    color: textColor,
    border: "2px solid #78c922",
    borderRadius: "6px",
    padding: "0.3em 1em",
    cursor: "pointer",
    transition: isDark
      ? "background-color 300ms ease"
      : "color 300ms ease, background-color 300ms ease",
    ...(isDark && { textShadow: "0 0.1em 0.1em rgba(0,0,0,0.4)" }),
  };

  const handleHoverIn = (bg) => (e) => {
    e.currentTarget.style.backgroundColor = "#78c922";
    if (!isDark) e.currentTarget.style.color = "#fff";
  };

  const handleHoverOut = (bg) => (e) => {
    e.currentTarget.style.backgroundColor = bg;
    if (!isDark) e.currentTarget.style.color = "#000";
  };

  const formBlock = (
    <>
      <h1
        style={{
          fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
          fontSize: "24px",
          fontWeight: 700,
          color: textColor,
          marginBottom: "20px",
        }}
      >
        Want to find out more? Send us a message!
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full"
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full"
            style={inputStyle}
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="w-full mb-4"
          style={{ ...inputStyle, resize: "vertical" }}
        />
        <div className="text-right">
          <button
            type="submit"
            style={{ ...btnBase, backgroundColor: submitBg }}
            onMouseEnter={handleHoverIn(submitBg)}
            onMouseLeave={handleHoverOut(submitBg)}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );

  const donateBlock = (
    <>
      <h2
        style={{
          fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
          fontSize: "24px",
          lineHeight: "1.2em",
          color: textColor,
          marginBottom: "16px",
          textAlign: "center",
        }}
      >
        Want to contribute to our cause?
      </h2>
      <div
        style={{
          fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
          fontSize: "16px",
          color: textColor,
        }}
      >
        <p style={{ textAlign: "justify" }}>
          Conserve Natural Forests was built and continues to grow thanks to the
          generosity of like-minded people who support our work. We would not be
          where we are today without their help. If you would like to know more
          about how you can contribute toward restoring Thailand&rsquo;s
          beautiful ecosystems and saving endangered species, please consider
          donating to one of our projects.
        </p>
      </div>
      <div className="mt-6 text-center">
        <Link
          to="/donate"
          style={{
            ...btnBase,
            backgroundColor: donateBtnBg,
            textDecoration: "none",
            display: "inline-block",
          }}
          onMouseEnter={handleHoverIn(donateBtnBg)}
          onMouseLeave={handleHoverOut(donateBtnBg)}
        >
          DONATE
        </Link>
      </div>
    </>
  );

  // === Dark-card: parallax bg + both columns in dark card ===
  if (variant === "dark-card") {
    return (
      <section
        className="relative"
        data-aos="fade-up"
        style={{ paddingTop: "32px", paddingBottom: "54px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url(/Home/Greenhouse.jpg.jpeg)" }}
        />
        <div className="relative max-w-[1080px] mx-auto px-6">
          <div
            className="flex flex-col lg:flex-row gap-8"
            style={{
              backgroundColor: "rgba(0,0,0,0.71)",
              borderRadius: "6px",
              overflow: "hidden",
              padding: "25px 20px 27px",
            }}
          >
            <div className="lg:w-1/2">{formBlock}</div>
            <div className="lg:w-1/2" style={{ marginTop: "41px" }}>
              {donateBlock}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // === Light: no bg image, black text, white inputs ===
  return (
    <section
      data-aos="fade-up"
      style={{
        paddingTop: "2px",
        paddingBottom: "54px",
        marginTop: "-5px",
      }}
    >
      <div className="max-w-[1080px] mx-auto px-6">
        <div
          className="flex flex-col lg:flex-row gap-8"
          style={{
            borderRadius: "6px",
            overflow: "hidden",
            paddingTop: "44px",
            paddingBottom: "27px",
          }}
        >
          <div className="lg:w-1/2 px-5">{formBlock}</div>
          <div className="lg:w-1/2 px-5" style={{ marginTop: "30px" }}>
            {donateBlock}
          </div>
        </div>
      </div>
    </section>
  );
}
