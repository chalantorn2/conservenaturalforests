import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactDonateSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

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
          {/* Contact Form */}
          <div className="lg:w-1/2 px-5">
            <h1
              style={{
                fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                fontSize: "24px",
                fontWeight: 700,
                color: "#000",
                marginBottom: "20px",
                textAlign: "left",
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
                  style={{
                    padding: "16px",
                    backgroundColor: "#fff",
                    color: "#000",
                    border: "2px solid #78c922",
                    borderRadius: "6px",
                    fontFamily: '"Open Sans", sans-serif',
                    boxSizing: "border-box",
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full"
                  style={{
                    padding: "16px",
                    backgroundColor: "#fff",
                    color: "#000",
                    border: "2px solid #78c922",
                    borderRadius: "6px",
                    fontFamily: '"Open Sans", sans-serif',
                    boxSizing: "border-box",
                  }}
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
                style={{
                  padding: "16px",
                  backgroundColor: "#fff",
                  color: "#000",
                  border: "2px solid #78c922",
                  borderRadius: "6px",
                  fontFamily: '"Open Sans", sans-serif',
                  resize: "vertical",
                  boxSizing: "border-box",
                }}
              />
              <button
                type="submit"
                style={{
                  fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
                  fontWeight: 700,
                  fontSize: "20px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#000",
                  border: "2px solid #78c922",
                  borderRadius: "6px",
                  backgroundColor: "transparent",
                  padding: "0.3em 1em",
                  cursor: "pointer",
                  transition:
                    "color 300ms ease, font-size 300ms ease, background-color 300ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#78c922";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.fontSize = "22px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.fontSize = "20px";
                }}
              >
                Submit
              </button>
            </form>
          </div>

          {/* Donate CTA */}
          <div className="lg:w-1/2 px-5" style={{ marginTop: "30px" }}>
            <h2
              style={{
                fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                fontSize: "24px",
                lineHeight: "1.2em",
                color: "#000",
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
                color: "#000",
              }}
            >
              <p style={{ textAlign: "justify" }}>
                Conserve Natural Forests was built and continues to grow thanks
                to the generosity of like-minded people who support our work. We
                would not be where we are today without their help. If you would
                like to know more about how you can contribute toward restoring
                Thailand&rsquo;s beautiful ecosystems and saving endangered
                species, please consider donating to one of our projects.
              </p>
            </div>
            <div className="mt-6 text-center">
              <Link
                to="/donate"
                style={{
                  fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
                  fontWeight: 700,
                  fontSize: "20px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#000",
                  border: "2px solid #78c922",
                  borderRadius: "6px",
                  backgroundColor: "transparent",
                  padding: "0.3em 1em",
                  textDecoration: "none",
                  display: "inline-block",
                  transition:
                    "color 300ms ease, font-size 300ms ease, background-color 300ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#78c922";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.fontSize = "22px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "#000";
                  e.currentTarget.style.fontSize = "20px";
                }}
              >
                DONATE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
