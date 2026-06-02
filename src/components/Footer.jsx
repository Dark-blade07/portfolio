import { motion } from "framer-motion";

export default function Footer() {

  return (

    <footer className="relative z-10 px-8 pb-10 pt-20">

      {/* Top Border Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />

      <motion.div

        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true }}

        transition={{
          duration: 1,
          ease: "easeOut",
        }}

        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >

        {/* Left */}
        <div>

          <h1 className="text-2xl font-bold tracking-tight">
            DARSHAN P
          </h1>

          <p className="text-zinc-500 mt-2">
            Currently building immersive web experiences and creative productivity tools.

          </p>

        </div>

        {/* Center */}
        <div className="flex gap-6 text-zinc-400">

          <a
            href="#home"
            className="hover:text-white transition-colors duration-300"
          >
            Home
          </a>

          <a
            href="#about"
            className="hover:text-white transition-colors duration-300"
          >
            About
          </a>

          <a
            href="#projects"
            className="hover:text-white transition-colors duration-300"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </a>

        </div>

        {/* Right */}
        <div className="text-zinc-600 text-sm">
          © 2026 Darshan P
        </div>

      </motion.div>

    </footer>
  );
}