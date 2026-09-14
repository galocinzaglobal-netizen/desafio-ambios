import { motion } from "framer-motion";
import { AmbiosMark } from "./AmbiosMark";
import { formatScore, performanceMessage } from "../utils/game";

export function FinalScreen({ score, correctCount, onRestart, onCapture }: { score: number; correctCount: number; onRestart: () => void; onCapture: () => void }) {
  return <motion.main className="final-screen" initial={{ opacity: 0, scale: .97 }} animate={{ opacity: 1, scale: 1 }}><AmbiosMark /><div className="completion-ring"><span>{correctCount}<small>/ 10</small></span><i>ACERTOS</i></div><p className="eyebrow">O CAMPO RECONHECE QUEM OBSERVA</p><h1>DESAFIO<br /><em>CONCLUÍDO</em></h1><div className="final-score"><span>PONTUAÇÃO FINAL</span><strong>{formatScore(score)} PONTOS</strong></div><p className="performance-message">{performanceMessage(score, correctCount)}</p><motion.button className="primary-button" onClick={onCapture} whileHover={{ scale: 1.025 }} whileTap={{ scale: .97 }}><span>RECEBER CONTEÚDOS AMBIOS</span><i>→</i></motion.button><button className="text-button" onClick={onRestart}>JOGAR NOVAMENTE</button><p className="footer-note">AMBIOS · CONHECIMENTO QUE REGENERA</p></motion.main>;
}
