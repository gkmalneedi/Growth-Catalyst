export default function Slide08WhyMAI() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #130f25 0%, #050505 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(225,48,108,0.07) 0%, transparent 50%), radial-gradient(ellipse at 85% 70%, rgba(247,119,55,0.06) 0%, transparent 50%)" }} />

      <div className="absolute top-0 left-0 right-0 h-[0.4vh]" style={{ background: "linear-gradient(90deg, #E1306C, #C13584, #F77737, #FCAF45)" }} />

      <div className="relative flex h-full">
        <div className="flex flex-col justify-center px-[7vw] w-[45vw]">
          <div className="mb-[2vh]">
            <span
              className="font-display font-semibold uppercase"
              style={{ fontSize: "1.2vw", letterSpacing: "0.3em", background: "linear-gradient(90deg, #E1306C, #F77737)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              Why MAI
            </span>
          </div>

          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "4.5vw", letterSpacing: "-0.02em", textWrap: "balance" }}
          >
            AI Precision +{" "}
            <span style={{ background: "linear-gradient(90deg, #E1306C, #F77737)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              Human Creativity
            </span>
          </h2>

          <p
            className="font-body text-white mt-[2.5vh]"
            style={{ fontSize: "1.65vw", opacity: 0.6, lineHeight: 1.6, fontWeight: 300 }}
          >
            We combine the speed and scale of AI with the strategic instinct of seasoned marketers — giving you an unfair advantage over competitors still running manual playbooks.
          </p>
        </div>

        <div className="flex flex-col justify-center pr-[7vw] pl-[3vw] w-[55vw] gap-[2.2vh]">
          <div style={{ padding: "2.2vh 2vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
            <div style={{ width: "3.5vh", height: "3.5vh", borderRadius: "50%", background: "linear-gradient(135deg, #E1306C, #C13584)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <div>
              <div className="font-display font-semibold text-white" style={{ fontSize: "1.5vw" }}>AI-Powered Strategy</div>
              <div className="font-body" style={{ fontSize: "1.3vw", color: "#9990b8", marginTop: "0.4vh" }}>Machine learning models that predict trends, optimize spend, and identify your highest-value audiences in real time.</div>
            </div>
          </div>

          <div style={{ padding: "2.2vh 2vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
            <div style={{ width: "3.5vh", height: "3.5vh", borderRadius: "50%", background: "linear-gradient(135deg, #C13584, #F77737)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div>
              <div className="font-display font-semibold text-white" style={{ fontSize: "1.5vw" }}>Data-Driven Decisions</div>
              <div className="font-body" style={{ fontSize: "1.3vw", color: "#9990b8", marginTop: "0.4vh" }}>Every campaign decision is backed by analytics — no gut-feel, no guesswork, only proven performance signals.</div>
            </div>
          </div>

          <div style={{ padding: "2.2vh 2vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
            <div style={{ width: "3.5vh", height: "3.5vh", borderRadius: "50%", background: "linear-gradient(135deg, #F77737, #FCAF45)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <div className="font-display font-semibold text-white" style={{ fontSize: "1.5vw" }}>24/7 Campaign Intelligence</div>
              <div className="font-body" style={{ fontSize: "1.3vw", color: "#9990b8", marginTop: "0.4vh" }}>Always-on monitoring, automated optimizations, and proactive reporting that never sleeps.</div>
            </div>
          </div>

          <div style={{ padding: "2.2vh 2vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "flex-start", gap: "1.5vw" }}>
            <div style={{ width: "3.5vh", height: "3.5vh", borderRadius: "50%", background: "linear-gradient(135deg, #FCAF45, #E1306C)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </div>
            <div>
              <div className="font-display font-semibold text-white" style={{ fontSize: "1.5vw" }}>Transparent Reporting</div>
              <div className="font-body" style={{ fontSize: "1.3vw", color: "#9990b8", marginTop: "0.4vh" }}>Real-time dashboards and clear attribution so you always know exactly where your money is going.</div>
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
