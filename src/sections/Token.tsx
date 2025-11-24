import CopyAddressPump from "../components/CopyAddressPump"
import panicBot from "../assets/removeGambar4.png"
import { motion } from "motion/react"

function Token() {
  return (
    <>
      <div className='flex flex-col items-center gap-6'>
        <div className="md:px-10 flex items-center flex-col gap-6">
          <div className='w-fit bg-linear-270 from-blue-950 to-blue-700 text-white p-4 rounded-full text-center text-md font-extrabold'>
            Token Features
          </div>
          <h2 className="text-6xl uppercase font-extrabold text-center">Powered by Community <br />
            Built on Trust</h2>
          <p className="w-full lg:max-w-3xl textarea-md lg:text-lg leading-relaxed text-center">$PANIC was launched with pure chaos, transparency, and zero developer control. No team allocation. No hidden bags. Just a 100% fair launch powered by the panic of the people — where the community decides the future.</p>
          <CopyAddressPump address="C2omcumatestajawebnya" />
        </div>
        <div className="w-full min-h-screen bg-black flex items-center justify-center">
          <motion.div
            animate={{ y: [0, -40, 0, 40, 0] }}
            transition={{
              duration: 10,       
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-full max-w-3xl px-4"
          >
            <img
              src={panicBot}
              alt="$PANIC CPU meltdown"
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Token