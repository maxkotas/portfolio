import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-image-container">
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt="card-img" 
          className="project-image"
        />
        {props.date && (
          <div className="project-date-badge">
            {props.date}
          </div>
        )}
      </div>
      <Card.Body className="project-card-body">
        <Card.Title className="project-title">{props.title}</Card.Title>
        <Card.Text className="project-description">
          {props.description}
        </Card.Text>
        <div className="project-buttons">
          {props.ghLink && (
            <Button className="project-button github-button" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              className={`project-button demo-button ${props.ghLink ? "with-margin" : ""}`}
              href={props.demoLink}
              target="_blank"
            >
              <CgWebsite /> &nbsp;
              {props.buttonText || "Technical Report"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
