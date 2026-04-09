export type CategoryName =
  | "Sports"
  | "Geography"
  | "Sciences"
  | "History"
  | "Entertainment"
  | "Arts"
  | "Languages";

export type Question = {
  id: string;
  text: string;
  correctAnswer: string;
  wrongAnswers: string[];
  image?: string;
};
