import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IForm, IQuestion } from "../types";

interface FormState {
  form: IForm;
  addQuestion: (question: IQuestion) => void;
  removeQuestion: (index: number) => void;
}

export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      form: { title: "", questions: [] },
 
      addQuestion: (question) =>
        set((state) => ({
          form: {
            ...state.form,
            questions: [...state.form.questions, question],
          },
        })),
 
      removeQuestion: (index) =>
        set((state) => ({
          form: {
            ...state.form,
            questions: state.form.questions.filter((_, i) => i !== index),
          },
        })),
    }),
    {
      name: "form-store",  
      partialize: (state) => ({ form: state.form }),  
    }
  )
);
