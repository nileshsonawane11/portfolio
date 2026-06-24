import { motion } from "framer-motion";

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <motion.div
        animate={{
          x: [0, 150, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="
        absolute
        left-20
        top-20
        h-72
        w-72
        rounded-full
        bg-blue-500/20
        blur-3xl
        "
      />

      <motion.div
        animate={{
          x: [0, -150, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
        }}
        className="
        absolute
        bottom-20
        right-20
        h-72
        w-72
        rounded-full
        bg-purple-500/20
        blur-3xl
        "
      />
    </div>
  );
}