import styled from "styled-components";

export const SearchContainer = styled.div`
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
  font-size: 1.25rem;
  text-transform: uppercase;

  h2 {
    font-weight: 300;
  }
`;

export const Searchbar = styled.div`
  width: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  input[type="text"] {
    width: 50%;
    padding: 0.625rem;
    font-size: 1.25rem;
    border-radius: 10px;

    @media (max-width: 480px) {
      width: 100%;
    }
  }

  label {
    width: 1px;
    height: 1px;
    position: absolute;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip-path: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  button {
    padding: 1rem 1.25rem;
    background: #3167b8;
    color: #ffffff;
    font-size: 1.25rem;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    margin-left: 0.625rem;
    transition: 0.3s ease-in-out;

    svg {
      transition: 0.3s ease-in-out;
    }

    &:hover {
      background: #ffffff;

      svg {
        color: #0c0c0c;
        transform: scale(1.12);
      }
    }
  }
`;

export const SearchContent = styled.div`
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
