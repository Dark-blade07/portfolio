
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("home");
  useEffect(() => {

  const handleScroll = () => {

    const sections = ["home", "about", "projects", "contact"];

    for (const section of sections) {

      const element = document.getElementById(section);

      if (element) {

        const rect = element.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(section);
        }
      }
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };

}, []);
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-4 sm:gap-8 px-5 sm:px-8 py-3 sm:py-4 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl select-none">

{["Home", "About", "Projects", "Contact"].map((link) => (
  <a
    key={link}
    onClick={(e) => {
  e.preventDefault();

  const section = document.getElementById(link.toLowerCase());

  section?.scrollIntoView({
    behavior: "smooth",
  });
}}
    className={`relative transition-colors duration-300 group ${
  active === link.toLowerCase()
    ? "text-white"
    : "text-zinc-400 hover:text-white"
}`}
  >
    {link}

<span
  className={`absolute left-0 -bottom-2 h-[2px] bg-cyan-400 transition-all duration-300 ${
    active === link.toLowerCase()
      ? "w-full"
      : "w-0 group-hover:w-full"
  }`}
/>  </a>
))}

      </div>
    </motion.nav>
  );
}

