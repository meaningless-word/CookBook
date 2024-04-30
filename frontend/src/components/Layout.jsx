import React from "react";
import { Outlet } from "react-router-dom";

import { Cuisines } from "./Cuisines";

const Layout = () => {
  return (
    <>
      <header>
        <h1>Кулинарная книга</h1>
      </header>
      <main className="container">
        <aside>
          <Cuisines />
        </aside>
        <article>
          <Outlet />
        </article>
      </main>
      <footer className="container">
        <a href="http://localhost:8000/swagger-ui/">Swagger</a>
      </footer>
    </>
  );
};

export { Layout };
