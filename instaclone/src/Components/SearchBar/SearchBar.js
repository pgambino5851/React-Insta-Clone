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
    Form, 
    // FormGroup,
    // Label, 
    Input, 
    /* FormText*/} from 'reactstrap';
import styled, {css} from 'styled-components'

const Header = styled(Navbar)`
display: flex;
justify-content: space-between !important;
`

const LogoContainer = styled.div`
width: 10%;
display: flex;
justify-content: space-between;
`

const SearchContainer = styled.div`
width: 30%;
`

const NavContainer = styled(Nav)`
display: flex;
width: 10%;
justify-content: space-between;
`

const SearchBar = props =>{
    console.log("SearchBar Props:", props)
    return (
        <div className="search">
            <Header color ="light" light expand="md">
                <LogoContainer>
                <i className="fab fa-instagram fa-2x"></i>
                <NavbarBrand href="/"> Instagram</NavbarBrand>
                </LogoContainer>
                <SearchContainer>
                <Form onSubmit={props.filterPosts}>
                <Input 
                type ="search" 
                name ="search" 
                placeholder="Search" 
                value={props.search}
                onChange={props.updateSearch}
                />
                </Form>
                </SearchContainer>
                <NavContainer /*className="ml-auto"*/ navbar>
                    <i className="far fa-compass fa-2x"></i>
                    <i className="far fa-heart fa-2x"></i>
                    <i className="far fa-user fa-2x"></i>
                </NavContainer>
            </Header>
        </div>
    )
}

export default SearchBar;