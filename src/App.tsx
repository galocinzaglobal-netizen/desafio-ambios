import { AnimatePresence } from "framer-motion";
import { Background } from "./components/Background";
import { FinalScreen } from "./components/FinalScreen";
import { LeadScreen } from "./components/LeadScreen";
import { RankingScreen } from "./components/RankingScreen";
import { QuestionScreen } from "./components/QuestionScreen";
import { StartScreen } from "./components/StartScreen";
import { useGame } from "./hooks/useGame";

export default function App() {
  const game = useGame();
  return <div className="app-shell"><div className="game-frame"><Background /><AnimatePresence mode="wait">
    {game.screen === "start" && <StartScreen key="start" onStart={game.start} />}
    {game.screen === "question" && <QuestionScreen key="game" question={game.currentQuestion} index={game.currentIndex} selected={game.selectedAnswer} eliminated={game.eliminated} helps={game.helps} hint={game.hint} onAnswer={game.answer} onHelp={game.useHelp} />}
    {game.screen === "final" && <FinalScreen key="final" score={game.score} correctCount={game.correctCount} maxStreak={game.maxStreak} maxMultiplier={game.maxMultiplier} game={game.game} answers={game.answers} onRestart={game.start} onCapture={game.openLead} />}
    {game.screen === "lead" && <LeadScreen key="lead" onRestart={game.start} onRanking={game.saveRanking} />}
    {game.screen === "ranking" && <RankingScreen key="ranking" ranking={game.ranking} onRestart={game.start} />}
  </AnimatePresence></div></div>;
}
