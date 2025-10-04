import React, { useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
// import Particle from "./Particle";
import pdfFile from "../../Assets/Raj-Resume.pdf" // adjust path

const Resume = () => {
  useEffect(() => {
    // Wait until pdfjsLib is available from CDN script
    const loadPDF = async () => {
      if (!window.pdfjsLib) return;

      const container = document.getElementById("pdf-container");
      container.innerHTML = ""; // clear previous

      const loadingTask = window.pdfjsLib.getDocument(pdfFile);
      loadingTask.promise.then((pdf) => {
        console.log("PDF loaded. Total pages:", pdf.numPages);

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          pdf.getPage(pageNum).then((page) => {
            const scale = 1.2;
            const viewport = page.getViewport({ scale });

            const canvas = document.createElement("canvas");
            const context = canvas.getContext("2d");
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            page.render({ canvasContext: context, viewport });

            container.appendChild(canvas);
          });
        }
      });
    };

    loadPDF();
  }, []);

  return (
    <Container fluid className="resume-section">
      {/* <Particle /> */}

      {/* Top Download Button */}
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdfFile}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>

      {/* PDF Viewer */}
      <Row className="resume d-flex justify-content-center">
        <div id="pdf-container"></div>
      </Row>

      {/* Bottom Download Button */}
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <Button
          variant="primary"
          href={pdfFile}
          target="_blank"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload />
          &nbsp;Download CV
        </Button>
      </Row>
    </Container>
  );
};

export default Resume;
