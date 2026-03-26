import { useState } from "react";
import { sendForm } from "../../utils/sendForm";

const impactOptions = [
  { value: "money", label: "I know how much money I want to donate." },
  {
    value: "trees",
    label: "I know how many trees I want planted on my behalf.",
  },
  { value: "area", label: "I know the area of land I want to restore." },
  { value: "co2", label: "I know how much CO\u2082 I want to offset." },
];

const btnStyle = {
  fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
  fontWeight: 700,
  color: "#000",
  border: "2px solid #78c922",
  borderRadius: "6px",
  padding: "0.3em 1em",
  textDecoration: "none",
  display: "inline-block",
  textTransform: "uppercase",
  letterSpacing: "2px",
  transition: "all 300ms ease",
  cursor: "pointer",
  backgroundColor: "transparent",
};

const inputStyle = {
  padding: "12px",
  borderRadius: "6px",
  border: "1px solid #78c922",
  backgroundColor: "#eee",
  color: "#000",
  fontFamily: '"Open Sans", sans-serif',
};

const labelStyle = {
  color: "#fff",
  fontWeight: 700,
  textTransform: "uppercase",
  fontSize: "16px",
};

const totalLineStyle = {
  color: "#ccc",
  fontSize: "15px",
  fontWeight: 500,
  margin: "4px 0 12px",
  paddingLeft: "20px",
};

// Rates matching the original CNF Caldera Forms calculator
const DONATION_PER_TREE = 2; // USD - donation input → trees
const COST_PER_TREE = 1; // USD - trees → displayed cost
const AREA_PER_TREE = 3; // m² per tree
const CO2_PER_TREE_KG = 22.5; // kg/year

