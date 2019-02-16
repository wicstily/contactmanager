import React from "react";

export default function NotFound() {
  return (
    <div>
      <h1 className="display-4">
        <span className="text-danger">404</span> not found
      </h1>
      <p className="lead">
        what are you doing here? this is not a valid url for this website. get
        out, kiddo
      </p>
    </div>
  );
}
