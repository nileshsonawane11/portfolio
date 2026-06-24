import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "About",
      href: "#about",
    },

    {
      label: "Skills",
      href: "#skills",
    },

    {
      label: "Experience ",
      href: "#experience ",
    },

    {
      label: "Projects",
      href: "#products",
    },

    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <>
      <nav
        className="
        fixed
        top-0
        z-50
        w-full
        border-b
        border-white/10
        bg-black/20
        backdrop-blur-xl
        "
      >
        <div
          className="
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          px-6
          py-4
          "
        >
          <h2 className="text-xl font-bold">
            Nilesh
            <span className="text-blue-500">
              .
            </span>
          </h2>

          <ul className="hidden gap-8 md:flex">
            {links.map((item) => (
              <li key={item.label}>
                <a href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() =>
              setOpen(!open)
            }
            className="text-3xl md:hidden"
          >
            {open ? (
              <HiX />
            ) : (
              <HiMenuAlt3 />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="
            fixed
            inset-0
            z-40
            bg-black/95
            "
          >
            <div
              className="
              flex
              h-full
              flex-col
              items-center
              justify-center
              gap-8
              text-3xl
              "
            >
              {links.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() =>
                    setOpen(false)
                  }
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}