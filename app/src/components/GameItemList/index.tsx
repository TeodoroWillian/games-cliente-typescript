import * as S from "./style";

interface GameItemListProps {
  children: React.ReactNode;
}

const GameItemList = ({ children }: GameItemListProps) => {
  return (
    <section>
      <S.GameItemListHeader>
        <S.GameItemListHeaderTitle>
          Selecione os Jogos
        </S.GameItemListHeaderTitle>
        <S.GameItemListHeaderSelect>
          <option value="default">Selectione o Jogo</option>
          <option value="">Jogo</option>
        </S.GameItemListHeaderSelect>
      </S.GameItemListHeader>
      <S.GameItemList>{children}</S.GameItemList>
    </section>
  );
};

export default GameItemList;
