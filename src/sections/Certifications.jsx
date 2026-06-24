import SectionHeading from "../components/SectionHeading";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section className="px-6 py-20">

      <div className="mx-auto max-w-6xl">

        <SectionHeading
          subtitle="Learning"
          title="Certifications"
        />

        <div className="grid gap-6 md:grid-cols-2">

          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              "
            >
              <h3 className="text-xl font-bold">
                {cert.title}
              </h3>

              <p className="mt-2 text-blue-400">
                {cert.issuer}
              </p>

              <p className="mt-2 text-gray-400">
                {cert.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}