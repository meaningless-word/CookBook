import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Cuisines = () => {
  const [cuisunes, setCuisines] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/cuisine/")
      .then((response) => response.json())
      .then((data) => setCuisines(data));
  }, []);

  return (
    <>
      <ul>
        {cuisunes.map((item) => (
          <li key={item.id}>
            <NavLink to={`cuisine/${item.id}`}>{item.title}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export { Cuisines };
