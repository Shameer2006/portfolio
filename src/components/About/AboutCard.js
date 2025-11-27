import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">A.Mohamed Shameer</span>{" "}
            from <span className="purple">Tamilnadu, India</span>.
            <br />
            I’m currently pursuing my{" "}
            <span className="purple">Electronics and Communication Engineering</span> at{" "}
            <span className="purple">Rajalakshmi Institute of Technology</span>.

            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Create technology that empowers people."{" "}
          </p>
          <footer className="blockquote-footer">A.Mohamed Shameer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
