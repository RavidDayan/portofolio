import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from "next/image";

export default function ProjectCard({project}) {
  return (
    <Card className="text-background text-color h-100">
      <Card.Body>
        <Container>
          <Row>
            <Col>
              <Card.Title>{project.projectName}</Card.Title>
              <Row>
                <Col>
                {project.ProjectTech.map((tech, index) => {
                  let svgPath = `/svg/${tech
                    .toLowerCase()
                    .replace(/\./g, "")}.svg`;
                  return <Image src={svgPath} alt={tech} width={30} height={30} key={index}/>;
                })}
                </Col>
              </Row>
              <Card.Text className="text-start">{project.ProjectText}</Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
