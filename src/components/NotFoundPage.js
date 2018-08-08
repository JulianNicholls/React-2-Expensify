import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <React.Fragment>
    <h1>404</h1>
    <p>That page was not found.</p>
    <p>
      <Link to="/">Back to bed, back to reality</Link>
    </p>
  </React.Fragment>
);

export default NotFoundPage;
