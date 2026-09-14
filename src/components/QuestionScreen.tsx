import { AnimatePresence, motion } from "framer-motion";
import type { GameQuestion } from "../types/game";
import { formatScore, letters, PRIZES } from "../utils/game";
import { AmbiosMark } from "./AmbiosMark";
import { HelpBar } from "./HelpBar";
import type { HelpKind, Helps } from "../types/game";

interface Props { question: GameQuestion; index: number; score: number; selected: number | null; eliminated: number[]; helps: Helps; hint: string | null; feedback: boolean; reveal: boolean; onAnswer: (index: number) => void; onHelp: (kind: HelpKind) => void; onReveal: () => void; onNext: () => void; }
export function QuestionScreen({ question, index, score, selected, eliminated, helps, hint, feedback, reveal, onAnswer, onHelp, onReveal, onNext }: Props) {
  const correct = selected === question.correctAnswer;
  return <main className="question-screen">
    <header className="game-header"><AmbiosMark compact /><div className="score-readout"><span>PONTOS</span><strong>{formatScore(score)}</strong></div></header>
    <section className="progress-block"><div className="question-meta"><span>PERGUNTA {String(index + 1).padStart(2, "0")} / 10</span><span>{question.difficulty === "easy" ? "NÍVEL SEMENTE" : question.difficulty === "medium" ? "NÍVEL CULTIVO" : "NÍVEL COLHEITA"}</span></div><div className="progress-line">{Array.from({ length: 10 }).map((_, step) => <i key={step} className={step <= index ? "active" : ""} />)}</div></section>
    <AnimatePresence mode="wait"><motion.section className="question-card" key={question.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: .28 }}>
      <div className="category-tag">{question.category.replace("_", " ")}</div><h2>{question.question}</h2><div className="question-value">VALENDO <b>{formatScore(PRIZES[index])} PONTOS</b></div>
    </motion.section></AnimatePresence>
    <div className="answers">{question.answers.map((answer, answerIndex) => {
      const isCorrect = answerIndex === question.correctAnswer; const isSelected = answerIndex === selected; const state = feedback ? (reveal && isCorrect ? "correct" : isSelected && !isCorrect ? "wrong" : "") : "";
      return <motion.button key={`${question.id}-${answer}`} className={`answer ${state} ${eliminated.includes(answerIndex) ? "eliminated" : ""}`} disabled={feedback || eliminated.includes(answerIndex)} onClick={() => onAnswer(answerIndex)} whileHover={!feedback ? { x: 3 } : {}} whileTap={{ scale: .985 }}><b>{letters[answerIndex]}</b><span>{answer}</span>{reveal && isCorrect && <i>✓</i>}{feedback && isSelected && !isCorrect && <i>×</i>}</motion.button>;
    })}</div>
    <div className="utility-area"><HelpBar helps={helps} onUse={onHelp} locked={feedback} />
      <AnimatePresence>{hint && !feedback && <motion.div className="hint-card" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}><span>{helps.field ? "OLHAR DO CAMPO" : "REGENESIS"}</span>{hint}</motion.div>}</AnimatePresence>
    </div>
    <AnimatePresence>{feedback && <motion.div className={`feedback-panel ${correct ? "positive" : "negative"}`} initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}><div><span>{correct ? "RESPOSTA PRECISA" : "HORA DE CULTIVAR MAIS"}</span><h3>{reveal ? (correct ? "+ " + formatScore(PRIZES[index]) + " PONTOS" : "A RESPOSTA CERTA É " + letters[question.correctAnswer]) : "RESPOSTA REGISTRADA"}</h3>{reveal && <p>{question.explanation}</p>}</div><motion.button className="next-button" onClick={reveal ? onNext : onReveal} whileTap={{ scale: .96 }}>{reveal ? (index === 9 ? "VER RESULTADO" : "PRÓXIMA") : "VER RESPOSTA"} <b>→</b></motion.button></motion.div>}</AnimatePresence>
  </main>;
}
