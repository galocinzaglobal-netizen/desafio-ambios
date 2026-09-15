import { questions, type Category, type Difficulty, type Question } from "../data/questions";
import type { GameQuestion } from "../types/game";

export const letters = ["A", "B", "C", "D"];

export const formatScore = (value: number) => new Intl.NumberFormat("pt-BR").format(value);

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

export function createGame(excludedIds: number[] = []): GameQuestion[] {
  const categoryPlan: Array<[Category, number]> = [["REGENESIS", 1], ["MARIN_DEEP", 1], ["INGROW", 1], ["MARIN_PRIME", 1], ["AMBIOS", 2], ["ALGODAO", 4]];
  const difficultyPlan: Record<Difficulty, number> = { easy: 2, medium: 4, hard: 3, specialist: 1 };
  const excluded = new Set(excludedIds); const slots = categoryPlan.flatMap(([category, count]) => Array.from({ length: count }, () => category)); const source = questions.filter((question) => !excluded.has(question.id)); const picked: Question[] = []; const remaining = { ...difficultyPlan };
  const select = (slot: number): boolean => { if (slot === slots.length) return true; const choices = shuffle(source.filter((question) => question.category === slots[slot] && !picked.includes(question) && remaining[question.difficulty] > 0)); for (const question of choices) { picked.push(question); remaining[question.difficulty] -= 1; if (select(slot + 1)) return true; remaining[question.difficulty] += 1; picked.pop(); } return false; };
  if (!select(0)) throw new Error("Não foi possível montar uma partida com a distribuição solicitada.");
  return shuffle(picked).map(prepareQuestion);
}

export function performanceMessage(score: number, correct: number) {
  if (correct === 10) return "Domínio total. Você conectou ciência, campo e regeneração com precisão.";
  if (correct >= 7) return "Excelente colheita de conhecimento. Sua visão do campo está muito afiada.";
  if (correct >= 4) return "Boa jornada. Cada resposta amplia a leitura do sistema vivo que é o campo.";
  return "Todo cultivo começa com curiosidade. Continue explorando e volte para um novo desafio.";
}
