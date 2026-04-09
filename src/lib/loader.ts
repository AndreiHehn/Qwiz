/* eslint-disable @typescript-eslint/no-explicit-any */
const modules = import.meta.glob("../lib/questions/**/*.tsx", { eager: true });

type QuestionsByTheme = Record<string, unknown[]>;
type QuestionsByCategory = Record<string, QuestionsByTheme>;

export function loadQuestions(): QuestionsByCategory {
  const questions: QuestionsByCategory = {};

  for (const path in modules) {
    const module = modules[path] as any;

    const parts = path.split("/");

    const category = parts[parts.length - 2];
    const theme = parts[parts.length - 1].replace(".tsx", "");

    if (!questions[category]) {
      questions[category] = {};
    }

    questions[category][theme] = module.questions;
  }

  return questions;
}
