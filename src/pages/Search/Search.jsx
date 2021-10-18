import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import Cards from "../../components/Cards/Cards";
import { BsSearch } from "react-icons/bs";
import {
  SearchContainer,
  Title,
  Searchbar,
  SearchContent,
} from "./SearchStyle";

const Search = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [pages, setPages] = useState(1);
  const [numOfPages, setNumOfPages] = useState();

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=${pages}&include_adult=false`
      );
      setItems(data.results);
      console.log(data);
      setNumOfPages(data.total_pages);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      fetchSearch();
    }
  };

  useEffect(() => {
    fetchSearch();
    window.scroll(0, 0);
  }, [pages]);

  return (
    <SearchContainer>
      <Title>
        <h2>Search your favorite Movies, TV Shows, Actors & Much More!</h2>
      </Title>
      <Searchbar>
        <label for="search">Search Query</label>
        <input
          type="text"
          placeholder="Search"
          name="search"
          id="search"
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={fetchSearch}>
          <BsSearch />
        </button>
      </Searchbar>
      <SearchContent>
        {items &&
          items.map((i) => (
            <Link to={`/${i.media_type}/${i.id}`}>
              <Cards
                key={i.id}
                id={i.id}
                poster={i.poster_path || i.profile_path}
                title={i.name || i.title}
                vote_average={i.vote_average}
              />
            </Link>
          ))}
      </SearchContent>
      {numOfPages > 1 && (
        <CustomPagination setPages={setPages} numOfPages={numOfPages} />
      )}
    </SearchContainer>
  );
};

export default Search;
