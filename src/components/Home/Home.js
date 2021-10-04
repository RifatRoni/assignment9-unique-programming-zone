import React, { useEffect, useState } from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router';
import homeBanner from '../../images/home-banner.gif';
import whyChoose from '../../images/why-choose.png';
import Course from '../Course/Course';
import './Home.css'

const Home = () => {
    const [courses, setFeaturedCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res=>res.json())
            .then(data=>setFeaturedCourses(data.slice(0,4)))
    }, []);

    // history-declare and click handler
    const history = useHistory();
    const handleViewMoreService = () => {
        history.push('/services');
    }
    const handleAboutUs = () => {
        history.push('/about');
    }
    return (
        <div>
            {/* Home Banner */}
            <div>
                <Container>    
                    <Row>
                        <Col sm={12} lg={6} xs={{ order: 'last' }} md={{ order: 'first' }} className="banner-info-div">
                            <div className="banner-info">
                                <h1>Unique Programming Zone</h1>
                                <h4>Get Enrolled and Start Your Programming Journey</h4>
                                <div className="my-5">
                                    <Button onClick={handleAboutUs} variant="primary" className="me-3">About Us</Button>
                                    <Button onClick={handleViewMoreService} variant="outline-primary">Our Courses</Button>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} lg={6} xs={{ order: 'first' }} md={{ order: 'last' }}>
                            <img src={homeBanner} className="img-fluid" alt="" />
                        </Col>
                    </Row>

                    {/* Our Experience part */}
                    <Row xs={1} md={4} className="g-4">
                        <Col>
                            <Card className="our-key-info">
                                <Card.Body>
                                    <Card.Title className="text-white"> <i class="fas fa-user-graduate"></i> 15000</Card.Title>
                                        <Card.Text className="text-white">
                                            Programming Students
                                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="our-key-info">
                                <Card.Body>
                                    <Card.Title className="text-white"> <i class="fas fa-code"></i> 20</Card.Title>
                                        <Card.Text className="text-white">
                                            Programming Courses
                                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="our-key-info">
                                <Card.Body>
                                    <Card.Title className="text-white"> <i class="fas fa-users"></i> 50</Card.Title>
                                        <Card.Text className="text-white">
                                            Programing Specialists
                                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="our-key-info">
                                <Card.Body>
                                    <Card.Title className="text-white"> <i class="far fa-life-ring"></i> 24/7</Card.Title>
                                        <Card.Text className="text-white">
                                            Student Live Support
                                        </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>


            {/* Why Choose US */}
            <div className="why-choose-section mt-5">
                <Container>
                    <h1 className="text-center pt-5">Why You Should Choose Us</h1>
                    <Row className="pb-5">
                        <Col sm={12} lg={6} xs={{ order: 'first' }}>
                            <img src={whyChoose} className="img-fluid w-75" alt="" />
                        </Col>
                        <Col sm={12} lg={6} xs={{ order: 'last' }} className="why-choose-div">
                            <div>   
                                <h4>Here Are The Main Key Features</h4>
                                <ul>
                                    <li>We are the first softskills trainer in Bangladesh.</li>
                                    <li>You will get 24/7 support from us.</li>
                                    <li>We have a strong team of softwkills trainers.</li>
                                    <li>We are only the programming based training Institution.</li>
                                    <li>You will get many real life projct experience here.</li>
                                    <li>After Completion of the course we provide certificate.</li>
                                </ul>
                                <div className="mt-2">
                                    <Button onClick={handleAboutUs} variant="primary" className="me-3">More About Us</Button>
                                </div>
                            </div>
                        </Col> 
                    </Row>
                </Container>
            </div>
        
            {/* Our Services */}
            <div className="mb-5">
                <Container>
                <h1 className="text-center py-5">Our Services</h1>
                <Row xs={1} md={2} lg={4} className="g-4">
                    {
                    courses.map(course => <Course key={course.key} course={course}></Course>)
                    }             
                </Row>
                <div className="mt-4 d-flex justify-content-center">
                    <Button onClick={handleViewMoreService} variant="primary">More Services</Button>
                </div>
                </Container>
            </div>
        </div>
    );
};

export default Home;