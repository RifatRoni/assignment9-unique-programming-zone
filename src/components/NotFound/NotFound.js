import React from 'react';
import { Container } from 'react-bootstrap';
import image404 from '../../images/404.png'

const NotFound = () => {
    return (
        <Container>
        <div className="w-50 mx-auto">
            <img src={image404} className="img-fluid" alt="" />
        </div>
        </Container>
    );
};

export default NotFound;