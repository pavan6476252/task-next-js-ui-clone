
export interface ICategorize {
  desc?: string;
  image?: string;
  points: number;
  categories: string[],
  items: { category: string, item: string }[]
}


export interface ICloze {
  preview?: string;
  image?: string;
  points: number;
  sentence: string;
  options: string[]
  correctAnswers: number[]
}


export interface IComprehension {
  passage?: string;
  image?: string;
  points: number;
  question: {
    desc: string;
    options: string[],
    correctAnswer: number
  }
}


export type IQuestion = ICategorize | IComprehension | ICloze;

export interface IForm {
  title: string;
  headerImage?: string;
  questions: IQuestion[];
}

export interface IResponse {
  formId: string;
  responses: Record<string, string>;
}
