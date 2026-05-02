export default function Slide07Process() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #130f25 0%, #050505 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(193,53,132,0.06) 0%, transparent 55%)" }} />

      <div className="absolute top-0 left-0 right-0 h-[0.4vh]" style={{ background: "linear-gradient(90deg, #E1306C, #C13584, #F77737, #FCAF45)" }} />

      <div className="relative flex flex-col justify-center h-full px-[7vw]">
        <div className="mb-[1.5vh]">
          <span
            className="font-display font-semibold uppercase"
            style={{ fontSize: "1.2vw", letterSpacing: "0.3em", background: "linear-gradient(90deg, #E1306C, #F77737)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            How We Work
          </span>
        </div>

        <h2
          className="font-display font-bold text-white"
          style={{ fontSize: "3.8vw", letterSpacing: "-0.02em", marginBottom: "4vh" }}
        >
          MAI's 5-Step Growth Framework
        </h2>

        <div className="flex items-start gap-[0vw]" style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: "2.5vh", left: "4vw", right: "4vw", height: "2px", background: "linear-gradient(90deg, #E1306C, #C13584, #F77737, #FCAF45)", zIndex: 0 }} />

          <div className="flex-1 flex flex-col items-center text-center" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ width: "5vh", height: "5vh", borderRadius: "50%", background: "linear-gradient(135deg, #E1306C, #C13584)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2vh", flexShrink: 0 }}>
              <span className="font-display font-bold text-white" style={{ fontSize: "1.5vw" }}>01</span>
            </div>
            <div className="font-display font-semibold text-white" style={{ fontSize: "1.4vw", marginBottom: "0.8vh" }}>Discover</div>
            <div className="font-body" style={{ fontSize: "1.2vw", color: "#9990b8", lineHeight: 1.5, maxWidth: "14vw" }}>Deep-dive into your brand, competitors, and audience to find growth gaps</div>
          </div>

          <div className="flex-1 flex flex-col items-center text-center" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ width: "5vh", height: "5vh", borderRadius: "50%", background: "linear-gradient(135deg, #C13584, #F56040)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2vh", flexShrink: 0 }}>
              <span className="font-display font-bold text-white" style={{ fontSize: "1.5vw" }}>02</span>
            </div>
            <div className="font-display font-semibold text-white" style={{ fontSize: "1.4vw", marginBottom: "0.8vh" }}>Strategy</div>
            <div className="font-body" style={{ fontSize: "1.2vw", color: "#9990b8", lineHeight: 1.5, maxWidth: "14vw" }}>Custom AI-powered marketing blueprint aligned to your business goals</div>
          </div>

          <div className="flex-1 flex flex-col items-center text-center" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ width: "5vh", height: "5vh", borderRadius: "50%", background: "linear-gradient(135deg, #F56040, #F77737)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2vh", flexShrink: 0 }}>
              <span className="font-display font-bold text-white" style={{ fontSize: "1.5vw" }}>03</span>
            </div>
            <div className="font-display font-semibold text-white" style={{ fontSize: "1.4vw", marginBottom: "0.8vh" }}>Create</div>
            <div className="font-body" style={{ fontSize: "1.2vw", color: "#9990b8", lineHeight: 1.5, maxWidth: "14vw" }}>Multi-channel campaigns with precision targeting, creatives, and A/B testing</div>
          </div>

          <div className="flex-1 flex flex-col items-center text-center" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ width: "5vh", height: "5vh", borderRadius: "50%", background: "linear-gradient(135deg, #F77737, #FCAF45)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2vh", flexShrink: 0 }}>
              <span className="font-display font-bold text-white" style={{ fontSize: "1.5vw" }}>04</span>
            </div>
            <div className="font-display font-semibold text-white" style={{ fontSize: "1.4vw", marginBottom: "0.8vh" }}>Launch</div>
            <div className="font-body" style={{ fontSize: "1.2vw", color: "#9990b8", lineHeight: 1.5, maxWidth: "14vw" }}>Go live with real-time dashboards and AI analytics making every rupee count</div>
          </div>

          <div className="flex-1 flex flex-col items-center text-center" style={{ position: "relative", zIndex: 1 }}>
            <div style={{ width: "5vh", height: "5vh", borderRadius: "50%", background: "linear-gradient(135deg, #FCAF45, #E1306C)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2vh", flexShrink: 0 }}>
              <span className="font-display font-bold text-white" style={{ fontSize: "1.5vw" }}>05</span>
            </div>
            <div className="font-display font-semibold text-white" style={{ fontSize: "1.4vw", marginBottom: "0.8vh" }}>Optimise</div>
            <div className="font-body" style={{ fontSize: "1.2vw", color: "#9990b8", lineHeight: 1.5, maxWidth: "14vw" }}>Transparent reporting and data-driven decisions that accelerate growth</div>
          </div>
        </div>

        <div className="mt-[4.5vh]" style={{ padding: "2vh 2.5vw", borderRadius: "0.8vw", background: "rgba(193,53,132,0.07)", border: "1px solid rgba(193,53,132,0.18)", display: "flex", alignItems: "center", gap: "2vw" }}>
          <div style={{ width: "0.5vw", height: "5vh", borderRadius: "0.25vw", background: "linear-gradient(180deg, #E1306C, #FCAF45)", flexShrink: 0 }} />
          <p className="font-body" style={{ fontSize: "1.5vw", color: "#fff", opacity: 0.75, lineHeight: 1.55 }}>
            Every step is driven by data, supported by AI, and executed by specialists who live and breathe digital marketing.
          </p>
        </div>
      </div>

      <div className="absolute bottom-[4vh] left-[7vw]">
        <span className="font-body" style={{ fontSize: "1.2vw", color: "#9990b8" }}>MAI — Marketing AIgency</span>
      </div>
    </div>
  );
}
