import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>404 - Not Found</h1>
      <p>Oops! The page you are looking for doesn't exist.</p>
      <Link to="/">Back to Homepage</Link>
    </div>
  );
}

export default NotFound;