import { skillData } from "@/app/info";
import SvgTemplate from "./SvgTemplate";
import { Container, Row, Col } from "react-bootstrap";
export default function Skills() {
  return (
    <>
      <h2 id="skills" className="gold pb-5">
        Technical skills
      </h2>
      <Container>
        <Row>
          {skillData().map((skillName, index) => {
            return (
              <Col lg={2} md={4} sm={6}>
                <SvgTemplate svgName={skillName} key={index} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
