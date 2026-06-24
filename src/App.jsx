import Navbar from "./components/Navbar";
import { Helmet } from "react-helmet-async";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import FeaturedProject from "./sections/FeaturedProject";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import BackgroundEffects from "./components/BackgroundEffects";
import ScrollProgress from "./components/ScrollProgress";
import CursorGlow from "./components/CursorGlow";
import { Analytics } from "@vercel/analytics/next"

import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="relative">
      <Helmet>
        <title>
          Nilesh Sonawane | Full Stack Developer
        </title>

        <meta
          name="description"
          content="
          Full Stack Developer,
          PHP Developer,
          Backend Developer,
          Co-Founder of LiveStrike
          "
        />
      </Helmet>

      <CursorGlow />

      <BackgroundEffects />

      <ScrollProgress />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <FeaturedProject />

      <Projects />

      <Experience />

      <Education />

      <Certifications />

      <Contact />

      <Footer />
    </main>
  );
}