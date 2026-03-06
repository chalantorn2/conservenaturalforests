import { useState } from "react";

const countries = [
  "Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica",
  "Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas",
  "Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan",
  "Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei Darussalam","Bulgaria",
  "Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands",
  "Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo",
  "Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica",
  "Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia",
  "Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece",
  "Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hong Kong",
  "Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica",
  "Japan","Jordan","Kazakhstan","Kenya","Kiribati","Korea, South","Kuwait","Kyrgyzstan","Laos",
  "Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg",
  "Macao","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands",
  "Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro",
  "Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand",
  "Nicaragua","Niger","Nigeria","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine",
  "Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar",
  "Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia",
  "Saint Vincent and the Grenadines","Samoa","San Marino","Saudi Arabia","Senegal","Serbia",
  "Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia",
  "South Africa","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland",
  "Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga",
  "Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine",
  "United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu",
  "Venezuela","Viet Nam","Yemen","Zambia","Zimbabwe",
];

export default function BookingFormSection() {
  const [bookingForm, setBookingForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfVisit: "",
    country: "",
    adults: 1,
    children: 0,
    transportation: "",
    hearAbout: "",
  });

  const handleBookingChange = (e) => {
    setBookingForm({ ...bookingForm, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your booking request! We will confirm your visit shortly.");
  };

  return (
    <section id="book-eco-tour" style={{ paddingTop: "16px", paddingBottom: "40px" }}>
      <div className="max-w-[1080px] mx-auto px-6">
        <h1
          className="text-center"
          style={{
            fontWeight: 700,
            fontSize: "38px",
            color: "#2b2b2b",
            marginBottom: "20px",
          }}
        >
          BOOK AN ECO-TOUR
        </h1>

        <form onSubmit={handleBookingSubmit}>
          {/* Row 1: First Name, Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block mb-1"
                style={{ fontWeight: 600, color: "#333" }}
              >
                First Name <span style={{ color: "#ee0000" }}>*</span>
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={bookingForm.firstName}
                onChange={handleBookingChange}
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "1px solid #78c922",
                  borderRadius: "6px",
                  backgroundColor: "#eee",
                  color: "#000",
                  fontFamily: '"Open Sans", sans-serif',
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div>
              <label
                className="block mb-1"
                style={{ fontWeight: 600, color: "#333" }}
              >
                Last Name <span style={{ color: "#ee0000" }}>*</span>
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={bookingForm.lastName}
                onChange={handleBookingChange}
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "1px solid #78c922",
                  borderRadius: "6px",
                  backgroundColor: "#eee",
                  color: "#000",
                  fontFamily: '"Open Sans", sans-serif',
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          {/* Row 2: Email */}
          <div className="mb-4">
            <label
              className="block mb-1"
              style={{ fontWeight: 600, color: "#333" }}
            >
              Email Address <span style={{ color: "#ee0000" }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={bookingForm.email}
              onChange={handleBookingChange}
              style={{
                width: "100%",
                padding: "16px",
                border: "1px solid #78c922",
                borderRadius: "6px",
                backgroundColor: "#eee",
                color: "#000",
                fontFamily: '"Open Sans", sans-serif',
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Row 3: Date of Visit, Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block mb-1"
                style={{ fontWeight: 600, color: "#333" }}
              >
                Date of Visit <span style={{ color: "#ee0000" }}>*</span>
              </label>
              <input
                type="date"
                name="dateOfVisit"
                required
                value={bookingForm.dateOfVisit}
                onChange={handleBookingChange}
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "1px solid #78c922",
                  borderRadius: "6px",
                  backgroundColor: "#eee",
                  color: "#000",
                  fontFamily: '"Open Sans", sans-serif',
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div>
              <label
                className="block mb-1"
                style={{ fontWeight: 600, color: "#333" }}
              >
                Country <span style={{ color: "#ee0000" }}>*</span>
              </label>
              <select
                name="country"
                required
                value={bookingForm.country}
                onChange={handleBookingChange}
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "1px solid #78c922",
                  borderRadius: "6px",
                  backgroundColor: "#eee",
                  color: "#000",
                  fontFamily: '"Open Sans", sans-serif',
                  boxSizing: "border-box",
                }}
              >
                <option value="">Select a country</option>
                {countries.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 4: Number of adults, Number of children */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                className="block mb-1"
                style={{ fontWeight: 600, color: "#333" }}
              >
                Number of adults <span style={{ color: "#ee0000" }}>*</span>
              </label>
              <input
                type="number"
                name="adults"
                required
                min={0}
                step={1}
                value={bookingForm.adults}
                onChange={handleBookingChange}
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "1px solid #78c922",
                  borderRadius: "6px",
                  backgroundColor: "#eee",
                  color: "#000",
                  fontFamily: '"Open Sans", sans-serif',
                  boxSizing: "border-box",
                }}
              />
            </div>
            <div>
              <label
                className="block mb-1"
                style={{ fontWeight: 600, color: "#333" }}
              >
                Number of children <span style={{ color: "#ee0000" }}>*</span>
              </label>
              <input
                type="number"
                name="children"
                required
                min={0}
                step={1}
                value={bookingForm.children}
                onChange={handleBookingChange}
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "1px solid #78c922",
                  borderRadius: "6px",
                  backgroundColor: "#eee",
                  color: "#000",
                  fontFamily: '"Open Sans", sans-serif',
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          {/* Row 5: Transportation, How did you hear */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label
                className="block mb-1"
                style={{ fontWeight: 600, color: "#333" }}
              >
                Do you need transportation?{" "}
                <span style={{ color: "#ee0000" }}>*</span>
              </label>
              <div className="flex gap-6 mt-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="transportation"
                    value="Yes"
                    required
                    checked={bookingForm.transportation === "Yes"}
                    onChange={handleBookingChange}
                    style={{ accentColor: "#78c922" }}
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="transportation"
                    value="No"
                    checked={bookingForm.transportation === "No"}
                    onChange={handleBookingChange}
                    style={{ accentColor: "#78c922" }}
                  />
                  No
                </label>
              </div>
            </div>
            <div>
              <label
                className="block mb-1"
                style={{ fontWeight: 600, color: "#333" }}
              >
                How did you hear about CNF?{" "}
                <span style={{ color: "#ee0000" }}>*</span>
              </label>
              <input
                type="text"
                name="hearAbout"
                required
                value={bookingForm.hearAbout}
                onChange={handleBookingChange}
                style={{
                  width: "100%",
                  padding: "16px",
                  border: "1px solid #78c922",
                  borderRadius: "6px",
                  backgroundColor: "#eee",
                  color: "#000",
                  fontFamily: '"Open Sans", sans-serif',
                  boxSizing: "border-box",
                }}
              />
            </div>
          </div>

          {/* Submit */}
          <div className="text-right">
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                borderRadius: "6px",
                background: "transparent",
                color: "#2b2b2b",
                fontSize: "20px",
                fontWeight: "bold",
                border: "2px solid #78c922",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#78c922";
                e.currentTarget.style.borderColor = "transparent";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "#78c922";
                e.currentTarget.style.color = "#2b2b2b";
              }}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
