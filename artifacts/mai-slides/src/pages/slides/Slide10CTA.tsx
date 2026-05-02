const base = import.meta.env.BASE_URL;

export default function Slide10CTA() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #130f25 0%, #050505 60%, #1a0814 100%)" }}>
      <img
        src={`${base}hero-bg.png`}
        crossOrigin="anonymous"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.12 }}
        alt=""
      />

      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(193,53,132,0.15) 0%, transparent 65%)" }} />

      <div className="absolute top-0 left-0 right-0 h-[0.4vh]" style={{ background: "linear-gradient(90deg, #E1306C, #C13584, #F77737, #FCAF45)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-[0.4vh]" style={{ background: "linear-gradient(90deg, #E1306C, #C13584, #F77737, #FCAF45)" }} />

      <div className="relative flex flex-col justify-center items-center h-full text-center px-[10vw]">
        <img
          src={`${base}mai-logo.png`}
          crossOrigin="anonymous"
          className="mb-[3vh]"
          style={{ height: "5vh", width: "auto", objectFit: "contain" }}
          alt="MAI Logo"
        />

        <h2
          className="font-display font-bold text-white leading-none"
          style={{ fontSize: "6vw", letterSpacing: "-0.03em", textWrap: "balance" }}
        >
          Ready to Crush{" "}
          <span style={{ background: "linear-gradient(90deg, #E1306C, #C13584, #F77737, #FCAF45)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Your Competitors?
          </span>
        </h2>

        <p
          className="font-body text-white mt-[2.5vh]"
          style={{ fontSize: "1.8vw", opacity: 0.65, lineHeight: 1.55, fontWeight: 300, maxWidth: "52vw" }}
        >
          Partner with India's most ambitious AI-powered marketing agency. Let's build your next growth story together.
        </p>

        <div style={{ height: "4px", width: "12vw", borderRadius: "2px", background: "linear-gradient(90deg, #E1306C, #C13584, #F77737, #FCAF45)", margin: "3.5vh 0" }} />

        <div className="flex gap-[6vw]">
          <div className="flex flex-col items-center">
            <div style={{ color: "#9990b8", fontSize: "1.2vw", marginBottom: "0.5vh" }} className="font-body">Website</div>
            <div className="font-display font-semibold text-white" style={{ fontSize: "1.6vw" }}>marketingaigency.in</div>
          </div>
          <div style={{ width: "1px", background: "rgba(255,255,255,0.12)" }} />
          <div className="flex flex-col items-center">
            <div style={{ color: "#9990b8", fontSize: "1.2vw", marginBottom: "0.5vh" }} className="font-body">Email</div>
            <div className="font-display font-semibold text-white" style={{ fontSize: "1.6vw" }}>hello@marketingaigency.in</div>
          </div>
          <div style={{ width: "1px", background: "rgba(255,255,255,0.12)" }} />
          <div className="flex flex-col items-center">
            <div style={{ color: "#9990b8", fontSize: "1.2vw", marginBottom: "0.5vh" }} className="font-body">Specialists</div>
            <div className="font-display font-semibold text-white" style={{ fontSize: "1.6vw" }}>68+ Experts Ready</div>
          </div>
        </div>

        <p className="font-body mt-[3.5vh]" style={{ fontSize: "1.3vw", color: "#9990b8" }}>
          Marketing AIgency (MAI) — 12+ Years · 200+ Clients · 300% Avg ROI
        </p>
      </div>
    </div>
  );
}
