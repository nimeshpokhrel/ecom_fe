import React, { useContext } from "react";
import "./Header.css";
import { CategoryContext } from "../../context/CategoryContext";
import { CategoryProvider } from "../../context/CategoryContext";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Text from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import NavDropdown from "react-bootstrap/NavDropdown";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faLocationPin,
  faHeart,
  faCartShopping,
  faUser,
  faListDots,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { NavItem, NavLink } from "react-bootstrap";

const Logo = () => {
  return (
    <Navbar.Brand href="#" className="fw-bold fs-3 me-4">
      NOLORN
    </Navbar.Brand>
  );
};

const AppSearchBar = () => {
  const { categories, activeCategory, handleCategoryChange } =
    useContext(CategoryContext);
  return (
    <InputGroup size="sm" className="me-4 app-search-wrapper">
      <DropdownButton
        variant="outline-secondary app-navbar-dropdown "
        title="All Categories"
        id="input-group-dropdown-1"
        className="align-items-center"
      >
        {categories.map((category, index) => (
          <Dropdown.Item
            href="#"
            key={category._id}
            onClick={() => handleCategoryChange(category._id)}
            active={activeCategory === category._id ? true : false}
          >
            {category.name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <div className="vl" />
      <Form.Control
        aria-label="Text input with dropdown button"
        className="app-navbar-search"
      />
    </InputGroup>
  );
};

const AppDropdownCategories = (props) => {
  const { categories, activeCategory, handleCategoryChange } =
    useContext(CategoryContext);
  return (
    <Dropdown>
      <Dropdown.Toggle
        id="dropdown-button-dark-example1"
        className="app-button"
      >
        <FontAwesomeIcon icon={props.buttonIcon} className="me-2" />
        {props.buttonName}
      </Dropdown.Toggle>

      <Dropdown.Menu variant="dark">
        {categories.map((category, index) => (
          <Dropdown.Item
            href="#"
            key={category._id}
            onClick={() => handleCategoryChange(category._id)}
            active={activeCategory === category._id ? true : false}
          >
            {category.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

const AppNavbar = () => {
  return (
    <CategoryProvider>
      {[true].map((expand = "lg") => (
        <>
          <Navbar
            className="app-navbar lower-nav d-none d-lg-block"
            fixed="top"
          >
            <Container>
              <AppDropdownCategories
                buttonName="Browse All Categories"
                buttonIcon={faListDots}
              />
              <NavDropdown title="Home" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink>About</NavLink>
              <NavDropdown title="Shop" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <NavLink>Our Team</NavLink>
              <NavLink>Contact</NavLink>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
              <div className="vl-secondary p-0">‎</div>
              <FontAwesomeIcon icon={faPhone} />
              <div className="d-flex flex-column">
                <Text className="p-0">+977 98XXXXXXXX</Text>
                <Text
                  className="p-0"
                  style={{ fontSize: "12px", color: "#27d37e" }}
                >
                  SUN - FRI (9AM - 5PM)
                </Text>
              </div>
            </Container>
          </Navbar>
          <Navbar
            key={expand}
            expand="lg"
            className="app-navbar p-3"
            fixed="top"
          >
            <Container>
              <Logo />
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body className="align-items-center">
                  <Nav className="flex-grow-1 me-4">
                    <AppSearchBar />
                    <AppDropdownCategories
                      buttonName="All Categories"
                      buttonIcon={faLocationPin}
                    />
                  </Nav>
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="me-2 icon"
                    size="lg"
                  />
                  <NavLink className="me-4 icon-text">Wishlist</NavLink>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="me-2 icon"
                    size="lg"
                  />
                  <NavLink className="me-4 icon-text">Cart</NavLink>
                  <FontAwesomeIcon
                    icon={faUser}
                    className="me-2 icon"
                    size="lg"
                  />
                  <NavLink className="icon-text">Account</NavLink>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        </>
      ))}
    </CategoryProvider>
  );
};

const Header = () => {
  return (
    <>
      <AppNavbar />
    </>
  );
};

export default Header;
