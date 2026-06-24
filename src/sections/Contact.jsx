import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SectionHeading from "../components/SectionHeading";

export default function Contact() {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully 🚀");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-6 py-20"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          subtitle="Contact"
          title="Let's Work Together"
        />

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="
          space-y-6
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-10
          backdrop-blur-md
          "
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-black/30
            p-4
            outline-none
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-black/30
            p-4
            outline-none
            "
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="
            w-full
            rounded-xl
            border
            border-white/10
            bg-black/30
            p-4
            outline-none
            "
          />

          <button
            disabled={loading}
            className="
            rounded-xl
            bg-blue-600
            px-8
            py-3
            font-medium
            transition
            hover:bg-blue-700
            disabled:opacity-50
            "
          >
            {loading
              ? "Sending..."
              : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}