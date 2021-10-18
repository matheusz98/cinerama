import {
  NavItemsContainer,
  Icon,
  CloseIcon,
  NavItemsWrapper,
  NavItemsMenu,
  NavItemsLink,
} from "./NavbarStyle";

const NavbarItems = ({ isOpen, toggle }) => {
  return (
    <>
      <NavItemsContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <NavItemsWrapper>
          <NavItemsMenu>
            <NavItemsLink to="/" onClick={toggle}>
              Home
            </NavItemsLink>
            <NavItemsLink to="/movies" onClick={toggle}>
              Movies
            </NavItemsLink>
            <NavItemsLink to="/tv" onClick={toggle}>
              TV
            </NavItemsLink>
            <NavItemsLink to="/search" onClick={toggle}>
              Search
            </NavItemsLink>
          </NavItemsMenu>
        </NavItemsWrapper>
      </NavItemsContainer>
    </>
  );
};

export default NavbarItems;
