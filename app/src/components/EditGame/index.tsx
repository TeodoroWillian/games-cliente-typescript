
import { Pencil } from "../../assets/icons/pencil";
import * as S from "./style";

const EditGame = () => {
  return (
    <S.EditGame>
      <>
        <S.EditGameImage src="" alt="Imagem do Jogo" />
        <S.EditGameDetails>
          <S.EditGameDetailsName>Nome do Jogo</S.EditGameDetailsName>
          <S.EditGameDetailsScore>Score do jogo</S.EditGameDetailsScore>
          <S.EditGameDetailsDescription>Descrição do Jogo</S.EditGameDetailsDescription>
        </S.EditGameDetails>
        <S.EditGameAction>
          <Pencil /> Editar
        </S.EditGameAction>
      </>
      <S.EditFormGroup>
      <S.EditForm type="url" placeholder="imagem URL" />
          <S.EditForm type="text" placeholder="Título" />
          <S.EditForm type="text" placeholder="Descrição" />
          <S.EditForm type="number" placeholder="ImdbScore" />
          <S.EditForm type="number" placeholder="Ano de Lançamento" />
          <S.EditForm type="url" placeholder="Trailer URL" />
          <S.EditForm type="url" placeholder="GamePlay URL" />
          <S.Delete>Deletar</S.Delete>
      </S.EditFormGroup>
    </S.EditGame>
  );
};

export default EditGame;
