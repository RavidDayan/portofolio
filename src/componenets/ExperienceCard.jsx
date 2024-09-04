import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";

export default function ExperienceCard({
  svg,
  title,
  start,
  end,
  notes,
  left,
}) {
  let svgPath;
  if (svg != null) {
    svgPath = `/svg/${svg.toLowerCase().replace(/\./g, "")}.svg`;
  } else {
    svgPath = null;
  }
  const showPicture = useMediaQuery({ minWidth: 576 });
  if (left) {
    return (
      <Card className="text-background text-color text-start m-3">
        <Card.Body >
          <Container >
            <Row>
              <Col sm={10}>
                <Card.Text>{title}</Card.Text>
                {notes.map((note, index) => {
                  return <Card.Text key={index}> {note}</Card.Text>;
                })}
                <Card.Text>
                  {start}-{end}
                </Card.Text>
              </Col>
              {showPicture ? (
                <Col sm={2}>
                  <Image src={svgPath} alt={svg} layout="responsive" width={300} height={300} />
                </Col>
              ) : null}
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  } else {
    return (
      <Card className="text-background text-color text-start m-3">
        <Card.Body>
          <Container>
            <Row>
              {showPicture ? (
                <Col sm={2}>
                  <Image src={svgPath} alt={svg} layout="responsive" width={300} height={300} />
                </Col>
              ) : null}
              <Col sm={10}>
                <Card.Text>{title}</Card.Text>
                {notes.map((note, index) => {
                  return <Card.Text key={index}> {note}</Card.Text>;
                })}
                <Card.Text>
                  {start}-{end}
                </Card.Text>
              </Col >
            </Row>
          </Container>
        </Card.Body>
      </Card>
    );
  }
}
