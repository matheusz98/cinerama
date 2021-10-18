import { BsFacebook, BsTwitter, BsInstagram, BsGithub } from "react-icons/bs";
import Logo from "../Logo/Logo";
import {
  FooterContainer,
  FooterWrapper,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrapper,
  Copyright,
  SocialIcons,
  SocialIconsLink,
} from "./FooterStyle";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>About us</FooterLinksTitle>
              <FooterLink to="/">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Carrers</FooterLink>
              <FooterLink to="/">Investor</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinksTitle>Contact us</FooterLinksTitle>
              <FooterLink to="/">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>Videos</FooterLinksTitle>
              <FooterLink to="/">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinksTitle>Social Media</FooterLinksTitle>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink
                href="https://github.com/matheusz98"
                target="_blank"
                arial-label="Github"
              >
                Github
              </FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrapper>
            <Logo />
            <Copyright>
              Cinerama &copy; {new Date().getFullYear()} All rights reserved.
            </Copyright>
            <SocialIcons>
              <SocialIconsLink href="/" target="_blank" arial-label="Facebook">
                <BsFacebook />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" arial-label="Twitter">
                <BsTwitter />
              </SocialIconsLink>
              <SocialIconsLink href="/" target="_blank" arial-label="Instagram">
                <BsInstagram />
              </SocialIconsLink>
              <SocialIconsLink
                href="https://github.com/matheusz98"
                target="_blank"
                arial-label="Github"
              >
                <BsGithub />
              </SocialIconsLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
