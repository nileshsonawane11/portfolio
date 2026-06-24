import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="
      fixed
      left-0
      top-0
      z-[999]
      h-1
      w-full
      origin-left
      bg-gradient-to-r
      from-blue-500
      via-cyan-500
      to-purple-500
      "
      style={{
        scaleX: scrollYProgress,
      }}
    />
  );
}