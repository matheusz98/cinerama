import styled from "styled-components";

export const CardsContainer = styled.div`
  max-width: 300px;
  background: #3f3db4;
  border-radius: 10px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.8);
  margin: 2rem 0;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background: #0b085f;
  }
`;

export const CardsContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1rem;
  color: #ffffff;
`;

export const Poster = styled.div``;

export const Title = styled.div`
  text-align: left;
  h3,
  h4 {
    font-weight: 300;
    margin: 0.625rem 0;
    font-size: 1rem;
  }
`;
