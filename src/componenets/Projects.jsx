import { projectsData } from "@/app/info";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
export default function Projects() {
  return (
    <Container>
      <Row>
        <h2 id="projects" className="gold pb-3">
          Projects
        </h2>
        {projectsData().map((project, index) => {
          return (
            <Col className="p-2"lg={6} key={index}>
              <ProjectCard project={project}  />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
