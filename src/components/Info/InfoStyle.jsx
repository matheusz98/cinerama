import styled from "styled-components";

export const InfoBg = styled.div`
  min-height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  background-attachment: fixed;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(#000, 0));
  }
`;

export const InfoContainer = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding-top: 2rem;
  position: relative;

  @media (max-width: 860px) {
    max-width: 100%;
    justify-content: center;
    flex-direction: column;
  }
`;

export const InfoPoster = styled.div`
  width: 300px;
  position: relative;
  overflow: hidden;

  @media (max-width: 860px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 1rem;
  }

  img {
    border-radius: 10px;
    transition: 0.3s ease-in-out;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const InfoContent = styled.div`
  width: 70%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  text-align: start;
  padding-left: 5rem;

  @media (max-width: 860px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

export const Details = styled.div`
  margin: 1rem 0;

  @media (max-width: 860px) {
    padding: 0 1rem;
    text-align: center;
  }

  h4 {
    margin: 0.625rem 0;
  }
`;

export const Genres = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem;

  @media (max-width: 860px) {
    width: 100%;
  }

  span {
    background: #ffffff;
    font-size: 0.8rem;
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 50px;
    color: #0c0c0c;
    margin: 0.625rem;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background: #0c0c0c;
      color: #ffffff;
    }
  }
`;

export const Overview = styled.div`
  max-width: 600px;
  margin: 1rem 0;
  padding: 1rem;

  @media (max-width: 860px) {
    width: 100%;
  }
`;

export const CreatedBy = styled.div`
  margin: 1rem 0;
`;

export const CastContainer = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  position: relative;
  padding: 1rem 1rem;
`;

export const CastContent = styled.div`
  text-align: center;
  background: #3d3acf;
  border-radius: 10px;
  cursor: pointer;
  margin: 1rem 0;
  transition: 0.3s ease-in-out;
  color: #ffffff;

  &:hover {
    transform: scale(1.05);
    background: #103985;
  }

  img {
    border-radius: 10px 10px 0 0;
  }

  h3,
  h4 {
    font-weight: 300;
    color: #ffffff;
    margin: 0.625rem 0;
  }
`;

export const VideosContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 1rem;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const VideosContent = styled.div`
  iframe {
    width: 560px;
    height: 315px;
    padding: 1rem 3rem;
  }
`;

export const PosterHomepage = styled.a``;
