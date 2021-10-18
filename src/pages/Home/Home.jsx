import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cards from "../../components/Cards/Cards";
import { HomeContainer, Title, HomeContent } from "./HomeStyle";
import Loading from "../../components/Loading/Loading";

const Home = () => {
  const [items, setItems] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [topRatedTv, setTopRatedTv] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setItems(data.results);
    setLoading(false);
    console.log(data);
  };

  const fetchTopRated = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}`
    );
    setTopRated(data.results);
    setLoading(false);
  };

  const fetchTopRatedTv = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/tv/top_rated?api_key=${process.env.REACT_APP_API_KEY}`);
    setTopRatedTv(data.results);
    setLoading(false);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchData();
    fetchTopRated();
    fetchTopRatedTv();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <HomeContainer>
      <Title>
        <h2>Trending Movies & Shows</h2>
      </Title>
      <HomeContent>
        {items &&
          items.map((i) => (
            <Link to={`/${i.media_type}/${i.id}`}>
              <Cards
                key={i.id}
                id={i.id}
                poster={i.poster_path}
                title={i.title || i.name}
                media_type={i.media_type}
                vote_average={i.vote_average}
              />
            </Link>
          ))}
      </HomeContent>

      <Title>
        <h2>Top Rated Movies</h2>
      </Title>

      <HomeContent>
        {topRated &&
          topRated.map((t) => (
            <Link to={`/movie/${t.id}`}>
              <Cards
                key={t.id}
                id={t.id}
                poster={t.poster_path}
                title={t.title}
                vote_average={t.vote_average}
              />
            </Link>
          ))}
      </HomeContent>

      <Title>
        <h2>Top Rated TV Shows </h2>
      </Title>

      <HomeContent>
        {topRatedTv &&
          topRatedTv.map((tv) => (
            <Link to={`/tv/${tv.id}`}>
              <Cards
                key={tv.id}
                id={tv.id}
                poster={tv.poster_path}
                title={tv.name}
                vote_average={tv.vote_average}
              />
            </Link>
          ))}
      </HomeContent>
    </HomeContainer>
  );
};

export default Home;
