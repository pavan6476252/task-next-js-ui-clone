import React, { useEffect, useState } from 'react';
import { ICloze } from '../types';

function ClozeComponent({ questionData }: { questionData?: ICloze }) {
  const [question, setQuestion] = useState<ICloze>({
    preview: '',
    image: '',
    points: 0,
    sentence: '',
    options: [],
    correctAnswers: [],
  });

  const handleAddOption = () => {
    setQuestion((prev) => ({ ...prev, options: [...prev.options, ''] }));
  };
  
  useEffect(() => {
    if (questionData)
      setQuestion(questionData)
  }, [questionData])
  return (
    <div>
      <label className="block text-sm font-medium mb-2">Sentence:</label>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md"
        value={question.sentence}
        onChange={(e) => setQuestion({ ...question, sentence: e.target.value })}
      />

      <label className="block text-sm font-medium mt-4 mb-2">Options:</label>
      <button
        onClick={handleAddOption}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Add Option
      </button>

      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <input
              type="text"
              value={option}
              onChange={(e) => {
                const newOptions = [...question.options];
                newOptions[index] = e.target.value;
                setQuestion({ ...question, options: newOptions });
              }}
              className="p-2 border border-gray-300 rounded-md mt-2"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClozeComponent;
