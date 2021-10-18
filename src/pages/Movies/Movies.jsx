import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useGenre from "../../hooks/useGenre";
import Loading from "../../components/Loading/Loading";
import { MoviesContainer, Title, MoviesContent } from "./MoviesStyle";
import Genres from "../../components/Genres/Genres";
import Cards from "../../components/Cards/Cards";
import CustomPagination from "../../components/CustomPagination/CustomPagination";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [pages, setPages] = useState(1);
  const [numOfPages, setNumOfPages] = useState();
  const genreUrl = useGenre(selectedGenres);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pages}&with_genres=${genreUrl}`
    );
    setMovies(data.results);
    setNumOfPages(data.total_pages);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
  }, [genreUrl, pages]);

  return loading ? (
    <Loading />
  ) : (
    <MoviesContainer>
      <Title>
        <h2>Movies</h2>
      </Title>
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPages={setPages}
      />
      <MoviesContent>
        {movies &&
          movies.map((m) => (
            <Link to={`/movie/${m.id}`}>
              <Cards
                key={m.id}
                id={m.id}
                poster={m.poster_path}
                title={m.title}
                vote_average={m.vote_average}
              />
            </Link>
          ))}
      </MoviesContent>
      {numOfPages > 1 && (
        <CustomPagination setPages={setPages} numOfPages={numOfPages} />
      )}
    </MoviesContainer>
  );
};

export default Movies;
