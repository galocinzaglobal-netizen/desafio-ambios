import { useCallback, useMemo, useState } from "react";
import type { HelpKind, Helps, Screen } from "../types/game";
import { createGame, PRIZES } from "../utils/game";

const freshHelps = (): Helps => ({ technical: false, field: false, regenesis: false });

export function useGame() {
  const [screen, setScreen] = useState<Screen>("start");
  const [game, setGame] = useState(() => createGame());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [helps, setHelps] = useState<Helps>(freshHelps);
  const [eliminated, setEliminated] = useState<number[]>([]);

  const currentQuestion = game[currentIndex];
  const start = useCallback(() => {
    setGame(createGame()); setCurrentIndex(0); setScore(0); setCorrectCount(0); setSelectedAnswer(null); setHelps(freshHelps()); setEliminated([]); setScreen("question");
  }, []);
  const answer = useCallback((index: number) => {
    if (screen !== "question" || eliminated.includes(index)) return;
    setSelectedAnswer(index);
    if (index === currentQuestion.correctAnswer) { setScore((value) => value + PRIZES[currentIndex]); setCorrectCount((value) => value + 1); }
    setScreen("feedback");
  }, [currentIndex, currentQuestion, eliminated, screen]);
  const next = useCallback(() => {
    if (currentIndex === game.length - 1) { setScreen("final"); return; }
    setCurrentIndex((value) => value + 1); setSelectedAnswer(null); setEliminated([]); setScreen("question");
  }, [currentIndex, game.length]);
  const useHelp = useCallback((kind: HelpKind) => {
    if (helps[kind] || screen !== "question") return;
    setHelps((value) => ({ ...value, [kind]: true }));
    if (kind === "technical") {
      const incorrect = currentQuestion.answers.map((_, index) => index).filter((index) => index !== currentQuestion.correctAnswer);
      setEliminated(incorrect.sort(() => Math.random() - 0.5).slice(0, 2));
    }
  }, [currentQuestion, helps, screen]);
  const hint = useMemo(() => helps.field ? currentQuestion.hintField : helps.regenesis ? currentQuestion.hintRegenesis : null, [currentQuestion, helps]);
  return { screen, game, currentQuestion, currentIndex, score, correctCount, selectedAnswer, helps, eliminated, hint, start, answer, next, useHelp };
}
