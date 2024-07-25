import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/NotFound";

export default function NotFound() {
  return (
    <Wrapper>
      <div className="not-found-container">
        <h1>Sorry, the page you were looking for was not found.</h1>
        <Link to="/" className="button selected">
          Return to Home
        </Link>
      </div>
    </Wrapper>
  );
}
