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
            console.log(index)
            return (
              <Col lg={2} xs={4} key={index}>
                <SvgTemplate svgName={skillName}  key={index}/>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
