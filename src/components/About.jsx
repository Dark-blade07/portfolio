import { motion } from "framer-motion";

export default function About() {

  return (

    <section id="about" className="relative z-10 px-8 py-40">

      {/* Ambient Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-20 right-[10%] w-[350px] h-[350px] bg-cyan-500/10 blur-[180px] rounded-full" />

        <div className="absolute bottom-0 left-[5%] w-[400px] h-[400px] bg-violet-500/10 blur-[200px] rounded-full" />

      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div

          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}

          viewport={{ once: true, amount: 0.3 }}

          transition={{
            duration: 1,
            ease: "easeOut",
          }}

          className="relative"
        >

          {/* Card Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-violet-500/10 blur-3xl rounded-3xl" />

          {/* Main Card */}
          <div className="relative h-[500px] rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-3xl overflow-hidden flex items-center justify-center">

          <img
  src="/yourphoto.png"
  alt="Darshan" 
  className="w-full h-full object-cover brightness-90 contrast-110 saturate-125"
/>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div

          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}

          viewport={{ once: true, amount: 0.3 }}

          transition={{
            duration: 1,
            ease: "easeOut",
          }}

        >

          <p className="text-cyan-300 tracking-[0.3em] uppercase text-sm mb-5">
            About Me
          </p>

          <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            Creating immersive digital experiences.
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed mb-6">
            I’m Darshan, a third-year BTech student at Adi Shankara Institute of Engineering and Technology with a strong interest in technology, design, and creative digital experiences.

I enjoy building immersive websites, productivity tools, browser extensions, and experimenting with ideas that blend clean visuals with modern interaction design. I’m especially drawn to creating interfaces that feel smooth, intuitive, and visually engaging.

Most of my time goes into learning, exploring new technologies, and turning random ideas into projects that are both useful and creative.

          </p>

          <p className="text-zinc-500 leading-relaxed mb-10">
           I enjoy building clean and creative digital experiences with modern design and smooth interactions.
          </p>

          {/* Tech Stack */}
          <div className="flex gap-4 flex-wrap">

            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl">
              React
            </span>

            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl">
              Tailwind
            </span>

            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl">
              Framer Motion
            </span>

            <span className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-xl">
              UI/UX
            </span>

          </div>

        </motion.div>

      </div>

    </section>
  );
}   