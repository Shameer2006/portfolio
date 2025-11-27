import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Education() {
    const educationDetails = [
        {
            id: 1,
            institution: "Rajalakshmi Institute of Technology",
            degree: "Bachelor of Engineering in Electronics and Communication Engineering",
            year: "2024 - 2028",
            description: "Currently Studing 2nd year Electronics and Communication Engineering with good CGPA of 8.6",
        },
        {
            id: 2,
            institution: "Kuylappalayam Higher Secondary School",
            degree: "Higher Secondary Education",
            year: "2022 - 2024",
            description: "Studied 11th and 12th with Specialized in Science with Mathematics and Computer Science.",
        },
        {
            id: 3,
            institution: "Nirvana High School",
            degree: "School Education",
            year: "2022",
            description: "Completed SSLC education with 85%",
        },
    ];

    return (
        <Container fluid className="education-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Education </strong>
                </h1>
                <p style={{ color: "white" }}>
                    My academic journey.
                </p>

                <div className="timeline">
                    {educationDetails.map((edu, index) => (
                        <div className={`timeline-container ${index % 2 === 0 ? "left" : "right"}`} key={edu.id}>
                            <div className="content">
                                <h3 className="purple">{edu.degree}</h3>
                                <h4 style={{ color: "white" }}>{edu.institution}</h4>
                                <h5 style={{ color: "#a588c0" }}>{edu.year}</h5>
                                <p style={{ color: "white" }}>{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </Container>
        </Container>
    );
}

export default Education;
