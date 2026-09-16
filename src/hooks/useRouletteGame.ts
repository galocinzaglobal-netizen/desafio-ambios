import { useCallback, useState } from "react";
import { rouletteQuestions, type RouletteQuestion } from "../data/rouletteQuestions";
import { createParticipationId, leadDefaults, registerLead, registerResult } from "../services/leads";

export type RouletteScreen = "opening" | "lead" | "wheel" | "challengeReveal" | "question" | "result";
export interface Participant { name: string; phone: string; email: string; consent: boolean; }
export function useRouletteGame() {
  const [screen, setScreen] = useState<RouletteScreen>("opening"); const [participant, setParticipant] = useState<Participant | null>(null);
  const [participationId, setParticipationId] = useState<string | null>(null);
  const [wheelNumber, setWheelNumber] = useState<number | null>(null); const [rotation, setRotation] = useState(0); const [spinning, setSpinning] = useState(false);
  const [question, setQuestion] = useState<RouletteQuestion | null>(null); const [selected, setSelected] = useState<number | null>(null); const [lastId, setLastId] = useState<number | null>(null);
  const [result, setResult] = useState<boolean | null>(null);
  const [revealed, setRevealed] = useState(false);
  const start = useCallback((data: Participant) => {
    const id = createParticipationId();
    setParticipationId(id);
    setParticipant(data);
    registerLead({ participationId: id, timestamp: new Date().toISOString(), name: data.name, whatsapp: data.phone, consent: data.consent, ...leadDefaults });
    setScreen("wheel");
  }, []);
  const spin = useCallback(() => {
    if (spinning) return;
    const number = Math.floor(Math.random() * 8) + 1;
    const segmentAngle = 45;
    const segmentCenter = (number - 1) * segmentAngle + segmentAngle / 2;
    const targetAngle = (360 - segmentCenter) % 360;
    setSpinning(true);
    setRevealed(false);
    setWheelNumber(number);
    setRotation((value) => {
      const currentAngle = ((value % 360) + 360) % 360;
      const clockwiseDelta = (targetAngle - currentAngle + 360) % 360;
      return value + 1440 + clockwiseDelta;
    });
    window.setTimeout(() => {
      const pool = rouletteQuestions.filter((item) => item.level === number && item.id !== lastId);
      const pick = pool[Math.floor(Math.random() * pool.length)] ?? rouletteQuestions.find((item) => item.level === number)!;
      const answers = pick.answers.map((text, index) => ({ text, index })).sort(() => Math.random() - .5);
      setQuestion({ ...pick, answers: answers.map((item) => item.text), correctAnswer: answers.findIndex((item) => item.index === pick.correctAnswer) });
      setSpinning(false);
      setRevealed(true);
      window.setTimeout(() => setScreen("challengeReveal"), 650);
    }, 3400);
  }, [lastId, spinning]);
  const confirm = useCallback(() => {
    if (selected === null || !question || !wheelNumber) return;
    const correct = question.answers[selected] === question.answers[question.correctAnswer];
    setResult(correct);
    setLastId(question.id);
    if (participationId) registerResult({ participationId, challengeNumber: wheelNumber, difficulty: question.difficulty, question: question.question, selectedAnswer: question.answers[selected], correctAnswer: question.answers[question.correctAnswer], result: correct ? "ACERTOU" : "ERROU" });
    setScreen("result");
  }, [participationId, question, selected, wheelNumber]);
  const next = useCallback(() => { setParticipant(null); setParticipationId(null); setWheelNumber(null); setQuestion(null); setSelected(null); setResult(null); setRevealed(false); setScreen("lead"); }, []);
  return { screen, participant, wheelNumber, rotation, spinning, revealed, question, selected, result, start, spin, setSelected, confirm, setScreen, next };
}
