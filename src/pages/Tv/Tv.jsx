import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useGenre from "../../hooks/useGenre";
import Genres from "../../components/Genres/Genres";
import Cards from "../../components/Cards/Cards";
import CustomPagination from "../../components/CustomPagination/CustomPagination";
import Loading from "../../components/Loading/Loading";
import { TVContainer, Title, TVContent } from "./TvStyle";

const Tv = () => {
  const [shows, setShows] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [pages, setPages] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const genreUrl = useGenre(selectedGenres);
  const [loading, setLoading] = useState(true);

  const fetchTvShows = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pages}&with_genres=${genreUrl}`
    );
    setShows(data.results);
    setNumOfPages(data.total_pages);
    setLoading(false);
  };

  useEffect(() => {
    fetchTvShows();
    window.scroll(0, 0);
  }, [genreUrl, pages]);

  return loading ? (
    <Loading />
  ) : (
    <TVContainer>
      <Title>
        <h2>TV Shows</h2>
      </Title>
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPages={setPages}
      />
      <TVContent>
        {shows &&
          shows.map((s) => (
            <Link to={`/tv/${s.id}`}>
              <Cards
                key={s.id}
                id={s.id}
                poster={s.poster_path}
                title={s.name}
                vote_average={s.vote_average}
              />
            </Link>
          ))}
      </TVContent>
      {numOfPages > 1 && (
        <CustomPagination setPages={setPages} numOfPages={numOfPages} />
      )}
    </TVContainer>
  );
};

export default Tv;
