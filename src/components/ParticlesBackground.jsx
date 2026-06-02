
import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <Particles
      className="absolute inset-0 z-[1]"
      options={{
        particles: {
          number: {
            value: 80,
          },

          color: {
            value: "#ffffff",
          },

          opacity: {
            value: 0.5,
          },

          size: {
            value: 2,
          },

          move: {
            enable: true,
            speed: 1,
          },
        },

        background: {
          color: "transparent",
        },
      }}
    />
  );
}

