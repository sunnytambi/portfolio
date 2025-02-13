import React from "react";
import { Badge } from "react-bootstrap";

const GetInTouch = ({ heading, message, email }) => {
  return (
    <>
      <h2 className="display-4 pb-3 text-center">{heading}</h2>
      <p className="lead text-center pb-3">
        {message}, <a className="text-decoration-none" href={`mailto:${email}`}>
          <Badge bg="secondary">
            <i className="fas fa-envelope" /> {email}
          </Badge>
        </a>.
      </p>
    </>
  );
};

export default GetInTouch;
