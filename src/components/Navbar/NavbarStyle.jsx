import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { GiPopcorn } from "react-icons/gi";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  background: ${({ scrollNav }) => (scrollNav ? "#4d65ec" : "#1f71a0ff")};
  font-size: 1rem;
  //margin-top: -80px;
  z-index: 10;
  transition: 0.5s ease-in-out;
`;

export const NavContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  z-index: 1;
  padding: 0 1.5rem;
`;

export const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    top: 0;
    right: 0;
    position: absolute;
    font-size: 1.8rem;
    color: #ffffff;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: -22px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkRouter)`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  font-size: 1.25rem;
  color: #ffffff;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 3px;
    background: #ffffff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    color: #ffffff;
    transform: scaleX(1);
    transform-origin: left;
  }
`;

// NavbarItems
export const NavItemsContainer = styled.div`
  width: 100%;
  height: 100%;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  top: 0;
  display: grid;
  align-items: center;
  position: fixed;
  background: #282d75;
  padding: 1.25rem 0;
  z-index: 999;
  text-align: center;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  transition: 0.3s ease-in-out;
`;

export const Icon = styled.div`
  top: 1.2rem;
  right: 1.5rem;
  position: absolute;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
`;

export const CloseIcon = styled(GiPopcorn)`
  color: #ffffff;
`;

export const NavItemsWrapper = styled.div`
  color: #ffffff;
`;

export const NavItemsMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: (4, 80px);
  text-align: center;

  @media (max-width: 480px) {
    grid-template-rows: (4, 60px);
  }
`;

export const NavItemsLink = styled(LinkRouter)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  padding: 2rem 0;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 25%;
    bottom: 0;
    width: 50%;
    height: 3px;
    background: #ffffff;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::after {
    color: #ffffff;
    transform: scaleX(1);
    transform-origin: left;
  }
`;
