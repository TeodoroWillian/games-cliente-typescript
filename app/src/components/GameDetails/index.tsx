import * as S from "./style";
import Iframe from "react-iframe";
import { ButtonHTMLAttributes } from "react";
import { GameResponse } from "../../types/Game";

type DivType = ButtonHTMLAttributes<HTMLDivElement>
export type GameItemProps = {
  game: GameResponse;
} & DivType;

const GameDetails = ({game, ...props}:GameItemProps) => {
  return (
    <S.GameDetails>
      <S.GameDetailsTitle>Call of Duty</S.GameDetailsTitle>
      <S.GameDetailsButtonGroup>
        <img src={game.coverImageUrl} alt="Imagem do jogo" width="173px" height="164px" />
        <div>
          <p>
            {game.description}
          </p>
        </div>
      </S.GameDetailsButtonGroup>
      <S.GameDetailsList>
        <div>
          <p>Ano: <span>{game.year}</span></p>
          <p>ImdbScore: <span>{game.imdbScore}</span></p>
        </div>

        <p>Trailer:</p>
        <Iframe
          url={game.trailerYoutubeGamePlay}
          width="242px"
          height="142px"
        />
        <p>Gameplay:</p>
        <Iframe
          url={game.gamePlayYoutubeUrl}
          width="242px"
          height="142px"
        />
      </S.GameDetailsList>
    </S.GameDetails>
  );
};

export default GameDetails;
