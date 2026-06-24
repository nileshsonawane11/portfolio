import { motion } from "framer-motion";

export default function SectionHeading({
  subtitle,
  title,
}) {
  return (
    <div className="mb-14 text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-2 text-blue-400 uppercase tracking-[4px]"
      >
        {subtitle}
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold md:text-5xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}