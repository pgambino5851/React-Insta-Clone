import React from 'react';
import '../SearchBar/search-bar.css'
import {
    // Collapse,
    Navbar,
    // NavbarToggler,
    NavbarBrand,
    Nav,
    // NavItem,
    // NavLink,
    // UncontrolledDropdown,
    // DropdownToggle,
    // DropdownMenu,
    // DropdownItem,
    // Button, 
    // Form, 
    // FormGroup,
    // Label, 
    Input, 
    /* FormText*/} from 'reactstrap';


const SearchBar = props =>{
    return (
        <div className="search">
            <Navbar color ="light" light expand="md">
                <i class="fab fa-instagram fa-2x"></i>
                <NavbarBrand href="/"> Instagram</NavbarBrand>
                <Input type ="search" name ="search" placeholder="Search" />
                <Nav className="ml-auto" navbar>
                    <i class="far fa-compass fa-2x"></i>
                    <i class="far fa-heart fa-2x"></i>
                    <i class="far fa-user fa-2x"></i>
                </Nav>
            </Navbar>
        </div>
    )
}

export default SearchBar;