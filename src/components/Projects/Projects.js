import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import driver from "../../Assets/Projects/driver.jpg";
import blockchain from "../../Assets/Projects/blockchain.jpg";
import hostel from "../../Assets/Projects/hostel.jpg";
import medicode from "../../Assets/Projects/medicode.jpg";
import law from "../../Assets/Projects/law.jpg";
import data from "../../Assets/Projects/data.jpg";

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
              imgPath={driver}
              isBlog={false}
              title="Driver Drowsiness Detector"
              description="A real-time driver-alertness monitoring system that watches the driver’s face via webcam and triggers a physical buzzer alarm (through an ESP32 microcontroller) if signs of drowsiness are detected."
              ghLink="https://github.com/Shameer2006/driver-drowsiness-detector-using-streamlit"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blockchain}
              isBlog={false}
              title="TeaTrace Blockchain"
              description="A blockchain-powered supply-chain management system tailored for tea supply — designed to track tea from origin (farmers/plantations) through processing, distribution, and up to retailers/consumers, with full transparency and traceability at every step."
              ghLink="https://github.com/Shameer2006/tea-scm-using-block-chain"
              demoLink="http://tea-scm-using-block-chain.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hostel}
              isBlog={false}
              title="Hostel Management System"
              description="A comprehensive hostel management application built for efficient administration of student housing — handling everything from room allotments and attendance to out-passes, complaints, leaves and student/staff management."
              ghLink="https://github.com/Shameer2006/hostel-management"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medicode}
              isBlog={false}
              title="Medicode"
              description="MediCode is a full-stack web application that helps users understand medical information more easily. It provides an AI-powered medical chatbot along with an image-analysis tool for medical prescriptions or reports. It supports English, Tamil, and Hindi — making medical knowledge accessible to a wider audience."
              ghLink="https://github.com/Shameer2006/medicode"
              demoLink="https://medicode4.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={law}
              isBlog={false}
              title="Lawbot"
              description="A web-based legal assistant designed to help users understand legal information, get guidance on law-related queries, and interact with legal documents through a conversational interface. LawBot aims to make legal information more accessible, especially to people without formal legal training."
              ghLink="https://github.com/Shameer2006/lawbot"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={data}
              isBlog={false}
              title="Data Visualization"
              description="A flexible web-app for interactive data exploration and visualization — allowing users to load datasets and generate insightful charts and graphs via a simple UI, without writing code manually for every visualization."
              ghLink="https://github.com/Shameer2006/data-visualization"
              demoLink="https://shameer2006-data-visualization-app-e5tiao.streamlit.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
