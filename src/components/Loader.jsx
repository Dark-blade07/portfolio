import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {

  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    document.body.style.overflow = "hidden";

    let current = 0;

    const interval = setInterval(() => {

      current += Math.random() * 12;

      if (current >= 100) {
        current = 100;

        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
          document.body.style.overflow = "auto";
        }, 500);
      }

      setProgress(Math.floor(current));

    }, 120);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "auto";
    };

  }, []);

  return (

    <AnimatePresence>

      {loading && (

        <motion.div

          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}

          transition={{
            duration: 1,
            ease: "easeInOut",
          }}

          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center overflow-hidden"
        >

          {/* Background Glow */}
          <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] rounded-full" />

          {/* Loading Text */}
          <motion.h1

            initial={{
              opacity: 0,
              y: 20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 1,
            }}

            className="relative text-3xl md:text-6xl font-bold tracking-tight text-white text-center"
          >
            Loading Cool Stuff... 🗿
          </motion.h1>

          {/* Small Subtitle */}
          <p className="mt-6 text-zinc-500 text-sm tracking-[0.35em] uppercase">
            Frontend Developer • Motion • Creative UI
          </p>
          {/* Progress Bar */}
          <div className="relative mt-12 w-[260px] h-[4px] bg-white/10 rounded-full overflow-hidden">

            <motion.div

              className="absolute left-0 top-0 h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]"

              initial={{ width: 0 }}

              animate={{
                width: `${progress}%`,
              }}

              transition={{
                ease: "easeOut",
              }}
            />

          </div>

          {/* Percentage */}
          <motion.p

            key={progress}

            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}

            className="mt-5 text-zinc-500 text-xs tracking-[0.4em]"
          >
            {progress}%
          </motion.p>

        </motion.div>

      )}

    </AnimatePresence>
  );
}

