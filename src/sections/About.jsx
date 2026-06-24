import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import StatCard from "../components/StatCard";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="Introduction"
          title="About Me"
        />

        <div className="mx-auto max-w-4xl">

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true }}
            className="flex flex-col text-center justify-center"
          >
            <h3 className="mb-6 text-3xl font-bold">
              Full Stack Developer &
              Startup Builder
            </h3>

            <p className="mb-6 leading-8 text-gray-400">
              I'm Nilesh Sonawane, a Full Stack Developer with 2+ years of experience in web development and the Co-Founder of LiveStrike, a real-time sports scoring and tournament management platform. I specialize in building scalable web applications, backend systems, and real-time solutions using PHP, Laravel, JavaScript, Node.js, Express.js, MySQL, MongoDB, Docker, and modern web technologies.
            </p>

            <p className="leading-8 text-gray-400">
              I recently completed my Diploma in Information Technology from Government Polytechnic Nashik with an academic score of 94.61%. Passionate about solving real-world problems through technology, I am actively seeking opportunities in Software Engineering, Backend Development, and Full Stack Development.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            value="94.61%"
            label="Current Academic Score"
          />

          <StatCard
            value="1"
            label="Startup Founded"
          />

          <StatCard
            value="10+"
            label="Technologies"
          />

          <StatCard
            value="2+"
            label="Major Projects"
          />
        </div>
      </div>
    </section>
  );
}