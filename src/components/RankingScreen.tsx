import { motion } from "framer-motion";
import type { RankingEntry } from "../types/game";
import { formatScore } from "../utils/game";
import { AmbiosMark } from "./AmbiosMark";

export function RankingScreen({ ranking, onRestart }: { ranking: RankingEntry[]; onRestart: () => void }) {
  return <motion.main className="ranking-screen" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}><AmbiosMark /><p className="eyebrow">DESAFIO AMBIOS</p><h1>RANKING<br /><em>DO CULTIVO</em></h1><p className="ranking-rule">Pontuação · menor tempo · menos ajudas</p><ol>{ranking.map((entry, index) => <li key={entry.id} className={index < 3 ? "podium" : ""}><b>{index + 1}º</b><div><strong>{entry.name}</strong><small>{formatScore(entry.score)} PTS · {entry.elapsedSeconds}s · {entry.helpsUsed} ajuda{entry.helpsUsed === 1 ? "" : "s"}</small></div></li>)}</ol><button className="primary-button" onClick={onRestart}><span>DESENVOLVER OUTRA PLANTA</span><i>↻</i></button><p className="footer-note">RANKING SALVO NESTE DISPOSITIVO</p></motion.main>;
}
