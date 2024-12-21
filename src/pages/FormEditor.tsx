import React, { useState } from "react";
import { useFormStore } from "../zustand";
import { IQuestion } from "../types";
import QuestionsComponent from "../components/QuestionsComponent";

const FormEditor: React.FC = () => {
  return (
    <div className="p-6">
      <input type="text" placeholder="Question title" />
      <hr />
      <QuestionsComponent />
    </div>
  );
};

export default FormEditor;
