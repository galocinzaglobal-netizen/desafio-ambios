import { motion } from "framer-motion";
import { AmbiosMark } from "./AmbiosMark";

export function LossScreen({ onContinue }: { onContinue: () => void }) {
  return <motion.main className="loss-screen" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}><AmbiosMark /><div className="loss-copy"><p className="eyebrow">DESAFIO ENCERRADO</p><h1>Não foi<br /><em>dessa vez!</em></h1><p>Mas para não errar na sua lavoura, conheça mais sobre o <strong>Regênesis</strong>, o maior aliado ao produtor de algodão brasileiro.</p></div><motion.button className="primary-button" onClick={onContinue} whileHover={{ scale: 1.025 }} whileTap={{ scale: .97 }}><span>CONHECER O REGÊNESIS</span><i>→</i></motion.button><p className="footer-note">AMBIOS · CIÊNCIA QUE REGENERA</p></motion.main>;
}
