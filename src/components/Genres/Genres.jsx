import { useEffect } from "react";
import axios from "axios";
import {
  GenresContainer,
  GenresItemRemove,
  GenreItemsAdd,
} from "./GenresStyle";
import { AiFillCloseCircle } from "react-icons/ai";

const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPages,
}) => {
  const addGenres = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPages(1);
  };

  const removeGenres = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPages(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
  };

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({});
    };
  }, []);

  return (
    <GenresContainer>
      {selectedGenres.map((genre) => (
        <GenresItemRemove>
          <small key={genre.id}>
            {genre.name}
            <AiFillCloseCircle onClick={() => removeGenres(genre)} style={{marginLeft: '3px'}}/>
          </small>
        </GenresItemRemove>
      ))}
      {genres.map((genre) => (
        <GenreItemsAdd>
          <small key={genre.id} onClick={() => addGenres(genre)}>
            {genre.name}
          </small>
        </GenreItemsAdd>
      ))}
    </GenresContainer>
  );
};

export default Genres;
