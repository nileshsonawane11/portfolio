import { motion } from "framer-motion";
import TechBadge from "./TechBadge";
import { img } from "framer-motion/client";

export default function ProjectCard({
  project,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
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
      <div className="mb-6 max-h-48 overflow-hidden rounded-2xl">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            className="
              h-full
              w-full
              bg-gradient-to-br
              from-blue-500/20
              to-purple-500/20
            "
          />
        )}
      </div>

      <h3 className="mb-4 text-2xl font-bold">
        {project.title}
      </h3>

      <p className="mb-1 text-gray-400">
        {project.description}
      </p>

      <p className="mb-6 text-gray-400">
        <span className="font-bold text-gray-300">Role: </span>
        {project.role}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <TechBadge
            key={item}
            name={item}
          />
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          className="
          rounded-xl
          border
          border-white/10
          px-4
          py-2
          "
        >
          GitHub
        </a>

        <a
          href={project.live}
          className="
          rounded-xl
          bg-blue-600
          px-4
          py-2
          "
        >
          Demo
        </a>
      </div>
    </motion.div>
  );
}