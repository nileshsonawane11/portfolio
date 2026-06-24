import { motion } from "framer-motion";

export default function StatCard({
  value,
  label,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-6
      backdrop-blur-md
      "
    >
      <h3 className="text-4xl font-bold text-blue-400">
        {value}
      </h3>

      <p className="mt-2 text-gray-400">
        {label}
      </p>
    </motion.div>
  );
}