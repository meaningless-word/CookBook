import React from "react";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const CategoryFilter = (props) => {
  const id = props.id || null;
  const [categories, setCategories] = useState({ isLoaded: false, items: [] });
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryQuery = searchParams.get("category") || "";

  const handleOnChange = (e) => {
    setSearchParams({ category: e.target.value });
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/category/?cuisine=${id}`)
      .then((response) => response.json())
      .then((data) => setCategories({ isLoaded: true, items: data }));
  }, [id]);

  return (
    <>
      {!categories.isLoaded ? (
        <div>{"..."}</div>
      ) : (
        <select value={categoryQuery} onChange={handleOnChange}>
          <option value="">--- все ---</option>
          {categories.items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export { CategoryFilter };
