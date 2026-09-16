import { useCallback, useState } from "react";
import { rouletteQuestions, type RouletteQuestion } from "../data/rouletteQuestions";

export type RouletteScreen = "lead" | "wheel" | "challengeReveal" | "question" | "result";
export interface Participant { name: string; phone: string; email: string; consent: boolean; }
export function submitLead(data: Participant) { return Promise.resolve({ ...data, source: "roleta_regenesis" }); }
export function useRouletteGame() {
  const [screen, setScreen] = useState<RouletteScreen>("lead"); const [participant, setParticipant] = useState<Participant | null>(null);
  const [wheelNumber, setWheelNumber] = useState<number | null>(null); const [rotation, setRotation] = useState(0); const [spinning, setSpinning] = useState(false);
  const [question, setQuestion] = useState<RouletteQuestion | null>(null); const [selected, setSelected] = useState<number | null>(null); const [lastId, setLastId] = useState<number | null>(null);
  const [result, setResult] = useState<boolean | null>(null);
  const start = useCallback((data: Participant) => { setParticipant(data); setScreen("wheel"); }, []);
  const spin = useCallback(() => { if (spinning) return; const number = Math.floor(Math.random() * 7) + 1; setSpinning(true); setWheelNumber(number); setRotation((value) => value + 1440 + (360 - (number - 1) * (360 / 7))); window.setTimeout(() => { const pool = rouletteQuestions.filter((item) => item.level === number && item.id !== lastId); const pick = pool[Math.floor(Math.random() * pool.length)] ?? rouletteQuestions.find((item) => item.level === number)!; const answers = pick.answers.map((text, index) => ({ text, index })).sort(() => Math.random() - .5); setQuestion({ ...pick, answers: answers.map((item) => item.text), correctAnswer: answers.findIndex((item) => item.index === pick.correctAnswer) }); setSpinning(false); setScreen("challengeReveal"); }, 3400); }, [lastId, spinning]);
  const confirm = useCallback(() => { if (selected === null || !question) return; setResult(question.answers[selected] === question.answers[question.correctAnswer]); setLastId(question.id); setScreen("result"); }, [question, selected]);
  const next = useCallback(() => { setParticipant(null); setWheelNumber(null); setQuestion(null); setSelected(null); setResult(null); setScreen("lead"); }, []);
  return { screen, participant, wheelNumber, rotation, spinning, question, selected, result, start, spin, setSelected, confirm, setScreen, next };
}
