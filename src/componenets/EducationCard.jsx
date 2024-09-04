import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

export default function EducationCard({
  svg,
  school,
  degree,
  gpa,
  start,
  end,
}) {
  let svgPath;
  if (svg != null) {
    svgPath = `/svg/${svg.toLowerCase().replace(/\./g, "")}.svg`;
  } else {
    svgPath = null;
  }

  const showPicture = useMediaQuery({ minWidth: 768 });
  return (
    <Card className="text-background text-color">
      <Card.Body>
        <Container>
          <Row>
            {showPicture ? (
              <Col lg={2}>
                <Image src={svgPath} alt={svg} layout="responsive" width={300} height={300} />
              </Col>
            ) : null}
            <Col lg={10}>
              <Card.Text>{school}</Card.Text>
              {degree && <Card.Text>{degree}</Card.Text>}
              {gpa && <Card.Text>{gpa}</Card.Text>}
              <Card.Text>
                {start}-{end}
              </Card.Text>
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  );
}
