import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const FooterContainer = styled.footer`
  background: #3f51f8;
`;

export const FooterWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px 25px;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding-top: 30px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  width: 160px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 16px;
  text-align: left;
  color: #ffffff;

  @media (max-width: 480px) {
    width: 100%;
    margin: 0;
    padding: 10px;
  }
`;

export const FooterLinksTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 16px;
`;

export const FooterLink = styled(LinkRouter)`
  font-size: 1rem;
  margin-bottom: 0.625rem;
  color: #ffffff;
  transition: 0.3s ease-in-out;

  &:hover {
    color: #061f46;
  }
`;

export const SocialMedia = styled.section`
  width: 100%;
  max-width: 1000px;
`;

export const SocialMediaWrapper = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px auto 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Copyright = styled.small`
  color: #ffffff;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export const SocialIcons = styled.div`
  width: 240px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SocialIconsLink = styled.a`
  font-size: 2rem;
  color: #ffffff;
  margin: 0 0.625rem;
`;
