import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import mypic from './Assets/my_pic.jpg';
import './css/ProfileCard.css';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBIcon, MDBTypography } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import newCnLogo from './Assets/new-cn-logos-1-1711622387.svg';

export default function ProfileCard() {
  return (
    <div>
      <React.Fragment>
        <Container fixed>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' }, // Adjust flex direction for mobile
              backgroundColor: '#152238',
              backdropFilter: 'blur(5px)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              margin: { xs: '0', md: '-147px' },
              width: { xs: '100%', md: '198vh' },
              height: { xs: 'auto', md: '90vh' },
              marginTop: { xs: '10vh', md: '18vh' },
              borderRadius: '2vh',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0 2vh',
              overflow: 'hidden',
            }}
          >
            <div className="container">
              <div>
                <div className="col-lg-2 offset-lg-0" style={{ marginLeft: '-3vh', marginTop: '10vh', width: '55vh' }}>
                  <MDBCard className="mb-2" style={{ backgroundColor: '#152238', boxShadow: '0 15px 70px 0 rgba(31, 38, 135, 0.37)', backdropFilter: 'blur(25px)', borderRadius: '6vh' }}>
                    <MDBCardBody className="text-center">
                      <MDBCardImage
                        src={mypic}
                        alt="avatar"
                        className="rounded-circle img-fluid"
                        style={{ width: '100%', maxWidth: '300px' }}
                      />
                      <br></br>
                      <br></br>
                      <p style={{ color: "white" }}>Shri Vignesh S</p>
                      <p style={{ color: "white" }}>Full Stack Developer</p>
                      <div className="d-flex justify-content-center mb-5">
                        <MDBBtn className="btn btn-primary" style={{ marginRight: '15px' }} href="https://www.linkedin.com/in/shri-vignesh/"> <MDBIcon fab icon='linkedin-in' /></MDBBtn>
                        <MDBBtn className="btn btn-primary" style={{ marginRight: '15px', backgroundColor: '#ac2bac' }} href="https://www.instagram.com/___.s_h_r_i.___/"> <MDBIcon fab icon="instagram" /></MDBBtn>
                        <MDBBtn className="btn btn-primary" style={{ marginRight: '15px', backgroundColor: '#333333' }} href="https://g.dev/Shri37"> <MDBIcon fab icon="google" /></MDBBtn>
                     
                        <MDBBtn className="btn btn-primary" style={{ marginRight: '15px', backgroundColor: '#dd4b39' }} href="mailto:shrivigneshsumathi@gmail.com"> <MDBIcon fas icon="envelope" /></MDBBtn>
                        <a href="https://github.com/shrivignesh37">
                          <MDBBtn className="btn btn-primary" style={{ marginRight: '1px', backgroundColor: '#333333' }}>
                            <MDBIcon fab icon="github" />
                          </MDBBtn>
                        </a>

                        </div>
                        <a href="https://www.naukri.com/code360/profile/Shri_37">
                        <MDBBtn className="btn btn-primary" style={{ marginRight: '1px', backgroundColor: 'white' }}>
                          <img src={newCnLogo} alt="newcnlogo" style={{ width: '90px', height: '40px' }} />
                        </MDBBtn>
                      </a>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </div>
            </div>
            <div>
              <div>
                <div className="col-lg-0 offset-lg-0" style={{ marginRight: '1vh', marginTop: '10vh', width: { xs: '100%', md: '110vh' }, height: { xs: 'auto', md: '70.5vh' } }}>
                  <MDBCard className="mb-3" style={{ backgroundColor: '#152238', boxShadow: '0 15px 70px 0 rgba(31, 38, 135, 0.37)', backdropFilter: 'blur(25px)', borderRadius: '6vh' }}>
                    <MDBCardBody className="text-center">
                      <MDBTypography variant='h3'>
                        <br></br>
                        <p className="text-muted mb-1">
                          About Me
                        </p>
                      </MDBTypography>
                      <MDBTypography variant='h5' color="white">
                        <p style={{ color: "white", height: { xs: 'auto', md: '50.2vh' } }}>
                          <br></br>
                          <br></br>
                          <br></br>
                          As a sophomore at Sri Krishna College of Technology (SKCT), my passion for
                          creative design roles in the tech industry drives me. Committed to mastering
                          React, SQL, DSA, Java, C++, MongoDB, Aws, SpringBoot, and Agile methodologies, I'm
                          poised to contribute innovative ideas to future projects. With accolades in
                          hackathons and a finalist position at Smart India Hackathon (SIH), I'm set to graduate in 2026. Based in Coimbatore,
                          I bring skills in video editing and a proactive approach to learning
                          and collaboration, ready to excel in the tech world.
                        </p>
                      </MDBTypography>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </div>
            </div>
          </Box>
        </Container>
      </React.Fragment>
    </div>
  );
}
