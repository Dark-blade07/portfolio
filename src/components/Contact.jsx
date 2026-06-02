import { motion } from "framer-motion";

export default function Contact() {

  return (

    <section
      id="contact"
      className="relative overflow-hidden px-8 py-40"
    >

      {/* Ambient Glow */}
      <div className="absolute inset-0 -z-10">

  <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

  <div className="absolute bottom-0 right-[10%] w-[600px] h-[600px] bg-violet-500/10 blur-[160px] rounded-full" />

</div>

      <motion.div

        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}

        viewport={{ once: true, amount: 0.3 }}

        transition={{
          duration: 1,
          ease: "easeOut",
        }}

        className="max-w-4xl mx-auto text-center relative"
      >

        <p className="text-cyan-300 tracking-[0.3em] uppercase text-sm mb-5">
          Contact
        </p>

        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Let’s create something meaningful.

        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
          I’m always open to connecting, collaborating, or working on creative ideas, interesting projects, and meaningful digital experiences.

        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=darshan7000000@gmail.com"
target="_blank"
rel="noopener noreferrer"
            className="relative z-20 px-8 py-4 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-2xl hover:bg-white/[0.08] transition-all duration-500 hover:scale-105"
          >
            Email Me
          </a>

          <a
           href="https://github.com/Dark-blade07"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 px-8 py-4 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-2xl hover:bg-white/[0.08] transition-all duration-500 hover:scale-105"
          >
            GitHub
          </a>

          <a
  href="https://www.linkedin.com/in/darshan-p-88567b332"
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-20 px-8 py-4 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-2xl hover:bg-white/[0.08] transition-all duration-500 hover:scale-105"
>
  LinkedIn
</a>
<a
  href="https://www.instagram.com/_.dachu._nlr/"
  target="_blank"
  rel="noopener noreferrer"
  className="relative z-20 px-8 py-4 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-2xl hover:bg-white/[0.08] transition-all duration-500 hover:scale-105"
>
  Instagram
</a>

        </div>

      </motion.div>

    </section>
  );
}