const partners = [
  {
    name: "Arbor Day",
    logo: "/Home/Arbor-Day.png",
    url: "https://www.arborday.org/",
  },
  {
    name: "EcoMatcher",
    logo: "/Home/EcoMatcherLogo.png",
    url: "https://www.ecomatcher.com/cnf/",
  },
  {
    name: "Plant for the Planet",
    logo: "/Home/PFTP.png",
    url: "https://www1.plant-for-the-planet.org/conserve-natural-forests",
  },
  {
    name: "One Tree Planted",
    logo: "/Home/One-Tree-Planted-480x478.png",
    url: "https://onetreeplanted.org/",
  },
];

export default function NetworkSection() {
  return (
    <section className="py-20 px-[30px] bg-white">
      <div className="max-w-[1080px] mx-auto">
        {/* Section Title */}
        <h1
          className="text-center mb-10"
          style={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#333",
          }}
        >
          OUR NETWORK
        </h1>
        {/* Divider */}
        <div
          className="relative mx-auto mb-12"
          style={{ maxWidth: "10%", height: "5px" }}
        >
          <div style={{ borderTop: "5px solid #78c922", width: "100%" }} />
        </div>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner, idx) => (
            <a
              key={idx}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                style={{
                  width: "225px",
                  height: "225px",
                  objectFit: "contain",
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
