const base = import.meta.env.BASE_URL;

export default function Slide03WhoWeAre() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #0d0a1e 0%, #050505 100%)" }}>
      <img
        src={`${base}team-bg.png`}
        crossOrigin="anonymous"
        className="absolute right-0 top-0 h-full"
        style={{ width: "42vw", objectFit: "cover", opacity: 0.22 }}
        alt=""
      />

      <div className="absolute right-0 top-0 bottom-0 w-[42vw]" style={{ background: "linear-gradient(90deg, #050505 0%, transparent 40%)" }} />

      <div className="absolute top-0 left-0 right-0 h-[0.4vh]" style={{ background: "linear-gradient(90deg, #E1306C, #C13584, #F77737, #FCAF45)" }} />

      <div className="relative flex flex-col justify-center h-full px-[7vw] w-[60vw]">
        <div className="mb-[2vh]">
          <span
            className="font-display font-semibold uppercase"
            style={{ fontSize: "1.2vw", letterSpacing: "0.3em", background: "linear-gradient(90deg, #E1306C, #F77737)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            Who We Are
          </span>
        </div>

        <h2
          className="font-display font-bold text-white leading-tight"
          style={{ fontSize: "4.2vw", letterSpacing: "-0.02em", textWrap: "balance" }}
        >
          India's First{" "}
          <span style={{ background: "linear-gradient(90deg, #E1306C, #C13584, #F77737)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            AI-Powered
          </span>{" "}
          Full-Service Marketing Agency
        </h2>

        <p
          className="font-body text-white mt-[2.5vh]"
          style={{ fontSize: "1.65vw", opacity: 0.62, lineHeight: 1.6, fontWeight: 300, maxWidth: "46vw" }}
        >
          Marketing AIgency (MAI) blends 12+ years of deep domain expertise with cutting-edge AI to deliver measurable growth for brands that refuse to settle for average.
        </p>

        <div className="flex gap-[4vw] mt-[4vh]">
          <div>
            <div
              className="font-display font-bold"
              style={{ fontSize: "3.5vw", background: "linear-gradient(90deg, #E1306C, #C13584)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              12+
            </div>
            <div className="font-body" style={{ fontSize: "1.3vw", color: "#9990b8", marginTop: "0.3vh" }}>Years Experience</div>
          </div>
          <div>
            <div
              className="font-display font-bold"
              style={{ fontSize: "3.5vw", background: "linear-gradient(90deg, #C13584, #F77737)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              68+
            </div>
            <div className="font-body" style={{ fontSize: "1.3vw", color: "#9990b8", marginTop: "0.3vh" }}>Expert Specialists</div>
          </div>
          <div>
            <div
              className="font-display font-bold"
              style={{ fontSize: "3.5vw", background: "linear-gradient(90deg, #F77737, #FCAF45)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              200+
            </div>
            <div className="font-body" style={{ fontSize: "1.3vw", color: "#9990b8", marginTop: "0.3vh" }}>Brands Served</div>
          </div>
        </div>

        <div className="mt-[3.5vh]" style={{ padding: "1.8vh 2vw", borderRadius: "0.6vw", background: "rgba(193,53,132,0.08)", border: "1px solid rgba(193,53,132,0.2)", display: "inline-flex", alignItems: "center", gap: "1vw", width: "fit-content" }}>
          <div style={{ width: "0.8vw", height: "0.8vw", borderRadius: "50%", background: "linear-gradient(135deg, #E1306C, #C13584)" }} />
          <span className="font-body" style={{ fontSize: "1.4vw", color: "#fff", opacity: 0.8 }}>Trusted by Govt of India, IDBI Bank, Philips, TechMahindra & more</span>
        </div>
      </div>

      <div className="absolute bottom-[4vh] left-[7vw]">
        <span className="font-body" style={{ fontSize: "1.2vw", color: "#9990b8" }}>MAI — Marketing AIgency</span>
      </div>
    </div>
  );
}
