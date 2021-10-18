import styled from "styled-components";

export const PersonContainer = styled.section`
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

export const PersonImg = styled.div`
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

export const PersonContent = styled.div`
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

export const PersonInfo = styled.div`
  margin: 1rem 0;

  @media (max-width: 860px) {
    padding: 0 1rem;
    text-align: center;
  }

  h4 {
    margin: 0.625rem 0;
  }
`;

export const PersonProfile = styled.a``;

export const CreditsContainer = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  position: relative;
  padding: 1rem;
`;

export const Title = styled.div`
  padding: 2rem;
  margin: 2rem auto;
  background: #397cd3;
  text-align: center;
  font-size: 1.5rem;
  text-transform: uppercase;

  h2 {
    font-weight: 300;
  }
`;

export const CreditsContent = styled.div`
  text-align: center;
  background: #3d3acf;
  border-radius: 10px;
  cursor: pointer;
  margin: 1rem 0;
  transition: 0.3s ease-in-out;
  color: #ffffff;

  &:hover {
    transform: translateY(-10px);
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
    padding: 0.625rem;
  }
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  padding: 2rem 0;

  button {
    padding: 1.25rem 2rem;
    border-radius: 50px;
    text-transform: uppercase;
    background: #353fcc;
    color: #ffffff;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background: #ffffff;
      color: #0c0c0c;
    }
  }
`;
