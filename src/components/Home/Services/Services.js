import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9002/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section className="services">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Services</h5>
                <div>
                    <Container>
                        <Row>
                            {
                                services.map(service => (
                                    <Col xs={12} md={4}>
                                        <Service service={service}></Service>
                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </div>
            </div>
        </section>
    );
};

export default Services;