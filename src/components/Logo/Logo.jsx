import styled from "styled-components";
import LogoIMG from "../../images/movie.svg";
import { Link as LinkRouter } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const LogoContainer = styled(LinkRouter)`
  display: flex;
  align-items: center;
  margin-left: 0.625rem;
  cursor: pointer;

  img {
    width: 4rem;
  }

  span {
    margin-left: 1rem;
    font-size: 1rem;
    font-weight: 300;
    font-style: italic;
    text-transform: uppercase;
    color: #ffffff;
  }
`;

const toggleHome = () => {
  scroll.scrollToTop();
};

const Logo = () => {
  return (
    <LogoContainer
      to="/"
      onClick={toggleHome}
      duration={100}
    >
      <img src={LogoIMG} alt="Cinerama Logo" />
      <span>Cinerama</span>
    </LogoContainer>
  );
};

export default Logo;
