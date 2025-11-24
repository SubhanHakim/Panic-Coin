import { motion } from "framer-motion";

const baseText = " $PANIC • $PANIC • $PANIC • $PANIC • $PANIC • ";

function Ticker() {
  return (
    <div className="overflow-hidden py-4 bg-blue-950 text-slate-200">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}         // jalan ke kiri setengah lebar
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap text-lg sm:text-xl lg:text-2xl xl:text-3xl font-extrabold tracking-[0.25em]"
        aria-hidden="true"
      >
        {[0, 1].map((i) => (
          <span key={i} className="mx-4">
            {baseText}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default Ticker;
