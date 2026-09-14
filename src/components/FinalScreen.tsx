import { motion } from "framer-motion";
import { AmbiosMark } from "./AmbiosMark";
import { money, performanceMessage } from "../utils/game";

export function FinalScreen({ score, correctCount, onRestart }: { score: number; correctCount: number; onRestart: () => void }) {
  return <motion.main className="final-screen" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }}><AmbiosMark /><div className="completion-ring"><span>{correctCount}<small>/ 10</small></span><i>ACERTOS</i></div><p className="eyebrow">O CAMPO RECONHECE QUEM OBSERVA</p><h1>DESAFIO<br /><em>CONCLUÍDO</em></h1><div className="final-score"><span>PONTUAÇÃO FINAL</span><strong>{money(score)}</strong></div><p className="performance-message">{performanceMessage(score, correctCount)}</p><motion.button className="primary-button" onClick={onRestart} whileHover={{ scale: 1.025 }} whileTap={{ scale: .97 }}><span>JOGAR NOVAMENTE</span><i>↻</i></motion.button><p className="footer-note">AMBIOS · CONHECIMENTO QUE REGENERA</p></motion.main>;
}
