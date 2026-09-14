import { AnimatePresence } from "framer-motion";
import { Background } from "./components/Background";
import { FinalScreen } from "./components/FinalScreen";
import { LeadScreen } from "./components/LeadScreen";
import { LossScreen } from "./components/LossScreen";
import { QuestionScreen } from "./components/QuestionScreen";
import { StartScreen } from "./components/StartScreen";
import { useGame } from "./hooks/useGame";

export default function App() {
  const game = useGame();
  return <div className="app-shell"><div className="game-frame"><Background /><AnimatePresence mode="wait">
    {game.screen === "start" && <StartScreen key="start" onStart={game.start} />}
    {(game.screen === "question" || game.screen === "feedback" || game.screen === "reveal") && <QuestionScreen key="game" question={game.currentQuestion} index={game.currentIndex} score={game.score} selected={game.selectedAnswer} eliminated={game.eliminated} helps={game.helps} hint={game.hint} feedback={game.screen === "feedback" || game.screen === "reveal"} reveal={game.screen === "reveal"} onAnswer={game.answer} onHelp={game.useHelp} onReveal={game.revealAnswer} onNext={game.next} />}
    {game.screen === "final" && <FinalScreen key="final" score={game.score} correctCount={game.correctCount} onRestart={game.start} onCapture={game.openLead} />}
    {game.screen === "loss" && <LossScreen key="loss" onContinue={game.openLead} />}
    {game.screen === "lead" && <LeadScreen key="lead" onRestart={game.start} />}
  </AnimatePresence></div></div>;
}
