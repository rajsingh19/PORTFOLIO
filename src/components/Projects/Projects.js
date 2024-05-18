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
              imgPath={Lion}
              isBlog={false}
              title="Lion Mask Filter"
              description="I designed a LION mask filter on Spark AR for Instagram. When applied, users' faces are seamlessly adorned with a majestic lion mask, adding a touch of wildness to their selfies."
              ghLink="https://github.com/rajsingh19/LION-MASK-FILTER"
              
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
              imgPath={VRROOM}
              isBlog={false}
              title="Interview Room"
              description="I developed a comprehensive virtual platform designed to facilitate the learning of soft skills. This platform comprises various interactive panels, including a virtual meeting room, an interview room, and an auditorium. Each of these panels serves as real-life scenarios where users can practice and enhance their soft skills.

               AI models play the role of interviewers. These AI models are programmed to conduct mock interviews. They ask questions, evaluate responses, and offer feedback to help users improve their interviewing skills. The virtual meeting room allows users to participate in or conduct virtual meetings, fostering skills like communication, teamwork, and leadership. The auditorium is designed for presentations and public speaking practice, enabling users to build confidence and polish their presentation abilities. 
              
              This platform offers a comprehensive, immersive learning experience, leveraging AI technology to provide practical, hands-on training in essential soft skills."
              ghLink="https://github.com/rajsingh19/Interview-Room"
                       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Devil}
              isBlog={false}
              title="Devil-Filter"
              description="Create a devil face filter in Spark AR Studio by adding horns, red skin, and glowing eyes, then publish it to Instagram for users to apply in their stories and posts."
              ghLink="https://github.com/rajsingh19/Devil-Filter"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GPS}
              isBlog={false}
              title="Location Tracker"
              description="I developed a GPS tracker project utilizing Unity3D with ARKit and ARCore to place AR objects at specific GPS coordinates. This project leverages Mapbox for precise geolocation and integrates GameSparks for backend data management. Here's a step-by-step guide:

              1. **Mapbox Integration**: Set up Mapbox SDK in Unity to accurately track GPS locations.
              2. **ARKit and ARCore**: Use these frameworks to overlay AR objects at designated GPS coordinates, providing an immersive augmented reality experience.
              3. **GameSparks Database**: Implement GameSparks to store and retrieve messages tagged at specific locations, ensuring data persistence and easy access.
              
              This setup not only creates a robust GPS-based AR experience but also encourages social interaction through geotagged messages and AR content."
              ghLink="https://github.com/rajsingh19/Location-Tracker/tree/main"
              
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
