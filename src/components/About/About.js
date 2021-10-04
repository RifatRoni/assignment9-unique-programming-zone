import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import aboutBanner from '../../images/about-banner.png';
import whyChoose from '../../images/why-choose.png';
import './About.css';

const About = () => {
    const history = useHistory();
    const handleViewService = () => {
        history.push('/services');
    }
    return (
        <div>
            {/* About Banner */}
            <div className="my-5"> 
                <Container>    
                    <Row>
                        <Col sm={12} lg={6} xs={{ order: 'last' }} md={{ order: 'first' }} className="about-info-div">
                            <div className="about-info">
                                <h1>Unique Proramming Zone</h1>
                                <h4>WE ARE SKILL DEVELOPING INSTITUTION</h4>
                                <h4>We work for the programming lover. We want to make the country people technically strong. We provide in very low budget, the best quality courses.</h4>
                            </div>
                        </Col>
                        <Col sm={12} lg={6} xs={{ order: 'first' }} md={{ order: 'last' }}>
                            <img src={aboutBanner} className="img-fluid" alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Our Others info US */}
            <div className="history-section">
                <Container>
                    <h1 className="text-center">Our History</h1>
                    <p>Unique Programming Zone started its journey in 2000. We have about more than 21 years of experience. We are a group of intelligence.</p>
                    <p>We like to work for the country welfare. Md. Anwarul Islam is our honrable Managing Director. We provide our services till then with great care. We want to contribute our learning to the welfatre of the country. We hope a good technological developed country within 10 years.  From 2000 to 2021 we have a lot of students. They studied and purchased our programming services and with out active support they have become skilled.</p>
                </Container>
            </div>

            {/* Why Choose US */}
            <div className="why-choose-section">
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
                                    <Button onClick={handleViewService} variant="primary" className="me-3">Visit Services</Button>
                                </div>
                            </div>
                        </Col> 
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;