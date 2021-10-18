import styled from "styled-components";

export const TVContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

export const Title = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  margin: 2rem auto;
  background: #397cd3;
  text-align: center;
  font-size: 1.5rem;
  text-transform: uppercase;

  h2 {
    font-weight: 300;
  }
`;

export const TVContent = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
  text-align: center;

  a {
    color: #ffffff;
  }
`;
