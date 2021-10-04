import React from 'react';
import {Card, Col} from 'react-bootstrap';
import './Course.css'

const Course = (props) => {
    console.log(props.course);
    const {courseName, courseDuration, coursePrice, image} = props.course;
    return (
        <div>
            <Col>
                <Card className="course-div">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                    <Card.Title>{courseName}</Card.Title>
                    <div className="course-duration-budget">
                    <Card.Text className="text-primary fw-bold">
                        $ {coursePrice}
                    </Card.Text>
                    <Card.Text>
                    <i class="far fa-clock"></i> {courseDuration}
                    </Card.Text>
                    </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;