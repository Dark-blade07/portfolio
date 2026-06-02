
import { useEffect, useState } from "react";

export default function MouseGlow() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const updateMouse = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMouse);

    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };

  }, []);

return (
  <div
    className="pointer-events-none fixed z-[9999] rounded-full blur-3xl"
    style={{
      width: "180px",
      height: "180px",
      left: position.x - 90,
      top: position.y - 90,
      background:
        "radial-gradient(circle, rgba(34,211,238,0.18) 0%, rgba(59,130,246,0.10) 40%, transparent 75%)",
      transition: "transform 0.03s linear",
      willChange: "transform",
    }}
  />
);
}

