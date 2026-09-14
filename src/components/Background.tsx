import { motion } from "framer-motion";

export function Background() {
  return <div className="atmosphere" aria-hidden="true">
    <div className="grain" /><div className="grid" />
    <motion.div className="orb orb-one" animate={{ y: [0, -22, 0], x: [0, 16, 0] }} transition={{ duration: 9, repeat: Infinity }} />
    <motion.div className="orb orb-two" animate={{ y: [0, 26, 0], x: [0, -12, 0] }} transition={{ duration: 11, repeat: Infinity }} />
    <div className="root-lines"><span /><span /><span /></div>
  </div>;
}
