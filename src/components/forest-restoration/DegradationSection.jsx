export default function DegradationSection() {
  return (
    <section style={{ paddingTop: "18px" }}>
      <div className="max-w-[1080px] mx-auto px-6">
        {/* Desktop: horizontal image */}
        <img
          src="/waiting.jpg"
          alt="Level of Degradation"
          className="hidden md:block w-full"
          style={{ objectFit: "contain" }}
        />
        {/* Mobile: vertical image */}
        <img
          src="/waiting.jpg"
          alt="Level of Degradation"
          className="block md:hidden mx-auto"
          style={{ maxWidth: "100%", objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
