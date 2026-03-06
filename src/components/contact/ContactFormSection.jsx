import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactFormSection() {
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
    <section id="contact-content" className="py-2 px-[30px] bg-white">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left - Contact Form (3/5 width) */}
          <div className="md:w-[57.8%]">
            <div
              className="p-6"
              style={{
                border: "1px solid #ddd",
                borderRadius: "6px",
              }}
            >
              <h1
                className="mb-4"
                style={{
                  fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                  fontWeight: 700,
                  fontSize: "16px",
                  lineHeight: "2em",
                  color: "#333",
                }}
              >
                If you have any questions or are eager to get in touch with us,
                please do drop us a message. We will be happy to connect with
                you!
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
                      flex: 1,
                      padding: "12px 16px",
                      border: "1px solid #78c922",
                      borderRadius: "6px",
                      fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#474747",
                      outline: "none",
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
                      flex: 1,
                      padding: "12px 16px",
                      border: "1px solid #78c922",
                      borderRadius: "6px",
                      fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                      fontWeight: 600,
                      fontSize: "14px",
                      color: "#474747",
                      outline: "none",
                    }}
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Comment or Message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    border: "1px solid #78c922",
                    borderRadius: "6px",
                    fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                    fontWeight: 600,
                    fontSize: "14px",
                    color: "#474747",
                    outline: "none",
                    resize: "vertical",
                    marginBottom: "16px",
                  }}
                />
                <button
                  type="submit"
                  className="btn-divi"
                  style={{
                    color: "#000",
                    borderWidth: "2px",
                    borderColor: "#78c922",
                    borderRadius: "6px",
                    letterSpacing: "0px",
                    fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
                    fontWeight: 700,
                    fontSize: "16px",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#78c922";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#000";
                  }}
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>

          {/* Right - Visit Us CTA (2/5 width) */}
          <div className="md:w-[36.7%]">
            {/* CTA Box */}
            <div>
              <h1
                className="mb-3"
                style={{
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: "25px",
                  color: "#2b2b2b",
                }}
              >
                Looking to book an eco-tour?
              </h1>
              <p
                className="text-justify mb-5"
                style={{
                  fontSize: "16px",
                  color: "#000",
                  lineHeight: "1.9em",
                }}
              >
                If you're looking for more information about how you can visit
                us, click below to find out more and complete our booking form.
                &nbsp;You can also contact us via email at{" "}
                <a
                  href="mailto:info@conservenaturalforests.org"
                  style={{ color: "#78c922", textDecoration: "underline" }}
                >
                  info@conservenaturalforests.org
                </a>
                &nbsp;or send us a message over Facebook.
              </p>
              <div className="text-center mb-6">
                <Link
                  to="/visit-us"
                  className="btn-divi"
                  style={{
                    color: "#000",
                    borderColor: "#78c922",
                    borderRadius: "6px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    backgroundColor: "#fff",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#78c922";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#fff";
                    e.currentTarget.style.color = "#000";
                  }}
                >
                  Find Out More
                </Link>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-2 mt-4">
              <a
                href="https://facebook.com/conservenaturalforests"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white transition-opacity hover:opacity-70"
                style={{ width: 32, height: 32, backgroundColor: "#3b5998", borderRadius: 6, boxSizing: "content-box" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/conservenaturalforests/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white transition-opacity hover:opacity-70"
                style={{ width: 32, height: 32, backgroundColor: "#ea2c59", borderRadius: 6, boxSizing: "content-box" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/conserve-natural-forests/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center text-white transition-opacity hover:opacity-70"
                style={{ width: 32, height: 32, backgroundColor: "#007bb6", borderRadius: 6, boxSizing: "content-box" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
