import { motion } from "framer-motion";

export default function SkillCard({
  category,
  skills,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      p-8
      backdrop-blur-md
      "
    >
      <h3 className="mb-6 text-2xl font-bold">
        {category}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
            rounded-full
            border
            border-blue-500/20
            bg-blue-500/10
            px-4
            py-2
            text-sm
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}