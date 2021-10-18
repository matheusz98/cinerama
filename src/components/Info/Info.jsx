import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import Loading from "../Loading/Loading";
import {
  img_300,
  img_500,
  unavailable,
  img_original,
  unavailableLandscape,
  noPicture,
} from "../../config/config";
import {
  InfoBg,
  InfoContainer,
  InfoPoster,
  PosterHomepage,
  InfoContent,
  Details,
  Genres,
  Overview,
  CastContainer,
  CastContent,
  VideosContainer,
  VideosContent,
} from "./InfoStyle";

const Info = () => {
  const { media_type, id } = useParams();
  const [items, setItems] = useState();
  const [castInfo, setCastInfo] = useState([]);
  const [mediaVideos, setMediaVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setItems(data);

    //console.log(data);
    setLoading(false);
  };

  const fetchCast = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCastInfo(data.cast);
    //console.log(data);
    setLoading(false);
  };

  const fetchVideos = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setMediaVideos(data.results.slice(0, 3));
    //console.log(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
    fetchCast();
    fetchVideos();
  }, [id, media_type]);

  return loading ? (
    <Loading />
  ) : (
    <>
      {items && (
        <>
          <InfoBg
            style={{
              backgroundImage: `url(${
                items.backdrop_path
                  ? `${img_original}/${items.backdrop_path}`
                  : unavailableLandscape
              })`,
            }}
          >
            <InfoContainer>
              <PosterHomepage href={items.homepage} target="_blank">
                <InfoPoster>
                  <img
                    src={
                      items.poster_path
                        ? `${img_500}/${items.poster_path}`
                        : unavailable
                    }
                    alt={items.name || items.title}
                  />
                </InfoPoster>
              </PosterHomepage>
              <InfoContent>
                <Details>
                  <h2>{items.title || items.name}</h2>
                  <h4>{media_type === "tv" ? "TV Series" : "Movie"}</h4>
                  <h4>
                    Release Date:{" "}
                    {media_type === "tv"
                      ? `${items.first_air_date.slice(5, 7)}/${items.first_air_date.slice(8, 10)}/${items.first_air_date.slice(0, 4)}`
                      : `${items.release_date.slice(5, 7)}/${items.release_date.slice(8, 10)}/${items.release_date.slice(0, 4)}`}
                  </h4>
                  <h4>
                    Runtime:{" "}
                    {media_type === "tv"
                      ? items.episode_run_time
                      : items.runtime}{" "}
                    minutes
                  </h4>
                  <h4>
                    {media_type === "movie" ? "Budget: $" : ""}
                    {media_type === "movie"
                      ? items.budget.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                        })
                      : ""}
                  </h4>
                  <h4>
                    {media_type === "movie" ? "Revenue: $" : ""}
                    {media_type === "movie"
                      ? items.revenue.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                        })
                      : ""}
                  </h4>
                  <h4>
                    {media_type === "tv" ? "Number of seasons: " : ""}
                    {media_type === "tv" ? items.number_of_seasons : ""}
                  </h4>
                  <h4>
                    {media_type === "tv" ? "Number of episodes: " : ""}
                    {media_type === "tv" ? items.number_of_episodes : ""}
                  </h4>
                </Details>
                <Genres>
                  {items.genres &&
                    items.genres
                      .slice(0, 5)
                      .map((genre, i) => <span key={i}>{genre.name}</span>)}
                </Genres>
                <Overview>
                  <h4>{items.tagline}</h4>
                  {items.overview}
                </Overview>
              </InfoContent>
            </InfoContainer>
            <CastContainer>
              {castInfo.slice(0, 15).map((c) => (
                <CastContent key={c.id} id={c.id}>
                  <Link to={`/${c.id}`}>
                    <img
                      src={
                        c.profile_path
                          ? `${img_300}/${c.profile_path}`
                          : noPicture
                      }
                      alt={c.name}
                    />
                    <h3>{c.name}</h3>
                    <h4>as {c.character}</h4>
                  </Link>
                </CastContent>
              ))}
            </CastContainer>
            <VideosContainer>
              {mediaVideos.map((video, v) => (
                <VideosContent key={v} video={video}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                    title="video"
                  />
                </VideosContent>
              ))}
            </VideosContainer>
          </InfoBg>
        </>
      )}
    </>
  );
};

export default Info;
