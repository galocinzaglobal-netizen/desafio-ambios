import { questions } from "./questions";

export type RouletteQuestion = (typeof questions)[number] & { level: number };
const levelIds: Record<number, number[]> = {
  // Oito níveis com cinco perguntas ativas cada. O conteúdo técnico original
  // continua centralizado em questions.ts e sujeito à validação da Ambios.
  1: [1, 2, 3, 4, 5],
  2: [6, 7, 8, 9, 10],
  3: [11, 12, 13, 14, 15],
  4: [16, 17, 18, 19, 20],
  5: [21, 22, 23, 24, 25],
  6: [26, 27, 28, 29, 30],
  7: [31, 32, 33, 34, 35],
  8: [36, 37, 38, 39, 40],
};
export const rouletteQuestions: RouletteQuestion[] = Object.entries(levelIds).flatMap(([level, ids]) => ids.map((id) => ({ ...questions.find((question) => question.id === id)!, level: Number(level) })));
