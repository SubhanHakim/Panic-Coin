import { motion, useReducedMotion } from 'framer-motion'
import gambar3 from "../assets/gambar3.png"

function AboutSection() {
    const prefersReduced = useReducedMotion()

    return (
        <div className='lg:m-28 px-4 sm:px-6 lg:px-[100px] py-12'>
            <div className='flex flex-col items-center'>
                <div className='text-5xl text-center lg:text-6xl font-extrabold'>
                    What is $PANIC?
                </div>
                <div className='flex flex-col lg:flex-row items-center gap-12 mt-8'>
                    <div className="w-[350px] h-[350px] rounded-[36px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.9)] shrink-0">
                        <motion.div
                            initial={{ opacity: 0, y: 80, rotate: 10 }}
                            animate={
                                prefersReduced
                                    ? { opacity: 1, y: 0, rotate: 6 }
                                    : { opacity: 1, y: [0, -8, 0], rotate: [6, 2, 6] }
                            }
                            transition={
                                prefersReduced
                                    ? { duration: 1.1, ease: "easeOut" }
                                    : {
                                        opacity: { duration: 1.1, ease: "easeOut" },
                                        y: { duration: 3, repeat: Infinity, repeatType: "loop", ease: "easeInOut" },
                                        rotate: { duration: 6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
                                    }
                            }
                            whileHover={{ scale: 1.03 }}
                            className="w-full h-full origin-center will-change-transform"
                        >
                            <img
                                src={gambar3}
                                alt="Panic meme front"
                                width={350} height={430}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className='max-w-2xl text-lg leading-relaxed'>
                            $PANIC is a global meme coin born from the chaos of the AI era — where systems fail, emotions overload, and humanity collectively freaks out. Instead of running away from panic, we turn it into power.
                            $PANIC is not just a coin — it’s a movement.
                            We transform collective panic into collective strength, using culture, memes, and community to turn fear into fuel.
                        </h2>
                        <div className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed">
                            <h3 className="text-xl sm:text-2xl font-bold mb-3">The PANIC Movement</h3>
                            <ul className="list-disc list-inside space-y-3 text-base sm:text-lg text-slate-200 marker:text-cyan-400">
                                <li>Transforming panic into power — embracing uncertainty and turning it into energy, creativity, and momentum.</li>
                                <li>Building a real community of creators, traders, meme lords, and AI enthusiasts who live and breathe internet culture.</li>
                                <li>Proving that community is stronger than fake roadmaps and empty promises — no insiders, no empty hype, just people who choose to panic together.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection