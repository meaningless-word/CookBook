import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({ isLoaded: false, value: null });

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/recipe/${id}`)
      .then((response) => response.json())
      .then((data) => setRecipe({ isLoaded: true, value: data }));
  }, [id]);

  return (
    <>
      <button onClick={goBack}>назад</button>
      {!recipe.isLoaded ? (
        <div>{"loading...."}</div>
      ) : (
        <div>
          <h1>{recipe.value.title}</h1>
          <p className="ingredients">{recipe.value.ingredients}</p>
          <p>{recipe.value.preparative}</p>
        </div>
      )}
    </>
  );
};

export { Recipe };
