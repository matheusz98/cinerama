import { useState, useEffect } from "react";
import { MdMovieFilter } from "react-icons/md";
import Logo from "../Logo/Logo";

import {
  Nav,
  NavContainer,
  MenuIcon,
  NavMenu,
  NavItem,
  NavLink,
} from "./NavbarStyle";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavContainer>
            <Logo />
          <MenuIcon onClick={toggle}>
            <MdMovieFilter />
          </MenuIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/movies">Movies</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/tv">TV</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/search">Search</NavLink>
            </NavItem>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
