import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import {
  PersonContainer,
  PersonProfile,
  PersonImg,
  PersonContent,
  PersonInfo,
  Title,
  CreditsContainer,
  CreditsContent,
  ButtonContainer,
} from "./PersonDetailsStyle";
import { img_300, noPicture } from "../../config/config";

const PersonDetails = () => {
  const { id } = useParams();
  const [items, setItems] = useState();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moreCredits, setMoreCredits] = useState(10);

  const load = credits.slice(0, moreCredits);

  const loadMore = () => {
    setMoreCredits(moreCredits + moreCredits);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setItems(data);
    setLoading(false);
    //console.log(data);
  };

  const fetchPersonCredits = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/person/${id}/combined_credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`);
    setCredits(data.cast);
    setLoading(false);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
    fetchPersonCredits();
  }, [id]);

  return loading ? (
    <Loading />
  ) : (
    <>
      {items && (
        <PersonContainer key={items.id} id={items.id}>
          <PersonProfile
            href={`https://www.imdb.com/name/${items.imdb_id}`}
            target="_blank"
          >
            <PersonImg>
              <img
                src={
                  items.profile_path
                    ? `${img_300}/${items.profile_path}`
                    : noPicture
                }
                alt={items.name}
              />
            </PersonImg>
          </PersonProfile>
          <PersonContent>
            <PersonInfo>
              <h2>Name: {items.name}</h2>
              <h4>Gender: {items.gender === 1 ? "Female" : "Male"}</h4>
              <h4>
                Birthday: {items.birthday.slice(5, 7)}/
                {items.birthday.slice(8, 10)}/{items.birthday.slice(0, 4)}
              </h4>
              <h4>Place of birth: {items.place_of_birth}</h4>
              {items.deathday === null ? (
                ""
              ) : (
                <h4>
                  Died: {items.deathday.slice(5, 7)}/
                  {items.deathday.slice(8, 10)}/{items.deathday.slice(0, 4)}
                </h4>
              )}
              <h4>Known for: {items.known_for_department}</h4>
              <h4>More about {items.name}</h4>
              <p>{items.biography}</p>
            </PersonInfo>
          </PersonContent>
        </PersonContainer>
      )}
      <Title>
        <h2>Filmography</h2>
      </Title>
      <CreditsContainer>
        {load.map((c) => (
          <Link to={`/${c.media_type}/${c.id}`}>
            <CreditsContent key={c.id} id={c.id}>
              <img
                src={c.poster_path ? `${img_300}/${c.poster_path}` : noPicture}
                alt={c.title || c.name}
              />
              <h3>{c.name || c.title}</h3>
              <h4>as {c.character}</h4>
            </CreditsContent>
          </Link>
        ))}
      </CreditsContainer>
      <ButtonContainer>
        <button onClick={() => loadMore()}>More credits</button>
      </ButtonContainer>
    </>
  );
};

export default PersonDetails;
