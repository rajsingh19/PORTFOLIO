import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Devil from "../../Assets/Projects/Devil.png";
import FaceMask from "../../Assets/Projects/Face Mask.png";
import VRROOM from "../../Assets/Projects/VR ROOM.png";
import Lion from "../../Assets/Projects/Lion.png";
import GPS from "../../Assets/Projects/GPS.jpg";
import Butterfly from "../../Assets/Projects/Butterfly.png";
import society from "../../Assets/Projects/society.jpg";
import transitionmap  from "../../Assets/Projects/transition map.jpg";
import heavenestate  from "../../Assets/Projects/heavenestate.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={society}
              isBlog={false}
              title="Real Estate -AR"
              description="About
              I am creating an AR app where, when a user scans a target image, virtual buildings appear in the real world. The user can rotate these buildings to view them in 360 degrees within the real world."
              
             
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Lion}
              isBlog={false}
              title="Lion Mask Filter"
              description="I designed a LION mask filter on Spark AR for Instagram. When applied, users' faces are seamlessly adorned with a majestic lion mask, adding a touch of wildness to their selfies."
              ghLink="https://github.com/rajsingh19/LION-MASK-FILTER"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={heavenestate}
              isBlog={false}
              title="VirtuBuild -APK"
              description="About
             VirtuBuild is a ar/vr marketing platform where users can have a look at properties before it is built in AR and VR encouraging remote marketing,informed decision making and save staging costs for builders"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Butterfly}
              isBlog={false}
              title="Butterfly Filter"
              description="I created a butterfly filter using Spark AR for Instagram. When users activate it, their face transforms to resemble a butterfly, creating a magical, metamorphic effect."
              ghLink="https://github.com/rajsingh19/Butterfly-Filter"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={transitionmap}
              isBlog={false}
              title="Real Estate -AR"
              description="About
              I am creating an AR app where users can change the buildings and view the modified ones. In this app, the buildings also auto-rotate."
              
             
              
            />
          </Col>
  

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FaceMask}
              isBlog={false}
              title="Face Mask Filter"
              description="About
              I designed a face mask filter on Spark AR for Instagram. Upon use, it adorns the user's face with an appealing mask, enhancing their appearance with creativity and style."
              
              ghLink="https://github.com/rajsingh19/Face-Mask-Filter"
              
            />
          </Col>

          
         
         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
