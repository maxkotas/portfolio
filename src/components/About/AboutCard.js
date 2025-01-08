import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", marginBottom: "1.5rem" }}>
            Hello! My name is <span className="purple">Max Kotas</span>, and I’m from{" "}
            <span className="purple">Dallas, Texas</span>.
            <br />
            I recently graduated with a Bachelor’s degree in <span className="purple">Electrical Engineering</span> from{" "}
            <span className="purple">Texas A&M University</span>, where I honed my passion for technology, innovation, and problem-solving.
            <br />
            Beyond my professional interests, I enjoy exploring activities that keep me inspired and curious:
          </p>

          <ul>
            {[
              "Exploring history and culture through travel",
              "Hiking through America's National Parks and discovering hidden gems",
              "Creating melodies and crafting original music on the guitar",
            ].map((activity) => (
              <li className="about-activity" key={activity}>
                <ImPointRight /> {activity}
              </li>
            ))}
          </ul>

          <p style={{ color: "var(--light-blue)", marginTop: "1.5rem" }}>
            <em>"Engineering lets me bring the dreams of my childhood to life—turning imagination into reality, one invention at a time."</em>
          </p>
          <footer className="blockquote-footer">Max</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;