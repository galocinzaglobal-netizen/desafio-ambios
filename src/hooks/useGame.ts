import { useCallback, useMemo, useState } from "react";
import type { AnswerRecord, HelpKind, Helps, RankingEntry, Screen } from "../types/game";
import { createGame } from "../utils/game";

const freshHelps = (): Helps => ({ technical: false, field: false, regenesis: false });

export function useGame() {
  const [screen, setScreen] = useState<Screen>("start");
  const [game, setGame] = useState(() => createGame());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [currentValue, setCurrentValue] = useState(100);
  const [maxStreak, setMaxStreak] = useState(0);
  const [maxMultiplier, setMaxMultiplier] = useState(0);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [helps, setHelps] = useState<Helps>(freshHelps);
  const [eliminated, setEliminated] = useState<number[]>([]);
  const [activeHint, setActiveHint] = useState<HelpKind | null>(null);
  const [startedAt, setStartedAt] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [ranking, setRanking] = useState<RankingEntry[]>(() => {
    try { return JSON.parse(localStorage.getItem("ambios-ranking") ?? "[]"); } catch { return []; }
  });

  const currentQuestion = game[currentIndex];
  const start = useCallback(() => {
    setGame(createGame(game.map((question) => question.id))); setCurrentIndex(0); setScore(0); setCorrectCount(0); setStreak(0); setCurrentValue(100); setMaxStreak(0); setMaxMultiplier(0); setAnswers([]); setSelectedAnswer(null); setHelps(freshHelps()); setEliminated([]); setActiveHint(null); setStartedAt(Date.now()); setElapsedSeconds(0); setScreen("question");
  }, [game]);
  const answer = useCallback((index: number) => {
    if (screen !== "question" || eliminated.includes(index)) return;
    setSelectedAnswer(index);
    const isCorrect = index === currentQuestion.correctAnswer;
    setAnswers((value) => [...value, { questionId: currentQuestion.id, selectedAnswer: index, isCorrect }]);
    if (isCorrect) {
      const nextStreak = streak + 1;
      const pointsEarned = nextStreak === 1 ? 100 : currentValue * nextStreak;
      setScore((value) => value + pointsEarned);
      setCorrectCount((value) => value + 1);
      setStreak(nextStreak);
      setCurrentValue(pointsEarned);
      setMaxStreak((value) => Math.max(value, nextStreak));
      setMaxMultiplier((value) => Math.max(value, nextStreak));
    } else {
      setStreak(0);
      setCurrentValue(100);
    }
    if (currentIndex === game.length - 1) {
      setElapsedSeconds(Math.max(1, Math.round((Date.now() - startedAt) / 1000)));
      setScreen("final");
      return;
    }
    setCurrentIndex((value) => value + 1);
    setSelectedAnswer(null);
    setEliminated([]);
    setActiveHint(null);
  }, [currentIndex, currentQuestion, currentValue, eliminated, game.length, screen, startedAt, streak]);
  const next = useCallback(() => {
    if (currentIndex === game.length - 1) { setScreen("final"); return; }
    setCurrentIndex((value) => value + 1); setSelectedAnswer(null); setEliminated([]); setScreen("question");
  }, [currentIndex, game.length]);
  const openLead = useCallback(() => setScreen("lead"), []);
  const saveRanking = useCallback((name: string) => {
    const entry: RankingEntry = { id: `${Date.now()}`, name: name.trim() || "Jogador", score, elapsedSeconds, helpsUsed: Object.values(helps).filter(Boolean).length };
    const sorted = [...ranking, entry].sort((a, b) => b.score - a.score || a.elapsedSeconds - b.elapsedSeconds || a.helpsUsed - b.helpsUsed).slice(0, 10);
    localStorage.setItem("ambios-ranking", JSON.stringify(sorted)); setRanking(sorted); setScreen("ranking");
  }, [elapsedSeconds, helps, ranking, score]);
  const useHelp = useCallback((kind: HelpKind) => {
    if (helps[kind] || screen !== "question") return;
    setHelps((value) => ({ ...value, [kind]: true }));
    if (kind !== "technical") setActiveHint(kind);
    if (kind === "technical") {
      const incorrect = currentQuestion.answers.map((_, index) => index).filter((index) => index !== currentQuestion.correctAnswer);
      setEliminated(incorrect.sort(() => Math.random() - 0.5).slice(0, 2));
    }
  }, [currentQuestion, helps, screen]);
  const hint = useMemo(() => activeHint === "field" ? currentQuestion.hintField : activeHint === "regenesis" ? currentQuestion.hintRegenesis : null, [activeHint, currentQuestion]);
  return { screen, game, currentQuestion, currentIndex, score, correctCount, streak, maxStreak, maxMultiplier, answers, selectedAnswer, helps, eliminated, hint, elapsedSeconds, ranking, start, answer, next, openLead, saveRanking, useHelp };
}
