import { questions, type Difficulty, type Question } from "../data/questions";
import type { GameQuestion } from "../types/game";

export const PRIZES = [100, 200, 500, 1000, 2500, 5000, 10000, 25000, 50000, 100000];
export const letters = ["A", "B", "C", "D"];

export const money = (value: number) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }).format(value);

export function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function selectBalanced(pool: Question[], amount: number, usedCategories: Map<string, number>): Question[] {
  const selected: Question[] = [];
  const available = shuffle(pool);
  while (selected.length < amount && available.length) {
    available.sort((a, b) => (usedCategories.get(a.category) ?? 0) - (usedCategories.get(b.category) ?? 0));
    const lowest = usedCategories.get(available[0].category) ?? 0;
    const candidates = available.filter((question) => (usedCategories.get(question.category) ?? 0) === lowest);
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    selected.push(pick);
    usedCategories.set(pick.category, (usedCategories.get(pick.category) ?? 0) + 1);
    available.splice(available.indexOf(pick), 1);
  }
  return selected;
}

function prepareQuestion(question: Question): GameQuestion {
  const shuffledAnswers = shuffle(question.answers.map((text, index) => ({ text, index })));
  return {
    ...question,
    answers: shuffledAnswers.map(({ text }) => text),
    correctAnswer: shuffledAnswers.findIndex(({ index }) => index === question.correctAnswer),
    originalCorrectAnswer: question.correctAnswer,
  };
}

export function createGame(): GameQuestion[] {
  const plan: Array<[Difficulty, number]> = [["easy", 3], ["medium", 4], ["hard", 3]];
  const usage = new Map<string, number>();
  const picked = plan.flatMap(([difficulty, count]) =>
    selectBalanced(questions.filter((question) => question.difficulty === difficulty), count, usage),
  );
  return shuffle(picked).map(prepareQuestion);
}

export function performanceMessage(score: number, correct: number) {
  if (correct === 10) return "Domínio total. Você conectou ciência, campo e regeneração com precisão.";
  if (correct >= 7) return "Excelente colheita de conhecimento. Sua visão do campo está muito afiada.";
  if (correct >= 4) return "Boa jornada. Cada resposta amplia a leitura do sistema vivo que é o campo.";
  return "Todo cultivo começa com curiosidade. Continue explorando e volte para um novo desafio.";
}
