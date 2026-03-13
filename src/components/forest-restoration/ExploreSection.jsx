export default function ExploreSection() {
  return (
    <section data-aos="fade-up" style={{ paddingTop: "54px", paddingBottom: "54px" }}>
      <div className="max-w-[1080px] mx-auto px-6">
        <h1
          style={{
            textAlign: "center",
            fontSize: "34px",
            fontWeight: 700,
            color: "#333",
            marginBottom: "24px",
          }}
        >
          EXPLORE THE CONTEXT IN WHICH WE WORK
        </h1>
        <div
          style={{
            width: "100%",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          <iframe
            title="Global Forest Watch"
            src="https://www.globalforestwatch.org/embed/map/country/THA/23/5/?mainMap=eyJzaG93QW5hbHlzaXMiOnRydWV9&map=eyJjZW50ZXIiOnsibGF0IjoxOS4zNjIyNDMxOTY1OTk4NSwibG5nIjo5OC4zODkzNTQ3MDQ5ODIwOH0sInpvb20iOjguNzkxOTA2MjM0MTU2MDcsImNhbkJvdW5kIjpmYWxzZSwiZGF0YXNldHMiOlt7ImRhdGFzZXQiOiJwb2xpdGljYWwtYm91bmRhcmllcyIsImxheWVycyI6WyJkaXNwdXRlZC1wb2xpdGljYWwtYm91bmRhcmllcyIsInBvbGl0aWNhbC1ib3VuZGFyaWVzIl0sIm9wYWNpdHkiOjEsInZpc2liaWxpdHkiOnRydWV9LHsiZGF0YXNldCI6InRyZWUtY292ZXItbG9zcyIsImxheWVycyI6WyJ0cmVlLWNvdmVyLWxvc3MiXSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZX0seyJkYXRhc2V0IjoidHJlZS1jb3Zlci1nYWluIiwibGF5ZXJzIjpbInRyZWUtY292ZXItZ2Fpbi0yMDAxLTIwMTIiXSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZX0seyJkYXRhc2V0IjoidHJlZS1jb3ZlciIsImxheWVycyI6WyJ0cmVlLWNvdmVyLTIwMTAiXSwib3BhY2l0eSI6MSwidmlzaWJpbGl0eSI6dHJ1ZX1dfQ%3D%3D"
            style={{
              width: "100%",
              height: "500px",
              border: 0,
            }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
