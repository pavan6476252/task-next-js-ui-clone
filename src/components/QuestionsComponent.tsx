import React, { useState } from 'react';
import CategorizeComponent from './CategorizeComponent';
import ClozeComponent from './ClozeComponent';
import ComprehensionComponent from './ComprehensionComponent';
import { useFormStore } from '../zustand';
import { IQuestion, ICategorize, ICloze, IComprehension } from '../types';

function QuestionsComponent() {
  const [selectedType, setSelectedType] = useState<'Categorize' | 'Cloze' | 'Comprehension'>('Categorize');
  const { form } = useFormStore();

  const renderQuestionComponent = (question: IQuestion) => {
    if (selectedType === 'Categorize' && isCategorize(question)) {
      return <CategorizeComponent questionData={question} />;
    }
    if (selectedType === 'Cloze' && isCloze(question)) {
      return <ClozeComponent questionData={question} />;
    }
    if (selectedType === 'Comprehension' && isComprehension(question)) {
      return <ComprehensionComponent questionData={question} />;
    }
    return null;
  };

  const isCategorize = (question: IQuestion): question is ICategorize => {
    return (question as ICategorize).categories !== undefined;
  };

  const isCloze = (question: IQuestion): question is ICloze => {
    return (question as ICloze).sentence !== undefined;
  };

  const isComprehension = (question: IQuestion): question is IComprehension => {
    return (question as IComprehension).passage !== undefined;
  };

  return (
    <div>

      <div className="p-4 border rounded-md mt-5">
        <h2 className="text-xl font-bold mb-4">Add a Question</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Question Type:</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value as any)}
            className="p-2 border border-gray-300 rounded-md w-full"
          >
            <option value="Categorize">Categorize</option>
            <option value="Cloze">Cloze</option>
            <option value="Comprehension">Comprehension</option>
          </select>
        </div>


      </div>
      <div className="  space-y-4 flex flex-col">
        {form.questions.map((question, index) => (
          <div className='' key={index}>{renderQuestionComponent(question)}</div>
        ))}
      </div>
    </div>
  );
}

export default QuestionsComponent;
