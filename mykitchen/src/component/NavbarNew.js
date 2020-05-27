import React,{useState} from 'react';
//import {NavLink, Navbar} from 'reactstrap';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const NavbarNew = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Job">Job</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/About">About</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/Login">Login</NavLink>
            </NavItem>
          </Nav>
          <a href="/Login">Simple</a>
        </Collapse>
      </Navbar>
    </div>
  );
}


/*
function NavbarNew() {
    return (
        <Navbar bg="dark" variant="dark">
        <a href="/">Home </a>
        <NavLink href="/About">About Us </NavLink>
        <NavLink href="/Login">Login </NavLink>
        <NavLink href="/Sign">Sign up</NavLink>
        </Navbar>
       
    );
  };
*/
  export default NavbarNew;