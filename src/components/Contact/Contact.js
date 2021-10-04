import React from 'react';
import { Col, Container, FloatingLabel, Form, Row, Button } from 'react-bootstrap';
import contactBanner from '../../images/contact-banner.gif';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            {/* Contact Banner */}
            <div className="my-5"> 
                <Container>    
                    <Row>
                        <Col sm={12} lg={6} xs={{ order: 'last' }} md={{ order: 'first' }} className="contact-info-div">
                            <div className="contact-info">
                                <h1>Contact Us</h1>
                                <h4>Are you interested to learn programming?</h4>
                                <h4>Get all the latest update and buy your desired course today!</h4>
                            </div>
                        </Col>
                        <Col sm={12} lg={6} xs={{ order: 'first' }} md={{ order: 'last' }}>
                            <img src={contactBanner} className="img-fluid" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Contact form */}
            <div className="my-5"> 
                <Container>
                    <div className="bg-light py-5 border">
                    <h4 className="text-center py-3">Enter Your Valid information and Write us</h4>
                        <Form className="w-75 mx-auto">
                            <FloatingLabel controlId="floatingTextarea" label="First Name" className="mb-3">
                                <Form.Control type="text" placeholder="First Name" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingTextarea" label="Last Name" className="mb-3">
                                <Form.Control type="text" placeholder="Last Name" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>        
                            <FloatingLabel controlId="floatingTextarea2" label="Write your message here . . .">
                                <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                            <Button variant="primary" className="me-3 my-3">Send Message</Button>
                        </Form> 
                    </div> 
                </Container>               
            </div>
        </div>
    );
};

export default Contact;