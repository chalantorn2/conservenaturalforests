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

export default function ContactFormSection() {
  const handleBtnHover = (e, enter) => {
    if (enter) {
      e.currentTarget.style.backgroundColor = "#78c922";
      e.currentTarget.style.color = "#fff";
    } else {
      e.currentTarget.style.backgroundColor = "transparent";
      e.currentTarget.style.color = "#000";
    }
  };

  return (
    <section
      data-aos="fade-up"
      style={{ paddingTop: "40px", paddingBottom: "40px" }}
    >
      <div
        className="max-w-[1080px] mx-auto "
        style={{
          paddingTop: "40px",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
            fontSize: "24px",
            fontWeight: 700,
            color: "#2b2b2b",
            marginBottom: "20px",
          }}
        >
          Want to find out more? Send us a message!
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thank you! We will get back to you soon.");
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Name"
              required
              className="w-full"
              style={{
                padding: "16px",
                backgroundColor: "#f7f7f7",
                color: "#000",
                border: "2px solid #78c922",
                borderRadius: "6px",
                fontFamily: '"Open Sans", sans-serif',
              }}
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full"
              style={{
                padding: "16px",
                backgroundColor: "#f7f7f7",
                color: "#000",
                border: "2px solid #78c922",
                borderRadius: "6px",
                fontFamily: '"Open Sans", sans-serif',
              }}
            />
          </div>
          <textarea
            placeholder="Message"
            required
            rows={5}
            className="w-full mb-4"
            style={{
              padding: "16px",
              backgroundColor: "#f7f7f7",
              color: "#000",
              border: "2px solid #78c922",
              borderRadius: "6px",
              fontFamily: '"Open Sans", sans-serif',
              resize: "vertical",
            }}
          />
          <div className="flex justify-end">
            <button
              type="submit"
              style={{
                ...btnStyle,
                fontSize: "18px",
                textShadow: "0 0.1em 0.1em rgba(0,0,0,0.4)",
              }}
              onMouseEnter={(e) => handleBtnHover(e, true)}
              onMouseLeave={(e) => handleBtnHover(e, false)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
