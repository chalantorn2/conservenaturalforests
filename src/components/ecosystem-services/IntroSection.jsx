import { Link } from "react-router-dom";

const textStyle = {
  fontFamily: '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
  fontSize: "16px",
  lineHeight: "2em",
  color: "#000",
};

export default function IntroSection() {
  return (
    <section
      id="intro"
      className="max-w-[1080px] mx-auto px-6"
      style={{ paddingTop: "9px", paddingBottom: "42px" }}
    >
      <div style={textStyle}>
        <p style={{ textAlign: "justify" }}>
          As the scope and scale of our work have expanded, we are striving
          toward an integrated forest landscape restoration (FLR) initiative in
          the Pai District. The strategies described{" "}
          <Link
            to="/forest-restoration"
            style={{ color: "#78c922", fontWeight: 700 }}
          >
            here
          </Link>{" "}
          and{" "}
          <Link
            to="/local-livelihoods"
            style={{ color: "#78c922", fontWeight: 700 }}
          >
            here
          </Link>{" "}
          will only endure if they fit within the biophysical and social
          constraints of the Pai District. These constraints include the
          livelihoods of local communities, the water balance, flood and
          landslide risk, and the balance between land degradation and the
          dependence of local communities on agriculture and forest resources.
        </p>
        <p style={{ textAlign: "justify" }}>
          Considering the scale of our work, Conserve Natural Forests takes a
          spatially-explicit &ldquo;precision-planting&rdquo; approach to select
          sites suitable for multiple benefits or services. Our goal is to
          balance the many values provided by forests through multiple-objective
          management, including the restoration of riparian corridors, improved
          landscape connectivity, minimising soil erosion, and nature-based
          solutions to climate change and natural disaster risk mitigation. None
          of these benefits function in isolation. Any intervention on one part
          has the potential to affect the whole system.
        </p>
      </div>
    </section>
  );
}
