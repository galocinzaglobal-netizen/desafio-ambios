import type { Category, Difficulty, Question } from "../data/questions";

export type Screen = "start" | "question" | "feedback" | "final";
export type HelpKind = "technical" | "field" | "regenesis";

export interface GameQuestion extends Omit<Question, "answers" | "correctAnswer"> {
  answers: string[];
  correctAnswer: number;
  originalCorrectAnswer: number;
  category: Category;
  difficulty: Difficulty;
}

export interface Helps {
  technical: boolean;
  field: boolean;
  regenesis: boolean;
}
