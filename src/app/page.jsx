"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarWrapper from "../componenets/NavBarWrapper";
import Experience from "@/componenets/Experience";
import Projects from "@/componenets/Projects";
import Education from "@/componenets/Education";
import "./globals.css";
import { Container, Col, Row } from "react-bootstrap";
import Skills from "@/componenets/Skills";
import AboutMe from "@/componenets/AboutMe";

export default function Home() {
  return (
    <>
      <NavBarWrapper />
      <Container className="align-items-center text-center">
        <Row className="p-4">
          <AboutMe />
        </Row>
        <Row className="p-4">
          <Education />
        </Row>
        <Row className="p-4">
          <Projects />
        </Row>
        <Row className="p-4">
          <Experience />
        </Row>
        <Row className="p-4">
          <Skills />
        </Row>
      </Container>
    </>
  );
}
