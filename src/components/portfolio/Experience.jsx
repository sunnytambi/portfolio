import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <Jumbotron id="experience" className="m-0 bg-white">
      <section className="section align-self-center">
        <Container>
          <Jumbotron className="bg-white">
            <h2 className="display-4 mb-5 text-center">
              {experiences.heading}
            </h2>
            <Row>
              {
                experiences.data.map((data, index) => {
                  return <ExperienceCard key={index} data={data} />
                })
              }
            </Row>
          </Jumbotron>
        </Container>
      </section>
    </Jumbotron>
  );
}

export default Experience;