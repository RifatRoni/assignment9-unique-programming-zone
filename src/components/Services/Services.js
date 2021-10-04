import React, { useEffect, useState } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import serviceBanner from '../../images/shop-banner.gif';
import Course from '../Course/Course';
import './Services.css'

const Services = () => {
    const [courses, setAllCourses] = useState([]);
    useEffect(() => {
        fetch('./courses.JSON')
            .then(res=>res.json())
            .then(data=>setAllCourses(data))
    }, []);
    return (
        <div>
            {/* Service Banner */}
            <div className="my-5"> 
                <Container>    
                    <Row>
                        <Col sm={12} lg={6} xs={{ order: 'last' }} md={{ order: 'first' }} className="service-info-div">
                            <div className="service-info">
                                <h1>Welcome to Our Courses</h1>
                                <h4>Are you interested to learn Programming! <br/> If yes, Lets explore our Courses and buy your special one.</h4>
                            </div>
                        </Col>
                        <Col sm={12} lg={6} xs={{ order: 'first' }} md={{ order: 'last' }}>
                            <img src={serviceBanner} className="img-fluid" alt="" />
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
                </Container>
            </div>
        </div>
    );
};

export default Services;