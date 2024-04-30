import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Layout } from "./Layout";
import { Cuisine } from "./Cuisine";
import { Recipe } from "./Recipe";
import { Error } from "./Error";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="cuisine/:id" element={<Cuisine />} />
        <Route path="recipe/:id" element={<Recipe />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
