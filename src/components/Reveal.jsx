import { motion } from "framer-motion";

/** Scroll-reveal wrapper: fades + slides children in when they enter the viewport. */
export default function Reveal({ children, delay = 0, direction = "up", className = "" }) {
  const offsets = {
    up: { y: 36, x: 0 },
    down: { y: -36, x: 0 },
    left: { x: 48, y: 0 },
    right: { x: -48, y: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
