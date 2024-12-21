import React from "react";
import { useParams } from "react-router-dom";

const FormPreview: React.FC = () => {
  const { formId } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Form Preview</h1>
      <p>Previewing form with ID: {formId}</p>
    </div>
  );
};

export default FormPreview;
