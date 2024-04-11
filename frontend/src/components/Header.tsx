import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import '../styles/Header.scss';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <header id="header" className="container-fluid">
            <Navbar expand="sm" className="container-fluid">
                <NavbarBrand href="/">Car Rental</NavbarBrand>
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar horizontal="start">
                        <NavItem>
                            <NavLink href="/login/">Login</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/clients/">Clients</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/cars/">Cars</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/rentals/">Rentals</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}

export default Header;