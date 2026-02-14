import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Cover from "./pages/Cover";
import Info from "./pages/Info";
import RSVP from "./pages/RSVP";
import Thanks from "./pages/Thanks";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Cover />} />
      <Route path="/info" element={<Info />} />
      <Route path="/rsvp" element={<RSVP />} />
      <Route path="/thanks" element={<Thanks />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
