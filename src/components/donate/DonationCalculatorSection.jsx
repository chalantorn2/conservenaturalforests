import { useState } from "react";

const impactOptions = [
  { value: "money", label: "I know how much money I want to donate." },
  { value: "trees", label: "I know how many trees I want planted on my behalf." },
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

export default function DonationCalculatorSection() {
  const [impactType, setImpactType] = useState("money");
  const [donationAmount, setDonationAmount] = useState("");
  const [treeCount, setTreeCount] = useState("");
  const [areaM2, setAreaM2] = useState("");
  const [co2Amount, setCo2Amount] = useState("");

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Simple calculations (approximate values based on CNF data)
  const COST_PER_TREE = 1.5; // USD
  const TREES_PER_HECTARE = 1600;
  const CO2_PER_TREE_KG = 22; // kg/year

  const getCalculatedValues = () => {
    let trees = 0;
    if (impactType === "money" && donationAmount) {
      trees = Math.floor(parseFloat(donationAmount) / COST_PER_TREE);
    } else if (impactType === "trees" && treeCount) {
      trees = parseInt(treeCount);
    } else if (impactType === "area" && areaM2) {
      trees = Math.floor((parseFloat(areaM2) / 10000) * TREES_PER_HECTARE);
    } else if (impactType === "co2" && co2Amount) {
      trees = Math.ceil(parseFloat(co2Amount) / CO2_PER_TREE_KG);
    }

    return {
      trees,
      areaM2: Math.round((trees / TREES_PER_HECTARE) * 10000),
      areaHa: (trees / TREES_PER_HECTARE).toFixed(2),
      co2: trees * CO2_PER_TREE_KG,
      cost: (trees * COST_PER_TREE).toFixed(2),
    };
  };

  const calc = getCalculatedValues();

  const handleContactChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <section
      id="donate-section"
      className="relative bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url(/waiting.jpg)",
        paddingTop: "43px",
        paddingBottom: "66px",
      }}
    >
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
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
                    style={{ color: "#fff", fontSize: "14px" }}
                  >
                    <input
                      type="radio"
                      name="impactType"
                      value={opt.value}
                      checked={impactType === opt.value}
                      onChange={(e) => setImpactType(e.target.value)}
                      style={{ accentColor: "#78c922", marginTop: "4px" }}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>

              {/* Input field based on selection */}
              <div className="mb-4">
                {impactType === "money" && (
                  <div>
                    <label
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "14px",
                      }}
                    >
                      Donation Amount (USD)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      className="w-full mt-1"
                      style={{
                        padding: "12px",
                        borderRadius: "6px",
                        border: "1px solid #78c922",
                        backgroundColor: "#eee",
                        color: "#000",
                        fontFamily: '"Open Sans", sans-serif',
                      }}
                    />
                  </div>
                )}
                {impactType === "trees" && (
                  <div>
                    <label
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "14px",
                      }}
                    >
                      Number of Trees
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={treeCount}
                      onChange={(e) => setTreeCount(e.target.value)}
                      className="w-full mt-1"
                      style={{
                        padding: "12px",
                        borderRadius: "6px",
                        border: "1px solid #78c922",
                        backgroundColor: "#eee",
                        color: "#000",
                        fontFamily: '"Open Sans", sans-serif',
                      }}
                    />
                  </div>
                )}
                {impactType === "area" && (
                  <div>
                    <label
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "14px",
                      }}
                    >
                      Area (m&sup2;)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={areaM2}
                      onChange={(e) => setAreaM2(e.target.value)}
                      className="w-full mt-1"
                      style={{
                        padding: "12px",
                        borderRadius: "6px",
                        border: "1px solid #78c922",
                        backgroundColor: "#eee",
                        color: "#000",
                        fontFamily: '"Open Sans", sans-serif',
                      }}
                    />
                  </div>
                )}
                {impactType === "co2" && (
                  <div>
                    <label
                      style={{
                        color: "#fff",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        fontSize: "14px",
                      }}
                    >
                      CO&#8322; to Offset (kg/year)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={co2Amount}
                      onChange={(e) => setCo2Amount(e.target.value)}
                      className="w-full mt-1"
                      style={{
                        padding: "12px",
                        borderRadius: "6px",
                        border: "1px solid #78c922",
                        backgroundColor: "#eee",
                        color: "#000",
                        fontFamily: '"Open Sans", sans-serif',
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Calculated results */}
              {calc.trees > 0 && (
                <div
                  className="space-y-2 mt-4"
                  style={{ color: "#fff", fontSize: "15px" }}
                >
                  <h3
                    style={{
                      fontWeight: 700,
                      fontSize: "16px",
                      color: "#78c922",
                      textTransform: "uppercase",
                      marginBottom: "8px",
                    }}
                  >
                    Your Impact:
                  </h3>
                  <p>
                    <strong>Number of Trees:</strong> {calc.trees.toLocaleString()}
                  </p>
                  <p>
                    <strong>Area Covered:</strong> {calc.areaM2.toLocaleString()}{" "}
                    m&sup2; ({calc.areaHa} hectares)
                  </p>
                  <p>
                    <strong>CO&#8322; Captured:</strong>{" "}
                    {calc.co2.toLocaleString()} kg/year
                  </p>
                  {impactType !== "money" && (
                    <p>
                      <strong>Estimated Cost:</strong> ${calc.cost}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* Contact Form + QR Code */}
            <div className="lg:w-1/2" style={{ padding: "0 20px" }}>
              <form
                onSubmit={handleContactSubmit}
                style={{ marginTop: "40px" }}
              >
                <div className="mb-4">
                  <label
                    className="block mb-1"
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "14px",
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
                    style={{
                      padding: "12px",
                      borderRadius: "6px",
                      border: "1px solid #78c922",
                      backgroundColor: "#eee",
                      color: "#000",
                      fontFamily: '"Open Sans", sans-serif',
                    }}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-1"
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "14px",
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
                    style={{
                      padding: "12px",
                      borderRadius: "6px",
                      border: "1px solid #78c922",
                      backgroundColor: "#eee",
                      color: "#000",
                      fontFamily: '"Open Sans", sans-serif',
                    }}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block mb-1"
                    style={{
                      color: "#fff",
                      fontWeight: 600,
                      fontSize: "14px",
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
                      padding: "12px",
                      borderRadius: "6px",
                      border: "1px solid #78c922",
                      backgroundColor: "#eee",
                      color: "#000",
                      fontFamily: '"Open Sans", sans-serif',
                      resize: "vertical",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    ...btnStyle,
                    color: "#fff",
                    backgroundColor: "rgba(0,0,0,0.45)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#78c922";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(0,0,0,0.45)";
                  }}
                >
                  Submit
                </button>
              </form>

              {/* QR Code */}
              <div className="mt-6 text-center">
                <img
                  src="/waiting.jpg"
                  alt="QR Code for Donation"
                  style={{
                    maxWidth: "300px",
                    height: "auto",
                    margin: "0 auto",
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
