import { useEffect, useRef } from "react";

/** Subtle falling-code rain rendered on a fixed canvas behind the page. */
export default function MatrixRain() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const chars = "01{}[]<>/\\;:=+-*$#&%@abcdefxyz".split("");
    const size = 15;
    let w, h, cols, drops;

    const init = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cols = Math.floor(w / size);
      drops = Array.from({ length: cols }, () => Math.random() * -50);
    };
    init();

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.09)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${size}px JetBrains Mono, monospace`;

      for (let i = 0; i < cols; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const y = drops[i] * size;
        ctx.fillStyle = Math.random() > 0.975 ? "#d9ffe6" : "rgba(74,222,128,0.9)";
        ctx.fillText(ch, i * size, y);
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 1;
      }
    };

    const id = setInterval(draw, 55);
    window.addEventListener("resize", init);
    return () => {
      clearInterval(id);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.13]"
      aria-hidden="true"
    />
  );
}
