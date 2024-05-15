import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { FaUnity } from "react-icons/fa6";
import { SiSparkar } from "react-icons/si";
import { SiBlender } from "react-icons/si";
import vuforia from '../../Assets/techstack/vuforia.png'
import google from '../../Assets/techstack/google.png'


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <FaUnity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiSparkar />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiBlender />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={vuforia} alt="" srcset="" style={{width:'40%'}}/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={google} alt="" srcset="" style={{width:'40%'}}/>
      </Col>
     
   
    </Row>
  );
}

export default Techstack;
