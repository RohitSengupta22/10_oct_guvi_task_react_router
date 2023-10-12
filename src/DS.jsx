import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import NavComp from './NavComp'

const DS = () => {
    return (
        <div>
            <NavComp />

            <Container style={{ marginTop: '100px' }}>
            <Row>
                <Col lg={4} md={4} sm={6} xs={12}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                        <Card.Body>
                            <Card.Title>Top Product-Based Companies for Data Scientists in 2023</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-Useful-Python-Libraries-and-Tools-For-Data-Science-Beginners.webp" />
                        <Card.Body>
                            <Card.Title>Useful Python Libraries & Tools for Data Science Beginners</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} md={4} sm={6} xs={12}><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="data:image/jpeg;base64,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" />
                    <Card.Body>
                        <Card.Title>Extraordinary Data Science Projects for Beginners As Well as Veterans</Card.Title>
                    </Card.Body>
                </Card></Col>
            </Row>
            </Container>
        </div>
    )
}

export default DS
