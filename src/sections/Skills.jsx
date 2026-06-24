import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";

import {
  skillCategories,
} from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="Technologies"
          title="Skills & Tools"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map(
            (category) => (
              <SkillCard
                key={category.title}
                category={category.title}
                skills={category.skills}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}