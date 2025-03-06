import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div style={{ position: "relative" }}>
        <Card.Img 
          variant="top" 
          src={props.imgPath} 
          alt="card-img" 
          style={{ 
            height: "250px",  // Fixed height
            width: "100%",    // Full width of container
            objectFit: "cover" // This ensures images maintain aspect ratio
          }}
        />
        {props.date && (
          <div 
            style={{ 
              position: "absolute", 
              top: "10px", 
              right: "10px", 
              backgroundColor: "rgba(0, 0, 0, 0.7)", 
              color: "#fff", 
              padding: "5px 10px", 
              borderRadius: "4px",
              fontWeight: "500",
              fontSize: "0.9rem"
            }}
          >
            {props.date}
          </div>
        )}
      </div>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: props.ghLink ? "10px" : "0px" }}
          >
            <CgWebsite /> &nbsp;
            {props.buttonText || "Technical Report"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
