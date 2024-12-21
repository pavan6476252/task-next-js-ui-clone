import React from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from "react-router-dom";
import FormEditor from "../pages/FormEditor";
import FormPreview from "../pages/FromPreview";
import FormFill from "../pages/FormFill";

export default createBrowserRouter([
    { path: "/", Component: FormEditor },
    { path: "/preview/:formId", Component: FormPreview },
    { path: "/fill/:formId", Component: FormFill }
])
