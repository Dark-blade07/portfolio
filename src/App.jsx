
  import { motion, useScroll, useTransform } from "framer-motion";
  import Navbar from "./components/Navbar.jsx";
  import ParticlesBackground from "./components/ParticlesBackground.jsx";
  import MouseGlow from "./components/MouseGlow.jsx";
  import About from "./components/About";
  import SmoothScroll from "./components/SmoothScroll";
  import Contact from "./components/Contact";
  import CursorRing from "./components/CursorRing";
  import Footer from "./components/Footer";
  import NoiseOverlay from "./components/NoiseOverlay";
  import Loader from "./components/Loader";
  import FloatingOrbs from "./components/FloatingOrbs";

  export default function App() {
    const { scrollY } = useScroll();

    const heroY = useTransform(scrollY, [0, 1000], [0, 300]);

    const glowY = useTransform(scrollY, [0, 1000], [0, 200]);
    return (
      <main className="min-h-[85vh] bg-black text-white overflow-hidden relative">
        <Loader />
        <SmoothScroll />
        <NoiseOverlay />
        <FloatingOrbs />
        <ParticlesBackground />
        <MouseGlow />
        <CursorRing />
        <Navbar />

        <div className="pointer-events-none fixed inset-0 z-[4]">

  {/* Top vignette */}
  <div className="absolute top-0 left-0 w-full h-[25vh] bg-gradient-to-b from-black/40 to-transparent" />

  {/* Bottom vignette */}
  <div className="absolute bottom-0 left-0 w-full h-[25vh] bg-gradient-to-t from-black/50 to-transparent" />

  {/* Side shadows */}
  <div className="absolute left-0 top-0 w-[12vw] h-full bg-gradient-to-r from-black/30 to-transparent" />

  <div className="absolute right-0 top-0 w-[12vw] h-full bg-gradient-to-l from-black/30 to-transparent" />

</div>

        {/* Background Gradient */}
        {/* Cinematic Mesh Background */}
  <div className="absolute inset-0 z-[1] overflow-hidden">

    <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[140px]" />

    <div className="absolute bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-violet-500/10 rounded-full blur-[160px]" />

    <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />

  </div>
  <div className="absolute inset-0 z-[1] opacity-[0.06]">

    <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:80px_80px]" />

  </div>

        {/* Glow Effect */}
        <motion.div
  style={{ y: glowY }}
  className="absolute inset-0 flex items-center justify-center z-[3]"
>

    <div className="w-[900px] h-[500px] bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-blue-500/10 blur-[140px] rounded-full" />

  </motion.div>

        {/* Hero Section */}
        <motion.section
        id="home"
  style={{ y: heroY }}
  className="relative min-h-screen flex items-center justify-center px-6 z-10"
>
  <motion.div
  

  animate={{
  y: [0, -40, 0],
  x: [0, 30, 0],
  scale: [1, 1.08, 1],
  rotate: [0, 8, 0],
}}

 transition={{
  duration: 12,
  repeat: Infinity,
  ease: "easeInOut",
}}

  className="
  absolute
  w-[420px]
  h-[420px]
  rounded-full
bg-gradient-to-br from-cyan-400/30 via-blue-500/20 to-violet-500/25  blur-[90px]
  z-0
  top-[22%] left-[38%]
  "
/>



          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-center"
          >

            <motion.h1
              initial={{ letterSpacing: "0.5em", opacity: 0 }}
              animate={{ letterSpacing: "0.05em", opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight"
            >
              DARSHAN P
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-6 text-zinc-500 text-base sm:text-lg md:text-2xl"
            >
              Student • Tech Explorer • Building Cool Stuff

            </motion.p>

            <motion.a
  href="#projects"

  whileHover={{
  scale: 1.08,
  y: -2,
  boxShadow: "0 0 30px rgba(255,255,255,0.18)",
}}
  whileTap={{ scale: 0.95 }}

  className="inline-block mt-10 px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:bg-white/[0.08]"
>

  View My Work

</motion.a>



          </motion.div> 

        </motion.section>

        
        <About />
        
          {/* Projects Section */}
<section id="projects" className="relative z-10 px-8 pt-40 pb-32">
                {/* Ambient Background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">

    <div className="absolute top-20 left-[10%] w-[350px] h-[350px] bg-cyan-500/10 blur-[160px] rounded-full" />

    <div className="absolute bottom-10 right-[5%] w-[400px] h-[400px] bg-violet-500/10 blur-[180px] rounded-full" />

  </div>


    <div className="max-w-6xl mx-auto">

    <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}

    viewport={{ once: true, amount: 0.4 }}

    transition={{
      duration: 1,
      ease: "easeOut",
    }}

    className="mb-20"
  >

    <p className="text-cyan-300 tracking-[0.3em] uppercase text-sm mb-4">
    Selected Works
    </p>

    <h2 className="text-5xl md:text-7xl font-bold leading-tight">
      Projects
    </h2>

    <p className="mt-6 text-zinc-500 max-w-2xl text-lg leading-relaxed">
      A collection of immersive digital products, creative interfaces
      and AI-powered experiences built with modern technologies.
    </p>

  </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Card 1 */}
  <motion.div

    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}

    viewport={{ once: true, amount: 0.2 }}

    whileHover={{
  y: -12,
  scale: 1.025,
  rotateX: 5,
  rotateY: -5,
}}

    
    transition={{
  duration: 0.8,
  ease: "easeOut",
}}

style={{
  transformStyle: "preserve-3d",
}}

    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/40 backdrop-blur-3xl p-8 transition-all duration-500 hover:shadow-[0_0_60px_rgba(0,255,255,0.08)] hover:border-cyan-400/20"
  >
    

    <div className="relative z-10 group-hover:scale-[1.01] transition-all duration-500">
      {/* Thumbnail */}
      <div className="relative overflow-hidden w-full h-52 rounded-2xl mb-6 group-hover:scale-[1.03] transition-all duration-700 bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-violet-500/20 flex items-center justify-center">

        <h1 className="text-5xl font-bold text-white/80">
          Cortisol
        </h1>

      </div>

      <h3 className="text-2xl font-semibold mb-3 text-white">
        Cortisol — Tab Limiter
      </h3>

      <p className="text-zinc-400 leading-relaxed mb-6">
        Productivity-focused Chrome extension that helps users reduce
        distractions by limiting excessive tab usage and improving focus.
      </p>

      <div className="flex gap-3 flex-wrap mb-8">

        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
          JavaScript
        </span>

        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
          Chrome Extension
        </span>

        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
          UI Design
        </span>

      </div>

      <button className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
        View Project
      </button>

    </div>

  </motion.div>

        {/* Card 2 */}
        <motion.div

    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}

   whileHover={{
  y: -12,
  scale: 1.025,
  rotateX: 5,
  rotateY: -5,
}}

    transition={{
      duration: 0.8,
      delay: 0.2
    }}

    style={{
  transformStyle: "preserve-3d",
}}

    className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/40 backdrop-blur-2xl p-8 transition-all duration-500 hover:shadow-[0_0_80px_rgba(0,255,150,0.18)] hover:border-green-400/20"
  >

    <div className="relative z-10 group-hover:scale-[1.01] transition-all duration-500">
      {/* Thumbnail */}
      <div className="relative overflow-hidden w-full h-52 rounded-2xl mb-6 group-hover:scale-[1.03] transition-all duration-700 bg-gradient-to-br from-green-500/20 via-cyan-500/10 to-blue-500/20 flex items-center justify-center">

        <div className="flex gap-4 text-5xl">

          <span>🟢</span>
          <span>🔵</span>
          <span>🔴</span>

        </div>

      </div>

      <h3 className="text-2xl font-semibold mb-3 text-white">
        AI Waste Segregation Detector
      </h3>

      <p className="text-zinc-400 leading-relaxed mb-6">
        AI-powered image classification system that detects waste
        materials and automatically categorizes them into the correct
        disposal bins for smarter recycling and sustainability.
      </p>

      <div className="flex gap-3 flex-wrap mb-8">

        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
          Python
        </span>

        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
          AI/ML
        </span>

        <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm">
          Computer Vision
        </span>

      </div>

      <button className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300">
        View Project
      </button>

    </div>

  </motion.div>

      </div>

    </div>

  </section>
  <Contact />
  <Footer />

      </main>
    );
  }

