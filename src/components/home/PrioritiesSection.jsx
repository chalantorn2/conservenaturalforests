import { Link } from "react-router-dom";

const priorities = [
  {
    title: "FOREST RESTORATION",
    text: "CNF strives to meet global biodiversity and climate change mitigation targets in ways that sustain or improve local livelihoods. \u00A0This includes the preservation of local old-growth forests and restoration of degraded landscapes. We also work with local communities to promote agroforestry and other sustainable farming practices through education, training, and capacity-building. With the help of our friends, we work year-round throughout Mae Hong Son and Chiang Mai Provinces to rebuild the beautiful and biodiverse tropical forests of Northern Thailand.",
    buttonText: "LEARN MORE",
    buttonLink: "/forest-restoration",
    image: "/Home/Foliage-480x320.jpg.jpeg",
    imageAlt: "Foliage",
    layout: "text-left",
  },
  {
    title: "WILDLIFE CONSERVATION",
    text: "A forest is more than just the trees \u2013 it is a complex tapestry spun by a dizzying array of plants, animals, insects, fungi, and bacteria. Thailand is a biodiversity hotspot and we would like to keep it that way \u2013 that\u2019s why the methods we use promote functional diversity and species recruitment. Some animals \u2013 like elephants \u2013 play an integral role in maintaining healthy ecosystems.We work with a broad coalition \u2013 including the Department of National Parks, Wildlife and Plant Conservation, the Elephant Reintroduction Foundation, and more \u2013 to return these keystone species to protected areas where they can nurture the forest in ways we never could.",
    buttonText: "LEARN MORE",
    buttonLink: "/wildlife-conservation",
    image: "/Home/Woodpecker-480x320.jpg.jpeg",
    imageAlt: "Woodpecker",
    layout: "text-right",
  },
  {
    title: "LOCAL LIVELIHOODS",
    text: "One organisation is not enough to sustain significant, long-lasting change \u2013 we cannot overstate the importance of working with the local community toward sustainable development and environmental awareness. We host several large-scale tree planting events each year with the support of the Pai community. We also donate our seedlings for a variety of causes including land retention, watershed improvement, and urban greenery, and work with nearby villages regarding sustainable agriculture and agroforestry through education and capacity building. We also invite local primary and secondary students to our project site in order to provide education and cultivate empathy towards the environment among the people for whom climate change will matter most.",
    buttonText: "LEARN MORE",
    buttonLink: "/local-livelihoods",
    image: "/Home/Kids-Learning-480x320.jpg.jpeg",
    imageAlt: "Kids Learning",
    layout: "text-left",
  },
  {
    title: "SUSTAINABLE TOURISM",
    text: "Our land is a place where honest questions are met with honest answers. By joining us for a day on our project site, you will participate in a unique experience which combines education about Thailand\u2019s tropical ecosystems with an opportunity to give back by planting a tree and learning about low-impact travel. It\u2019s important to understand the diverse impacts \u2013 both positive and negative \u2013 that tourism may generate for local people and local ecosystems, and what we can do to minimize our travel footprint. We believe that education and awareness are critically important to a more fulfilling travel experience, whether here in Thailand or anywhere else.",
    buttonText: "VISIT US",
    buttonLink: "/visit-us",
    image: "/Home/Kids-Watching-Elephant.jpg.jpeg",
    imageAlt: "Kids Watching Elephant",
    layout: "text-right",
  },
  {
    title: "ECOSYSTEM SERVICES",
    text: "Forests supply a wealth of essential services that we depend upon, including cleaner air, purified water, and healthier soil. Forests prevent erosion, protect our communities from landslides, flooding, avalanches, and other natural hazards. They beautify and enrich the landscapes that we hold sacred. They provide us with medicines and food and shelter, they keep us warm and fashion our tools and build the bedframe and our favorite chair, the roof and the walls and the foundation. For as long as we have been here, forests have nourished and sustained us. CNF is working to uncover the ties that bind us to nature and target our reforestation work to areas that provide multiple benefits.",
    buttonText: "LEARN MORE",
    buttonLink: "/ecosystem-services",
    image: "/Home/Waterfall-480x320.jpg.jpeg",
    imageAlt: "Waterfall",
    layout: "text-left",
  },
];

export default function PrioritiesSection() {
  return (
    <section
      className="py-20 px-[30px]"
      style={{ backgroundColor: "#f7f7f7" }}
    >
      <div className="max-w-[1080px] mx-auto">
        {/* Section Title */}
        <h1
          className="text-center mb-2"
          style={{
            fontSize: "30px",
            color: "#333",
            fontWeight: 300,
          }}
        >
          OUR PRIORITIES
        </h1>
        {/* Divider */}
        <div className="relative mx-auto mb-12" style={{ maxWidth: "10%", height: "5px" }}>
          <div style={{ borderTop: "5px solid #78c922", width: "100%" }} />
        </div>

        {/* Priority Items */}
        <div className="space-y-16">
          {priorities.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${
                item.layout === "text-left"
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              } gap-8 items-start`}
            >
              {/* Text */}
              <div className="flex-1">
                <h2
                  className="text-center mb-4"
                  style={{
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "#333",
                  }}
                >
                  {item.title}
                </h2>
                <p
                  className="text-justify mb-6"
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: "1.7em",
                    fontWeight: 400,
                    fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
                  }}
                >
                  {item.text}
                </p>
                <div className="text-center">
                  <Link
                    to={item.buttonLink}
                    className="btn-divi btn-divi-green"
                    style={{ fontSize: "18px" }}
                  >
                    {item.buttonText}
                  </Link>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  style={{ width: "510px", height: "340px", maxWidth: "100%" }}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
