import React from 'react';
import Container from '@mui/material/Container';
import './css/ProfileCard.css';
import { MDBCard } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Achievements() {
  return (
    <div>
      <React.Fragment>
        <Container fixed>
          <div className="container">
            <div className="col-lg-12 offset-lg-0" style={{ textAlign: 'center', marginTop: '10vh' }}>
              <MDBCard className="mb-2" style={{ backgroundColor: '#152238', boxShadow: '0 15px 70px 0 rgba(31, 38, 135, 0.37)', backdropFilter: 'blur(25px)', borderRadius: '6vh' }}>
                <div>
                  <h3 style={{ color: 'white' }}>Achievements</h3>
                </div>
              </MDBCard>
            </div>
          </div>
        </Container>
        <div className="achievements-container" style={{ textAlign: 'center' }}>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#152238', color: 'white' }}
              contentArrowStyle={{ borderRight: '7px solid  #152238' }}
              date="TamilNadu StartUp TN Hackathon2023"
              iconStyle={{ background: '#152238', color: '#fff', fontSize: '1.5rem', padding: '0.5rem' }}
              icon={<i className="fas fa-trophy"></i>}
            >
              <h3 className="vertical-timeline-element-title">Runner UP</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#152238', color: 'white' }}
              contentArrowStyle={{ borderRight: '7px solid  #152238' }}
              date="Anna University-2023"
              iconStyle={{ background: '#152238', color: '#fff', fontSize: '1.5rem', padding: '0.5rem' }}
              icon={<i className="fas fa-trophy"></i>}
            >
              <h3 className="vertical-timeline-element-title">Presentation Winner</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#152238', color: 'white' }}
              contentArrowStyle={{ borderRight: '7px solid  #152238' }}
              date="IIT - Bombay Mapathon-2023"
              iconStyle={{ background: '#152238', color: '#fff', fontSize: '1.5rem', padding: '0.5rem' }}
              icon={<i className="fas fa-trophy"></i>}
            >
              <h3 className="vertical-timeline-element-title">Winner</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#152238', color: 'white' }}
              contentArrowStyle={{ borderRight: '7px solid  #152238' }}
              date="Smart India Hackathon 2023"
              iconStyle={{ background: '#152238', color: '#fff', fontSize: '1.5rem', padding: '0.5rem' }}
              icon={<i className="fas fa-trophy"></i>}
            >
              <h3 className="vertical-timeline-element-title">College Level Finalist</h3>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </React.Fragment>
    </div>
  )
}
