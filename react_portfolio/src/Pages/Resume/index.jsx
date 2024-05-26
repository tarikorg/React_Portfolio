import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import './resume.scss';

import resume from '../../assets/MUHSIN_TARIK.pdf'
const Resume = () => {
    return (

        <Container fluid className="resume-container d-flex justify-content-center">
            <Row>
                <Col xs={12} md={6} >
                    <h2>Download My Resume</h2>
                    <p>Click the button below to download my resume.</p>
                    <Button variant="outline-primary" className="btn" as="a" href={resume} download>
                        Download Resume
                    </Button>
                </Col>
                <Col xs={12} md={6}>
                    <h2>Proficiencies</h2>
                    <div className='proficiency-list text-center'>
                        <ListGroup>
                            <ListGroupItem>JavaScript</ListGroupItem>
                            <ListGroupItem>React</ListGroupItem>
                            <ListGroupItem>Node.js</ListGroupItem>
                            <ListGroupItem>Express</ListGroupItem>
                            <ListGroupItem>MongoDB</ListGroupItem>
                            <ListGroupItem>jQuerry</ListGroupItem>
                            <ListGroupItem>React</ListGroupItem>
                            <ListGroupItem>GraphQL</ListGroupItem>
                            <ListGroupItem>PostgreSQL</ListGroupItem>
                            <ListGroupItem>Sequelize</ListGroupItem>

                        </ListGroup>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Resume;