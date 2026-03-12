import { useState } from "react";

const teamRow1 = [
  {
    firstName: "MIGUEL",
    lastName: "TENORIO TAGLE",
    role: "Chairman",
    image: "/Our_Team/Miguel.jpg.jpeg",
    bio: "Miguel Tenorio Tagle has a background in Communication Sciences from the Iberoamerican University in Mexico City and a law degree from the University of La Laguna in Spain. Miguel served as a legal consultant for several years across offices in Spain, London, and Dubai; it was not until his involvement at a conservation NGO in India that reforestation became the focus of his career. Miguel founded Conserve Natural Forests in hopes of establishing a long-term national effort towards preserving the native plants and animals of Thailand.",
  },
  {
    firstName: "WESLEY",
    lastName: "SNELL",
    role: "Technical Consultant",
    image: "/Our_Team/Wes.jpg.jpeg",
    bio: "Wesley is a forester with an MSc in Forest Science from the University of Padova and a Graduate Certificate from Yale University in Tropical Forest Landscapes: Conservation, Restoration, and Sustainable Use. He specializes in tropical forest restoration and management, ecosystem service measurement and valuation, and forest certification. He has also collaborated extensively with non-profits including WWF, UNEP\u2019s Plant-for-the-Planet Foundation, One Tree Planted, the Arbor Day Foundation, and more to implement forest restoration projects all over the world and to assist companies in developing, implementing, and communicating nature-positive impacts.",
  },
  {
    firstName: "NEIL",
    lastName: "INSH",
    role: "Forestry Scientist",
    image: "/Our_Team/Neil.png",
    bio: "Neil Insh graduated from Bangor University in 2021 with a masters in Forestry. His research interests reside in the social sciences, specifically the cultural ecosystem benefits of woodlands and forests. His masters research centered around riparian woodland near his birthplace in Scotland, but has subsequently extended his focus to tropical forestry, in countries such as Thailand.",
  },
  {
    firstName: "ANCHALA",
    lastName: "NIMITMALA",
    role: "Regional Coordinator",
    image: "/Our_Team/Hippo.jpg.jpeg",
    bio: "Anchala has over 17 years of experience working with elephants and is passionate about preserving the species. As a regional coordinator, Hippo is responsible for meeting the day-to-day challenges for carrying out CNF\u2019s activities.",
  },
];

const teamRow2 = [
  {
    firstName: "CHOMNAPHAT",
    lastName: "KHUNWAT",
    role: "Forestry Scientist",
    image: "/Our_Team/Chomnaphat_Khunwat.png",
    bio: "Chomnaphat Khunwat is a forestry scholar and plant pathologist. She graduated from the faculty of agriculture majoring in plant pathology. Her responsibilities include: Planning and coordinating reforestation and ecosystems, encouraging communities to participate in forest planting, forest management and plant disease care.",
  },
  {
    firstName: "NUKE",
    lastName: "NUMJAIANUKHRAO",
    role: "Elephant Keeper",
    image: "/Our_Team/empty-profile-pic.png",
    bio: null,
  },
  {
    firstName: "JAMES",
    lastName: "HASTINGS",
    role: "Digital Consultant",
    image: "/Our_Team/James-Headshot.png",
    bio: null,
  },
  {
    firstName: "SONTHAYA",
    lastName: "PANYAKHAM",
    role: "Land Manager",
    image: "/Our_Team/Bo.jpeg",
    bio: "\u201CBo\u201D is our tree expert. He manages our tree nursery and coordinates all of our planting days.",
  },
];

const teamRow3 = [
  {
    firstName: "SANGA",
    lastName: "PINGKAN",
    role: "Agricultural Director",
    image: "/Our_Team/Mr-Tiger.jpeg",
    bio: 'Lieutenant Sanga "Mr. Tiger" Pingkan joined the Royal Thai Army over 20 years ago. He is in charge of managing the King\u2019s Self Sustainability Project at the army base in Pai, to which he owes his passion about preserving our surrounding forests. Mr. Tiger has been of huge assistance to CNF from the very beginning, coordinating military personnel in helping us plant as many trees as possible.',
  },
  {
    firstName: "GUILLERMO",
    lastName: "TENORIO",
    role: "Scientific Director",
    image: "/Our_Team/empty-profile-pic.png",
    bio: null,
  },
  {
    firstName: "VICTORIA",
    lastName: "MARQUEZ",
    role: "International Legal Director",
    image: "/Our_Team/empty-profile-pic.png",
    bio: null,
  },
];

