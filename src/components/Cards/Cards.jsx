import { img_300, unavailable } from "../../config/config";
import { CardsContainer, CardsContent, Poster, Title } from "./CardsStyle";
import "./Cards.css";

const Cards = ({ id, poster, title, media_type, vote_average }) => {
  const movieScore = (vote) => {
    if (vote >= 7) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <CardsContainer id={id} media_type={media_type}>
      <Poster>
        <img src={poster ? `${img_300}${poster}` : unavailable} alt={title} />
      </Poster>
      <CardsContent>
        <Title>
          <h3>{title}</h3>
          <h4>{media_type === "tv" ? "TV" : "Movie"}</h4>
        </Title>
        {vote_average === 0 ? (
          "TBD"
        ) : (
          <span className={`score ${movieScore(vote_average)}`}>
            {vote_average}
          </span>
        )}
      </CardsContent>
    </CardsContainer>
  );
};

export default Cards;
