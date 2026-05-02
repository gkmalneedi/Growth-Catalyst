export default function Slide04Services() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #130f25 0%, #050505 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 80% 20%, rgba(247,119,55,0.06) 0%, transparent 50%), radial-gradient(ellipse at 10% 80%, rgba(193,53,132,0.06) 0%, transparent 50%)" }} />

      <div className="absolute top-0 left-0 right-0 h-[0.4vh]" style={{ background: "linear-gradient(90deg, #E1306C, #C13584, #F77737, #FCAF45)" }} />

      <div className="relative flex flex-col justify-center h-full px-[7vw]">
        <div className="mb-[1.5vh]">
          <span
            className="font-display font-semibold uppercase"
            style={{ fontSize: "1.2vw", letterSpacing: "0.3em", background: "linear-gradient(90deg, #E1306C, #F77737)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            What We Do
          </span>
        </div>

        <h2
          className="font-display font-bold text-white"
          style={{ fontSize: "3.8vw", letterSpacing: "-0.02em", marginBottom: "3vh" }}
        >
          Full-Stack Digital Marketing Services
        </h2>

        <div className="grid" style={{ gridTemplateColumns: "repeat(5, 1fr)", gap: "1.5vw" }}>
          <div style={{ padding: "2.5vh 1.8vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(225,48,108,0.18)" }}>
            <div style={{ width: "4vh", height: "4vh", borderRadius: "0.6vw", background: "rgba(225,48,108,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5vh" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E1306C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
            <div className="font-display font-semibold text-white" style={{ fontSize: "1.5vw", marginBottom: "0.8vh" }}>SEO</div>
            <div className="font-body" style={{ fontSize: "1.25vw", color: "#9990b8", lineHeight: 1.5 }}>Organic rank growth, authority building, and AI-led keyword strategy</div>
          </div>

          <div style={{ padding: "2.5vh 1.8vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(193,53,132,0.18)" }}>
            <div style={{ width: "4vh", height: "4vh", borderRadius: "0.6vw", background: "rgba(193,53,132,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5vh" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C13584" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.4 5.4 3.9 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </div>
            <div className="font-display font-semibold text-white" style={{ fontSize: "1.5vw", marginBottom: "0.8vh" }}>SMO</div>
            <div className="font-body" style={{ fontSize: "1.25vw", color: "#9990b8", lineHeight: 1.5 }}>Social media growth, community building, and viral content strategy</div>
          </div>

          <div style={{ padding: "2.5vh 1.8vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(247,96,64,0.18)" }}>
            <div style={{ width: "4vh", height: "4vh", borderRadius: "0.6vw", background: "rgba(247,96,64,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5vh" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F56040" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
              </svg>
            </div>
            <div className="font-display font-semibold text-white" style={{ fontSize: "1.5vw", marginBottom: "0.8vh" }}>Content</div>
            <div className="font-body" style={{ fontSize: "1.25vw", color: "#9990b8", lineHeight: 1.5 }}>AI-assisted content that converts — blogs, videos, and brand storytelling</div>
          </div>

          <div style={{ padding: "2.5vh 1.8vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(247,119,55,0.18)" }}>
            <div style={{ width: "4vh", height: "4vh", borderRadius: "0.6vw", background: "rgba(247,119,55,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5vh" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F77737" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </div>
            <div className="font-display font-semibold text-white" style={{ fontSize: "1.5vw", marginBottom: "0.8vh" }}>Branding</div>
            <div className="font-body" style={{ fontSize: "1.25vw", color: "#9990b8", lineHeight: 1.5 }}>Identity systems, brand voice, and visual design that commands attention</div>
          </div>

          <div style={{ padding: "2.5vh 1.8vw", borderRadius: "0.8vw", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(252,175,69,0.18)" }}>
            <div style={{ width: "4vh", height: "4vh", borderRadius: "0.6vw", background: "rgba(252,175,69,0.12)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5vh" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FCAF45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <div className="font-display font-semibold text-white" style={{ fontSize: "1.5vw", marginBottom: "0.8vh" }}>Automation</div>
            <div className="font-body" style={{ fontSize: "1.25vw", color: "#9990b8", lineHeight: 1.5 }}>AI agents, CRM flows, and performance loops that run 24/7</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[4vh] left-[7vw]">
        <span className="font-body" style={{ fontSize: "1.2vw", color: "#9990b8" }}>MAI — Marketing AIgency</span>
      </div>
    </div>
  );
}
