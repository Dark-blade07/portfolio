import { useEffect, useState } from "react";

export default function CursorRing() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const mouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };

  }, []);

return (
  <div
    className="pointer-events-none fixed z-[9999] rounded-full"
    style={{
      width: "42px",
      height: "42px",
      left: position.x - 21,
      top: position.y - 21,

      border: "1.5px solid rgba(34,211,238,0.7)",

      boxShadow: `
        0 0 8px rgba(34,211,238,0.45),
        0 0 20px rgba(34,211,238,0.25),
        inset 0 0 10px rgba(255,255,255,0.08)
      `,

      backdropFilter: "blur(2px)",

      transform: "translate3d(0,0,0)",
      willChange: "left, top",

      filter: "blur(0.3px)",
    }}
  />
);
}