import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={{ textAlign: 'center', marginTop: '20vh' }}>
      <h1>404 - Page Not Found</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">Go Back Home</Link>
    </div>
  );
}