function TeamMemberCard({ member }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center">
      {/* Photo */}
      <div
        style={{
          borderRadius: "6px",
          overflow: "hidden",
          boxShadow: "6px 6px 18px 0 rgba(0,0,0,0.43)",
          marginBottom: "16px",
          width: "100%",
        }}
      >
        <img
          src={member.image}
          alt={`${member.firstName} ${member.lastName}`}
          style={{
            width: "100%",
            aspectRatio: "225/150",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>

      {/* Name & Role */}
      <div style={{ textAlign: "center", marginBottom: "12px" }}>
        <h1
          style={{
            fontWeight: 600,
            fontSize: "26px",
            color: "#2b2b2b",
            lineHeight: "1.3",
          }}
        >
          {member.firstName}
        </h1>
        <h1
          style={{
            fontWeight: 600,
            fontSize: "26px",
            color: "#2b2b2b",
            lineHeight: "1.3",
          }}
        >
          {member.lastName}
        </h1>
        <p
          style={{
            fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
            fontSize: "18px",
            color: "#000",
            marginTop: "4px",
          }}
        >
          {member.role}
        </p>
      </div>

      {/* Toggle */}
      {member.bio && (
        <div
          style={{
            borderRadius: "6px",
            overflow: "hidden",
            border: "2px solid #78c922",
            width: "100%",
          }}
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between"
            style={{
              fontFamily:
                '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
              textTransform: "uppercase",
              fontSize: "20px",
              textAlign: "center",
              padding: "16px 20px",
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "#333",
            }}
          >
            <h5
              className="flex-1 text-center"
              style={{
                fontFamily:
                  '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                textTransform: "uppercase",
                fontSize: "20px",
              }}
            >
              Read More
            </h5>
            <span
              style={{
                color: "#707070",
                fontSize: "20px",
                transition: "transform 300ms ease",
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              &#x25BC;
            </span>
          </button>
          <div
            style={{
              maxHeight: isOpen ? "600px" : "0",
              overflow: "hidden",
              transition: "max-height 400ms ease",
            }}
          >
            <div
              style={{
                padding: "0 20px 20px",
                fontFamily:
                  '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                textAlign: "center",
                fontSize: "14px",
                lineHeight: "1.7em",
                color: "#666",
              }}
            >
              <p>{member.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TeamSection() {
  return (
    <section style={{ padding: 0 }}>
      <div className="max-w-[1080px] mx-auto px-6">
        {/* Title */}
        <h1
          className="text-center"
          style={{
            fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
            fontWeight: 700,
            fontSize: "45px",
            color: "#333",
            marginBottom: "8px",
          }}
        >
          OUR TEAM
        </h1>
        {/* Divider */}
        <div
          className="mx-auto"
          style={{ maxWidth: "10%", height: "5px", marginBottom: "30px" }}
        >
          <div style={{ borderTop: "5px solid #78c922", width: "100%" }} />
        </div>

        {/* Row 1: 4 columns */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10"
          style={{ paddingBottom: "27px" }}
        >
          {teamRow1.map((member, idx) => (
            <TeamMemberCard key={idx} member={member} />
          ))}
        </div>

        {/* Row 2: 4 columns */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10"
          style={{ paddingBottom: "27px" }}
        >
          {teamRow2.map((member, idx) => (
            <TeamMemberCard key={idx} member={member} />
          ))}
        </div>

        {/* Row 3: 3 columns */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10"
          style={{ paddingTop: "40px", paddingBottom: "27px" }}
        >
          {teamRow3.map((member, idx) => (
            <TeamMemberCard key={idx} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
