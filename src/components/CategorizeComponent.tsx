import React, { useEffect, useState } from "react";
import { ICategorize, IQuestion } from "../types";
import { useFormStore } from "../zustand";

function CategorizeComponent({ questionData }: { questionData?: ICategorize }) {
  const { addQuestion } = useFormStore()
  const [question, setQuestion] = useState<ICategorize>({
    desc: "",
    image: "",
    points: 0,
    categories: [],
    items: [],
  });
  useEffect(() => {
    if (questionData)
      setQuestion(questionData)
  }, [questionData])

  const handleAddCategory = () => {
    setQuestion((prev) => ({
      ...prev,
      categories: [...prev.categories, ""],
    }));
  };

  const handleAddItem = () => {
    setQuestion((prev) => ({
      ...prev,
      items: [...prev.items, { category: "", item: "" }],
    }));
  };
  const handleSubmission = () => {
    addQuestion(question);

    setQuestion({
      desc: "",
      image: "",
      points: 0,
      categories: [],
      items: [],
    })
  }

  return (
    <div className="p-6 bg-gray-50 rounded-md shadow-md">
      <div className="flex gap-6 mb-4">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Description:</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter question description"
            value={question.desc}
            onChange={(e) =>
              setQuestion({ ...question, desc: e.target.value })
            }
          />
        </div>
        <div className="w-1/4">
          <label className="block text-sm font-medium mb-2">Points:</label>
          <input
            type="number"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Points"
            value={question.points}
            onChange={(e) =>
              setQuestion({
                ...question,
                points: e.target.value ? Number(e.target.value) : 0,
              })
            }
          />
        </div>
      </div>

      <div className="mb-6">
        <button
          onClick={handleAddCategory}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Add Category
        </button>
        <ul className="mt-4 space-y-2">
          {question.categories.map((category, index) => (
            <li key={index}>
              <input
                type="text"
                placeholder={`Category ${index + 1}`}
                value={category}
                onChange={(e) => {
                  const newCategories = [...question.categories];
                  newCategories[index] = e.target.value;
                  setQuestion({ ...question, categories: newCategories });
                }}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Items:</h2>
        <button
          onClick={handleAddItem}
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          Add Item
        </button>
        <ul className="mt-4 space-y-4">
          {question.items.map((item, index) => (
            <li key={index} className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Item Name"
                value={item.item}
                onChange={(e) => {
                  const newItems = [...question.items];
                  newItems[index].item = e.target.value;
                  setQuestion({ ...question, items: newItems });
                }}
                className="flex-1 p-2 border border-gray-300 rounded-md"
              />
              <select
                value={item.category}
                onChange={(e) => {
                  const newItems = [...question.items];
                  newItems[index].category = e.target.value;
                  setQuestion({ ...question, items: newItems });
                }}
                className="w-1/3 p-2 border border-gray-300 rounded-md"
              >
                <option value="">Select Category</option>
                {question.categories.map((category, catIndex) => (
                  <option key={catIndex} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </li>
          ))}
        </ul>
      </div>

      <button onClick={handleSubmission} className="bg-blue-400 rounded-md text-white px-3 py-1">add question</button>
    </div>
  );
}

export default CategorizeComponent;