export default function DonationCalculatorSection() {
  const [impactType, setImpactType] = useState("money");
  const [inputValue, setInputValue] = useState("");

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleImpactChange = (value) => {
    setImpactType(value);
    setInputValue("");
  };

  const getCalculatedValues = () => {
    const val = parseFloat(inputValue) || 0;
    let trees = 0;

    if (impactType === "money") {
      trees = Math.floor(val / DONATION_PER_TREE);
    } else if (impactType === "trees") {
      trees = Math.floor(val);
    } else if (impactType === "area") {
      trees = Math.floor(val / AREA_PER_TREE);
    } else if (impactType === "co2") {
      trees = Math.floor(val / CO2_PER_TREE_KG);
    }

    const areaM2 = trees * AREA_PER_TREE;
    const areaHa = areaM2 / 10000;
    return {
      donationAmount: trees * COST_PER_TREE,
      trees,
      areaM2,
      areaHa: parseFloat(areaHa.toFixed(3)),
      co2: trees * CO2_PER_TREE_KG,
    };
  };

  const calc = getCalculatedValues();

  const inputConfig = {
    money: { label: "Donation Amount" },
    trees: { label: "Number of Trees" },
    area: { label: "Area Covered (m\u00B2)" },
    co2: { label: "CO\u2082 to Offset (kg/year)" },
  };

  const [contactStatus, setContactStatus] = useState("idle");
  const [contactStatusMsg, setContactStatusMsg] = useState("");

  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus("sending");
    try {
      await sendForm("donate", contactForm);
      setContactStatus("success");
      setContactStatusMsg("Thank you for your message! We will get back to you soon.");
      setContactForm({ name: "", email: "", message: "" });
    } catch (err) {
      setContactStatus("error");
      setContactStatusMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="donate-section"
      className="relative bg-fixed bg-cover bg-center"
      data-aos="fade-up"
      style={{
        backgroundImage: "url(/Donate/Donate-Header.jpg.jpeg)",
        paddingTop: "43px",
        paddingBottom: "66px",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
      />
      <div className="relative z-10 max-w-[1080px] mx-auto px-6">
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.8)",
            borderRadius: "6px",
            overflow: "hidden",
            padding: "27px 20px 16px",
          }}
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Donation Calculator */}
            <div className="lg:w-1/2" style={{ padding: "0 20px" }}>
              <h3
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "18px",
                  marginBottom: "16px",
                  textTransform: "uppercase",
                }}
              >
                How would you like to measure your impact?
              </h3>
              <div className="space-y-2 mb-6">
                {impactOptions.map((opt) => (
                  <label
                    key={opt.value}
                    className="flex items-start gap-2 cursor-pointer"
                    style={{ color: "#fff", fontSize: "16px" }}
                  >
                    <input
                      type="radio"
                      name="impactType"
                      value={opt.value}
                      checked={impactType === opt.value}
                      onChange={() => handleImpactChange(opt.value)}
                      style={{ accentColor: "#78c922", marginTop: "4px" }}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>

              {/* Input field */}
              <div className="mb-6">
                <label style={labelStyle}>
                  {inputConfig[impactType].label}
                </label>
                <input
                  type="number"
                  min="0"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full mt-1"
                  style={inputStyle}
                />
              </div>

              {/* Calculated results - matches original Caldera Forms layout */}
              <div className="space-y-1">
                {impactType !== "trees" && (
                  <div>
                    <label style={labelStyle}>Number of Trees</label>
                    <h3 style={totalLineStyle}>
                      Total:{" "}
                      <span style={{ color: "#78c922" }}>
                        {calc.trees.toLocaleString()}
                      </span>
                    </h3>
                  </div>
                )}
                {impactType !== "area" ? (
                  <>
                    <div>
                      <label style={labelStyle}>Area Covered (m²)</label>
                      <h3 style={totalLineStyle}>
                        Total:{" "}
                        <span style={{ color: "#78c922" }}>
                          {calc.areaM2.toLocaleString()}
                        </span>
                      </h3>
                    </div>
                    <div>
                      <label style={labelStyle}>Area Covered (hectares)</label>
                      <h3 style={totalLineStyle}>
                        Total:{" "}
                        <span style={{ color: "#78c922" }}>{calc.areaHa}</span>
                      </h3>
                    </div>
                  </>
                ) : (
                  <div>
                    <label style={labelStyle}>Area Covered (hectares)</label>
                    <h3 style={totalLineStyle}>
                      Total:{" "}
                      <span style={{ color: "#78c922" }}>{calc.areaHa}</span>
                    </h3>
                  </div>
                )}
                {impactType !== "co2" && (
                  <div>
                    <label style={labelStyle}>CO₂ Captured (kg/year)</label>
                    <h3 style={totalLineStyle}>
                      Total:{" "}
                      <span style={{ color: "#78c922" }}>
                        {calc.co2.toLocaleString()}
                      </span>
                    </h3>
                  </div>
                )}
                {impactType !== "money" && (
                  <div>
                    <label style={labelStyle}>Donation Amount</label>
                    <h3 style={totalLineStyle}>
                      Total:{" "}
                      <span style={{ color: "#78c922" }}>
                        {calc.donationAmount}
                      </span>
                    </h3>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Form + QR Code */}
            <div className="lg:w-1/2" style={{ padding: "0 20px" }}>
              <div
                style={{
                  padding: "24px 24px",
                  backgroundColor: "#fff",
                  borderRadius: "6px",
                }}
              >
                <form onSubmit={handleContactSubmit}>
                  <div className="mb-4">
                    <label
                      className="block mb-1"
                      style={{
                        color: "#333",
                        fontWeight: 600,
                        fontSize: "16px",
                      }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={contactForm.name}
                      onChange={handleContactChange}
                      className="w-full"
                      style={inputStyle}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-1"
                      style={{
                        color: "#333",
                        fontWeight: 600,
                        fontSize: "16px",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={contactForm.email}
                      onChange={handleContactChange}
                      className="w-full"
                      style={inputStyle}
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-1"
                      style={{
                        color: "#333",
                        fontWeight: 600,
                        fontSize: "16px",
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={handleContactChange}
                      className="w-full"
                      style={{
                        ...inputStyle,
                        resize: "vertical",
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={contactStatus === "sending"}
                    style={{
                      ...btnStyle,
                      color: "#333",
                      opacity: contactStatus === "sending" ? 0.6 : 1,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#78c922";
                      e.currentTarget.style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#333";
                    }}
                  >
                    {contactStatus === "sending" ? "Sending..." : "Submit"}
                  </button>
                  {contactStatus === "success" && (
                    <p style={{ color: "#78c922", marginTop: "8px", fontSize: "14px" }}>{contactStatusMsg}</p>
                  )}
                  {contactStatus === "error" && (
                    <p style={{ color: "#ee4444", marginTop: "8px", fontSize: "14px" }}>{contactStatusMsg}</p>
                  )}
                </form>
              </div>

              {/* QR Code */}
              <div className="mt-6 text-center">
                <p
                  style={{
                    color: "#fff",
                    fontFamily:
                      '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                    fontSize: "16px",
                    fontWeight: 600,
                    marginBottom: "12px",
                  }}
                >
                  Scan this QR code to donate to our Tree Restoration Efforts!
                </p>
                <img
                  src="/Donate/CNF-QR-Code.jpeg"
                  alt="QR Code for Donation"
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
