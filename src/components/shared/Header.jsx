import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "#",
    children: [
      { label: "Forest Restoration", path: "/forest-restoration" },
      { label: "Local Livelihoods", path: "/local-livelihoods" },
      { label: "Wildlife Conservation", path: "/wildlife-conservation" },
      {
        label: "Ecosystem Services",
        path: "/ecosystem-services",
        children: [
          { label: "Carbon Sequestration", path: "/ecosystem-services#carbon" },
          {
            label: "Functional Biodiversity",
            path: "/ecosystem-services#biodiversity",
          },
          { label: "Soil & Water", path: "/ecosystem-services#soil" },
        ],
      },
      { label: "Our Team", path: "/our-team" },
    ],
  },
  { label: "Visit Us", path: "/visit-us" },
  { label: "Apply for an Internship", path: "/apply-for-an-internship" },
  { label: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown(null);
  }, [location]);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path.split("#")[0]);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[99999] transition-all duration-400"
      style={{
        backgroundColor: scrolled ? "#2b2b2b" : "rgba(43,43,43,0.68)",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,.1)" : "none",
        lineHeight: "23px",
        fontWeight: 500,
      }}
    >
      <div
        className="w-full mx-auto flex items-center justify-between"
        style={{ paddingRight: "32px", paddingLeft: "30px" }}
      >
        {/* Logo */}
        <Link to="/" className="flex-shrink-0 relative py-2">
          <img
            src="/Logo.png"
            alt="Conserve Natural Forests"
            className="transition-all duration-300"
            style={{
              height: scrolled ? "70px" : "90px",
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center"
          style={{
            fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
            paddingTop: scrolled ? "24px" : "32px",
          }}
        >
          {menuItems.map((item, idx) => (
            <div
              key={idx}
              className="relative"
              style={{ paddingRight: item.children ? "0px" : "22px" }}
              onMouseEnter={() => setOpenDropdown(idx)}
              onMouseLeave={() => {
                setOpenDropdown(null);
                setOpenSubDropdown(null);
              }}
            >
              {item.path === "#" ? (
                <span
                  className="block cursor-pointer transition-opacity duration-400"
                  style={{
                    color: item.children?.some((c) => isActive(c.path))
                      ? "#78c922"
                      : "#e8e8e8",
                    fontSize: scrolled ? "14px" : "16px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    paddingBottom: scrolled ? "24px" : "32px",
                    paddingRight: "22px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.path}
                  className="block transition-opacity duration-400"
                  style={{
                    color: isActive(item.path) ? "#78c922" : "#e8e8e8",
                    fontSize: scrolled ? "14px" : "16px",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    letterSpacing: "2px",
                    textDecoration: "none",
                    paddingBottom: scrolled ? "24px" : "32px",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  {item.label}
                </Link>
              )}

              {/* Dropdown */}
              {item.children && openDropdown === idx && (
                <div
                  className="absolute top-full left-0 z-50 animate-fadeIn"
                  style={{
                    backgroundColor: "#2b2b2b",
                    padding: "20px 0",
                    borderTop: "3px solid #78c922",
                  }}
                >
                  {item.children.map((child, cidx) => (
                    <div
                      key={cidx}
                      className="relative"
                      style={{ padding: "0 20px", margin: 0 }}
                      onMouseEnter={() => setOpenSubDropdown(cidx)}
                      onMouseLeave={() => setOpenSubDropdown(null)}
                    >
                      <Link
                        to={child.path}
                        className="block transition-opacity duration-400"
                        style={{
                          color: isActive(child.path) ? "#78c922" : "#c1c1c1",
                          fontSize: "16px",
                          fontWeight: "bold",
                          textTransform: "uppercase",
                          letterSpacing: "2px",
                          padding: "6px 20px",
                          width: "200px",
                          textDecoration: "none",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.opacity = "0.7")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.opacity = "1")
                        }
                      >
                        {child.label}
                      </Link>

                      {/* Sub-dropdown */}
                      {child.children && openSubDropdown === cidx && (
                        <div
                          className="absolute left-full z-50 animate-fadeIn"
                          style={{
                            backgroundColor: "#2b2b2b",
                            padding: "20px 0",
                            top: "-23px",
                            borderTop: "3px solid #78c922",
                          }}
                        >
                          {child.children.map((sub, sidx) => (
                            <div key={sidx} style={{ padding: "0 20px" }}>
                              <Link
                                to={sub.path}
                                className="block transition-opacity duration-400"
                                style={{
                                  color: isActive(sub.path)
                                    ? "#78c922"
                                    : "#c1c1c1",
                                  fontSize: "16px",
                                  fontWeight: "bold",
                                  textTransform: "uppercase",
                                  letterSpacing: "2px",
                                  padding: "6px 20px",
                                  width: "200px",
                                  textDecoration: "none",
                                }}
                                onMouseEnter={(e) =>
                                  (e.currentTarget.style.opacity = "0.7")
                                }
                                onMouseLeave={(e) =>
                                  (e.currentTarget.style.opacity = "1")
                                }
                              >
                                {sub.label}
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Donate Button */}
          <Link
            to="/donate"
            style={{
              fontSize: scrolled ? "14px" : "16px",
              padding: "0.4em 1.2em",
              marginLeft: "10px",
              marginBottom: scrolled ? "24px" : "32px",
              backgroundColor: "#78c922",
              color: "#fff",
              fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              borderRadius: "6px",
              textDecoration: "none",
              textShadow: "0 1px 3px rgba(0,0,0,0.4)",
              transition: "all 300ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#7edd25";
              e.currentTarget.style.boxShadow =
                "0 2px 8px rgba(120,201,34,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#78c922";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            DONATE
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#e8e8e8] transition-all ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#e8e8e8] transition-all ${
              mobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#e8e8e8] transition-all ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden" style={{ backgroundColor: "#2b2b2b" }}>
          <nav className="px-[30px] py-4">
            {menuItems.map((item, idx) => (
              <div key={idx}>
                {item.path === "#" ? (
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === idx ? null : idx)
                    }
                    className="block w-full text-left py-3 border-b border-white/10"
                    style={{
                      color: "#e8e8e8",
                      fontSize: "16px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      fontFamily:
                        '"Lato", Helvetica, Arial, Lucida, sans-serif',
                    }}
                  >
                    {item.label}
                    <span className="float-right">
                      {openDropdown === idx ? "−" : "+"}
                    </span>
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-3 border-b border-white/10"
                    style={{
                      color: isActive(item.path) ? "#78c922" : "#e8e8e8",
                      fontSize: "16px",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      textDecoration: "none",
                      fontFamily:
                        '"Lato", Helvetica, Arial, Lucida, sans-serif',
                    }}
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && openDropdown === idx && (
                  <div>
                    {item.children.map((child, cidx) => (
                      <div key={cidx}>
                        <Link
                          to={child.path}
                          className="block py-2 pl-6 border-b border-white/5"
                          style={{
                            color: isActive(child.path) ? "#78c922" : "#c1c1c1",
                            fontSize: "13px",
                            textDecoration: "none",
                          }}
                        >
                          {child.label}
                        </Link>
                        {child.children && (
                          <div>
                            {child.children.map((sub, sidx) => (
                              <Link
                                key={sidx}
                                to={sub.path}
                                className="block py-2 pl-12 border-b border-white/5"
                                style={{
                                  color: "#c1c1c1",
                                  fontSize: "12px",
                                  textDecoration: "none",
                                }}
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/donate"
              className="block mt-4 text-center btn-divi btn-divi-white"
              style={{ fontSize: "16px" }}
            >
              DONATE
            </Link>
          </nav>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </header>
  );
}
