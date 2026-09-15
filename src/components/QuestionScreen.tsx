import { AnimatePresence, motion } from "framer-motion";
import type { GameQuestion } from "../types/game";
import { letters } from "../utils/game";
import { AmbiosMark } from "./AmbiosMark";
import { CottonPlant, plantStageLabel } from "./CottonPlant";
import { HelpBar } from "./HelpBar";
import type { HelpKind, Helps } from "../types/game";

interface Props { question: GameQuestion; index: number; selected: number | null; eliminated: number[]; helps: Helps; hint: string | null; onAnswer: (index: number) => void; onHelp: (kind: HelpKind) => void; }
export function QuestionScreen({ question, index, selected, eliminated, helps, hint, onAnswer, onHelp }: Props) {
  return <main className="question-screen">
    <header className="game-header"><AmbiosMark compact /><div className="score-readout cultivation-readout"><span>CULTIVO</span><strong>EM CURSO</strong></div></header>
    <section className="progress-block"><div className="question-meta"><span>PERGUNTA {String(index + 1).padStart(2, "0")} / 10</span><span>{question.difficulty === "easy" ? "NÍVEL SEMENTE" : question.difficulty === "medium" ? "NÍVEL CULTIVO" : "NÍVEL COLHEITA"}</span></div><div className="progress-line">{Array.from({ length: 10 }).map((_, step) => <i key={step} className={step <= index ? "active" : ""} />)}</div></section>
    <AnimatePresence mode="wait"><motion.section className="question-card" key={question.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: .28 }}>
      <div className="question-card-top"><div className="category-tag">{question.category.replace("_", " ")}</div><div className="growth-readout"><CottonPlant stage={index + 1} compact /><span>{plantStageLabel(index + 1)}</span></div></div><h2>{question.question}</h2>
    </motion.section></AnimatePresence>
    <div className="answers">{question.answers.map((answer, answerIndex) => {
      const isSelected = answerIndex === selected;
      return <motion.button key={`${question.id}-${answer}`} className={`answer ${isSelected ? "selected" : ""} ${eliminated.includes(answerIndex) ? "eliminated" : ""}`} disabled={eliminated.includes(answerIndex)} onClick={() => onAnswer(answerIndex)} whileHover={{ x: 3 }} whileTap={{ scale: .985 }}><b>{letters[answerIndex]}</b><span>{answer}</span></motion.button>;
    })}</div>
    <div className="utility-area"><HelpBar helps={helps} onUse={onHelp} locked={false} />
      <AnimatePresence>{hint && <motion.div className="hint-card" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}><span>{helps.field ? "OLHAR DO CAMPO" : "REGENESIS"}</span>{hint}</motion.div>}</AnimatePresence>
    </div>
  </main>;
}
