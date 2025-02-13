import React from "react";
import Badge from 'react-bootstrap/Badge';
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const Skills = React.forwardRef(({ heading, hardSkills, softSkills }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="m-0 bg-light" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-3 text-center">
          {heading}
        </h2>

        <h2 class="display-5">Technical Skills</h2>
          <>
            {hardSkills.map((skill, index) => (
              <Badge bg="secondary me-2 h5 text-wrap">{skill.name}</Badge>
            ))}
          </>
        
        <h2 class="display-5 pt-4">Leadership Skills</h2>
          <>
            {softSkills.map((skill, index) => (
              <Badge bg="secondary me-2 h5 text-wrap">{skill.name}</Badge>
            ))}
          </>
        
      </Container>
    </Jumbotron>
  );
});

export default Skills;
