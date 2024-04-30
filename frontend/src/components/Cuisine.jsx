import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";

import { CategoryFilter } from "./CategoryFilter";

const Cuisine = () => {
  const { id } = useParams();
  const [recipes, setRecipes] = useState({ isLoaded: false, items: [] });
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryQuery = searchParams.get("category") || "";

  useEffect(() => {
    fetch(
      `http://127.0.0.1:8000/api/recipe/?cuisine=${id}&category=${categoryQuery}`
    )
      .then((response) => response.json())
      .then((data) => setRecipes({ isLoaded: true, items: data }));
  }, [id, categoryQuery]);

  return (
    <>
      <CategoryFilter id={id} />
      {!recipes.isLoaded ? (
        <div>{"loading..."}</div>
      ) : (
        recipes.items.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <li>{recipe.title}</li>
          </Link>
        ))
      )}
    </>
  );
};

export { Cuisine };
