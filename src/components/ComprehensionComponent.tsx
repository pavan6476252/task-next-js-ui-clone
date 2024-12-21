import React, { useEffect, useState } from 'react';
import { IComprehension } from '../types';

function ComprehensionComponent({ questionData }: { questionData?: IComprehension }) {
  const [question, setQuestion] = useState<IComprehension>({
    passage: '',
    image: '',
    points: 0,
    question: { desc: '', options: [], correctAnswer: 0 },
  });

  const handleAddOption = () => {
    setQuestion((prev) => ({
      ...prev,
      question: {
        ...prev.question,
        options: [...prev.question.options, ''],
      },
    }));
  };
  useEffect(() => {
    if (questionData)
      setQuestion(questionData)
  }, [questionData])
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Passage:</label>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md"
        value={question.passage}
        onChange={(e) => setQuestion({ ...question, passage: e.target.value })}
      />

      <label className="block text-sm font-medium mt-4 mb-2">Options:</label>
      <button
        onClick={handleAddOption}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Add Option
      </button>

      <ul>
        {question.question.options.map((option, index) => (
          <li key={index}>
            <input
              type="text"
              value={option}
              onChange={(e) => {
                const newOptions = [...question.question.options];
                newOptions[index] = e.target.value;
                setQuestion({
                  ...question,
                  question: { ...question.question, options: newOptions },
                });
              }}
              className="p-2 border border-gray-300 rounded-md mt-2"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComprehensionComponent;
