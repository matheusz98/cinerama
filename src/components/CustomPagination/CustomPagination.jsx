import Pagination from "@material-ui/lab/Pagination";
import styled from "styled-components";

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0.625rem;
`;

const CustomPagination = ({ setPages, numOfPages = 10 }) => {
  const pageChange = (page) => {
    setPages(page);
    window.scroll(0, 0);
  };

  return (
    <PaginationContainer>
      <Pagination
        onChange={(e) => pageChange(e.target.textContent)}
        count={numOfPages}
        color="primary"
      />
    </PaginationContainer>
  );
};

export default CustomPagination;
