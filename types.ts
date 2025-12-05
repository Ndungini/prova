export interface DataPoint {
  x: number;
  y: number;
  y2?: number; // Optional second line
}

export enum QuestionId {
  Q1 = 'q1',
  Q2 = 'q2',
  Q3 = 'q3',
  Q4 = 'q4',
  Q5 = 'q5'
}

export enum ExamId {
  EXAM1 = 'exam1',
  EXAM2 = 'exam2',
  EXAM3 = 'exam3',
  EXAM4 = 'exam4'
}