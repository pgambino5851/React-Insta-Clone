import React from 'react';
import '../SearchBar/search-bar.css'
import {
    // Collapse,
    Navbar,
    // NavbarToggler,
    NavbarBrand,
    // Nav,
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
            </Navbar>
        </div>
    )
}

export default SearchBar;