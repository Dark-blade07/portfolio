import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const orbs = [
  {
    size: 320,
    color:
      "from-cyan-400/25 via-blue-500/15 to-violet-500/20",
    top: "10%",
    left: "12%",
    duration: 7,
  },

  {
    size: 260,
    color:
      "from-violet-400/20 via-fuchsia-500/10 to-cyan-500/20",
    top: "60%",
    left: "75%",
    duration: 9,
  },

  {
    size: 220,
    color:
      "from-blue-400/20 via-cyan-500/10 to-emerald-500/15",
    top: "120%",
    left: "20%",
    duration: 8,
  },

  {
    size: 300,
    color:
      "from-cyan-400/15 via-violet-500/10 to-blue-500/20",
    top: "180%",
    left: "70%",
    duration: 10,
  },
];

export default function FloatingOrbs() {

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const move = (e) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };

  }, []);

  return (
<div className="fixed inset-0 overflow-hidden pointer-events-none z-[2]">
      {orbs.map((orb, index) => {

        const depth = (index + 1) * 0.008;

const offsetX =
  (mouse.x - window.innerWidth / 2) * -depth;

const offsetY =
  (mouse.y - window.innerHeight / 2) * -depth;

        return (
          <motion.div

            key={index}

           animate={{
  y: [0, -(25 + index * 12), 0],
  x: [0, 20 + index * 10, 0],
  scale: [1, 1.04 + index * 0.02, 1],
}}

            transition={{
  duration: orb.duration * 0.65,
  repeat: Infinity,
  ease: "easeInOut",
}}

            style={{
              top: orb.top,
              left: orb.left,
              x: offsetX,
              y: offsetY,
            }}

            className={`
              absolute
              rounded-full
              blur-[100px]
              opacity-90
              bg-gradient-to-br
              ${orb.color}
            `}

          >

            <div
              style={{
                width: orb.size,
                height: orb.size,
              }}
            />

          </motion.div>
        );
      })}
    </div>
  );
}