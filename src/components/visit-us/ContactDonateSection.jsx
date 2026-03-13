import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactDonateSection() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <section
      className="relative bg-fixed bg-cover bg-center"
      data-aos="fade-up"
      style={{ backgroundImage: "url(/Visit-Us/Greenhouse.jpg.jpeg)" }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      />
      <div className="relative z-10 max-w-[1080px] mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <h1
              style={{
                fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                fontSize: "24px",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "20px",
              }}
            >
              Want to find out more? Send us a message!
            </h1>
            <form onSubmit={handleContactSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  value={contactForm.name}
                  onChange={handleContactChange}
                  className="w-full"
                  style={{
                    padding: "16px",
                    backgroundColor: "rgba(0,0,0,0.74)",
                    color: "#fff",
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
                  value={contactForm.email}
                  onChange={handleContactChange}
                  className="w-full"
                  style={{
                    padding: "16px",
                    backgroundColor: "rgba(0,0,0,0.74)",
                    color: "#fff",
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
                value={contactForm.message}
                onChange={handleContactChange}
                className="w-full mb-4"
                style={{
                  padding: "16px",
                  backgroundColor: "rgba(0,0,0,0.74)",
                  color: "#fff",
                  border: "2px solid #78c922",
                  borderRadius: "6px",
                  fontFamily: '"Open Sans", sans-serif',
                  resize: "vertical",
                  boxSizing: "border-box",
                }}
              />
              <button
                type="submit"
                className="btn-divi btn-divi-dark"
                style={{
                  fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
                  fontWeight: 700,
                  fontSize: "18px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#fff",
                  border: "2px solid #78c922",
                  borderRadius: "6px",
                  backgroundColor: "rgba(0,0,0,0.62)",
                  padding: "0.3em 1em",
                  cursor: "pointer",
                  textShadow: "0 0.1em 0.1em rgba(0,0,0,0.4)",
                  transition: "background-color 300ms ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#78c922")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.62)")
                }
              >
                Submit
              </button>
            </form>
          </div>

          {/* Donate CTA */}
          <div className="lg:w-1/2" style={{ marginTop: "41px" }}>
            <h2
              style={{
                fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                fontSize: "24px",
                lineHeight: "1.2em",
                color: "#fff",
                marginBottom: "16px",
              }}
            >
              Want to contribute to our cause?
            </h2>
            <div
              style={{
                fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                fontSize: "16px",
                color: "#fff",
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
            <div className="mt-6">
              <Link
                to="/donate"
                style={{
                  fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
                  fontWeight: 700,
                  fontSize: "18px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#fff",
                  border: "2px solid #78c922",
                  borderRadius: "6px",
                  backgroundColor: "rgba(0,0,0,0.45)",
                  padding: "0.3em 1em",
                  textDecoration: "none",
                  display: "inline-block",
                  transition: "background-color 300ms ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#78c922")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.45)")
                }
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
