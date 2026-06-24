import SectionHeading from "../components/SectionHeading";
import educationData from "../data/education"

export default function Education() {
  return (
    <section className="px-6 py-32">

      <SectionHeading
          subtitle="Academics"
          title="Education"
        />

      <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-1">

        {educationData.map((education, idx)=>(
          <div key={idx}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-10
            "
          >
            <h3 className="text-3xl font-bold">
              {education.intitute}
            </h3>

            <p className="mt-2 text-blue-400">
              {education.course}
            </p>

            <p className="mt-4 text-gray-400">
              {education.start_date} – {education.end_date}
            </p>

            <p className="mt-4 text-xl">
              Academic Score: {education.score}%
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}