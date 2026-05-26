//—————————————————————————————————————————————————————————————————
// Imports
//—————————————————————————————————————————————————————————————————

import { Link } from "react-router-dom";

import "./NotFoundPage .scss";

//—————————————————————————————————————————————————————————————————
// Not Found Component
//—————————————————————————————————————————————————————————————————

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>404 not found</h1>
      <p>
        Go back <Link to="/">home</Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
