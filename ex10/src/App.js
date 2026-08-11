import React from "react";
import {
  Navbar,
  Nav,
  Container,
  Form,
  Row,
  Col,
  Card,
  Badge,
  Button,
} from "react-bootstrap";
import { menuItems } from "./components/data";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  const formatCurrency = (price) => `$${price.toFixed(2)}`;

  const handleSendMessage = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };
  return (
    <div className="pizza-app">
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="pizza-navbar px-4"
      >
        <Container fluid>
          <Navbar.Brand className="fw-bold brand-text">
            Pizza House
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#" className="nav-link-custom">
                Home
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-custom">
                About Us
              </Nav.Link>
              <Nav.Link href="#" className="nav-link-custom">
                Contact
              </Nav.Link>
              <Nav.Link href="#" className="nav-search">
                Search
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section className="hero-section">
        <div className="hero-overlay">
          <h1 className="hero-title">Neapolitan Pizza</h1>
          <p className="hero-subtitle">Authentic Italian taste in every bite</p>
        </div>
      </section>

      <section className="menu-section">
        <Container className="menu-wrapper">
          <h2 className="section-title text-center">Our Menu</h2>
          <Row className="g-4 menu-row">
            {menuItems.map((item) => (
              <Col key={item.id} lg={3} md={6} sm={12} className="menu-col">
                <Card className="pizza-card h-100 border-0">
                  {item.isSale && (
                    <Badge bg="warning" text="dark" className="sale-badge">
                      SALE
                    </Badge>
                  )}
                  <Card.Img
                    variant="top"
                    src={item.image}
                    className="pizza-image"
                  />
                  <Card.Body className="text-center pizza-body">
                    <Card.Title className="pizza-name">{item.name}</Card.Title>
                    <Card.Text className="pricing">
                      <span className="old-price">
                        {formatCurrency(item.oldPrice)}
                      </span>
                      <span className="new-price">
                        {formatCurrency(item.newPrice)}
                      </span>
                    </Card.Text>
                    <Button variant="dark" className="w-100 buy-button">
                      Buy
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="booking-section">
        <Container className="booking-wrapper">
          <h2 className="section-title text-center booking-title">
            Book Your Table
          </h2>
          <Form className="booking-form" onSubmit={handleSendMessage}>
            <Row className="align-items-center gy-3">
              <Col md={4}>
                <Form.Group>
                  <Form.Label className="form-label">Your Name *</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    className="custom-input"
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label className="form-label">Date *</Form.Label>
                  <Form.Control type="date" className="custom-input" />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group>
                  <Form.Label className="form-label">
                    Select a Service *
                  </Form.Label>
                  <Form.Select
                    aria-label="Default select"
                    className="custom-input"
                  >
                    <option>Choose service...</option>
                    <option value="1">Dine In</option>
                    <option value="2">Takeaway</option>
                    <option value="3">Delivery</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="message-group">
              <Form.Label className="form-label text-center d-block">
                Please share your message
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Write your message..."
                className="custom-textarea"
              />
            </Form.Group>
            <div className="text-center">
              <Button variant="warning" type="submit" className="send-button">
                Send Message
              </Button>
            </div>
          </Form>
        </Container>
      </section>
    </div>
  );
};

export default App;
