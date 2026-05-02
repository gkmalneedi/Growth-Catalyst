export default function Slide02Problem() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #130f25 0%, #050505 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 40%, rgba(225,48,108,0.06) 0%, transparent 55%)" }} />

      <div className="absolute top-0 left-0 right-0 h-[0.4vh]" style={{ background: "linear-gradient(90deg, #E1306C, #C13584, #F77737, #FCAF45)" }} />

      <div className="relative flex h-full">
        <div className="flex flex-col justify-center px-[7vw] w-[55vw]">
          <div className="mb-[2vh]">
            <span
              className="font-display font-semibold uppercase"
              style={{ fontSize: "1.2vw", letterSpacing: "0.3em", background: "linear-gradient(90deg, #E1306C, #F77737)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              The Challenge
            </span>
          </div>

          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "4.2vw", letterSpacing: "-0.02em", textWrap: "balance" }}
          >
            Brands are drowning in digital noise — and{" "}
            <span style={{ background: "linear-gradient(90deg, #E1306C, #F77737)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              losing ROI
            </span>{" "}
            because of it.
          </h2>

          <p
            className="font-body text-white mt-[2.5vh]"
            style={{ fontSize: "1.7vw", opacity: 0.6, lineHeight: 1.6, fontWeight: 300 }}
          >
            Most agencies run generic playbooks. Your brand deserves a strategy built for growth, not guesswork.
          </p>
        </div>

        <div className="flex flex-col justify-center pr-[7vw] pl-[3vw] w-[45vw] gap-[2.5vh]">
          <div style={{ padding: "2vh 2vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-start gap-[1vw]">
              <div style={{ width: "0.4vw", height: "4vh", borderRadius: "0.2vw", background: "linear-gradient(180deg, #E1306C, #C13584)", flexShrink: 0, marginTop: "0.3vh" }} />
              <div>
                <div className="font-display font-semibold text-white" style={{ fontSize: "1.6vw" }}>No Clear ROI</div>
                <div className="font-body" style={{ fontSize: "1.4vw", color: "#9990b8", marginTop: "0.5vh", lineHeight: 1.5 }}>Spend goes up, results stay flat. No accountability, no clarity.</div>
              </div>
            </div>
          </div>

          <div style={{ padding: "2vh 2vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-start gap-[1vw]">
              <div style={{ width: "0.4vw", height: "4vh", borderRadius: "0.2vw", background: "linear-gradient(180deg, #C13584, #F77737)", flexShrink: 0, marginTop: "0.3vh" }} />
              <div>
                <div className="font-display font-semibold text-white" style={{ fontSize: "1.6vw" }}>Generic Campaigns</div>
                <div className="font-body" style={{ fontSize: "1.4vw", color: "#9990b8", marginTop: "0.5vh", lineHeight: 1.5 }}>Cookie-cutter strategies that ignore your unique competitive position.</div>
              </div>
            </div>
          </div>

          <div style={{ padding: "2vh 2vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="flex items-start gap-[1vw]">
              <div style={{ width: "0.4vw", height: "4vh", borderRadius: "0.2vw", background: "linear-gradient(180deg, #F77737, #FCAF45)", flexShrink: 0, marginTop: "0.3vh" }} />
              <div>
                <div className="font-display font-semibold text-white" style={{ fontSize: "1.6vw" }}>Slow Execution</div>
                <div className="font-body" style={{ fontSize: "1.4vw", color: "#9990b8", marginTop: "0.5vh", lineHeight: 1.5 }}>Opportunities lost while waiting weeks for creative and approval cycles.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[4vh] left-[7vw]">
        <span className="font-body" style={{ fontSize: "1.2vw", color: "#9990b8" }}>MAI — Marketing AIgency</span>
      </div>
    </div>
  );
}
