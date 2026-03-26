import { Link } from "react-router-dom";

const siteLinks = [
  { label: "Home", path: "/" },
  { label: "Forest Restoration", path: "/forest-restoration" },
  { label: "Local Livelihoods", path: "/local-livelihoods" },
  { label: "Wildlife Conservation", path: "/wildlife-conservation" },
  { label: "Ecosystem Services", path: "/ecosystem-services" },
  { label: "Our Team", path: "/our-team" },
  { label: "Visit Us", path: "/visit-us" },
  { label: "Donate", path: "/donate" },
  { label: "Contact", path: "/contact" },
  { label: "Apply for an Internship", path: "/apply-for-an-internship" },
];

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div style={{ backgroundColor: "#222222" }} className="text-white py-16">
        <div className="max-w-[1080px] mx-auto px-[30px]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1 - Site Navigation */}
            <div>
              <h3
                className="text-center uppercase tracking-wide mb-1"
                style={{
                  fontFamily:
                    '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                  fontSize: "22px",
                  fontWeight: 300,
                }}
              >
                site
              </h3>
              <h3
                className="text-center uppercase tracking-wide mb-2"
                style={{
                  fontFamily:
                    '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                  fontSize: "22px",
                  fontWeight: 300,
                }}
              >
                NAVIGATION
              </h3>
              {/* Divider */}
              <div
                className="relative mx-auto mb-6"
                style={{ maxWidth: "10%", height: "5px" }}
              >
                <div
                  style={{ borderTop: "5px solid #78c922", width: "100%" }}
                />
              </div>
              <ul
                className="space-y-2 list-disc pl-4"
                style={{ marginTop: "15px" }}
              >
                {siteLinks.map((link, idx) => (
                  <li key={idx} style={{ color: "#78c922", fontSize: "16px" }}>
                    <Link
                      to={link.path}
                      className="hover:text-[#78c922] transition-colors"
                      style={{
                        color: "#c1c1c1",
                        fontSize: "16px",
                        textDecoration: "none",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2 - Empty (spacer like original) */}
            <div className="hidden md:block" />

            {/* Column 3 - Map */}
            <div>
              <h3
                className="text-center mb-2"
                style={{
                  fontFamily:
                    '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                  fontSize: "18px",
                  fontWeight: 300,
                }}
              >
                Find us online and follow us on our journey.
              </h3>
              {/* Divider */}
              <div
                className="relative mx-auto mb-6"
                style={{ maxWidth: "10%", height: "5px" }}
              >
                <div
                  style={{ borderTop: "5px solid #78c922", width: "100%" }}
                />
              </div>
              <div
                className="w-full"
                style={{ paddingTop: "110%", position: "relative" }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.530688187357!2d98.44596541497846!3d19.259274786983084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30da87239b0caed9%3A0x87df33d7cdd6426f!2sConserve%20Natural%20Forest!5e0!3m2!1sen!2suk!4v1575918651155!5m2!1sen!2suk"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Conserve Natural Forests Location"
                />
              </div>
            </div>

            {/* Column 4 - Logo & Contact */}
            <div className="text-center">
              <img
                src="/Logo.png"
                alt="Conserve Natural Forests"
                className="mx-auto mb-4"
                style={{ width: "180px", height: "auto" }}
              />
              <p
                className="mb-4"
                style={{
                  fontSize: "16px",
                  color: "#c1c1c1",
                  fontFamily:
                    '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                }}
              >
                Building a sustainable future, one tree at a time.
              </p>
              <p
                className="mb-6"
                style={{
                  fontSize: "12px",
                  color: "#c1c1c1",
                  marginTop: "24px",
                }}
              >
                noreply@conservenaturalforests.org
              </p>
              {/* Social Icons */}
              <div className="flex justify-center gap-2">
                <a
                  href="https://facebook.com/conservenaturalforests"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-white transition-opacity hover:opacity-70"
                  title="Follow on Facebook"
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#3b5998",
                    borderRadius: "6px",
                    boxSizing: "content-box",
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/conservenaturalforests/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-white transition-opacity hover:opacity-70"
                  title="Follow on Instagram"
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#ea2c59",
                    borderRadius: "6px",
                    boxSizing: "content-box",
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/conserve-natural-forests/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-white transition-opacity hover:opacity-70"
                  title="Follow on LinkedIn"
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#007bb6",
                    borderRadius: "6px",
                    boxSizing: "content-box",
                  }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div
        className="text-center"
        style={{
          backgroundColor: "#161616",
          padding: "15px 0 5px",
        }}
      >
        <p style={{ fontSize: "12px", color: "#999" }}>
          Conserve Natural Forests | Copyright &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
