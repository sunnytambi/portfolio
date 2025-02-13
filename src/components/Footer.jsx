import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  return (
    <footer className="mt-auto py-5 text-center bg-white">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/sunnytambi"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Sunny Tambi
          </span>
        </a>{" "}
        using <i className="fab fa-react" />
        
      </Container>
    </footer>
  );
};

export default Footer;
