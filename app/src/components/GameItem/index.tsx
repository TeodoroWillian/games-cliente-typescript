import * as S from './style';
import { GameResponse } from '../../types/Game';

type GameItemProps = {
  game: GameResponse
  onSelect: (data: GameResponse) => void
}

const GameItem = ({game, onSelect}:GameItemProps) =>{
  return(

    <S.GameItem role='listitem' onClick={()=> onSelect(game)}>
      <S.GameItemImage src={game.coverImageUrl} alt={`Jogo: ${game.title}`} />
      <div>
        <S.GameItemName>{game.title}</S.GameItemName>
        <S.GameItemScore>{game.imdbScore}</S.GameItemScore>
        <S.GameItemDescription>{game.description}</S.GameItemDescription>
      </div>
    </S.GameItem>
  )
}

export default GameItem;