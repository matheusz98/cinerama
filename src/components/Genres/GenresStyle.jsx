import styled from "styled-components";

export const GenresContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  small {
    background: #ff7f4d;
    color: #ffffff;
    padding: 1rem 1.5rem;
    border-radius: 50px;
    transition: 0.3s ease-in-out;

    &:hover {
      background: #ffffff;
      color: #0c0c0c;
    }
  }
`;

export const GenresItemRemove = styled.div`
  margin: 1.25rem;
  cursor: pointer;
`;

export const GenreItemsAdd = styled.div`
  margin: 1.25rem;
  cursor: pointer;

  small {
    background: #2f7dc7;
    color: #ffffff;
    padding: 1rem 1.5rem;
    border-radius: 50px;
    transition: 0.3s ease-in-out;

    &:hover {
      background: #ffffff;
      color: #0c0c0c;
    }
  }
`;
