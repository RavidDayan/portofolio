import { Container, Row ,Col} from "react-bootstrap";
import Image from "next/image";
import { aboutMeData } from "@/app/info";
export default function AboutMe() {
  return (
    <Container>
      <Image 
        id="portoPicture"
        className="rounded-circle p-4"
        src={"/images/portoFace.png"}
        alt={"ravid dayan"}
        width={300}
        height={300}
      />
      <Row className="text-color">
        <Col></Col>
        <Col lg={9}>{aboutMeData()}</Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
