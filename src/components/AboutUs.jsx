import styled from "styled-components";

import { Element } from "react-scroll";

// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
// Importen la imagen
import perfil from "../images/perfil.png";

import perfil_rubens from "../images/Rubens.jpeg";
const StyledAboutUs = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

//Aqui se debe de cambiar el contenido de nosotros solo se debe de cambiar el contenido de los parrafos y las imagenes

export default function AboutUs() {
  const styles = {
    inter: {
     
      marginBottom: '120px',
     
    },
  };

  return (
    <Element name={"About"} id="about">
      <StyledAboutUs className="section">
        <Container style={styles.inter} >
          <Container className="d-flex">
            <Title>
              <h2>About Us</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
              <p className="fs-2 text-warning">Rubens Andre Apresa Echeverria</p>
                <p className="fs-6">
I am a seventh-semester student studying System Engineering at Universidad del Norte. At 20 years old, I reside in Barranquilla. In my leisure time, I enjoy immersing myself in video games and hitting the gym. Collaboration fuels my passion, as I thrive in team environments. My creativity shines through in all my projects.</p>
           
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
            <ContentContainer>
                <img
                  src={perfil_rubens}   
                  alt="GitHub Avatar"
                  loading="lazy"
                  className="mx-auto rounded-circle"
                  style={{ width: "15rem", height: "15rem" }}
                />
                <p>role</p>
              </ContentContainer>
            </Col>
          </Row>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
              <p className="fs-2 text-info">Name</p>
                <p className="fs-6">
                 inf....
                </p>
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
            <ContentContainer>
                <img
                  src={perfil}   
                  alt="GitHub Avatar"
                  loading="lazy"
                  className="mx-auto rounded-circle"
                  style={{ width: "15rem", height: "15rem" }}
                />
                <p>role</p>
              </ContentContainer>
           
            </Col>
            
          </Row>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
            <p className="fs-2 " style={{color:'purple'}}>Name</p>
              <Container>
                <p className="fs-6"> 

                  inf...
                </p>
                
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
            <ContentContainer>
                <img
                  src={perfil}   
                  alt="GitHub Avatar"
                  loading="lazy"
                  className="mx-auto rounded-circle"
                  style={{ width: "15rem", height: "15rem" }}
                />
                <p>role</p>
              </ContentContainer>
           
            </Col>
            
          </Row>
          <Row className="align-items-center mt-5">
          
            <Col className="d-flex flex-column text-center">
            <p className="fs-2 " style={{color:'red'}}>Name</p>
              <Container>
                <p className="fs-6"> 
                  inf...

                </p>
                
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
            <ContentContainer>
                <img
                  src={perfil}   
                  alt="GitHub Avatar"
                  loading="lazy"
                  className="mx-auto rounded-circle"
                  style={{ width: "15rem", height: "15rem" }}
                />
                <p>role</p>
              </ContentContainer>
            </Col>
            
          </Row>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
          
              <Container>
               <p className="fs-2 text-success">Name</p>
                <p className="fs-6">
                  inf...
                </p>
                
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
            <ContentContainer>
                <img
                  src={perfil}   
                  alt="GitHub Avatar"
                  loading="lazy"
                  className="mx-auto rounded-circle"
                  style={{ width: "15rem", height: "15rem" }}
                />
                <p>role</p>
              </ContentContainer>
            </Col>
            
          </Row>
        </Container>
      </StyledAboutUs>
    </Element>
  );
}
