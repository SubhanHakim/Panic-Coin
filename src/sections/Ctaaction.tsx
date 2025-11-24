import panicBot from "../assets/gambar5.png";

export default function PanicBanner() {
  return (
    <div className="w-full flex flex-col items-center gap-10 min-h-screen justify-center px-4 py-10">
      {/* TITLE */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-extrabold text-center">
        Join The PANIC Cult!
      </h2>

      {/* MAIN CARD */}
      <div className="w-full max-w-6xl bg-linear-to-r from-slate-900 via-indigo-900 to-cyan-500 rounded-3xl p-[3px] shadow-lg">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 bg-[#041426] rounded-[28px] px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8">
          {/* LEFT: IMAGE */}
          <div className="w-full md:w-[40%] flex justify-center">
            <div className="flex items-center justify-center overflow-hidden">
              <img
                src={panicBot}
                alt="$PANIC mascot"
                className="w-full max-w-[220px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[380px] h-auto object-contain"
              />
            </div>
          </div>

          {/* RIGHT: TEXT + BUTTON */}
          <div className="flex-1 flex flex-col gap-6 md:gap-8">
            <div className="flex flex-col gap-3 text-center md:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wider text-slate-100">
                $PANIC
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white font-semibold">
                You&apos;re not PANIC enough!
              </p>
            </div>

            <div className="flex justify-center md:justify-start">
              <button className="btn btn-primary py-2 px-6 rounded-full">
                <a href="">Buy $PANIC</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BUTTONS */}
      <div className="w-full max-w-4xl flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-between px-0 sm:px-4 lg:px-0">
        <button className="btn rounded-full px-6 bg-transparent border border-slate-600 text-slate-200 hover:bg-slate-800">
          X Page
        </button>

        <button
          className="btn rounded-full px-6 bg-transparent border border-slate-600 text-slate-200 hover:bg-slate-800"
          aria-label="Back to top"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          Back to Top
        </button>
      </div>
    </div>
  );
}
