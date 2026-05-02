export default function Slide05Stats() {
  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: "linear-gradient(135deg, #130f25 0%, #050505 100%)" }}>
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(193,53,132,0.08) 0%, transparent 60%)" }} />

      <div className="absolute top-0 left-0 right-0 h-[0.4vh]" style={{ background: "linear-gradient(90deg, #E1306C, #C13584, #F77737, #FCAF45)" }} />

      <div className="relative flex flex-col justify-center items-center h-full px-[7vw] text-center">
        <div className="mb-[2vh]">
          <span
            className="font-display font-semibold uppercase"
            style={{ fontSize: "1.2vw", letterSpacing: "0.3em", background: "linear-gradient(90deg, #E1306C, #F77737)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
          >
            Our Impact
          </span>
        </div>

        <h2
          className="font-display font-bold text-white"
          style={{ fontSize: "4vw", letterSpacing: "-0.02em", marginBottom: "5vh" }}
        >
          Numbers That Define Excellence
        </h2>

        <div className="flex gap-[0vw] w-full" style={{ maxWidth: "86vw" }}>
          <div className="flex-1 flex flex-col items-center" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
            <div
              className="font-display font-bold"
              style={{ fontSize: "9vw", lineHeight: 1, background: "linear-gradient(135deg, #E1306C, #C13584)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              12+
            </div>
            <div className="font-display font-semibold text-white mt-[1vh]" style={{ fontSize: "1.6vw" }}>Years</div>
            <div className="font-body" style={{ fontSize: "1.3vw", color: "#9990b8", marginTop: "0.5vh" }}>Industry Experience</div>
          </div>

          <div className="flex-1 flex flex-col items-center" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
            <div
              className="font-display font-bold"
              style={{ fontSize: "9vw", lineHeight: 1, background: "linear-gradient(135deg, #C13584, #F56040)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              68+
            </div>
            <div className="font-display font-semibold text-white mt-[1vh]" style={{ fontSize: "1.6vw" }}>Specialists</div>
            <div className="font-body" style={{ fontSize: "1.3vw", color: "#9990b8", marginTop: "0.5vh" }}>Expert Team Members</div>
          </div>

          <div className="flex-1 flex flex-col items-center" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
            <div
              className="font-display font-bold"
              style={{ fontSize: "9vw", lineHeight: 1, background: "linear-gradient(135deg, #F56040, #F77737)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              200+
            </div>
            <div className="font-display font-semibold text-white mt-[1vh]" style={{ fontSize: "1.6vw" }}>Clients</div>
            <div className="font-body" style={{ fontSize: "1.3vw", color: "#9990b8", marginTop: "0.5vh" }}>Brands We've Grown</div>
          </div>

          <div className="flex-1 flex flex-col items-center" style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}>
            <div
              className="font-display font-bold"
              style={{ fontSize: "9vw", lineHeight: 1, background: "linear-gradient(135deg, #F77737, #FCAF45)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              500+
            </div>
            <div className="font-display font-semibold text-white mt-[1vh]" style={{ fontSize: "1.6vw" }}>Campaigns</div>
            <div className="font-body" style={{ fontSize: "1.3vw", color: "#9990b8", marginTop: "0.5vh" }}>Successfully Launched</div>
          </div>

          <div className="flex-1 flex flex-col items-center">
            <div
              className="font-display font-bold"
              style={{ fontSize: "9vw", lineHeight: 1, background: "linear-gradient(135deg, #FCAF45, #E1306C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            >
              300%
            </div>
            <div className="font-display font-semibold text-white mt-[1vh]" style={{ fontSize: "1.6vw" }}>Avg ROI</div>
            <div className="font-body" style={{ fontSize: "1.3vw", color: "#9990b8", marginTop: "0.5vh" }}>Delivered to Clients</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[4vh] left-[7vw]">
        <span className="font-body" style={{ fontSize: "1.2vw", color: "#9990b8" }}>MAI — Marketing AIgency</span>
      </div>
    </div>
  );
}
