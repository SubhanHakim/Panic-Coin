import { motion } from "motion/react";
import gambar1 from "../assets/gambar1.png";
import gambar2 from "../assets/gambar2.png";
import Tinker from "../components/Tinker";

function HeroSection() {
    return (
        <>
            <div className="lg:h-screen flex flex-col gap-16 px-8 lg:px-[100px] py-8">
                <div className="flex items-center gap-12 flex-col lg:flex-row">
                    {/* ================== TEXT SIDE ================== */}
                    <div className="flex-1 space-y-6 text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
                            <span className="block">HUMANITY IS</span>
                            <span className="block">$PANIC</span>
                            <span className="block">TOGETHER</span>
                        </h1>
                        <p className="max-w-xl mx-auto lg:mx-0 text-sm sm:text-base text-slate-300">
                            AI is taking over, systems are melting, and everyone’s losing control.
                            When the world panics, we moon.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                            <button className="btn rounded-full px-6 bg-primary text-white font-bold border border-blue-300 hover:brightness-110 hover:shadow-blue-300">
                                Buy $PANIC
                            </button>
                            <button className="btn rounded-full px-6 bg-transparent border border-primary text-primary hover:bg-primary hover:text-white">
                                View Chart
                            </button>
                            <button className="btn rounded-full px-6 bg-transparent border border-slate-600 text-slate-200 hover:bg-slate-800">
                                X Page
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="lg:hidden w-full flex justify-center">
                            <motion.div
                                animate={{ y: [0, -20, 0, 20, 0] }} 
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full max-w-xs"
                            >
                                <div className="absolute -inset-6 bg-[#1630a3]/30 blur-3xl opacity-70" />
                                <div className="relative rounded-[36px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9)]">
                                    <img
                                        src={gambar1}
                                        alt="Panic meme"
                                        className="w-full h-full object-cover rounded-[36px]"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* ---- DESKTOP: 2 kartu tumpuk ---- */}
                        <div className="hidden lg:block">
                            <div className="relative w-[380px] h-[460px]">
                                <motion.div
                                    animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.1, 1] }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="absolute -inset-8 bg-[#1630a3]/30 blur-3xl opacity-70"
                                />

                                {/* BACK CARD */}
                                <motion.div
                                    initial={{ opacity: 0, y: 60, rotate: -15 }}
                                    animate={{ opacity: 1, y: 20, rotate: -12 }}
                                    whileHover={{ scale: 1.05, rotate: -15 }}
                                    transition={{ duration: 0.9, ease: "easeOut" }}
                                    className="absolute top-16 -left-60 z-0 scale-90 rounded-[36px] overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.9)]"
                                >
                                    <img
                                        src={gambar2}
                                        alt="Panic meme back"
                                        className="w-[320px] h-[400px] object-cover rounded-[36px]"
                                    />
                                </motion.div>

                                {/* FRONT CARD */}
                                <motion.div
                                    initial={{ opacity: 0, y: 80, rotate: 10 }}
                                    animate={{ opacity: 1, y: 0, rotate: 8 }}
                                    transition={{ duration: 1.1, ease: "easeOut" }}
                                    whileHover={{ scale: 1.05, rotate: 10 }}
                                    className="absolute top-0 left-12 z-10 rounded-[36px] overflow-hidden shadow-[0_25px_90px_rgba(0,0,0,1)]"
                                >
                                    <img
                                        src={gambar1}
                                        alt="Panic meme front"
                                        className="w-[340px] h-[430px] object-cover rounded-[36px]"
                                    />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Tinker />
        </>
    );
}

export default HeroSection;
