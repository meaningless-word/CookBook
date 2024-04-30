import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div>
        <h6>404 Error</h6>
        <h1>Page not found</h1>
        <p>
          Sorry, the page you are looking for cold not be found or has been
          removed.
        </p>
      </div>
    </>
  );
};

export { Error };
