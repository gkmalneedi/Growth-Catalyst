export default function Slide06Industries() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #0d0a1e 0%, #050505 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 30%, rgba(225,48,108,0.06) 0%, transparent 50%)" }} />

      <div className="absolute top-0 left-0 right-0 h-[0.4vh]" style={{ background: "linear-gradient(90deg, #E1306C, #C13584, #F77737, #FCAF45)" }} />

      <div className="relative flex flex-col justify-center h-full px-[7vw]">
        <div className="mb-[1.5vh]">
          <span
            className="font-display font-semibold uppercase"
            style={{ fontSize: "1.2vw", letterSpacing: "0.3em", background: "linear-gradient(90deg, #E1306C, #F77737)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            Industries We Serve
          </span>
        </div>

        <h2
          className="font-display font-bold text-white"
          style={{ fontSize: "3.8vw", letterSpacing: "-0.02em", marginBottom: "3.5vh" }}
        >
          Deep Expertise Across Every Sector
        </h2>

        <div className="grid" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "2vh 2vw" }}>
          <div style={{ padding: "2.2vh 2vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "1.2vw" }}>
            <div style={{ width: "3.5vh", height: "3.5vh", borderRadius: "50%", background: "rgba(225,48,108,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
              </svg>
            </div>
            <div>
              <div className="font-display font-semibold text-white" style={{ fontSize: "1.5vw" }}>E-Commerce</div>
              <div className="font-body" style={{ fontSize: "1.25vw", color: "#9990b8" }}>D2C brands, marketplaces, retail</div>
            </div>
          </div>

          <div style={{ padding: "2.2vh 2vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "1.2vw" }}>
            <div style={{ width: "3.5vh", height: "3.5vh", borderRadius: "50%", background: "rgba(193,53,132,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C13584" strokeWidth="2" strokeLinecap="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div>
              <div className="font-display font-semibold text-white" style={{ fontSize: "1.5vw" }}>Healthcare</div>
              <div className="font-body" style={{ fontSize: "1.25vw", color: "#9990b8" }}>Hospitals, clinics, wellness brands</div>
            </div>
          </div>

          <div style={{ padding: "2.2vh 2vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "1.2vw" }}>
            <div style={{ width: "3.5vh", height: "3.5vh", borderRadius: "50%", background: "rgba(245,96,64,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F56040" strokeWidth="2" strokeLinecap="round">
                <rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>
              </svg>
            </div>
            <div>
              <div className="font-display font-semibold text-white" style={{ fontSize: "1.5vw" }}>Fintech</div>
              <div className="font-body" style={{ fontSize: "1.25vw", color: "#9990b8" }}>Banks, lending, insurance, payments</div>
            </div>
          </div>

          <div style={{ padding: "2.2vh 2vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "1.2vw" }}>
            <div style={{ width: "3.5vh", height: "3.5vh", borderRadius: "50%", background: "rgba(247,119,55,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#F77737" strokeWidth="2" strokeLinecap="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </div>
            <div>
              <div className="font-display font-semibold text-white" style={{ fontSize: "1.5vw" }}>Real Estate</div>
              <div className="font-body" style={{ fontSize: "1.25vw", color: "#9990b8" }}>Builders, brokers, property portals</div>
            </div>
          </div>

          <div style={{ padding: "2.2vh 2vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "1.2vw" }}>
            <div style={{ width: "3.5vh", height: "3.5vh", borderRadius: "50%", background: "rgba(252,175,69,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FCAF45" strokeWidth="2" strokeLinecap="round">
                <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
              </svg>
            </div>
            <div>
              <div className="font-display font-semibold text-white" style={{ fontSize: "1.5vw" }}>Education</div>
              <div className="font-body" style={{ fontSize: "1.25vw", color: "#9990b8" }}>EdTech, institutes, coaching brands</div>
            </div>
          </div>

          <div style={{ padding: "2.2vh 2vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", gap: "1.2vw" }}>
            <div style={{ width: "3.5vh", height: "3.5vh", borderRadius: "50%", background: "rgba(225,48,108,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><rect x="9" y="14" width="6" height="8"/>
              </svg>
            </div>
            <div>
              <div className="font-display font-semibold text-white" style={{ fontSize: "1.5vw" }}>Hospitality</div>
              <div className="font-body" style={{ fontSize: "1.25vw", color: "#9990b8" }}>Hotels, travel, F&amp;B, experiences</div>
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
