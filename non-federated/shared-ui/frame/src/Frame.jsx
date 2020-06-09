import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { connect } from "react-redux";
import { Cart } from "react-bootstrap-icons";

const Frame = ({ items = [], page = "home", children }) => (
  <Container>
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand
        href={page === "home" ? "/" : "http://localhost:8080/"}
        style={{ color: "white" }}
      >
        Pokeshop
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            href={page === "home" ? "/" : "http://localhost:8080/"}
            style={{ color: "white" }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            href={page === "search" ? "/" : "http://localhost:8081/search"}
            style={{ color: "white" }}
          >
            Search
          </Nav.Link>
        </Nav>
        <a
          href={page === "checkout" ? "/" : "http://localhost:8082/checkout"}
          style={{
            paddingLeft: 10,
            paddingBottom: 15,
          }}
        >
          <Cart color="white" size={30} />
          <span style={{ color: "white", fontWeight: "bold", paddingLeft: 5 }}>
            {items.reduce((a, { count }) => a + count, 0)}
          </span>
        </a>
      </Navbar.Collapse>
    </Navbar>
    <Container>{children}</Container>
  </Container>
);

export default connect((state) => state)(Frame);
