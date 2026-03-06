import { useState } from "react";

const faqsLeft = [
  {
    q: "Will I get paid for the internship?",
    a: "Candidates participating in our International Internship Program will not be paid for the internship \u2013 this is a voluntary non-paid training period. This is the standard in Thailand and for most global organisations. As a nonprofit, we simply cannot afford to pay our interns or provide free housing and transportation at this time. Our interns have found that the benefits far outweigh the costs. We try to keep the these costs as low as possible because we do not want them to be a barrier for entry. We believe we should benefit from the perspectives of interns from all walks of life and backgrounds. Your tuition fees go directly back into the foundation \u2013 toward reforestation and wildlife conservation, toward providing a better life for Mae Kamee and the local community.",
  },
  {
    q: "What is the duration of the internship?",
    a: "This is up to you, but we ask that you commit at least one month in order to reap the full benefits of an experience abroad. Most interns stay for 3 \u2013 6 months.",
  },
  {
    q: "How long will it take to arrange the internship?",
    a: "Please contact us for more details about the timeline for arranging your internship.",
  },
  {
    q: "What should I bring?",
    a: "Please contact us for a recommended packing list based on the season of your arrival.",
  },
  {
    q: "Can I get university approval or accreditation for my internship?",
    a: "Yes! Many of our interns complete the practical requirement of their academic studies and gain credit for their internship completed at CNF. Please let us know if you wish to gain academic credit for your internship.\n\nWe ask that applicants seeking credit for academic studies supply all of the necessary documentation with their application. The team at CNF will liaise with representatives from your university or college, if required, to ensure that all of the necessary academic documentation is completed and satisfactory.",
  },
  {
    q: "What is the weather like in Pai?",
    a: "June-Nov (Rainy Season)\nRainy season is wet and humid, bring clothes that easily dry along with a light rain Jacket along with a good pair of flip-flops. There are a lot of mosquitoes during this time, remember to use bug spray.\n\nDec-May (Dry Season)\nDry season can get extremely hot during the day, but drop below freezing at night. If coming during this period it is best to bring a sweatshirt and hat, warm blankets will be provided in the bungalows.",
  },
];

const faqsRight = [
  {
    q: "What kind of visa do I need?",
    a: 'You will be applying for a Non-Immigrant "O" Volunteer Visa at your local Thai Embassy or Consulate before you leave for Thailand. We recommend you apply at least one week in advance, or as soon as you have secured your travel dates.',
  },
  {
    q: "How should I arrange my travel itinerary?",
    a: "Arriving in Thailand:\nAfter a long flight to Thailand you can stay one night in Bangkok as it is a big city with plenty to see, or switch airports and head directly to the northern city of Chiang Mai. There are plenty of places that can arrange your transport to either Don Mueng Airport which is where you can catch a flight to Chiang Mai, the flight is a quick and cheap 45 minutes, and makes for easy travel. You can always take the scenic route by taking the train where you can book an overnight sleeper, this is a little cheaper and a nice way to see some of the countryside. Once you arrive in Pai, we will pick you up.\n\nArriving in Chiang Mai:\nChiang Mai is like the capital of the north, a really cool city with tons to do and tons to eat! A couple days in Chiang Mai could certainly be worth your while and a good resting place before making your way up to Pai. When you decide what time and date you would like to head to CNF, let us know so we can arrange with Aya Service, located next to the train station, to take you up in one of their vans to us. The trip can take around three hours and has a lot of turns, but it\u2019s quite a beautiful ride.",
  },
  {
    q: "What is expected of me as an intern?",
    a: "When interning with Conserve Natural Forests you are expected to follow the Code of Conduct and be respectful to the humans and nature you come in contact with here. You will be expected to work at least 20 hours per week on site and perhaps more off site depending on our goals and objectives. It is important that we feel as though you are learning from your experience so please feel free to bring up any concerns you have along the way.",
  },
  {
    q: "Where are the bungalows located?",
    a: "The bungalows are just 10 km (10 minutes) outside of Pai, where it is peaceful, quiet, and conducive to a productive work environment.",
  },
  {
    q: "Is Pai safe?",
    a: "Absolutely! While Pai city is comparable to an urban lifestyle, the atmosphere is that of a small community. People are warm and friendly, and look after each other\u2019s wellbeing. We also have full medical support, and your valuable belongings will be safe in your bungalows with locks on all doors and windows.",
  },
];

function FaqToggle({ question, answer, isOpen, onToggle }) {
  return (
    <div
      className="cursor-pointer"
      style={{
        backgroundColor: "#f4f4f4",
        border: "2px solid #78c922",
        borderRadius: "6px",
        padding: "14px 22px",
        marginLeft: "25px",
        marginRight: "25px",
      }}
      onClick={onToggle}
    >
      <div className="flex items-center justify-between">
        <h5
          style={{
            fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
            fontWeight: 700,
            fontSize: "16px",
            color: "#2b2b2b",
            lineHeight: "1.4em",
            margin: 0,
            padding: 0,
            textAlign: "left",
          }}
        >
          {question}
        </h5>
        <span
          style={{
            color: "#4c4c4c",
            fontSize: "20px",
            fontWeight: 700,
            transition: "transform 0.3s",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            flexShrink: 0,
            marginLeft: "10px",
          }}
        >
          &#9660;
        </span>
      </div>
      {isOpen && (
        <div
          className="mt-3"
          style={{
            fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
            fontSize: "14px",
            color: "#2b2b2b",
            lineHeight: "1.7em",
            textAlign: "left",
          }}
        >
          {answer.split("\n\n").map((para, i) => (
            <p key={i} className={i > 0 ? "mt-3" : ""}>
              {para.split("\n").map((line, j) => (
                <span key={j}>
                  {j > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default function FaqSection() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section className="py-12 px-[30px] bg-white">
      <div className="max-w-[1080px] mx-auto">
        <h1
          className="text-center mb-8"
          style={{
            fontFamily: '"Lato", Helvetica, Arial, Lucida, sans-serif',
            fontWeight: 700,
            fontSize: "52px",
            color: "#000",
            letterSpacing: "2px",
          }}
        >
          FAQs
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left column */}
          <div className="md:w-1/2 space-y-4">
            {faqsLeft.map((faq, idx) => (
              <FaqToggle
                key={idx}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaq === idx}
                onToggle={() => toggleFaq(idx)}
              />
            ))}
          </div>
          {/* Right column */}
          <div className="md:w-1/2 space-y-4">
            {faqsRight.map((faq, idx) => (
              <FaqToggle
                key={idx + faqsLeft.length}
                question={faq.q}
                answer={faq.a}
                isOpen={openFaq === idx + faqsLeft.length}
                onToggle={() => toggleFaq(idx + faqsLeft.length)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
