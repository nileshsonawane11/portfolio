import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import { useState } from "react";

import {
  projects,
} from "../data/projects";

export default function Projects() {

  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    ...new Set(projects.map((project) => project.category).filter((category) => (category != null && category != ''))),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="Portfolio"
          title="Other Projects"
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {(filters.length > 1) && (filters.map((filter, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveFilter(filter)}
              className={`
                rounded-full
                px-5
                py-2
                text-sm
                transition-all
                duration-300
                ${
                  activeFilter === filter
                    ? "bg-blue-600 text-white"
                    : "border border-white/10 bg-white/5 hover:bg-white/10"
                }
              `}
            >
              {filter}
            </button>
          )))}
        </div>

        <div
          className="
          grid
          gap-8
          md:grid-cols-2
          lg:grid-cols-3
          "
        >
          {filteredProjects.map(
            (project, idx) => (
              <ProjectCard key={idx}
                key={project.title}
                project={project}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}