import { motion, useReducedMotion } from 'framer-motion'
import gambar3 from "../assets/gambar3.png"

function AboutSection() {
    const prefersReduced = useReducedMotion()

    return (
        <div className='m-28 px-[100px] h-screen'>
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

                    <div className="max-w-2xl text-lg leading-relaxed">
                        $PANIC is a global meme coin born from the chaos of the AI era — where systems fail, emotions overload, and humanity collectively freaks out. Instead of running away from panic, we turn it into power.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection