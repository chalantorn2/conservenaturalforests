import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactDonateSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative py-20 px-[30px]">
      {/* Parallax Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url(/Home/Greenhouse.jpg.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.3)" }} />
      </div>

      <div className="relative z-10 max-w-[1080px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div
            className="p-6"
            style={{
              backgroundColor: "rgba(0,0,0,0.71)",
              borderRadius: "6px",
              overflow: "hidden",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            <h1
              className="mb-6"
              style={{
                fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                fontSize: "24px",
                color: "#ffffff",
                fontWeight: 700,
              }}
            >
              Want to find out more? Send us a message!
            </h1>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "rgba(0,0,0,0.74)",
                    color: "#ffffff",
                    border: "2px solid #78c922",
                    borderRadius: "6px",
                    padding: "12px 16px",
                    fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                    fontSize: "14px",
                    outline: "none",
                    flex: 1,
                  }}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    backgroundColor: "rgba(0,0,0,0.74)",
                    color: "#ffffff",
                    border: "2px solid #78c922",
                    borderRadius: "6px",
                    padding: "12px 16px",
                    fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                    fontSize: "14px",
                    outline: "none",
                    flex: 1,
                  }}
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                style={{
                  width: "100%",
                  backgroundColor: "rgba(0,0,0,0.74)",
                  color: "#ffffff",
                  border: "2px solid #78c922",
                  borderRadius: "6px",
                  padding: "12px 16px",
                  fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                  fontSize: "14px",
                  outline: "none",
                  resize: "vertical",
                  marginBottom: "16px",
                }}
              />
              <button
                type="submit"
                className="btn-divi"
                style={{
                  color: "#ffffff",
                  borderColor: "#78c922",
                  borderRadius: "6px",
                  letterSpacing: "2px",
                  fontSize: "18px",
                  fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
                  fontWeight: 700,
                  textTransform: "uppercase",
                  backgroundColor: "rgba(0,0,0,0.62)",
                  textShadow: "0em 0.1em 0.1em rgba(0,0,0,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#78c922";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.62)";
                }}
              >
                Submit
              </button>
            </form>
          </div>

          {/* Donate CTA */}
          <div
            className="flex flex-col justify-center"
            style={{
              color: "#ffffff",
              marginTop: "41px",
              marginLeft: "20px",
              marginRight: "20px",
              paddingRight: "0px",
            }}
          >
            <h2
              className="mb-6"
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
              className="text-justify mb-8"
              style={{
                fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                fontSize: "16px",
                lineHeight: "1.7em",
              }}
            >
              Conserve Natural Forests was built and continues to grow thanks to
              the generosity of like-minded people who support our work. We would
              not be where we are today without their help. If you would like to
              know more about how you can contribute toward restoring Thailand's
              beautiful ecosystems and saving endangered species, please consider
              donating to one of our projects.
            </p>
            <div className="text-center">
              <Link
                to="/donate"
                className="btn-divi"
                style={{
                  color: "#ffffff",
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
      </div>
    </section>
  );
}
