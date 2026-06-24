import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPhp, FaReact, FaNodeJs, FaLaravel, FaInstagram } from "react-icons/fa";
import VoiceIntro from "../components/VoiceIntro";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      className="
      pt-20
      md:pt-0
      relative
      flex
      flex-wrap
      min-h-screen
      items-center
      overflow- 
      px-4
      sm:px-6
      lg:px-8
      "
    >
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-blue-500/10
        via-transparent
        to-purple-500/10
        "
      />

      <div
      className="
        relative
        mx-auto
        grid
        items-center
        justify-center
        gap:2
        md:gap-12
        min-w-75
        text-center
        lg:text-left
        lg:grid-cols-2
        "
      >
        {/* LEFT CONTENT */}

        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-4 text-blue-400"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.2,
            }}
            className="
              mb-4
              font-bold
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
              whitespace-wrap
              "
          >
            Nilesh
            <span className="text-blue-500"> Sonawane</span>
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1500,
              "Backend Developer",
              1500,
              "Co-Founder @ LiveStrike",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
            className="
              text-lg
              sm:text-xl
              md:text-2xl
              text-gray-300
            "
          />

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{delay:0.5}}
            className="
            my-6
            flex
            flex-wrap
            gap-3
            justify-center
            lg:justify-start
          ">
            <span className="rounded-full border border-white/10 px-3 py-1">
              PHP
            </span>

            <span className="rounded-full border border-white/10 px-3 py-1">
              JavaScript
            </span>

            <span className="rounded-full border border-white/10 px-3 py-1">
              Node.js
            </span>

            <span className="rounded-full border border-white/10 px-3 py-1">
              MySQL
            </span>

            <span className="rounded-full border border-white/10 px-3 py-1">
              WebSockets
            </span>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
            }}
            className="
            max-w-xl
            mx-auto
            lg:mx-0
            text-base
            md:text-lg
            text-gray-400
            "
          >
            Building real-time sports platforms, scalable backend systems, and
            modern web applications using PHP, JavaScript, Node.js, MySQL, and
            WebSockets.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
            }} 
          className=" 
          mt-10
          flex
          flex-col
          sm:flex-row
          gap-4
          justify-center
          lg:justify-start
          ">
            <a
              href="#projects"
              className="
              rounded-xl
              bg-blue-600
              px-6
              py-3
              font-medium
              "
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="
              rounded-xl
              border
              border-white/20
              px-6
              py-3
              "
            >
              Download Resume
            </a>
              <VoiceIntro />
          </motion.div>

          <motion.div 
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
            }}
          className="
          mt-8
          flex
          gap-5
          justify-center
          lg:justify-start
          text-3xl
          ">
            <a href="https://github.com/yourusername" target="_blank">
              <FaGithub />
            </a>

            <a href="https://linkedin.com/in/sonawane-nilesh" target="_blank">
              <FaLinkedin />
            </a>

            <a href="https://www.instagram.com/nileshksonawane_?igsh=MWdtYWQ1aGFyNXc3" target="_blank">
              <FaInstagram />
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          relative
          flex
          items-center
          justify-center
          "
        >

          {/* Floating Icons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 0,
            }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 0.8,
              },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
            absolute
            left-4
            md:left-10
            top-24
            md:top-60
            z-20
            rounded-xl
            text-4xl
            border
            border-white/10
            bg-black/40
            px-2
            py-1
            md:px-4
            md:py-2
            backdrop-blur-md
            "
          >
            <FaPhp />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 0,
            }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 0.8,
              },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
            absolute
            right-0
            top-10
            md:top-40
            z-20
            text-4xl
            rounded-xl
            border
            border-white/10
            bg-black/40
            px-2
            py-1
            md:px-4
            md:py-2
            backdrop-blur-md
            "
          >
            <FaReact />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 0,
            }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 0.8,
              },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
            absolute
            bottom-20
            md:bottom-40
            left-0
            z-20
            rounded-xl
            text-4xl
            border
            border-white/10
            bg-black/40
            px-2
            py-1
            md:px-4
            md:py-2
            backdrop-blur-md
            "
          >
            <FaLaravel />
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 0,
            }}
            animate={{
              opacity: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: {
                duration: 0.8,
                delay: 0.8,
              },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="
            absolute
            bottom-24
            md:bottom-50
            right-0
            rounded-xl
            text-4xl
            border
            z-20
            border-white/10
            bg-black/40
            px-2
            py-1
            md:px-4
            md:py-2
            backdrop-blur-md
            "
          >
            <FaNodeJs />
          </motion.div>

          {/* Availability Badge */}

          {/* <motion.div
            initial={{
              opacity:0
            }}
            animate={{
              opacity:1,
              y: [0, -8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay:0.5
            }}
            className="
            absolute
            top-18
            z-20
            rounded-full
            border
            border-green-500/20
            bg-green-500/10
            px-5
            py-2
            text-sm
            text-green-400
            backdrop-blur-md
            "
          >
            🟢 Open to Opportunities
          </motion.div> */}

          {/* Gradient Ring */}

          <div
            className="
            relative
            "
          >
            <img
              src="/profile1.png"
              alt="Nilesh Sonawane"
              className="
              object-cover
              h-[600px]
              sm:h-[600px]
              md:h-[600px]
              lg:h-[750px]
              xl:h-[750px]
              w-auto
              "
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
