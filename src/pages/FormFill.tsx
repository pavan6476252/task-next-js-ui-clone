import React from "react";
import { useParams } from "react-router-dom";

const FormFill: React.FC = () => {
  const { formId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Fill Form</h1>
      <p>Filling form with ID: {formId}</p>
    </div>
  );
};

export default FormFill;
