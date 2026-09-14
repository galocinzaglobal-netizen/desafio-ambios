import { motion } from "framer-motion";
import { AmbiosMark } from "./AmbiosMark";

export function StartScreen({ onStart }: { onStart: () => void }) {
  return <motion.main className="start-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <div className="start-top"><AmbiosMark /><span className="live-dot">DESAFIO 01</span></div>
    <section className="hero-copy">
      <motion.p className="eyebrow" initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>CONHECIMENTO QUE CULTIVA O FUTURO</motion.p>
      <motion.h1 initial={{ y: 28, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .08 }}>DESAFIO<br /><em>AMBIOS</em></motion.h1>
      <motion.p className="intro" initial={{ y: 18, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: .16 }}>VOCÊ CONHECE O CAMPO COMO NINGUÉM?</motion.p>
    </section>
    <div className="challenge-stats">
      <div><b>10</b><span>PERGUNTAS</span></div><div><b>4</b><span>ALTERNATIVAS</span></div><div><b>3</b><span>AJUDAS<br />ESPECIAIS</span></div>
    </div>
    <motion.button className="primary-button" onClick={onStart} whileHover={{ scale: 1.025 }} whileTap={{ scale: .97 }}><span>COMEÇAR DESAFIO</span><i>→</i></motion.button>
    <p className="footer-note">CIÊNCIA · CAMPO · REGENERAÇÃO</p>
  </motion.main>;
}
