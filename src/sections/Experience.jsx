import SectionHeading from "../components/SectionHeading";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section className="px-6 py-20" id="experience">
      <div className="mx-auto max-w-5xl">

        <SectionHeading
          subtitle="Journey"
          title="Experience Timeline"
        />

        <div className="relative">

          <div
            className="
            absolute
            left-4
            top-0
            h-full
            w-[2px]
            bg-blue-500
            "
          />

          {experiences.map((item) => (
            <div
              key={item.year}
              className="
              relative
              mb-12
              pl-16
              "
            >
              <div
                className="
                absolute
                left-0
                top-2
                h-8
                w-8
                rounded-full
                bg-blue-500
                "
              />

              <h3 className="text-2xl font-bold">
                {item.title}
              </h3>

              <p className="mb-2 text-blue-400">
                {item.year}
              </p>

              <p className="text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}