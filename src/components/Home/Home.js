import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import raj from '../../Assets/raj.png'

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> RAJ SINGH</strong>
              </h1>

              <div style={{ padding:"0px 50px", textAlign: "left" }}>
                <Type />
              </div>

              <div style={{ padding:"0px 50px", textAlign: "left" }}>
                
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++,C,C#,JAVASCRIPT. </b>
              </i>
              
              <br />
              <br />
            
            </p>
            
              </div>
            </Col>

            <Col md={5}
            className="rajimg"
            
            >
              <img
                src={raj}
                alt="home pic"
                className="img-fluid raj"
                style={{ height:'80vh' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>  
    </section>
  );
}

export default Home;
