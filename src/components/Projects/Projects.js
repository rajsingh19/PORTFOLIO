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
import transitionmap from "../../Assets/Projects/transition map.jpg";
import heavenestate from "../../Assets/Projects/heavenestate.jpg";
import solar from "../../Assets/Projects/solar.png";
import neAR from "../../Assets/Projects/near.png";
import house from "../../Assets/Projects/bus.png";
import card from "../../Assets/Projects/card.png";
import house1 from "../../Assets/Projects/house.png";
import virtual from "../../Assets/Projects/virtual.png";

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
              imgPath={house}
              isBlog={false}
              title="Real Estate -AR"
              description="I am developing an AR app that transforms 2D real estate images into interactive 3D buildings in the real world. When users scan a target image, virtual buildings appear, which they can rotate and explore in 360°. The goal is to make property visualization more realistic, engaging, and growth-driven, replacing the traditional, static way of viewing real estate."
              driveLink="YOUR_DRIVE_VIDEO_LINK_HERE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={solar}
              isBlog={false}
              title="Edu-AR"
              description="Edu-AR is an interactive learning platform that uses Augmented Reality to make studying engaging and practical. Users can choose their stream—like Engineering, Medical, or Science and scan any 2D image from books to view its 3D model in the real world. like, scanning a human lungs, or the solar system shows detailed 3D visuals for immersive learning"
              driveLink="YOUR_DRIVE_VIDEO_LINK_HERE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={neAR}
              isBlog={false}
              title="neAR"
              description="neAR is an AR-based app that lets users create and share real-world memories. By capturing a photo at any location, it appears as a floating AR image when viewed later through the app. With GPS integration, photos stay fixed to their exact spot, and a radar system shows nearby users. The app also includes a messaging feature for easy interaction and connection."
              driveLink="YOUR_DRIVE_VIDEO_LINK_HERE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={card}
              isBlog={false}
              title="Bussiness-Card"
              description="AR Business Card is an interactive and innovative way to present professional identity using Augmented Reality (AR). Users can scan their card to view a 3D version with an intro video, 3D icon buttons for LinkedIn, Instagram, and call options, plus a personalized 3D avatar. It transforms traditional business cards into a modern, engaging, and information-rich AR experience."
              driveLink="YOUR_DRIVE_VIDEO_LINK_HERE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={house1}
              isBlog={false}
              title="ARchitect"
              description="ARchitect is an advanced Augmented Reality (AR) platform that helps users visualize real estate properties in immersive 3D and AR. Users can preview models, walk through interiors, and customize designs. With accurate scale, realistic visuals, and collaboration tools, ARchitect makes property exploration and interior design more interactive and efficient."
              driveLink="YOUR_DRIVE_VIDEO_LINK_HERE"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virtual}
              isBlog={false}
              title="Vizzle"
              description="Vizzle is a virtual try-on platform that uses Augmented Reality (AR) to let users try products like goggles, hats, and jewelry in real time. iPhone users can enjoy a full-body virtual try-on for clothes and accessories. By offering immersive AR experiences, Vizzle makes online shopping more interactive, personalized, and convenient for everyone."
              driveLink="YOUR_DRIVE_VIDEO_LINK_HERE"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
