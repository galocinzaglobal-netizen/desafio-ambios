import { questions } from "./questions";

export type RouletteQuestion = (typeof questions)[number] & { level: number };
const levelIds: Record<number, number[]> = {
  1: [1, 2, 11, 21, 31], 2: [12, 22, 32, 41, 42], 3: [3, 4, 5, 13, 14],
  4: [15, 16, 23, 24, 25], 5: [26, 33, 34, 35, 36], 6: [6, 16, 27, 37, 44], 7: [7, 8, 9, 10, 30],
};
export const rouletteQuestions: RouletteQuestion[] = Object.entries(levelIds).flatMap(([level, ids]) => ids.map((id) => ({ ...questions.find((question) => question.id === id)!, level: Number(level) })));
