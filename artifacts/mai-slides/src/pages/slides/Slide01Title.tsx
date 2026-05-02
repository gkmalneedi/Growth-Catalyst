const base = import.meta.env.BASE_URL;

export default function Slide01Title() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #130f25 0%, #050505 60%, #1a0814 100%)" }}>
      <img
        src={`${base}hero-bg.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.18 }}
        alt=""
      />

      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(193,53,132,0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(225,48,108,0.08) 0%, transparent 50%)" }} />

      <div className="absolute top-0 left-0 right-0 h-[0.4vh]" style={{ background: "linear-gradient(90deg, #E1306C, #C13584, #F77737, #FCAF45)" }} />

      <div className="relative flex flex-col justify-center h-full px-[7vw]">
        <img
          src={`${base}mai-logo.png`}
          crossOrigin="anonymous"
          className="mb-[3vh]"
          style={{ height: "5vh", width: "auto", objectFit: "contain", objectPosition: "left" }}
          alt="MAI Logo"
        />

        <div className="mb-[1.5vh]">
          <span
            className="font-display font-bold"
            style={{ fontSize: "1.6vw", letterSpacing: "0.25em", textTransform: "uppercase", background: "linear-gradient(90deg, #E1306C, #C13584, #F77737, #FCAF45)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            Marketing AIgency
          </span>
        </div>

        <h1
          className="font-display font-bold text-white leading-none"
          style={{ fontSize: "5.8vw", letterSpacing: "-0.02em", maxWidth: "70vw", textWrap: "balance" }}
        >
          We're the Crusaders of{" "}
          <span style={{ background: "linear-gradient(90deg, #E1306C, #C13584, #F77737, #FCAF45)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Agent Marketing
          </span>
        </h1>

        <p
          className="font-body text-white mt-[2.5vh]"
          style={{ fontSize: "1.8vw", opacity: 0.65, maxWidth: "48vw", fontWeight: 300, lineHeight: 1.55 }}
        >
          AI-powered digital strategies that transform brands into market leaders — with 12+ years of proven results.
        </p>

        <div className="flex items-center gap-[3vw] mt-[4.5vh]">
          <div className="flex flex-col">
            <span className="font-display font-bold text-white" style={{ fontSize: "2.8vw" }}>12+</span>
            <span className="font-body" style={{ fontSize: "1.3vw", color: "#9990b8" }}>Years Experience</span>
          </div>
          <div style={{ width: "1px", height: "5vh", background: "rgba(255,255,255,0.15)" }} />
          <div className="flex flex-col">
            <span className="font-display font-bold text-white" style={{ fontSize: "2.8vw" }}>200+</span>
            <span className="font-body" style={{ fontSize: "1.3vw", color: "#9990b8" }}>Clients Served</span>
          </div>
          <div style={{ width: "1px", height: "5vh", background: "rgba(255,255,255,0.15)" }} />
          <div className="flex flex-col">
            <span className="font-display font-bold text-white" style={{ fontSize: "2.8vw" }}>300%</span>
            <span className="font-body" style={{ fontSize: "1.3vw", color: "#9990b8" }}>Avg ROI</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[4vh] right-[7vw] flex items-center gap-[1vw]">
        <span className="font-body" style={{ fontSize: "1.3vw", color: "#9990b8" }}>marketingaigency.in</span>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-[35vw]">
        <div style={{ position: "absolute", right: "5vw", top: "50%", transform: "translateY(-50%)", width: "28vw", height: "28vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(193,53,132,0.15) 0%, rgba(225,48,108,0.05) 50%, transparent 70%)", border: "1px solid rgba(193,53,132,0.12)" }} />
        <div style={{ position: "absolute", right: "8vw", top: "50%", transform: "translateY(-50%)", width: "18vw", height: "18vw", borderRadius: "50%", background: "radial-gradient(circle, rgba(247,119,55,0.1) 0%, transparent 70%)", border: "1px solid rgba(247,119,55,0.08)" }} />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[0.3vh]" style={{ background: "linear-gradient(90deg, transparent, rgba(193,53,132,0.4), transparent)" }} />
    </div>
  );
}
