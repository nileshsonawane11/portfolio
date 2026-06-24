import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      bg-[#050816]
      "
    >
      <motion.h1
        animate={{
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="
        text-5xl
        font-bold
        "
      >
        Nilesh.
      </motion.h1>
    </motion.div>
  );
}