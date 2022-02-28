import React from "react";
import { Routes as Router, Route, Navigate } from "react-router-dom";
import { Results } from "./Results";

export const Routes = () => {
  return (
    <div className="p-4">
      <Router>
        <Route exact path="/" element={<Navigate replace to="/search" />} />
        <Route exact path="/search" element={<Results />} />
        <Route exact path="/images" element={<Results />} />
        <Route exact path="/news" element={<Results />} />
        <Route exact path="/videos" element={<Results />} />
      </Router>
    </div>
  );
};
