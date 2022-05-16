import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from "./styles";
import { FaBars } from 'react-icons/fa'

interface NavbarProps {
  onOpen: () => void;
}
const Navbar = ({ onOpen }: NavbarProps) => {

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>dolla</NavLogo>

        <MobileIcon>
          <FaBars onClick={onOpen} />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to="about">About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="discover">Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="services">Services</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="signup">Sign Up</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>

  )
};

export default Navbar;