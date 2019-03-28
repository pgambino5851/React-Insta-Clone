import React from 'react';
import '../SearchBar/search-bar.css'
import {
    // Collapse,
    Navbar,
    // NavbarToggler,
    NavbarBrand,
    Nav,
    // Button,
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
    console.log("SearchBar Props:", props)
    return (
        <div className="search">
            <Navbar color ="light" light expand="md">
                <i className="fab fa-instagram fa-2x"></i>
                <NavbarBrand href="/"> Instagram</NavbarBrand>
                <form onSubmit={props.filterPosts}>
                <Input 
                type ="search" 
                name ="search" 
                placeholder="Search" 
                value={props.search}
                onChange={props.updateSearch}
                />
                </form>
                <Nav className="ml-auto" navbar>
                    <i className="far fa-compass fa-2x"></i>
                    <i className="far fa-heart fa-2x"></i>
                    <i className="far fa-user fa-2x"></i>
                </Nav>
            </Navbar>
        </div>
    )
}

export default SearchBar;