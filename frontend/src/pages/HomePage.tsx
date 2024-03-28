import React from 'react';
import {Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";

const HomePage = () => {
    return (
        <div>
            <Navbar>
                <NavbarBrand href="/">Car Rental</NavbarBrand>
                <Nav className="me-auto" navbar>
                    <NavItem>
                        <NavLink href="/cars">Cars</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/login">Clients</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/rentals">Rentals</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};

export default HomePage;