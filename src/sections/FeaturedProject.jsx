import { motion } from "framer-motion";

import SectionHeading from "../components/SectionHeading";

import {
  featuredProject,
} from "../data/projects";

import TechBadge from "../components/TechBadge";

export default function FeaturedProject() {
  return (
    <section className="px-6 py-20" id="products">
      <div className="mx-auto max-w-7xl">

        <SectionHeading
          subtitle="Flagship Product"
          title="LiveStrike"
        />

        <div
          className="
          grid
          gap-14
          lg:grid-cols-2
          "
        >
          {/* Mockup */}

          <motion.div
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <div
              className="
                rounded-[2rem]
                border
                border-white/10
                bg-[#111827]
                p-4
                shadow-2xl
              "
            >
              {/* Browser Header */}

              <div className="mb-4 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              {/* Screen */}

              <div
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                "
              >
                {featuredProject.image ? (
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="
                      max-h-[400px]
                      w-full
                      object-cover
                      object-center
                    "
                  />
                ) : (
                  <div
                    className="
                      flex
                      h-[400px]
                      items-center
                      justify-center
                      bg-gradient-to-br
                      from-blue-500/20
                      via-purple-500/10
                      to-cyan-500/20
                    "
                  >
                    <div className="text-center">
                      <h3 className="mb-2 text-3xl font-bold">
                        LiveStrike
                      </h3>

                      <p className="text-gray-400">
                        Real-Time Sports Scoring Platform
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{
              opacity: 0,
              x: 50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
          >
            <h3 className="mb-6 text-4xl font-bold">
              {featuredProject.subtitle}
            </h3>

            <p className="mb-8 leading-8 text-gray-400">
              {
                featuredProject.description
              }
            </p>

            <div className="mb-8 flex flex-wrap gap-3">
              {featuredProject.technologies.map(
                (tech) => (
                  <TechBadge
                    key={tech}
                    name={tech}
                  />
                )
              )}
            </div>

            <div className="mb-8 grid grid-cols-2 gap-4">
              {featuredProject.metrics.map(
                (metric) => (
                  <div
                    key={metric}
                    className="
                    rounded-2xl
                    border
                    border-white/10
                    p-4
                    "
                  >
                    {metric}
                  </div>
                )
              )}
            </div>

            <div className="flex gap-4">
              <a
                href={
                  featuredProject.website
                }
                target="_blank"
                className="
                rounded-xl
                bg-blue-600
                px-6
                py-3
                "
              >
                Visit Website
              </a>

              <a
                href={
                  featuredProject.github
                }
                className="
                rounded-xl
                border
                border-white/10
                px-6
                py-3
                "
              >
                View Code
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}