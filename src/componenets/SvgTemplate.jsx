import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import Card from "react-bootstrap/Card";
export default function svgTemplate({ svgName }) {
  let svgPath = `/svg/${svgName.toLowerCase().replace(/\./g, "")}.svg`;

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Image src={svgPath} alt={svgName} width={70} height={70} />
          </Col>
        </Row>
        <Row className="text-color">
          {" "}
          <Col>{svgName}</Col>
        </Row>
      </Container>
    </>
  );
}
