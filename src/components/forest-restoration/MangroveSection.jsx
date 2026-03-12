export default function MangroveSection() {
  return (
    <section
      className="relative bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url(/Forest_Restoration/mangrove.jpg.jpeg)" }}
    >
      <div className="relative z-10 max-w-[1080px] mx-auto px-6 py-8">
        <div
          style={{
            fontFamily:
              '"Open Sans", Helvetica, Arial, Lucida, sans-serif',
            fontSize: "16px",
            lineHeight: "2em",
            color: "#fff",
            backgroundColor: "rgba(0,0,0,0.71)",
            borderRadius: "6px",
            padding: "25px 10px 0",
            marginTop: "50px",
            textAlign: "justify",
          }}
        >
          <h1
            style={{
              fontWeight: 700,
              color: "#fff",
              textAlign: "center",
              marginBottom: "16px",
            }}
          >
            MANGROVE RESTORATION
          </h1>
          <p>
            As of December 2021, we have expanded our work to include mangrove
            landscape restoration in the south of Thailand, fitting with
            Conserve National Forest&rsquo;s mission and vision. CNF has already
            restored mangrove sites in the provinces of Krabi and Satun where
            our work continues, and are currently working on restoring sites in
            Phang Nga.
          </p>
          <p style={{ marginTop: "1em" }}>
            Communities along the coast of southern Thailand depend on mangrove
            forests, as it protects their livelihood by maintaining healthy
            supplies of fish and shellfish while also functioning as a protective
            barrier from the ocean. Mangroves operate as hatcheries for
            invertebrates and a wide variety of fish species. They provide
            shelter for young fish from predators and a warm, calm aquatic
            environment for them to grow in. This, in turn, safeguards a steady
            population of fish that can be caught by the local fisherman.
          </p>
          <p style={{ marginTop: "1em" }}>
            Mangroves are not only important but highly unique. They have
            adapted to grow where other trees are unable to. These adaptations
            are:
          </p>
          <p style={{ marginTop: "1em" }}>
            <strong>Physical Stability:</strong>
          </p>
          <p>
            Mangroves have &ldquo;prop roots&rdquo; that descend from the trunk
            and branches that provide structural stability and anchor the tree
            to the ground. Additionally, pneumatophores are lateral roots that
            grow upwards out of the mud and water to allow for the intake of
            oxygen and, subsequently, respiration.
          </p>
          <p style={{ marginTop: "1em" }}>
            <strong>Salt Tolerance:</strong>
          </p>
          <p>
            Mangroves&rsquo; tolerance to salt means they are able to not only
            survive, but thrive in harsh saline environments. The red mangrove,{" "}
            <em>Rhizophora mangle</em>, has the ability to exclude salt uptake
            via a filtration process that takes place on the surface of the root
            while the white mangrove, <em>Laguncularia racemose</em>, excretes
            salt through its leaves.
          </p>
          <p style={{ marginTop: "1em" }}>
            <strong>Reproductive Adaptation</strong>
          </p>
          <p>
            Mangroves have a unique way of producing, known as vivipary, whereby
            the seeds germinate into seedlings while still attached to the tree.
          </p>
          <p style={{ marginTop: "1em", paddingBottom: "20px" }}>
            Ensuring the conservation of mangrove forests is ensuring our own
            safety and livelihoods.
          </p>
        </div>
      </div>
    </section>
  );
}
